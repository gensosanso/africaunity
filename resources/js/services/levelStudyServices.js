import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useLevelStudies() {
    const levelStudies = ref([]);
    const levelStudy = ref([]);
    const errorsLS = ref("");
    const loading = ref(0);

    const getLevelStudies = async () => {
        errorsLS.value = "";
        loading.value = true;
        let response = await axios.get("/api/levelStudies", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        levelStudies.value = response.data.data;

        loading.value = false;
    };

    const getLevelStudy = async (id) => {
        errorsLS.value = "";
        loading.value = true;
        let response = await axios.get("/api/levelStudies/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        levelStudy.value = response.data.data;
    };

    const createLevelStudy = async (data) => {
        errorsLS.value = "";
        try {
            loading.value = true;
            await axios.post("/api/levelStudies", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errorsLS)
                    errorsLS.value += e.response.data.errorsLS[key][0] + "\n";
            }
        }
    };

    const updateLevelStudy = async (id, data) => {
        errorsLS.value = "";
        try {
            loading.value = true;
            await axios.put("/api/levelStudies/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsLS)
                    errorsLS.value += e.response.data.errorsLS[key][0] + "\t\n";
            }
        }
    };

    const destroyLevelStudy = async (id) => {
        errorsLS.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/levelStudies/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errorsLS.value = "Impossible de supprimer ce pays";
            }
        }
    };

    return {
        levelStudies,
        levelStudy,
        errorsLS,
        loading,
        getLevelStudies,
        getLevelStudy,
        createLevelStudy,
        updateLevelStudy,
        destroyLevelStudy,
    };
}
