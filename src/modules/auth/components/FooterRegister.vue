<template>
  <footer class="flex flex-col text-white py-8">
    <div class="flex place-content-around items-center py-6">
      <Line />
      <p class="poppins">Regístrate también con</p>
      <Line />
    </div>
    <div class="flex place-content-around">
      <IconInstagram></IconInstagram>
      <IconTwitter></IconTwitter>
      <IconFacebook></IconFacebook>
    </div>
    <div class="flex place-content-around py-8">
      <p class="roboto">
        ¿Ya estás registrado?
        <router-link :to="{ name: 'login' }" class="text-pink"
          >Acceder</router-link
        >
      </p>
    </div>
  </footer>
</template>
    
<script setup>
import IconTwitter from "../icons/IconTwitter.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import Line from "./Line.vue";
</script>