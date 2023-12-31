<template>
    <div class="relative h-auto min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    User
                </h1>
                <router-link
                    :to="{
                        name: 'admin.user.create',
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">Add User</p>
                </router-link>
            </div>
            <div class="items-center justify-between lg:flex">
                <div class="items-end space-x-2 p-4 lg:flex">
                    <div>
                        <label for="">Filter by:</label>
                        <select
                            v-model="searchField"
                            class="form-select mt-2 block w-32 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option value="firstname">Name</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                    <div class="relative mt-1">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                class="dark:text-gray-400 h-5 w-5 text-gray-500"
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
                            v-model="searchValue"
                            type="text"
                            id="table-search"
                            class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                            placeholder="Search for items"
                        />
                    </div>
                </div>
                <div class="">
                    <button
                        type="button"
                        title="delete"
                        @click="deleteUsers()"
                        class="flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                        <TrashIcon class="h-6 w-6" />
                        <span class="hidden text-sm font-thin lg:block"
                            >Delete</span
                        >
                    </button>
                </div>
            </div>
            <EasyDataTable
                v-model:items-selected="itemsSelected"
                :headers="headers"
                :items="users"
                alternating
                :search-field="searchField"
                :search-value="searchValue"
                show-index
                buttons-pagination
                :loading="loading"
            >
                <template #item-avatar="item">
                    <img
                        :src="item.avatar"
                        v-if="item.avatar"
                        alt=""
                        class="h-12 w-12 rounded-full object-cover"
                    />
                    <UserCircleIcon v-else class="h-12 w-12 text-gray-700" />
                </template>
                <template #item-status="item">
                    <span
                        v-if="item.status == 1"
                        class="rounded-full bg-green-500 p-2 text-white"
                        >Actived</span
                    >
                    <span v-else class="rounded-full bg-red-500 p-2 text-white"
                        >Desactived</span
                    >
                </template>
                <template #item-id="item">
                    <div>
                        <router-link
                            :to="{
                                name: 'admin.user.edit',
                                params: { id: item.id },
                            }"
                            class="dark:text-blue-500 text-primary-blue hover:underline"
                            >Edit</router-link
                        >
                        <router-link
                            :to="{
                                name: 'compte',
                                params: { slug: item.slug, id: item.id },
                            }"
                            class="dark:text-blue-500 ml-3 text-indigo-600 hover:underline"
                        >
                            view
                        </router-link>
                        <button
                            type="button"
                            v-if="item.status == 1"
                            @click="desactiveUser(item.id, 3)"
                            class="dark:text-blue-500 ml-3 text-purple-600 hover:underline"
                        >
                            Desactived
                        </button>
                        <button
                            type="button"
                            v-else
                            @click="activeUser(item.id, 1)"
                            class="dark:text-blue-500 ml-3 text-purple-600 hover:underline"
                        >
                            Actived
                        </button>
                    </div>
                </template>
            </EasyDataTable>
        </div>
    </div>
</template>

<script setup>
import { PlusCircleIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted, computed } from "vue";
import { TrashIcon } from "@heroicons/vue/24/solid";
import useUsers from "@/services/userServices.js";
import Error from "@/components/Error.vue";

const { users, getUsers, destroyUser, updateStatusUser, loading, errors } =
    useUsers();
const itemsSelected = ref([]);
const searchField = ref("firstname");
const searchValue = ref("");
const types = ["article", "propau"];
onMounted(async () => {
    await getUsers();
});

const deleteUsers = async () => {
    if (itemsSelected.value.length != 0) {
        const deleteIds = ref([]);
        itemsSelected.value.forEach((d) => {
            deleteIds.value.push(d.id);
        });
        if (confirm("I you Sure ?")) {
            await destroyUser(deleteIds.value);
            if (errors.value == "") {
                await getUsers();
                itemsSelected.value = [];
            }
        }
    }
};

const desactiveUser = async (id, s) => {
    const status = reactive({
        status: s,
    });
    if (confirm("I you Sure ?")) {
        await updateStatusUser(id, { ...status });
        if (errors.value == "") {
            await getUsers();
        }
    }
};

const activeUser = async (id, s) => {
    const status = reactive({
        status: s,
    });
    if (confirm("I you Sure ?")) {
        await updateStatusUser(id, { ...status });
        if (errors.value == "") {
            await getUsers();
        }
    }
};

const headers = [
    { text: "AVATAR", value: "avatar" },
    { text: "FIRSTNAME", value: "firstname" },
    { text: "EMAIL", value: "email" },
    { text: "TYPE", value: "type" },
    { text: "STATUS", value: "status" },
    { text: "ACTION", value: "id" },
];
</script>
