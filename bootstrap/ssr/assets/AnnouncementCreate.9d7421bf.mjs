import { ref, onMounted, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useAnnouncements } from "./announcementServices.99c189fe.mjs";
import { u as useCategoryAnnouncements } from "./categoryAnnouncementServices.08a50fb5.mjs";
import { u as useCurrencies } from "./currencyServices.228bdf7b.mjs";
import { u as useUniversities } from "./universityServices.b8f493bb.mjs";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "AnnouncementCreate",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(null);
    const user = JSON.parse(localStorage.user);
    const { categoryAnnouncements, getCategoryAnnouncements } = useCategoryAnnouncements();
    const { currencies, getCurrencies } = useCurrencies();
    const { universities, getUniversities } = useUniversities();
    onMounted(async () => {
      await getCategoryAnnouncements();
      await getCurrencies();
      await getUniversities();
    });
    const announcement = reactive({
      title: "",
      user_id: user.id,
      description: "",
      price: "",
      image: "",
      adress: "",
      website: "",
      email: "",
      phone: "",
      category_announcement_id: 1,
      currency_id: 1,
      university_id: 1
    });
    const { createAnnouncement, errors, loading } = useAnnouncements();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 w-full p-4"><div class="flex w-full justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold capitalize text-primary-blue"> Add Announcement </h1></div><section class="mx-auto w-full bg-white p-6 shadow-md">`);
      if (unref(errors) != "") {
        _push(ssrRenderComponent(Error, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-md font-light text-gray-700"> Add a new Announcement </h2><form id="announcementform" enctype="multipart/form-data"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">Title</label><input required${ssrRenderAttr("value", announcement.title)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700" for="pt">University</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(universities), (university) => {
        _push(`<option${ssrRenderAttr("value", university.id)}>${ssrInterpolate(university.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="pt">Category</label><select required name="" id="" class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(categoryAnnouncements), (category_announcement) => {
        _push(`<option${ssrRenderAttr("value", category_announcement.id)}>${ssrInterpolate(category_announcement.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700">Contact Phone</label><input required${ssrRenderAttr("value", announcement.phone)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Contact Adress Email</label><input required${ssrRenderAttr("value", announcement.email)} type="email" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Price</label><input required${ssrRenderAttr("value", announcement.price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Currency</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(currencies), (currency) => {
        _push(`<option${ssrRenderAttr("value", currency.id)}>${ssrInterpolate(currency.symbol + " " + currency.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700">Address</label><input${ssrRenderAttr("value", announcement.adress)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Website</label><input${ssrRenderAttr("value", announcement.website)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="fr">Image</label><input required type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="pt">Description</label><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(announcement.description)}</textarea></div></div><div class="mt-6 flex justify-end">`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"> Save </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button type="submit" disabled class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"><svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/announcement/AnnouncementCreate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
