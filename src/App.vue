<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useAuth } from '@vueuse/firebase'
import { useRouter } from 'vue-router'
import NavbarComp from '@/components/NavbarComp.vue'
import { authComp } from '@/utils/firebase'

const { isAuthenticated, user } = useAuth(authComp)
const router = useRouter()

onBeforeMount(() => {
  if (!isAuthenticated.value)
    router.push('/auth/register')
  else
    console.log(user)
})
</script>

<template>
  <NavbarComp />
  <RouterView />
</template>

<style scoped></style>
