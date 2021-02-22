<template>
    <div class="cardStack">
      <ul>
        <li 
        v-for="(card, index) in cardList" :key="index" 
        v-on:click="activateCard(card)"> 
        <Card v-bind:activeCard="card" />
        </li>
      </ul>
    </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
    name: 'CardStack',
    components: {
      Card
  },

  computed: {
    cardList() {
      return this.$root.$data.cards
    }
  },

  methods: {
    activateCard(card) {
      this.$root.$data.activeCard.id = card.id;
      this.$root.$data.activeCard.cardnumber = card.cardnumber;
      this.$root.$data.activeCard.cardholder = card.cardholder;
      this.$root.$data.activeCard.month = card.month;
      this.$root.$data.activeCard.year = card.year;
      this.$root.$data.activeCard.vendor = card.vendor;
    }
  },

props: {
  cardnumber: String,
  cardholder: String,
  month: String,
  year: String,
  ccv: String,
  vendor: String
},
}
</script>