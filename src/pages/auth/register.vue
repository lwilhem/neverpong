<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AsyncRegisterForm = defineAsyncComponent(() => import('@/components/RegisterForm.vue'))
</script>

<template>
  <main class="flex items-center justify-center h-[30rem]">
    <Suspense>
      <AsyncRegisterForm />
      <template #fallback>
        <div i-mdi:cloud class="w-32 h-32" />
      </template>
    </Suspense>
  </main>
</template>
