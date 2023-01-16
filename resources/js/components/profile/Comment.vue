<script setup>
import useComments from "@/services/commentServices.js";
import useAnnouncementComments from "@/services/announcementCommentServices.js";

import { onMounted, ref, computed, reactive } from "vue";
import {
    TrashIcon,
    FaceFrownIcon,
    PlusCircleIcon,
    PencilSquareIcon,
} from "@heroicons/vue/24/solid";
const props = defineProps({
    user: Object,
});

const searchComment = ref("");
const {
    updateAnnouncementComment,
    errorsCmtAds,
    destroyAnnouncementComment,
    announcementComments,
    getAnnouncementCommentsUser,
} = useAnnouncementComments();
const { comments, getCommentsUser, destroyComment, updateComment } =
    useComments();
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
const modifyComment = reactive({
    id: "",
    user_id: "",
    post_id: "",
    announcement_id: "",
    content: "",
});
const loading = ref(0);

onMounted(async function () {
    loading.value = 1;
    await getCommentsUser(props.user.id);
    await getAnnouncementCommentsUser(props.user.id);
    loading.value = 0;
});

const deleteComment = async (id, type) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        type == "post"
            ? await destroyComment(deleteId)
            : await destroyAnnouncementComment(deleteId);
        await getCommentsUser(props.user.id);
        await getAnnouncementCommentsUser(props.user.id);
    }
};

const selectComment = (comment) => {
    modifyComment.id = comment.id;
    modifyComment.content = comment.content;
    modifyComment.user_id = comment.user.id;
    modifyComment.post_id = comment.post ? comment.post.id : "";
    modifyComment.announcement_id = comment.announcement
        ? comment.announcement.id
        : "";
};

const saveComment = async () => {
    modifyComment.post_id
        ? await updateComment(modifyComment)
        : await updateAnnouncementComment(modifyComment);
    modifyComment.id = "";
    modifyComment.content = "";
    modifyComment.user_id = "";
    modifyComment.post_id = "";
    modifyComment.announcement_id = "";
    await getCommentsUser(props.user.id);
    await getAnnouncementCommentsUser(props.user.id);
};

const filteredComment = computed(() => {
    return comments.value
        .concat(announcementComments.value)
        .filter((comment) => {
            return comment.post
                ? comment.post.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase())
                : comment.announcement.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase());
        });
});
</script>

<template>
    <div>
        <div v-if="loading == 1" class="py-6">
            <Spin />
        </div>
        <div v-else>
            <div class="p-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
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
                        v-model="searchComment"
                        class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full table-fixed divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                {{ $t("articles") }} & {{ $t("propau") }} & Ads
                            </th>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                {{ $t("comments") }}
                            </th>
                            <th
                                scope="col"
                                class="p-4"
                                v-if="user.id == loginUser.id"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        class="divide-y divide-gray-200 bg-white"
                        v-if="filteredComment.length != 0"
                    >
                        <tr
                            v-for="comment in filteredComment"
                            :key="comment.id"
                            class="hover:bg-gray-100"
                        >
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <router-link
                                    v-if="comment.post"
                                    :to="{
                                        name: 'show.post',
                                        params: {
                                            id: comment.post.id,
                                            slug: comment.post.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{ comment.post.title }}</router-link
                                >
                                <router-link
                                    v-else
                                    :to="{
                                        name: 'show.ads',
                                        params: {
                                            id: comment.announcement.id,
                                            slug: comment.announcement.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{
                                        comment.announcement.title
                                    }}</router-link
                                >
                            </td>
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <span
                                    v-if="
                                        modifyComment.id == '' ||
                                        modifyComment.id != comment.id
                                    "
                                >
                                    <span>{{
                                        comment.content.length <= 50
                                            ? comment.content
                                            : comment.content.substring(0, 49) +
                                              "..."
                                    }}</span>
                                </span>
                                <form
                                    v-if="
                                        modifyComment.id != '' &&
                                        modifyComment.id == comment.id
                                    "
                                    @submit.prevent="saveComment()"
                                >
                                    <textarea
                                        required
                                        v-model="modifyComment.content"
                                        type="text"
                                        id="pt"
                                        class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                                    >
                                    </textarea>
                                    <div class="mt-6 flex justify-end">
                                        <button
                                            type="submit"
                                            class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                        >
                                            {{ $t("save") }}
                                        </button>
                                    </div>
                                </form>
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                            >
                                <div class="flex">
                                    <button
                                        @click="selectComment(comment)"
                                        class="text-primary-blue hover:underline"
                                    >
                                        <PencilSquareIcon
                                            class="h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700"
                                        />
                                    </button>
                                    <button
                                        @click="
                                            deleteComment(
                                                comment.id,
                                                comment.post ? 'post' : 'ads'
                                            )
                                        "
                                        class="ml-3 text-red-600 hover:underline"
                                    >
                                        <TrashIcon
                                            class="h-5 w-5 cursor-pointer text-red-400 hover:text-red-700"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="divide-y divide-gray-200 bg-white" v-else>
                        <tr class="hover:bg-gray-100">
                            <td
                                colspan="5"
                                class="whitespace-nowrap py-4 px-6 text-center text-xl font-medium text-gray-900"
                            >
                                <NoContent />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
