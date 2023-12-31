import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
function useCurrencies() {
  const currencies = ref([]);
  const currency = ref([]);
  const errors = ref("");
  const loading = ref(0);
  const router = useRouter();
  const getCurrencies = async () => {
    errors.value = "";
    loading.value = true;
    let response = await axios.get("/api/currencies", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    currencies.value = response.data.data;
    loading.value = false;
  };
  const getCurrency = async (id) => {
    errors.value = "";
    loading.value = true;
    let response = await axios.get("/api/currencies/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    currency.value = response.data.data;
  };
  const createCurrency = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.post("/api/currencies", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
      router.push({ name: "admin.currency.index" });
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errors)
          errors.value += e.response.data.errors[key][0] + "\n";
      }
    }
  };
  const updateCurrency = async (id) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.put("/api/currencies/" + id, currency.value, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
      router.push({ name: "admin.currency.index" });
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errors.value += e.response.data.errors[key][0] + "	\n";
      }
    }
  };
  const destroyCurrency = async (id) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/currencies/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == "500") {
        errors.value = "Impossible de supprimer ce pays";
      }
    }
  };
  return {
    currencies,
    currency,
    errors,
    loading,
    getCurrencies,
    getCurrency,
    createCurrency,
    updateCurrency,
    destroyCurrency
  };
}
export {
  useCurrencies as u
};
