<template>
  <div class="home">
    <Top class="top"/>
     <!-- make these vbinds functional?? cardnumber="this.$root.$data.newCard.cardnumber-->
     <!-- put props -->
    <Card class="card"
          v-bind:cardnumber="activeCard.cardnumber" 
          v-bind:cardholder="activeCard.cardholder"
          v-bind:month="activeCard.month"
          v-bind:year="activeCard.year" 
            />
          <button v-on:click="$delete(index)"> Remove </button>
    <CardStack class="cardStack"/>
    <!--This button needs to become a router link-->
    <router-link to="/AddCard" class="addNewButton">ADD A NEW CARD</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    activeCard: function(){
      
      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
    }
  },
  props: {
  cardnumber: String,
  cardholder: String,
  month: String,
  year: String,
  ccv: String,
  vendor: Boolean
},

methods: {
  delete(index) {
    this.list.splice(index, 1);
  }
}

};
</script>

<style>
.home {
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
.cardStack {
  grid-column: 2/3;
  grid-row: 3/4;
  margin-left: -40px;

}
.addNewButton{
  border-style: solid;
  border-color: black;
  background-color: white;
  border-width: 1px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  padding: 15px 50px 15px 50px;
  margin-top: 250px;
  grid-column: 2/3;
  grid-row: 7/8;
  margin-left: 80px;

 }

</style>