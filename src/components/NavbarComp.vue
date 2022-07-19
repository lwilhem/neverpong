<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
</script>

<template>
  <header class="flex items-center justify-between px-6 h-16 relative">
    <span i-fluent:animal-turtle-24-filled class="w-10 h-10" />
    <h1 class="mx-auto font-mono font-bold uppercase">
      Neverpong
    </h1>
    <div class="bg-slate-200 rounded-full p-1" @click="toggle()">
      <span i-majesticons:menu-expand-left class="w-8 h-8 text-red-500" />
    </div>
    <section v-show="value" class="absolute w-1/4 h-32 bg-slate-200 text-zinc-900 top-16 right-0 z-10">
      <RouterLink to="/auth/register" class="w-full flex items-center justify-center h-12">
        Register
      </RouterLink>
      <RouterLink to="/auth/login" class="w-full flex items-center justify-center h-12">
        Login
      </RouterLink>
    </section>
  </header>
</template>
