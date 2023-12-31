import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useLegalStatuses() {
    const legalStatuses = ref([]);
    const legalStatus = ref([]);
    const errorsLegal = ref("");
    const loading = ref(0);

    const getLegalStatuses = async () => {
        errorsLegal.value = "";
        loading.value = true;
        let response = await axios.get("/api/legalStatuses", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        legalStatuses.value = response.data.data;

        loading.value = false;
    };

    const getLegalStatus = async (id) => {
        errorsLegal.value = "";
        loading.value = true;
        let response = await axios.get("/api/legalStatuses/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        legalStatus.value = response.data.data;
    };

    const createLegalStatus = async (data) => {
        errorsLegal.value = "";
        try {
            loading.value = true;
            await axios.post("/api/legalStatuses", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsLegal.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateLegalStatus = async (id, data) => {
        errorsLegal.value = "";
        try {
            loading.value = true;
            await axios.put("/api/legalStatuses/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsLegal.value +=
                        e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyLegalStatus = async (id) => {
        errorsLegal.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/legalStatuses/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsLegal.value = "Impossible de supprimer ce legalStatus";
        }
    };

    return {
        legalStatuses,
        legalStatus,
        errorsLegal,
        loading,
        getLegalStatuses,
        getLegalStatus,
        createLegalStatus,
        updateLegalStatus,
        destroyLegalStatus,
    };
}
