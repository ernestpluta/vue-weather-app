<template>
    <div v-for="(singleDay, index) in TenDayWeatherData.slice(0,10)" :key="index" class="">
        <div class="flex items-center py-4 pl-6 border-l">
            <div class="basis-1/3">
                <div class="font-semibold">{{index === 0 ? "Today" : new Date(singleDay.datetime).toLocaleString('en-us', {weekday:'long'})}}</div> 
                <div class="text-sm text-[#545353]">{{new Date(singleDay.datetime).getDate()}} {{new Date(singleDay.datetime).toLocaleString('en-us', { month: 'short' })}}</div>
            </div>
            <div class="basis-1/3 mx-6"><img :src="imageSrc + singleDay.weather.icon + '.png'" :alt="singleDay.weather.description" class="w-[50px]"/></div>
            <div class="basis-1/3 font-semibold text-lg">{{singleDay.app_min_temp.toFixed()}}&#xb0; {{singleDay.app_max_temp.toFixed()}}&#xb0;</div>
        </div>
    </div>
</template>


<script setup>
import axios from 'axios';
const imageSrc = `https://www.weatherbit.io/static/img/icons/`
const props = defineProps({
    TenDayWeatherData: Object
})
console.log(props.weather)

</script>

<style scoped></style>