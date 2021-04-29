<template>
    <div class="cardStack">
      <ul>
        <li 
        v-for="(card, index) in cardList" :key="index" 
        v-on:click="activateCard(card)"
        class="stack"> 
        <Card v-bind:cardnumber="card.cardnumber" 
              v-bind:cardholder="card.cardholder"
              v-bind:month="card.month"
              v-bind:year="card.year"
               />
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

<style>
li {
  list-style: none;
  margin-bottom: -250px;

}

.stack {
  z-index: 1;
}
</style>