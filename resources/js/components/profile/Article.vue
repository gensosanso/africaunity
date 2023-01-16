<script setup>
import usePosts from "@/services/postServices.js";
import { onMounted, ref, computed, reactive } from "vue";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/solid";
import {
    TrashIcon,
    FaceFrownIcon,
    PlusCircleIcon,
    PencilSquareIcon,
} from "@heroicons/vue/24/solid";
const props = defineProps({
    user: Object,
});
const { articles, getPostsUser, propau, loading, destroyPost } = usePosts();
const searchArticle = ref("");
const langArticle = ref("");
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async function () {
    await getPostsUser(props.user.id);
});

const filteredArticles = computed(() => {
    return articles.value.filter((article) => {
        if (langArticle.value != "") {
            return (
                article.title
                    .toLowerCase()
                    .includes(searchArticle.value.toLowerCase()) &&
                article.language == langArticle.value
            );
        } else {
            return article.title
                .toLowerCase()
                .includes(searchArticle.value.toLowerCase());
        }
    });
});

const deletePost = async (id) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        await destroyPost(deleteId);
        await getPostsUser(props.user.id);
    }
};
</script>

<template>
    <div>
        <div v-if="loading == 1" class="py-6">
            <Spin />
        </div>
        <div v-else>
            <div class="items-center space-x-2 md:flex">
                <div>
                    <div class="relative">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                class="h-5 w-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            v-model="searchArticle"
                            class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div>
                    <select
                        v-model="langArticle"
                        class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">Select Language</option>
                        <option value="fr">{{ $t("fr") }}</option>
                        <option value="en">{{ $t("en") }}</option>
                        <option value="es">{{ $t("es") }}</option>
                        <option value="pt">{{ $t("pt") }}</option>
                    </select>
                </div>
            </div>
            <div
                class="grid gap-8 px-6 py-8 lg:grid-cols-2"
                v-if="filteredArticles.length != 0"
            >
                <div
                    v-for="post in filteredArticles"
                    :key="post.id"
                    class="mx-auto flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg"
                >
                    <div class="w-1/3 overflow-hidden bg-cover">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id, slug: post.slug  },
                            }"
                            ><img
                                :src="post.image"
                                class="h-full w-full bg-cover object-cover"
                                :alt="post.title"
                        /></router-link>
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id , slug: post.slug },
                            }"
                            class="text-2xl font-bold text-gray-800"
                        >
                            {{
                                post.title.length <= 20
                                    ? post.title
                                    : post.title.substring(0, 19) + "..."
                            }}</router-link
                        >

                        <!-- <p class="mt-2 text-sm text-gray-600 ">{{ post.content.substring(0, 19) + "..." }}</p> -->

                        <div class="item-center mt-2 flex space-x-1">
                            <ChatBubbleOvalLeftEllipsisIcon
                                class="h-4 w-4 text-gray-500"
                            />
                            <a
                                href="#"
                                class="text-xs hover:text-primary-blue"
                                >{{ post.comments }}</a
                            >
                        </div>

                        <div class="item-center mt-3 flex justify-between">
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id , slug: post.slug },
                                }"
                                class="text-sm font-bold text-primary-blue hover:underline"
                                >{{ $t("read-more") }}
                            </router-link>
                            <div
                                class="flex space-x-2"
                                v-if="user.id == loginUser.id"
                            >
                                <router-link
                                    :to="{
                                        name: 'edit.post',
                                        params: {
                                            id: post.id,
                                            type: post.type,
                                        },
                                    }"
                                >
                                    <PencilSquareIcon
                                        class="h-5 w-5 cursor-pointer text-primary-blue hover:text-gray-400"
                                    />
                                </router-link>

                                <button
                                    @click="deletePost(post.id)"
                                    class="text-red-600 hover:underline"
                                >
                                    <TrashIcon
                                        class="h-5 w-5 cursor-pointer text-red-400 hover:text-red-700"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NoContent v-else />
        </div>
    </div>
</template>
