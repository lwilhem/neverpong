<script setup lang="ts">
import { supabase } from '@/utils/supabase'

const opentTicket = async () => {
  const { error } = await supabase
    .from('tickets')
    .insert([{

    }])

  if (error)
    return console.error(error)

  return 'Ticket sucessfully opened'
}
</script>

<template>
  <main>
    <h1>Create Tickets</h1>

    <button @click="opentTicket()">
      Create Tickets
    </button>
  </main>
</template>
