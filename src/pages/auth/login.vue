<script setup lang=ts>
import { useAuth } from '@vueuse/firebase'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue'
import { authComp } from '@/utils/firebase'

const { isAuthenticated, user } = useAuth(authComp)
const router = useRouter()

onMounted(() => {
  if (isAuthenticated.value)
    router.push('/')
  else
    return user
})
</script>

<template>
  <main class="flex items-center justify-center h-[30rem]">
    <LoginForm />
  </main>
</template>
