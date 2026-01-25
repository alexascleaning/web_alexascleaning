export const GA_TRACK_ID = "G-JH63EG6S8F";

// Helper to log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Global types for window.gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: ControlParams | EventParams | ConfigParams | CustomParams
    ) => void;
    dataLayer: any[];
  }
}

interface ControlParams {
  groups?: string | string[];
  send_to?: string | string[];
  event_callback?: () => void;
  event_timeout?: number;
}

interface EventParams {
  checkout_option?: string;
  checkout_step?: number;
  content_id?: string;
  content_type?: string;
  coupon?: string;
  currency?: string;
  description?: string;
  fatal?: boolean;
  items?: any[];
  method?: string;
  number?: string;
  promotions?: any[];
  screen_name?: string;
  search_term?: string;
  shipping?: number;
  tax?: number;
  transaction_id?: string;
  value?: number;
  event_category?: string;
  event_label?: string;
  non_interaction?: boolean;
  [key: string]: any;
}

interface ConfigParams {
  send_page_view?: boolean;
  page_title?: string;
  page_location?: string;
  page_path?: string;
  [key: string]: any;
}

interface CustomParams {
  [key: string]: any;
}
