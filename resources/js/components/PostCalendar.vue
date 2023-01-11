<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

const daysTag = ref(null);
const currentDate = ref(null);
const router = useRouter();
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(
            currYear,
            currMonth,
            lastDateofMonth
        ).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
                ? "active"
                : "";
        liTag += `<li class="${isToday} days-items">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.value.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.value.innerHTML = liTag;
};

async function nextMonth() {
    currMonth = currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
    setItemsDays();
}

async function prevMonth() {
    currMonth = currMonth - 1;
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
    setItemsDays();
}

onMounted(async function () {
    renderCalendar();
    setItemsDays();
});

async function setItemsDays() {
    let days_items = document.getElementsByClassName("days-items");
    for (let i = 0; i < days_items.length; i++) {
        days_items[i].addEventListener("click", function (e) {
            e.preventDefault();
            router.push({
                name: "articles",
                query: {
                    search_date: `${currYear}-${currMonth + 1}-${
                        e.target.innerHTML
                    }`,
                },
            });
        });
    }
}
</script>

<template>
    <div class="wrapper">
        <header>
            <p class="current-date" ref="currentDate"></p>
            <div class="icons">
                <span id="prev" @click="prevMonth()"
                    ><ChevronLeftIcon class="h-5 w-5"
                /></span>
                <span id="next" @click="nextMonth()"
                    ><ChevronRightIcon class="h-5 w-5"
                /></span>
            </div>
        </header>
        <div class="calendar">
            <ul class="weeks">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul class="days" ref="daysTag"></ul>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}
.wrapper header {
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
}
header .icons {
    display: flex;
}
header .icons span {
    height: 38px;
    width: 38px;
    margin: 0 1px;
    cursor: pointer;
    color: #878787;
    text-align: center;
    line-height: 38px;
    font-size: 1.9rem;
    user-select: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icons span:last-child {
    margin-right: -10px;
}
header .icons span:hover {
    background: #f2f2f2;
}
header .current-date {
    font-size: 1.25rem;
    font-weight: 500;
}
.calendar {
    padding: 15px;
}
.calendar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
}
.calendar .days {
    margin-bottom: 5px;
}
.calendar li {
    color: #333;
    width: calc(100% / 7);
    font-size: 0.875rem;
}
.calendar .weeks li {
    font-weight: 500;
    cursor: default;
}
.calendar .days li {
    z-index: 1;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
}
.days li.inactive {
    color: #aaa;
}
.days li.active {
    color: #fff;
}
.days li::before {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
.days li.active::before {
    background: #289dcc;
}
.days li:not(.active):hover::before {
    background: #f2f2f2;
}
</style>
