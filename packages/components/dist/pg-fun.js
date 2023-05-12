import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
const index$1 = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    defineOptions({ name: "pg-button" });
    const buttonStyle = computed(() => {
      return { [`pg-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["pg-button", unref(buttonStyle)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_sfc_main);
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button
}, Symbol.toStringTag, { value: "Module" }));
const index = {
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
export {
  Button,
  index as default
};
