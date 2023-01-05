<script setup>
import {
    ChevronLeftIcon,
    CalendarIcon,
    UserIcon,
} from "@heroicons/vue/24/solid";
import usePersonalPosts from "@/services/personalPostsServices.js";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const { getPersonalPost, errors, personalPost, loading } = usePersonalPosts();
const emits = defineEmits(["back"]);
function goBack() {
    emits("back");
}
const url = window.location.href;
onMounted(async () => {
    await getPersonalPost(props.id);
});
</script>

<template>
    <div>
        <button
            type="button"
            @click="goBack()"
            class="flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
        >
            <span> <ChevronLeftIcon class="h-5 w-5" /></span>
            <span>Back</span>
        </button>

        <div></div>
        <div class="py-6" v-if="personalPost.length != 0">
            <div
                class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"
            >
                <!-- Post -->
                <img
                    class="h-96 w-full object-cover"
                    :src="personalPost.image"
                    alt=""
                />
                <div class="p-6">
                    <div>
                        <h1
                            class="dark:text-white mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"
                        >
                            {{ personalPost.title }}
                        </h1>
                        <span class="flex flex-wrap space-x-2">
                            <span
                                class="my-4 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    personalPost.category_personal_post.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    personalPost.category_personal_post.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    personalPost.category_personal_post.name_es
                                }}</span>
                                <span v-else>{{
                                    personalPost.category_personal_post.name_pt
                                }}</span>
                            </span>
                            <span
                                v-if="personalPost.subtheme"
                                class="my-4 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                                >{{ personalPost.subtheme }}</span
                            >
                        </span>
                        <div class="mt-2 flex space-x-2 text-xs text-gray-500">
                            <div class="flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">
                                    {{
                                        new Date(
                                            personalPost.date
                                        ).toLocaleDateString(locale, {
                                            day: "numeric",
                                            year: "numeric",
                                            month: "long",
                                        })
                                    }}
                                </a>
                            </div>
                            <div class="flex space-x-1">
                                <UserIcon class="h-4 w-4" />
                                <router-link
                                    :to="{
                                        name: 'compte',
                                        params: {
                                            slug: personalPost.user.slug,
                                            id: personalPost.user.id,
                                        },
                                    }"
                                    class="hover:text-primary-blue"
                                    >{{
                                        personalPost.user.firstname
                                    }}</router-link
                                >
                            </div>
                        </div>
                        <p
                            class="dark:text-gray-400 my-4 mt-2 py-4 text-gray-600"
                            v-html="personalPost.content"
                        ></p>
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <!-- <div>
                                        <button
                                            @click="toogleModal()"
                                            class="flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white"
                                        >
                                            <ExclamationCircleIcon
                                                class="h-5 w-5"
                                            />
                                            <span class="hidden lg:block">{{
                                                $t("report")
                                            }}</span>
                                        </button>
                                    </div> -->
                        </div>
                    </div>
                    <div class="flex items-center space-x-3 px-2 py-4">
                        <!-- wathsapp icons -->
                        <a
                            :href="
                                'whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you ' +
                                url
                            "
                        >
                            <svg
                                fill="#25D366"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                                class="h-6 w-6"
                            >
                                <path
                                    d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="loading == 1" class="p-28">
            <Spin />
        </div>
        <NoContent v-else />
    </div>
</template>
