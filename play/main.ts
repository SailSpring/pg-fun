import { createApp } from "vue";
import App from "./app.vue";
import pg_fun from "@pg-fun/components"

const app = createApp(App);
app.use(pg_fun);
app.mount("#app");