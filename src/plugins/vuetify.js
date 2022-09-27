import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import themes from "../themes";
import ls from "./secureLs";

Vue.use(Vuetify);

const themeConfigured = ls.get("theme");
const themeSelected = !themeConfigured ? "default" : themeConfigured;

export default new Vuetify({
  theme: {
    themes: themes[themeSelected],
  },
});
