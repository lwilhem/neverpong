<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { supabase } from '@/utils/supabase'

const [value, toggle] = useToggle()

const userSignOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error)
    return console.error({ status: error.status, message: error.message })
}
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
    <section v-show="value" class="absolute w-1/4 h-fit bg-slate-200 text-zinc-900 top-16 right-0 z-10">
      <RouterLink to="/auth/register" class="w-full flex items-center justify-center h-12">
        Register
      </RouterLink>
      <RouterLink to="/auth/login" class="w-full flex items-center justify-center h-12">
        Login
      </RouterLink>
      <RouterLink to="/tickets/create" class="w-full flex items-center justify-center h-12">
        Create a ticket
      </RouterLink>
      <RouterLink to="/tickets/create" class="w-full flex items-center justify-center h-12">
        ticket List
      </RouterLink>
      <button @click="userSignOut()">
        logout
      </button>
    </section>
  </header>
</template>
