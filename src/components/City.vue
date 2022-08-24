<template>
  <div class="city-wrappper rounded-lg mt-2 border" >
    <div v-for="(city,index) in cities" :key="index" class="city p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition  " :style="{borderTopWidth: index === 0 ? '' : '1px'}">
    <p>{{city.name}}, {{city.state}}, {{city.country}}</p>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue';
const props = defineProps({
    cities: Object
})
</script>

<style scoped>

</style>