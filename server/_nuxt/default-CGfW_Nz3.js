import { _ as __nuxt_component_0 } from "./nuxt-link-zS_mfSmK.js";
import { ref, mergeProps, withCtx, createVNode, openBlock, createBlock, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { Sun, Moon, X, Menu, Phone, Printer, Mail } from "lucide-vue-next";
import { a as useState } from "../server.mjs";
import "D:/Work/ORION/node_modules/ufo/dist/index.mjs";
import "D:/Work/ORION/node_modules/defu/dist/defu.mjs";
import "D:/Work/ORION/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Work/ORION/node_modules/hookable/dist/index.mjs";
import "D:/Work/ORION/node_modules/unctx/dist/index.mjs";
import "D:/Work/ORION/node_modules/h3/dist/index.mjs";
import "D:/Work/ORION/node_modules/@unhead/vue/dist/index.mjs";
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const colorMode = useColorMode();
    const isMobileMenuOpen = ref(false);
    const navItems = [
      { name: "홈", path: "/" },
      { name: "회사 소개", path: "/company" },
      { name: "제품 소개", path: "/products" },
      { name: "온라인 문의", path: "/inquiry" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 glass-header transition-all duration-300" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3.5 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-105"${_scopeId}><svg class="w-10 h-10 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="4" stroke-dasharray="8 6" class="opacity-40"${_scopeId}></circle><ellipse cx="50" cy="50" rx="43" ry="13" stroke="currentColor" stroke-width="4" transform="rotate(-30 50 50)"${_scopeId}></ellipse><ellipse cx="50" cy="50" rx="43" ry="13" stroke="currentColor" stroke-width="4" transform="rotate(30 50 50)"${_scopeId}></ellipse><path d="M50 25L53.5 42.5L71 46L53.5 49.5L50 67L46.5 49.5L29 46L46.5 42.5Z" fill="currentColor"${_scopeId}></path></svg></div><div class="flex flex-col"${_scopeId}><span class="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400 leading-none"${_scopeId}> 오리온기전 </span><span class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1.5"${_scopeId}> ORION RELAY </span></div>`);
          } else {
            return [
              createVNode("div", { class: "text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-105" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-10 h-10 md:w-11 md:h-11",
                  viewBox: "0 0 100 100",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("circle", {
                    cx: "50",
                    cy: "50",
                    r: "40",
                    stroke: "currentColor",
                    "stroke-width": "4",
                    "stroke-dasharray": "8 6",
                    class: "opacity-40"
                  }),
                  createVNode("ellipse", {
                    cx: "50",
                    cy: "50",
                    rx: "43",
                    ry: "13",
                    stroke: "currentColor",
                    "stroke-width": "4",
                    transform: "rotate(-30 50 50)"
                  }),
                  createVNode("ellipse", {
                    cx: "50",
                    cy: "50",
                    rx: "43",
                    ry: "13",
                    stroke: "currentColor",
                    "stroke-width": "4",
                    transform: "rotate(30 50 50)"
                  }),
                  createVNode("path", {
                    d: "M50 25L53.5 42.5L71 46L53.5 49.5L50 67L46.5 49.5L29 46L46.5 42.5Z",
                    fill: "currentColor"
                  })
                ]))
              ]),
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400 leading-none" }, " 오리온기전 "),
                createVNode("span", { class: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1.5" }, " ORION RELAY ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: ["text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all py-2 border-b-2", [unref(route).path === item.path ? "border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400" : "border-transparent"]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="hidden md:flex items-center gap-4"><button class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105" aria-label="Toggle Theme">`);
      if (unref(colorMode).value === "dark") {
        _push(ssrRenderComponent(unref(Sun), { class: "w-5 h-5 text-amber-500" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "w-5 h-5 text-slate-700 dark:text-slate-200" }, null, _parent));
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/inquiry",
        class: "px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-xl transition-all hover:scale-105 shadow-md shadow-primary-500/10 hover:shadow-primary-500/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 견적 및 문의 `);
          } else {
            return [
              createTextVNode(" 견적 및 문의 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2 md:hidden"><button class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">`);
      if (unref(colorMode).value === "dark") {
        _push(ssrRenderComponent(unref(Sun), { class: "w-5 h-5 text-amber-500" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "w-5 h-5 text-slate-700 dark:text-slate-200" }, null, _parent));
      }
      _push(`</button><button class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">`);
      if (isMobileMenuOpen.value) {
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div></div></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-3 shadow-xl"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.path,
            to: item.path,
            onClick: ($event) => isMobileMenuOpen.value = false,
            class: ["block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all", [unref(route).path === item.path ? "bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400" : ""]]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="pt-4 border-t border-slate-100 dark:border-slate-800 px-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/inquiry",
          onClick: ($event) => isMobileMenuOpen.value = false,
          class: "block w-full text-center py-3 px-4 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-xl transition-all shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 견적 및 문의 `);
            } else {
              return [
                createTextVNode(" 견적 및 문의 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8"><div class="md:col-span-2 space-y-6"><div class="flex items-center gap-3.5"><div class="text-white"><svg class="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="4" stroke-dasharray="8 6" class="opacity-40"></circle><ellipse cx="50" cy="50" rx="43" ry="13" stroke="currentColor" stroke-width="4" transform="rotate(-30 50 50)"></ellipse><ellipse cx="50" cy="50" rx="43" ry="13" stroke="currentColor" stroke-width="4" transform="rotate(30 50 50)"></ellipse><path d="M50 25L53.5 42.5L71 46L53.5 49.5L50 67L46.5 49.5L29 46L46.5 42.5Z" fill="currentColor"></path></svg></div><div class="flex flex-col"><span class="text-xl font-black tracking-tight text-white leading-none"> 오리온기전 </span><span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1.5"> ORION RELAY </span></div></div><p class="text-sm text-slate-400 max-w-sm leading-relaxed"> (주)오리온기전은 전자부품 및 제어기기 유통 전문 회사로써, 1974년 창업 이래 합리적인 가격, 우수한 품질, 신속한 납기를 대표 이념으로 삼아 최적의 제품을 공급하고 있습니다. </p></div><div><h3 class="text-sm font-bold tracking-wider text-slate-200 uppercase mb-4"> 바로가기 </h3><ul class="space-y-3 text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/company",
        class: "hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`회사 소개`);
          } else {
            return [
              createTextVNode("회사 소개")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`제품 소개`);
          } else {
            return [
              createTextVNode("제품 소개")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/inquiry",
        class: "hover:text-primary-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`온라인 문의`);
          } else {
            return [
              createTextVNode("온라인 문의")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-sm font-bold tracking-wider text-slate-200 uppercase mb-4"> 고객지원 </h3><ul class="space-y-3 text-sm text-slate-400"><li class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-primary-500 shrink-0" }, null, _parent));
      _push(`<span>02-6218-1402</span></li><li class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Printer), { class: "w-4 h-4 text-primary-500 shrink-0" }, null, _parent));
      _push(`<span>02-6008-3254</span></li><li class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-4 h-4 text-primary-500 shrink-0" }, null, _parent));
      _push(`<span>orion@orionrelay.com</span></li></ul></div></div><div class="border-t border-slate-800 bg-slate-950/60 py-8 text-xs text-slate-500 dark:text-slate-600"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"><div class="space-y-2 leading-relaxed"><p>상호명: (주)오리온기전 | 사업자등록번호: 101-81-21364</p><p> 과천본사. 주소: 경기도 과천시 과천대로7길 33, 디테크타워 A동 504호 | Tel:02-6218-1402 | Fax: 02-6008-3254 <br> 구로1매장, 주소: 서울특별시 구로구 구로동 1258번지 중앙유통단지 가동 3209호 | Tel: 02-6679-1403 | Faxc 02-6679-1404 <br> 구로2배장, 주소: 사울특별시 구로구 구로동 1258번지 중앙유통단지 마동 1116호 | Tel: 02-2265-1402 | Fa: 02-6008-3251 </p><p class="text-[10px]"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} (주)오리온기전, (주)오리온FC. All rights reserved. </p></div><div class="flex items-center gap-4"><span class="px-2.5 py-1 rounded bg-slate-800 text-slate-400 hover:text-slate-200 cursor-default">품질제일주의</span><span class="px-2.5 py-1 rounded bg-slate-800 text-slate-400 hover:text-slate-200 cursor-default">고객만족</span></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_AppFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CGfW_Nz3.js.map
