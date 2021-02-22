<template>
  <div class="home">
    <Top/>
     <!-- make these vbinds functional?? cardnumber="this.$root.$data.newCard.cardnumber-->
    <Card/>
    <CardStack/>
    <!--This button needs to become a router link-->
    <router-link to="/AddCard" class="addButton">ADD A NEW CARD</router-link>
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
      return this.$root.$data.cards
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
};
</script>
<style>
  .addButton{
    border-style: solid;
    border-color: black;
    background-color: white;
    border-width: 1px;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    padding: 15px 50px 15px 50px;
 }


</style>