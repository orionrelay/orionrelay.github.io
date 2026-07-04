import { _ as __nuxt_component_0 } from "./nuxt-link-zS_mfSmK.js";
import { ref, computed, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { Search, Cpu } from "lucide-vue-next";
import "D:/Work/ORION/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "D:/Work/ORION/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Work/ORION/node_modules/hookable/dist/index.mjs";
import "D:/Work/ORION/node_modules/unctx/dist/index.mjs";
import "D:/Work/ORION/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/Work/ORION/node_modules/defu/dist/defu.mjs";
import "D:/Work/ORION/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const activeBrand = ref("omron");
    const activeCategory = ref("all");
    const brands = [
      { label: "OMRON (오므론)", value: "omron" },
      { label: "신화옵트론", value: "shinhwa" },
      { label: "HR (한국릴레이)", value: "hr" },
      { label: "OTAX (오탁스)", value: "otax" },
      { label: "KACON (카콘)", value: "kacon" }
    ];
    const brandCategories = {
      omron: [
        { label: "전체 OMRON 제품", value: "all" },
        { label: "센서", value: "01", url: "https://www.ia.omron.co.kr/products/products?category=01" },
        { label: "컨트롤러", value: "05", url: "https://www.ia.omron.co.kr/products/products?category=05" },
        { label: "서보 / 인버터", value: "17", url: "https://www.ia.omron.co.kr/products/products?category=17" },
        { label: "세이프티", value: "03", url: "https://www.ia.omron.co.kr/products/products?category=03" },
        { label: "스위치", value: "02", url: "https://www.ia.omron.co.kr/products/products?category=02" },
        { label: "릴레이", value: "14", url: "https://www.ia.omron.co.kr/products/products?category=14" },
        { label: "제어 콤포넌트", value: "19", url: "https://www.ia.omron.co.kr/products/products?category=19" },
        { label: "전원 / 주변기기", value: "18", url: "https://www.ia.omron.co.kr/products/products?category=18" },
        { label: "에너지 절약 지원 / 환경 계측 기기", value: "08", url: "https://www.ia.omron.co.kr/products/products?category=08" },
        { label: "검사 장비", value: "20", url: "https://www.ia.omron.co.kr/products/products?category=20" },
        { label: "로봇", value: "21", url: "https://www.ia.omron.co.kr/products/products?category=21" }
      ],
      shinhwa: [
        { label: "전체 제품", value: "all" },
        { label: "PCB", value: "pcb", url: "http://shinhwaoptron.co.kr/index.html" },
        { label: "MOLD:단상", value: "mold_1", url: "http://shinhwaoptron.co.kr/index.html" },
        { label: "MOLD:2상", value: "mold_2", url: "http://shinhwaoptron.co.kr/index.html" },
        { label: "MOLD:3상", value: "mold_3", url: "http://shinhwaoptron.co.kr/index.html" },
        { label: "보조접점", value: "sub_contact", url: "http://shinhwaoptron.co.kr/index.html" }
      ],
      hr: [
        { label: "전체 제품", value: "all" },
        { label: "Signal", value: "signal", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=1" },
        { label: "P.C.Board", value: "pc_board", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=2" },
        { label: "Mini Power", value: "mini_power", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=3" },
        { label: "Power", value: "power", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=4" },
        { label: "Automotive", value: "automotive", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=5" },
        { label: "Latching", value: "latching", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=6" },
        { label: "DC Power", value: "dc_power", url: "https://www.hankukrelay.co.kr/m21.php?cate=1&type=7" }
      ],
      otax: [
        { label: "전체 제품", value: "all" },
        { label: "딥 스위치", value: "dip_switch", url: "http://www.otaxkorea.co.kr/m21.php?cate=1&type=1" },
        { label: "조작용 스위치", value: "control_switch", url: "http://www.otaxkorea.co.kr/m21.php?cate=2&type=1" }
      ],
      kacon: [
        { label: "전체 제품", value: "all" },
        { label: "HMI", value: "hmi", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=3" },
        { label: "I/O Link Module", value: "io_link", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=19" },
        { label: "SSR/전력조정기", value: "ssr", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=5" },
        { label: "파워서플라이즈", value: "power_supply", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=16" },
        { label: "온도 제어기기", value: "temperature", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=4" },
        { label: "푸시버튼/신호장치", value: "push_button", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=0" },
        { label: "릴레이 /타이머", value: "relay_timer", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=2" },
        { label: "회로보호기기", value: "breaker", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=6" },
        { label: "세이프티 프로덕트", value: "safety", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=17" },
        { label: "센서&리미트 스위치", value: "sensor_limit", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=18" },
        { label: "제어부품", value: "control_parts", url: "https://www.kacon.co.kr/korean/product01.html?module=product&type=list&MM=1" }
      ]
    };
    const products = [
      // ================= OMRON PRODUCTS =================
      {
        id: 1,
        brand: "omron",
        category: "14",
        name: "OMRON 미니어처 파워 릴레이",
        model: "MY2N-GS / MY4N-GS",
        description: "산업 자동화 시스템의 베스트셀러 모델로 접점 동작 확인용 내장 LED 지시등을 탑재한 정밀 제어용 코일 릴레이입니다.",
        specs: {
          "제조사": "OMRON (일본)",
          "접점 구성": "2극 (DPDT) / 4극 (4PDT)",
          "코일 전압": "12VDC, 24VDC, 110VAC, 220VAC",
          "정격 부하": "220VAC 5A / 24VDC 5A (MY4)"
        }
      },
      {
        id: 2,
        brand: "omron",
        category: "01",
        name: "OMRON 컴팩트 광전센서",
        model: "E3Z-T61 / E3Z-D61",
        description: "우수한 내노이즈성과 오접동 방지 알고리즘이 적용된 고성능 앰프 내장형 검출 광전센서입니다.",
        specs: {
          "제조사": "OMRON (일본)",
          "검출 방식": "투과형 / 확산반사형",
          "검출 거리": "투과형 기준 최대 15m",
          "동작 모드": "Light-ON / Dark-ON 스위치 전환"
        }
      },
      {
        id: 3,
        brand: "omron",
        category: "05",
        name: "OMRON 디지털 온도조절기",
        model: "E5CC-QX2ASM-800",
        description: "48x48mm 패널 사이즈에 시인성 높은 백색 PV 디스플레이를 내장한 스마트 디지털 온도 컨트롤러입니다.",
        specs: {
          "제조사": "OMRON (일본)",
          "샘플링 주기": "50ms 초고속 샘플링",
          "입력 구분": "멀티 입력 (열전대, 백금측온체 등)",
          "출력 형태": "전압 출력 (SSR 구동용)"
        }
      },
      // ================= SHINHWA OPTRON PRODUCTS =================
      {
        id: 20,
        brand: "shinhwa",
        category: "pcb",
        name: "신화옵트론 PCB 제어 모듈",
        model: "SH-PCB-A01",
        description: "전자기기 제어용 맞춤형 PCB 및 리드프레임 연계형 제어 기판 회로입니다.",
        specs: {
          "제조사": "신화옵트론 (한국)",
          "재질": "FR-4 다층 기판",
          "특징": "내고온 및 진동방지 특화 설계"
        }
      },
      {
        id: 21,
        brand: "shinhwa",
        category: "mold_1",
        name: "단상 몰드형 부품",
        model: "SH-MOLD-1S",
        description: "단상 몰드 성형을 통해 절연성과 치수 안정성을 극대화한 자동화 설비 전용 성형 부품입니다.",
        specs: {
          "제조사": "신화옵트론 (한국)",
          "구분": "MOLD:단상형",
          "재질": "에폭시 몰드 수지 고압 몰딩"
        }
      },
      // ================= HR PRODUCTS =================
      {
        id: 30,
        brand: "hr",
        category: "signal",
        name: "한국릴레이 초소형 통신용 릴레이",
        model: "HR-32F / HR-33F",
        description: "통신 및 제어 신호 단속에 최적화된 높은 신뢰성의 국산 Signal 릴레이입니다.",
        specs: {
          "제조사": "한국릴레이 (한국)",
          "정격 전류": "2A 통전 부하",
          "실장 형태": "P.C.Board 직접 실장형",
          "접점 구조": "1 Form C"
        }
      },
      {
        id: 31,
        brand: "hr",
        category: "mini_power",
        name: "인터페이스 미니어처 파워 릴레이",
        model: "HR-705-2PL",
        description: "제어반 공간 절약 및 배선 절감에 탁월한 소형 파워 릴레이입니다.",
        specs: {
          "제조사": "한국릴레이 (한국)",
          "접점 정격": "250VAC 5A",
          "내장 부품": "작동 표시용 LED 램프 내장"
        }
      },
      // ================= OTAX PRODUCTS =================
      {
        id: 40,
        brand: "otax",
        category: "dip_switch",
        name: "OTAX 고정밀 밀폐형 DIP 스위치",
        model: "KAE-08G",
        description: "밀폐 에지 접점 방식으로 오염 유입을 방지하여 오작동 없는 스위칭을 수행합니다.",
        specs: {
          "제조사": "OTAX (일본)",
          "접점 도금": "금도금 접점 방식",
          "극수": "8극 슬라이드 DIP 스위치"
        }
      },
      // ================= KACON PRODUCTS =================
      {
        id: 50,
        brand: "kacon",
        category: "push_button",
        name: "KACON 비상 정지 푸시버튼 스위치",
        model: "K22-E11R",
        description: "지름 22mm 홀 부착용 산업용 비상 푸시버튼 스위치로 강제 차단 기구가 내장되어 있습니다.",
        specs: {
          "제조사": "KACON (한국)",
          "직경": "22mm 패널 컷",
          "접점": "1NO+1NC",
          "보호 등급": "IP65 규격 만족"
        }
      }
    ];
    const currentCategories = computed(() => {
      return brandCategories[activeBrand.value] || [];
    });
    const getCategoryLabel = (val) => {
      const currentCats = brandCategories[activeBrand.value] || [];
      const matched = currentCats.find((c) => c.value === val);
      return matched ? matched.label : val;
    };
    const getProductExternalUrl = (product) => {
      const currentCats = brandCategories[product.brand] || [];
      const matched = currentCats.find((c) => c.value === product.category);
      return matched ? matched.url : null;
    };
    const filteredProducts = computed(() => {
      return products.filter((p) => {
        const matchesBrand = p.brand === activeBrand.value;
        const matchesCategory = activeCategory.value === "all" || p.category === activeCategory.value;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.model.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesBrand && matchesCategory && matchesSearch;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-gradient-to-r from-slate-900 via-slate-950 to-primary-950 text-white py-16 md:py-24 text-center relative"><div class="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]"></div><div class="relative max-w-4xl mx-auto px-4 space-y-4"><h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">제품 소개</h1><p class="text-slate-300 text-sm sm:text-base max-w-lg mx-auto"> 글로벌 파트너사의 최상급 부품 라인업을 신속하고 투명하게 견적 및 납품해 드립니다. </p></div></section><section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="border-b border-slate-200 dark:border-slate-800 mb-8 flex flex-wrap gap-1"><!--[-->`);
      ssrRenderList(brands, (brand) => {
        _push(`<button class="${ssrRenderClass([[
          activeBrand.value === brand.value ? "border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        ], "px-6 py-3 border-b-2 text-sm sm:text-base font-bold transition-all"])}">${ssrInterpolate(brand.label)}</button>`);
      });
      _push(`<!--]--></div><div class="space-y-6 mb-12"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div class="flex flex-wrap gap-2 max-w-4xl"><!--[-->`);
      ssrRenderList(currentCategories.value, (cat) => {
        _push(`<button class="${ssrRenderClass([[
          activeCategory.value === cat.value ? "bg-primary-600 text-white shadow-md shadow-primary-500/15" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50"
        ], "px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all"])}">${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/inquiry",
        class: "px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-sm font-bold shadow-md shadow-sky-500/10 transition-all hover:scale-105 shrink-0 text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 견적 및 문의하기 `);
          } else {
            return [
              createTextVNode(" 견적 및 문의하기 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800"><p class="text-xs text-slate-500 dark:text-slate-400"> * 각 하위 카테고리를 클릭하면 대표 취급 기기 스펙 필터링 및 제조사 공식 상세 사이트 링크가 제공됩니다. </p><div class="relative max-w-xs w-full"><div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4" }, null, _parent));
      _push(`</div><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="모델명 또는 스펙 검색..." class="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"></div></div></div>`);
      if (filteredProducts.value.length > 0) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(filteredProducts.value, (product) => {
          _push(`<div class="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"><div class="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 h-52 flex items-center justify-center p-6 relative overflow-hidden"><div class="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div><div class="relative w-28 h-36 bg-primary-600 dark:bg-primary-700 text-white rounded-xl shadow-lg border-2 border-white/20 flex flex-col justify-between p-3.5 select-none transform hover:scale-105 transition-transform duration-300"><div class="flex justify-between items-start"><span class="text-[9px] font-bold tracking-wider opacity-85 uppercase">${ssrInterpolate(product.brand)}</span>`);
          _push(ssrRenderComponent(unref(Cpu), { class: "w-4 h-4 opacity-75" }, null, _parent));
          _push(`</div><div class="space-y-1.5 my-auto"><div class="h-0.5 bg-white/30 rounded w-full"></div><div class="h-0.5 bg-white/20 rounded w-2/3"></div><p class="text-[9px] font-mono text-center tracking-tight text-primary-200 font-bold truncate">${ssrInterpolate(product.model)}</p></div><div class="flex justify-around items-end"><div class="w-1 h-2 bg-slate-300 dark:bg-slate-400 rounded-t-sm"></div><div class="w-1 h-2 bg-slate-300 dark:bg-slate-400 rounded-t-sm"></div><div class="w-1 h-2 bg-slate-300 dark:bg-slate-400 rounded-t-sm"></div><div class="w-1 h-2 bg-slate-300 dark:bg-slate-400 rounded-t-sm"></div></div></div></div><div class="p-6 flex-grow flex flex-col justify-between space-y-6"><div class="space-y-2"><div class="flex justify-between items-center"><span class="text-[10px] font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">${ssrInterpolate(getCategoryLabel(product.category))}</span><span class="text-[10px] font-semibold text-slate-400 uppercase">${ssrInterpolate(product.brand)}</span></div><h3 class="text-lg font-bold text-slate-900 dark:text-white">${ssrInterpolate(product.name)}</h3><p class="text-xs text-slate-500 dark:text-slate-400 font-mono leading-relaxed">${ssrInterpolate(product.model)}</p><p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${ssrInterpolate(product.description)}</p></div><div class="border-t border-slate-100 dark:border-slate-800/80 pt-4 space-y-2"><!--[-->`);
          ssrRenderList(product.specs, (specVal, specName) => {
            _push(`<div class="flex justify-between text-xs"><span class="text-slate-400">${ssrInterpolate(specName)}</span><span class="font-semibold text-slate-700 dark:text-slate-200">${ssrInterpolate(specVal)}</span></div>`);
          });
          _push(`<!--]--></div><div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">`);
          if (getProductExternalUrl(product)) {
            _push(`<a${ssrRenderAttr("href", getProductExternalUrl(product))} target="_blank" rel="noopener noreferrer" class="block w-full text-center py-2.5 text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-500/20 hover:border-primary-500/40 bg-primary-500/5 dark:bg-primary-500/10 rounded-xl transition-all"> 제조사 공식 제품 페이지 ↗ </a>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/inquiry", query: { model: product.model } },
            class: "block w-full text-center py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-850 dark:hover:bg-slate-800 rounded-xl transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` 견적 및 사양 문의 `);
              } else {
                return [
                  createTextVNode(" 견적 및 사양 문의 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-24 space-y-4">`);
        _push(ssrRenderComponent(unref(Cpu), { class: "w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" }, null, _parent));
        _push(`<p class="text-base font-semibold text-slate-600 dark:text-slate-400">검색 조건에 맞는 제품이 없습니다.</p><button class="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline"> 필터 초기화 </button></div>`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-eZ4A7QzB.js.map
