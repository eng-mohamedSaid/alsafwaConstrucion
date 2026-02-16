import "./assets/main.css";

import App from "./App.vue";
import ar from "./locales/ar";
import en from "./locales/en";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createHead } from "@vueuse/head";

// Helper to get the initial locale
const getInitialLocale = () => {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get("lang");

  // Check if lang param is valid
  if (langParam && (langParam === "ar" || langParam === "en")) {
    localStorage.setItem("userLocale", langParam);
    return langParam;
  }

  // Fallback to local storage or default 'ar'
  return localStorage.getItem("userLocale") || "ar";
};

const i18n = createI18n({
  locale: getInitialLocale(),
  legacy: false,
  messages: {
    ar: ar,
    en: en,
  },
});
const head = createHead();
const app = createApp(App);

app.use(head);
app.use(i18n);
app.mount("#app");
