<script setup lang="ts">
import { supabase } from '@/utils/supabase'

const email = $ref('')
const password = $ref('')

const signUpWithEmail = async (e: Event) => {
  const { signUp } = supabase.auth

  const { error } = await signUp({
    email,
    password,
  })

  if (error)
    return console.error({ status: error.status, message: error.message })

  e.preventDefault()
}
</script>

<template>
  <form class="flex flex-col items-center justify-evenly h-fit w-1/3" @submit="(e) => signUpWithEmail(e)">
    <h1 class="my-12 uppercase font-bold text-xl">
      SignIn with your credentials
    </h1>
    <div class="flex flex-row items-center justify-center flex-wrap w-full">
      <p class="w-full px-2 py-1 my-6">
        <input v-model="email" type="email" placeholder=" your Email Address..." class="px-2 py-1 rounded-md w-full" autocomplete="email">
      </p>
      <p class="w-full px-2 py-1">
        <input v-model="password" type="password" placeholder="your Password..." class="px-2 py-1 rounded-md w-full" autocomplete="current-password">
      </p>
    </div>
    <input class="bg-teal-500 w-full py-3 rounded-md uppercase font-bold my-10" type="submit" value="Sign In">
    <RouterLink to="/auth/register" class="bg-red-500 w-full py-3 rounded-md text-center uppercase font-bold">
      No account? Register
    </RouterLink>
  </form>
</template>
