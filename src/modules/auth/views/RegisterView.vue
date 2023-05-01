<template>
  <main
    class="flex flex-col h-full desktop:bg-black bg-gradient-to-t from-black smartphone:to-purple overscroll-auto"
  >
    <HeaderRegister />
    <section>
      <form @submit.prevent="onSubmit">
        <div>
            <p class="poppins px-8 py-0 text-white">
                Tipo de persona
                <label class="px-8"
                ><input type="radio" value="Natural" id="natural" v-model="select" />
                Natural</label
                >
                <label class="px-8"
                ><input type="radio" value="Juridica" id="juridica" v-model="select" />
                Jurídica</label
                >
            </p>
        </div>
        <div v-if="select == 'Natural'" class="pt-[18px]">
          <label class="block poppins px-8 py-0 text-white" for="nombre"
            >Nombre</label
          >
          <div class="mt-2 px-8">
            <input
              type="text"
              id="nombre"
              name="nombre"
              autocomplete="nombre"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div v-if="select == 'Juridica'" class="pt-[18px]">
          <label class="block poppins px-8 py-0 text-white" for="razon"
            >Razón social</label
          >
          <div class="mt-2 px-8">
            <input
              type="text"
              id="razon"
              name="razon"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div v-if="select == 'Natural'">
          <label class="block poppins px-8 py-0 text-white" for="apellido"
            >Apellido</label
          >
          <div class="mt-2 px-8">
            <input
              type="text"
              id="apellido"
              name="apellido"
              autocomplete="apellido"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div v-if="select == 'Juridica'">
          <label class="block poppins px-8 py-0 text-white" for="nit"
            >NIT</label
          >
          <div class="mt-2 px-8">
            <input
              type="numero"
              id="nit"
              name="nit"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div>
          <label class="block poppins px-8 py-0 text-white" for="telefono"
            >Teléfono</label
          >
          <div class="mt-2 px-8">
            <input
              type="number"
              id="telefono"
              name="telefono"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div v-if="select == 'Natural'">
          <label class="block poppins px-8 py-0 text-white" for="n_id"
            >Número de identificación</label
          >
          <div class="mt-2 px-8">
            <input
              type="number"
              id="n_id"
              name="n_id"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div>
          <label class="block poppins px-8 py-0 text-white" for="email"
            >Email</label
          >
          <div class="mt-2 px-8">
            <input
              placeholder="usuario@yabu.com"
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div>
          <label class="block poppins px-8 text-white" for="password"
            >Contraseña</label
          >
          <div class="mt-2 px-8">
            <input
              type="password"
              id="password"
              name="password"
              autocomplete="password"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
        <div>
          <label class="block poppins px-8 text-white" for="c_password"
            >Repetir Contraseña</label
          >
          <div class="mt-2 px-8">
            <input
              type="password"
              id="c_password"
              name="c_password"
              autocomplete="password"
              required
              class="block border-2 border-white bg-[rgba(255,255,255,0.26)] w-full h-[60px] pl-[20px] rounded-md text-[#D8D5D9]"
            />
          </div>
        </div>
      </form>
      <div class="pt-11 px-8">
        <button
          type="submit"
          class="flex w-full justify-center h-[60px] rounded-md bg-pink px-auto py-[20px] text-sm font-semibold leading-6 text-darkblue"
        >
          Registrar
        </button>
      </div>
    </section>
    <FooterRegister />
  </main>
</template>

<script setup>
import HeaderRegister from "../components/HeaderRegister.vue";
import FooterRegister from "../components/FooterRegister.vue";
import {ref} from 'vue'

const select = ref('Natural')
</script>
<style>
</style>