import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { UploadCloud, Loader2 } from "lucide-vue-next";
const _sfc_main = {
  __name: "inquiry",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const submitting = ref(false);
    const privacyChecked = ref(false);
    const selectedFile = ref(null);
    const statusMessage = ref("");
    const statusType = ref("success");
    const form = ref({
      company: "",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-gradient-to-r from-slate-900 via-slate-950 to-primary-950 text-white py-16 md:py-24 text-center relative"><div class="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]"></div><div class="relative max-w-4xl mx-auto px-4 space-y-4"><h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight"> 온라인 문의 </h1><p class="text-slate-300 text-sm sm:text-base max-w-lg mx-auto"> 도면 및 견적 요청, 제품 커스텀 제작 스펙 관련 문의를 접수해 주시면 담당 부서에서 신속히 안내해 드리겠습니다. </p></div></section><section class="py-16 max-w-4xl mx-auto px-4 sm:px-6"><div class="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-sm"><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6"> 문의 및 견적 신청서 </h2><form class="space-y-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div class="space-y-2"><label for="company" class="block text-sm font-semibold text-slate-700 dark:text-slate-300">회사명 <span class="text-red-500">*</span></label><input id="company"${ssrRenderAttr("value", form.value.company)} type="text" required placeholder="예: 오리온테크" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all"></div><div class="space-y-2"><label for="name" class="block text-sm font-semibold text-slate-700 dark:text-slate-300">담당자명 <span class="text-red-500">*</span></label><input id="name"${ssrRenderAttr("value", form.value.name)} type="text" required placeholder="예: 홍길동" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div class="space-y-2"><label for="email" class="block text-sm font-semibold text-slate-700 dark:text-slate-300">이메일 주소 <span class="text-red-500">*</span></label><input id="email"${ssrRenderAttr("value", form.value.email)} type="email" required placeholder="example@domain.com" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all"></div><div class="space-y-2"><label for="phone" class="block text-sm font-semibold text-slate-700 dark:text-slate-300">연락처 <span class="text-red-500">*</span></label><input id="phone"${ssrRenderAttr("value", form.value.phone)} type="tel" required placeholder="010-0000-0000" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all"></div></div><div class="space-y-2"><label for="subject" class="block text-sm font-semibold text-slate-700 dark:text-slate-300">문의 제목 <span class="text-red-500">*</span></label><input id="subject"${ssrRenderAttr("value", form.value.subject)} type="text" required placeholder="문의글의 제목을 적어주세요." class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all"></div><div class="space-y-2"><label for="message" class="block text-sm font-semibold text-slate-700 dark:text-slate-300">상세 문의 내용 <span class="text-red-500">*</span></label><textarea id="message" required rows="6" placeholder="구체적인 제품 번호, 전압 조건, 환경 스펙 및 구매 예정 수량 등을 상세히 작성해 주시면 조속한 피드백이 가능합니다." class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all resize-none">${ssrInterpolate(form.value.message)}</textarea></div><div class="space-y-2"><label class="block text-sm font-semibold text-slate-700 dark:text-slate-300">첨부파일 (회로도/사양서 도면 등)</label><div class="flex items-center justify-center w-full"><label for="file-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl cursor-pointer bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"><div class="flex flex-col items-center justify-center pt-5 pb-6">`);
      _push(ssrRenderComponent(unref(UploadCloud), { class: "w-8 h-8 text-slate-400 mb-2" }, null, _parent));
      _push(`<p class="text-xs text-slate-500 dark:text-slate-400"><span class="font-semibold text-primary-500">클릭하여 파일 선택</span> 또는 드래그 앤 드롭 </p><p class="text-[10px] text-slate-400 mt-1"> PDF, ZIP, PNG, JPG (최대 10MB) </p></div><input id="file-upload" type="file" class="hidden" accept=".pdf,.zip,.png,.jpg,.jpeg"></label></div>`);
      if (selectedFile.value) {
        _push(`<div class="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-950/50 rounded-xl text-xs"><span class="font-medium text-slate-700 dark:text-slate-300 truncate max-w-md">${ssrInterpolate(selectedFile.value.name)} (${ssrInterpolate(formatFileSize(selectedFile.value.size))})</span><button type="button" class="text-red-500 hover:text-red-600 font-bold"> 삭제 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800"><input id="agreement" type="checkbox" required${ssrIncludeBooleanAttr(Array.isArray(privacyChecked.value) ? ssrLooseContain(privacyChecked.value, null) : privacyChecked.value) ? " checked" : ""} class="mt-1 w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-slate-300"><label for="agreement" class="text-xs text-slate-500 dark:text-slate-400 leading-normal cursor-pointer select-none"> (필수) 개인정보 수집 및 이용 동의: 문의하신 내역 확인 및 정확한 기술 상담 응대를 위해 회사명, 담당자명, 이메일, 연락처 정보를 수집하고 관련 상담 완료 시까지 보유하는 것에 동의합니다. </label></div><button type="submit"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="w-full py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-500 disabled:bg-slate-400 rounded-xl transition-all shadow-lg shadow-primary-500/10 flex items-center justify-center gap-2">`);
      if (submitting.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(submitting.value ? "문의를 송신하고 있습니다..." : "문의하기 및 견적 요청 제출")}</span></button></form>`);
      if (statusMessage.value) {
        _push(`<div class="${ssrRenderClass([[
          statusType.value === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-950/50" : "bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-950/50"
        ], "mt-6 p-4 rounded-xl text-center text-sm font-semibold"])}">${ssrInterpolate(statusMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inquiry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=inquiry-BA1z4_A9.js.map
