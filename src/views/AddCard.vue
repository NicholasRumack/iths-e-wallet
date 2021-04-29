<template>
  <div class="addCard">
    <Top class="top"/>
    <Card class="card"
          v-bind:cardnumber="$root.$data.defaultCard.cardnumber"
          v-bind:cardholder="$root.$data.defaultCard.cardholder"
          v-bind:month="$root.$data.defaultCard.month"
          v-bind:year="$root.$data.defaultCard.year" />
    <CardForm class="form" />
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
<style>

.addCard {
  display: grid;
  grid-template-columns: 1fr repeat(3);
  grid-template-rows: auto;
}

.top{
  grid-column: 1/3;
}

.card {
  grid-column: 2/3;
  grid-row: 2/3;
}
.form {
  grid-column: 1/3;
  grid-row: 3/5;
}



</style>
