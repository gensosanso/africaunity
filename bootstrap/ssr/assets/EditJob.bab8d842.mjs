import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useJobOffers } from "./jobOfferServices.5379a3b9.mjs";
import { u as useCurrencies } from "./currencyServices.228bdf7b.mjs";
import { u as useActivityAreas } from "./activityAreaServices.104ad1e7.mjs";
import { u as useSizeCompanies, a as useWorkDepartments } from "./workDepartmentServices.2777c58c.mjs";
import { u as useLevelStudies, a as useOfferTypes, b as useWorkModes, c as useYearExperiences } from "./yearExperienceServices.f6a510d2.mjs";
import { u as useLanguages } from "./languageServices.c3bbe23f.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useCities } from "./cityServices.162b2697.mjs";
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
  __name: "EditJob",
  __ssrInlineRender: true,
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    ref(null);
    const { updateJobOffer, getJobOffer, jobOffer, errors, loading } = useJobOffers();
    const { currencies, getCurrencies } = useCurrencies();
    const { languages, getLanguages } = useLanguages();
    const { activityAreas, getActivityAreas } = useActivityAreas();
    const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
    const { levelStudies, getLevelStudies } = useLevelStudies();
    const { offerTypes, getOfferTypes } = useOfferTypes();
    const { workDepartments, getWorkDepartments } = useWorkDepartments();
    const { workModes, getWorkModes } = useWorkModes();
    const { yearExperiences, getYearExperiences } = useYearExperiences();
    const { countries, getCountries } = useCountries();
    const { zones, getZones } = useZones();
    const { continents, getContinents } = useContinents();
    const { cities, getCities } = useCities();
    const clanguages = ref([]);
    const cactivityAreas = ref([]);
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    const cityfiltered = ref([]);
    onMounted(async () => {
      await getJobOffer(props.id);
      for (const item of jobOffer.value.activity_areas) {
        cactivityAreas.value.push(item.id);
      }
      for (const item of jobOffer.value.languages) {
        clanguages.value.push(item.id);
      }
      await getCurrencies();
      await getContinents();
      await getZones();
      await getYearExperiences();
      await getWorkModes();
      await getWorkDepartments();
      await getLevelStudies();
      await getSizeCompanies();
      await getOfferTypes();
      await getActivityAreas();
      await getLanguages();
      await getCountries();
      await getCities();
      zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == jobOffer.value.continent.id;
      });
      countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == jobOffer.value.zone.id;
      });
      cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == jobOffer.value.country.id;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]" }, _attrs))}><div class="w-full space-y-4 py-5 text-center"><h1 class="text-4xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("edit"))} Job </h1></div><section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">`);
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
      _push(`<h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("edit"))} Job</h1><h2 class="text-md font-light text-gray-700">${ssrInterpolate(_ctx.$t("good-msg-post"))} ! </h2><form id="jobOfferform" enctype="multipart/form-data"><div class="mt-4"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("title"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(jobOffer).title)} maxlength="50" type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"><span class="text-xs font-light text-gray-400">${ssrInterpolate(unref(jobOffer).title ? unref(jobOffer).title.length : 0)} of 50 Characters</span></div><div class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("continent"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).continent) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(continents), (continent) => {
          _push(`<option${ssrRenderAttr("value", continent.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(continent.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(continent.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(continent.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(continent.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("zoned"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).zone) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
        if (zoneFiltered.value.length != 0) {
          _push(`<!--[-->`);
          ssrRenderList(zoneFiltered.value, (zone) => {
            _push(`<option${ssrRenderAttr("value", zone.id)}>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(zone.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(zone.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(zone.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(zone.name_pt)}</span>`);
            }
            _push(`</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("continent"))}</option>`);
        }
        _push(`</select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("country"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).country) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
        if (countryFiltered.value.length != 0) {
          _push(`<!--[-->`);
          ssrRenderList(countryFiltered.value, (country) => {
            _push(`<option${ssrRenderAttr("value", country.id)}>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(country.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(country.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(country.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(country.name_pt)}</span>`);
            }
            _push(`</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("zoned"))}</option>`);
        }
        _push(`</select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("city"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).city) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
        if (cityfiltered.value.length != 0) {
          _push(`<!--[-->`);
          ssrRenderList(cityfiltered.value, (city) => {
            _push(`<option${ssrRenderAttr("value", city.id)}>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(city.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(city.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(city.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(city.name_pt)}</span>`);
            }
            _push(`</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("country"))}</option>`);
        }
        _push(`</select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("location"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(jobOffer).location)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("company-name"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(jobOffer).company_name)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("company-email"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(jobOffer).company_email)} type="email" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("company-website"))}</label><input${ssrRenderAttr("value", unref(jobOffer).company_website)} type="url" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("company-logo"))}</label><div class="flex items-center space-x-4 py-4">`);
      if (unref(jobOffer).company_logo) {
        _push(`<img${ssrRenderAttr("src", unref(jobOffer).company_logo)} class="h-16 w-16 rounded-full"${ssrRenderAttr("alt", unref(jobOffer).title)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div></div></div><div class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"><div><label class="dark:text-gray-200 text-gray-700">Min ${ssrInterpolate(_ctx.$t("price"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(jobOffer).min_price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Max ${ssrInterpolate(_ctx.$t("price"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(jobOffer).max_price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("currency"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).currency) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(currencies), (currency) => {
          _push(`<option${ssrRenderAttr("value", currency.id)}>${ssrInterpolate(currency.symbol + " " + currency.name)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-2 mt-4"><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("language"))} <span class="hidden text-xs font-light lg:inline-block">(${ssrInterpolate(_ctx.$t("maintain-crtl"))})</span><span class="text-red-500">*</span></label><select required multiple class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(languages), (language) => {
        _push(`<option${ssrRenderAttr("value", language.id)}>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(language.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(language.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(language.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(language.name_pt)}</span>`);
        }
        _push(`</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("size-company"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).size_company) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(sizeCompanies), (sizeCompany) => {
          _push(`<option${ssrRenderAttr("value", sizeCompany.id)}>${ssrInterpolate(sizeCompany.name_en)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("level-study"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).level_study) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(levelStudies), (levelStudy) => {
          _push(`<option${ssrRenderAttr("value", levelStudy.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(levelStudy.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(levelStudy.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(levelStudy.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(levelStudy.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-2 mt-4"><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("activity-area"))} <span class="hidden text-xs font-light lg:inline-block">(${ssrInterpolate(_ctx.$t("maintain-crtl"))})</span><span class="text-red-500">*</span></label><select required multiple class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(activityAreas), (activityArea) => {
        _push(`<option${ssrRenderAttr("value", activityArea.id)}>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(activityArea.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(activityArea.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(activityArea.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(activityArea.name_pt)}</span>`);
        }
        _push(`</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("work-dept"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).work_department) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(workDepartments), (workDepartment) => {
          _push(`<option${ssrRenderAttr("value", workDepartment.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(workDepartment.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(workDepartment.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(workDepartment.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(workDepartment.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("work-mode"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).work_mode) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(workModes), (workMode) => {
          _push(`<option${ssrRenderAttr("value", workMode.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(workMode.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(workMode.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(workMode.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(workMode.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("offer-type"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).offer_type) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(offerTypes), (offerType) => {
          _push(`<option${ssrRenderAttr("value", offerType.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(offerType.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(offerType.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(offerType.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(offerType.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("y-experience"))} <span class="text-red-500">*</span></label>`);
      if (unref(jobOffer).year_experience) {
        _push(`<select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(yearExperiences), (yearExperience) => {
          _push(`<option${ssrRenderAttr("value", yearExperience.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(yearExperience.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(yearExperience.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(yearExperience.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(yearExperience.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-2 mt-4"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("description"))} <span class="text-red-500">*</span></label><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(unref(jobOffer).description)}</textarea></div></div><div class="mt-6">`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("save"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button type="submit" disabled class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("save"))}... <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/EditJob.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
