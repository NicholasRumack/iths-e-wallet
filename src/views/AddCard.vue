<template>
  <div class="addCard">
    <Top/>
    <Card/>
    <CardForm  />
  </div>
</template>

<script>


import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  name: 'AddCard',
  components: {
    CardForm,
    Top,
    Card
  }
}
</script>
