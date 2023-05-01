<script setup>
import FooterLogin from "../components/FooterLogin.vue";
import HeaderLogin from "../components/HeaderLogin.vue";
</script>

<template>
  <main
    class="flex flex-col h-full desktop:bg-black bg-gradient-to-t from-black smartphone:to-purple overscroll-auto"
  >
    <HeaderLogin></HeaderLogin>
    <section>
      <form>
        <div>
          <label class="block poppins px-8 py-0 text-white" for="email"
            >Email</label
          >
          <div class="mt-2 px-8">
            <input
              placeholder="Email"
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
          <label class="block poppins px-8 pt-[18px] text-white" for="password"
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
          <div class="relative text-sm">
            <a href="#" class="text-pink absolute right-0 pb-2 pr-8"
              >¿Olvidaste la contraseña?</a
            >
          </div>
        </div>
      </form>
      <div class="pt-11 px-8">
        <button
          type="submit"
          class="flex w-full justify-center h-[60px] rounded-md bg-pink px-auto py-[20px] text-sm font-semibold leading-6 text-darkblue"
        >
          Acceder
        </button>
      </div>
    </section>
    <FooterLogin></FooterLogin>
  </main>
</template>


<style>
</style>