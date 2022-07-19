<script setup lang=ts>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { authComp } from '@/utils/firebase'

const email = $ref('')
const password = $ref('')
const router = useRouter()

const SignInUser = async () => {
  await signInWithEmailAndPassword(authComp, email, password)
    .then(() => {
      router.push('/')
    }).catch((err) => {
      console.error(err)
    })
}
</script>

<template>
  <section class="w-1/3 flex flex-col items-center justify-evenly h-full">
    <h2 class="font-bold uppercase text-xl">
      Register Your account
    </h2>

    <input v-model="email" type="email" class="w-full p-2 px-6 text-zinc-900 rounded-md" placeholder="Your E-Mail Address...">
    <input v-model="password" type="password" class="w-full p-2 px-6 text-zinc-900 rounded-md" placeholder="Your Password...">

    <button class="bg-red-500 w-1/2 text-xl font-bold p-2 px-4 rounded-md" @click="SignInUser()">
      Create Your account
    </button>
  </section>
</template>
