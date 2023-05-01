<template>
<footer class="flex flex-col text-white py-8">
    <div class="flex place-content-around items-center py-6">
        <Line/>
        <p class="poppins"> Acceder con RRSS </p>
        <Line/>
    </div>
    <div class="flex place-content-around">
        <IconInstagram></IconInstagram>
        <IconTwitter></IconTwitter>
        <IconFacebook></IconFacebook>
    </div>
    <div class="flex place-content-around py-8">
        <p class="roboto">¿Quieres registrarte? <router-link :to="{name:'register'}" class="text-pink">Registrate</router-link></p>
    </div>
</footer>
</template>

<script setup>

import IconTwitter from '../icons/IconTwitter.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import IconFacebook from '../icons/IconFacebook.vue';
import Line from './Line.vue'

</script>

<style>
</style>