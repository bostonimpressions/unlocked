import { mergeProps, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0$1 from './index-DDRCvSKn.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-center py-16 text-white" }, _attrs))}><h1 class="text-4xl font-bold text-sky-400"> UNLOCKED HOME PROJECT IS <br> REVOLUTIONIZING REAL ESTATE. </h1><p class="mt-4 text-orange-400 font-semibold"> EXPERIENCED. KNOWLEDGEABLE. TRUSTWORTHY. </p></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]), { __name: "HeroSection" });
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = resolveComponent("ContentDoc");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white max-w-3xl mx-auto px-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentDoc, { path: "/home/intro" }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoParagraph.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]), { __name: "InfoParagraph" });
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-6 text-orange-400 font-bold" }, _attrs))}> CLICK BELOW TO LEARN ABOUT THE WAYS WE DELIVER EXCEPTIONAL SERVICE TO OUR CLIENTS. </div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]), { __name: "CallToAction" });
const _sfc_main$2 = {
  __name: "AudienceCard",
  __ssrInlineRender: true,
  props: {
    icon: String,
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-800 p-6 rounded shadow-lg text-center text-white w-64" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.icon,
        class: "text-3xl mb-2"
      }, null, _parent));
      _push(`<h3 class="font-semibold">${ssrInterpolate(__props.title)}</h3></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudienceCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_AudienceCard = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-6 mt-10 px-4 flex-wrap" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AudienceCard, {
    icon: "handshake",
    title: "Real Estate Agents"
  }, null, _parent));
  _push(ssrRenderComponent(_component_AudienceCard, {
    icon: "home",
    title: "Homeowners"
  }, null, _parent));
  _push(ssrRenderComponent(_component_AudienceCard, {
    icon: "dollar-sign",
    title: "Real Estate Investors"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudienceCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AudienceCards" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_InfoParagraph = __nuxt_component_1;
  const _component_CallToAction = __nuxt_component_2;
  const _component_AudienceCards = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_InfoParagraph, null, null, _parent));
  _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
  _push(ssrRenderComponent(_component_AudienceCards, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-2TOHBY6E.mjs.map
