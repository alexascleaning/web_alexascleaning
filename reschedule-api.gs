/**
 * ------------------------------------------------------------------
 * ALEXAS CLEANING SERVICES API - GOOGLE APPS SCRIPT (RESCHEDULE)
 * ------------------------------------------------------------------
 * This script handles requests from existing clients to change their
 * cleaning appointment date.
 *
 * @version 1.0.0
 * @author Tegnonets
 */

// ==========================================
// 1. CONFIGURATION
// ==========================================
const CONFIG = {
  SECURITY: {
    API_KEY: "pt7zHmCaL-lAZtRafuOBmbHI8zbptcGtd17N2t61TiWs1KqoL6m5CNKMoSzKcEGi",
    ALLOWED_METHODS: ["post"],
  },
  GOOGLE_FORM: {
    // ID del SEGUNDO formulario (RESCHEDULE)
    ID: "1DCEn_FITa2bXwyw9LrTPP9xrw-uADbb6o786lGlBHik",
    // IDs de los items del formulario de reagendación
    FIELDS: {
      FULL_NAME: "196263475",
      EMAIL: "584019064",
      PHONE: "133066534",
      CURRENT_DATE: "91606050",
      NEW_DATE: "1979040134",
      REASON: "1309059528",
    },
  },
  SETTINGS: {
    MAX_RETRIES: 3,
    RETRY_DELAY_MS: 1000,
  },
};

// ==========================================
// 2. CONTROLLER
// ==========================================
function doPost(e) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return ResponseHelper.error("Server busy", 429);

  try {
    if (!e || !e.postData || !e.postData.contents)
      return ResponseHelper.error("No data", 400);
    const data = JSON.parse(e.postData.contents);
    if (data.apiKey !== CONFIG.SECURITY.API_KEY)
      return ResponseHelper.error("Unauthorized", 401);

    const result = FormService.submitToGoogleForm(data);
    return result.success
      ? ResponseHelper.success("Reschedule requested")
      : ResponseHelper.error(result.message);
  } catch (error) {
    return ResponseHelper.error(error.toString());
  } finally {
    lock.releaseLock();
  }
}

// ==========================================
// 3. SERVICES
// ==========================================
const FormService = {
  submitToGoogleForm: function (data) {
    const { MAX_RETRIES, RETRY_DELAY_MS } = CONFIG.SETTINGS;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const form = FormApp.openById(CONFIG.GOOGLE_FORM.ID);
        const formResponse = form.createResponse();
        const items = form.getItems();
        const fieldIds = CONFIG.GOOGLE_FORM.FIELDS;
        const itemMap = {};
        items.forEach(
          (item) => (itemMap[item.getId().toString()] = item.asTextItem())
        );

        const addRes = (id, val) => {
          if (itemMap[id] && val)
            formResponse.withItemResponse(itemMap[id].createResponse(val));
        };

        addRes(fieldIds.FULL_NAME, data.name);
        addRes(fieldIds.EMAIL, data.email);
        addRes(fieldRes(fieldIds.PHONE, data.phone));
        addRes(fieldIds.CURRENT_DATE, data.currentDate);
        addRes(fieldIds.NEW_DATE, data.newDate);
        addRes(fieldIds.REASON, data.reason);

        formResponse.submit();
        return { success: true };
      } catch (error) {
        if (attempt === MAX_RETRIES)
          return { success: false, message: error.toString() };
        Utilities.sleep(RETRY_DELAY_MS * attempt);
      }
    }
  },
};

const ResponseHelper = {
  create: (success, msg, code) =>
    ContentService.createTextOutput(
      JSON.stringify({
        success,
        message: msg,
        timestamp: new Date().toISOString(),
      })
    ).setMimeType(ContentService.MimeType.JSON),
  success: (msg) => ResponseHelper.create(true, msg, 200),
  error: (msg, code = 500) => ResponseHelper.create(false, msg, code),
};
