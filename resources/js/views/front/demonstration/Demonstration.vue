<script setup>
import { reactive, ref, onMounted, computed, watch } from "vue";
import { PlusCircleIcon, CalendarDaysIcon, CalendarIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import { useRoute } from "vue-router";
import EventCalendar from "@/components/FilterEventCalendar.vue";
import useDemonstrations from "@/services/demonstrationServices";
import Loader from "@/components/skeleton/Demonstration.vue";
import { useI18n } from 'vue-i18n';
const route = useRoute();
const { locale } = useI18n();
const { demonstrations, errors, loading, filterDemonstration } = useDemonstrations();
const filterData = reactive({
    date: '',
    country_id: '',
    zone_id: '',
    city_id: '',
    continent_id: '',
    enter_type: '',
    demonstration_type_id: '',
    demonstration_mode_id: '',
    demonstration_niche: [],
});
onMounted(async function() {
    if('date' in route.query){
        filterData.date = route.query.date;
    filterData.country_id = route.query.country;
    filterData.zone_id = route.query.zone;
    filterData.city_id = route.query.city;
    filterData.continent_id = route.query.continent;
    filterData.enter_type = route.query.enterType;
    filterData.demonstration_type_id = route.query.eventType;
    filterData.demonstration_mode_id = route.query.eventMode;
    filterData.demonstration_niche = route.query.eventNiche;
    }

    await filterDemonstration({...filterData});
});
watch(route, async function (newRoute, oldRoute) {
    if('date' in newRoute.query)  {filterData.date = newRoute.query.date;
    filterData.country_id = newRoute.query.country;
    filterData.zone_id = newRoute.query.zone;
    filterData.city_id = newRoute.query.city;
    filterData.continent_id = newRoute.query.continent;
    filterData.enter_type = newRoute.query.enterType;
    filterData.demonstration_type_id = newRoute.query.eventType;
    filterData.demonstration_mode_id = newRoute.query.eventMode;
    filterData.demonstration_niche = newRoute.query.eventNiche;}
    await filterDemonstration({...filterData});
});
</script>
<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
        <h1
            class="py-2 text-center text-5xl font-bold capitalize text-primary-blue"
        >
            Evenements
        </h1>
        <div class="flex justify-end px-6">
                <router-link
                    :to="{
                        name: 'add.events'
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">{{ $t("add") }} Evenement</p>
                </router-link>
            </div>
       <div class=" flex mt-8 lg:flex-row flex-col-reverse lg:space-x-4 space-x-0 pb-10 ">
        <div class=" lg:w-[30%] w-full border-r border-y pb-6">
            <div class=" border-b px-4 py-2">
                <h1 class="font-medium text-3xl flex space-x-2 uppercase">
                    <span> <CalendarDaysIcon class="h-8 w-8 text-primary-blue" /></span>
                <span>Quand</span>
                </h1>
                <p class="mt-2 text-gray-900">Choisir un jour</p>
            </div>
            <EventCalendar :eventNiche="filterData.demonstration_niche" :zone="filterData.zone_id" :eventType="filterData.demonstration_type_id" :city="filterData.city_id" :continent="filterData.continent_id" :country="filterData.country_id" :date="filterData.date" :enterType="filterData.enter_type" :eventMode="filterData.demonstration_mode_id" />
        </div>
        <div class=" lg:w-[70%] w-full">
            <div class=" py-6 bg-primary-blue text-white px-4">
                <h1 class=" text-2xl"> <span class=" font-bold text-3xl">{{ demonstrations.length }}</span>   
                <span v-if="demonstrations.length  > 1">Evenements trouvés</span><span v-else>Evenement trouvé</span>
                </h1>
            </div>
            <Loader v-if="loading == 1" />
            <div v-else-if="demonstrations.length != 0" class=" space-y-6">
                <div v-for="demonstration in demonstrations" :key="demonstration.id" class="md:flex border-b space-y-2 py-4">
                    <div class="md:w-[20%] flex items-center justify-center min-h-[15rem] bg-gray-50">
                        <img v-if="demonstration.image" :src="demonstration.image" class=" object-cover w-full h-60" alt=""/>
                        <CalendarIcon  v-else class="h-20 text-gray-600" />
                    </div>
                    <div class="md:w-[60%] px-4 flex flex-col md:justify-between">
                        <div class="text-left">
                            <h1 class=" text-3xl font-bold uppercase whitespace-normal">{{ demonstration.title }}</h1>
                        <p class="mt-1 text-lg">

                            <span v-if="demonstration.start_date == demonstration.end_date">{{
                                            new Date(
                                                demonstration.start_date
                                            ).toLocaleDateString(locale, {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            })
                                        }}</span>
                                        <span v-else>Du {{
                                            new Date(
                                                demonstration.start_date
                                            ).toLocaleDateString(locale, {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            })
                                        }} Au {{
                                            new Date(
                                                demonstration.end_date
                                            ).toLocaleDateString(locale, {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            })
                                        }}</span>

                        </p>
                        <p class="text-sm text-gray-500"> <span>{{ demonstration.email }}</span> - <span> {{ demonstration.phone }}</span></p>
                        </div>
                        <div class="flex space-x-2 my-6 md:my-0">
                            <router-link :to="{
                                name:'compte',
                                params: {
                                            slug: demonstration.user.slug,
                                            id: demonstration.user.id,
                                        },
                            }" class="relative group min-w-[3rem]">
                                <span class=" absolute bg-black/70  hidden group-hover:block rounded-full top-12 left-0 text-xs px-3 py-0.5 text-white" v-if="demonstration.user">{{ demonstration.user.firstname }}{{ demonstration.user.lastname }}</span>
                                <img  v-if="demonstration.user.avatar" class="h-10 w-10 rounded-full object-cover" :src="demonstration.user.avatar" alt="">
                                <div  v-else class="h-10 w-10 rounded-full " >
                                    <UserCircleIcon
                                            class="h-full w-full text-gray-500"
                                        />
                                </div>
                            </router-link >
                            <div class="">
                                <p>
                                    <span class=" text-primary-blue">{{ demonstration.demonstration_mode.name_fr }}  </span> - 
                                    <span class=" font-medium"> {{ demonstration.demonstration_type.name_fr }} </span> - 
                                    <span class="text-red-500"> {{ demonstration.hourly }} </span>
                                </p>
                                <p>
                                <span class="font-medium">Lien/Lieu : </span>
                                <span>{{ demonstration.place_link }}</span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-[20%] flex flex-col md:justify-between items-start md:items-end md:px-8 px-4  pb-10">
                        <p class=" text-xl font-medium mb-4 md:mb-0">
                            <span class=" font-bold">Entrée : </span>
                            <span v-if="demonstration.enter_type === 'free'" class=" text-red-500">Gratuite</span>
                            <span v-else class=" text-primary-blue">
                             <span>  {{ demonstration.price }} </span>
                             <span>   {{ demonstration.currency.symbol }}</span></span> 
                        </p>
                        <button class=" rounded-full border-primary-blue px-3 text-sm py-2 text-primary-blue border hover:bg-primary-blue hover:text-white ">En Savoir plus</button>
                    </div>
                </div>
            </div>
            <NoContent v-else-if="demonstrations.length == 0 && loading != 1" />
        </div>
       </div>
    </div>
</template>
