<script setup>
import useAnnouncements from "@/services/announcementServices.js";
import { onMounted, ref, computed } from "vue";

import {
    TrashIcon,
    PlusCircleIcon,
    PencilSquareIcon,
} from "@heroicons/vue/24/solid";
import NoContent from "../utils/NoContent.vue";
const props = defineProps({
    user: Object,
});
const { announcements, getAnnouncementsUser, destroyAnnouncement, loading } =
    useAnnouncements();
const searchAds = ref("");
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async function () {
    await getAnnouncementsUser(props.user.id);
});

const deleteAnnouncement = async (id) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        await destroyAnnouncement(deleteId);
        await getAnnouncementsUser(props.id);
    }
};

const filteredAnnouncement = computed(() => {
    return announcements.value.filter((announcement) => {
        return announcement.title
            .toLowerCase()
            .includes(searchAds.value.toLowerCase());
    });
});
</script>

<template>
    <div>
        <div v-if="loading == 1" class="py-6">
            <Spin />
        </div>
        <div v-else>
            <div
                class="flex flex-col-reverse items-center justify-between px-6 py-2 lg:flex-row"
            >
                <div>
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
                            v-model="searchAds"
                            class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    class="mb-2 flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $tc("add", 2) }} {{ $t("ads") }}
                    </p>
                </router-link>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full table-fixed divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                {{ $t("my-ads") }}
                            </th>
                            <th
                                v-if="user.id == loginUser.id"
                                scope="col"
                                class="p-4"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        class="divide-y divide-gray-200 bg-white"
                        v-if="filteredAnnouncement.length != 0"
                    >
                        <tr
                            v-for="announcement in filteredAnnouncement"
                            :key="announcement.id"
                            class="hover:bg-gray-100"
                        >
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <router-link
                                    :to="{
                                        name: 'show.ads',
                                        params: { id: announcement.id, slug: announcement.slug  },
                                    }"
                                    class="hover:underline"
                                    >{{ announcement.title }}</router-link
                                >
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                            >
                                <div class="flex">
                                    <router-link
                                        :to="{
                                            name: 'edit.ads',
                                            params: { id: announcement.id },
                                        }"
                                        class="text-primary-blue hover:underline"
                                    >
                                        <PencilSquareIcon
                                            class="h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700"
                                        />
                                    </router-link>
                                    <button
                                        @click="
                                            deleteAnnouncement(announcement.id)
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
