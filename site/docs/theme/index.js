import DefaultTheme from "vitepress/theme";
import pgfun from "pgfun";

export default {
    ...DefaultTheme,
    enhanceApp: async ({app}) => {
        app.use(pgfun);
    }
}