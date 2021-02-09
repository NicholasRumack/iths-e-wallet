<template>
    <div>
        <p>{{card.cardnumber}}</p>
        <p>{{card.cardholder}}</p> 
        <p>{{card.month}}</p> 
        <p>{{card.year}}</p>
        <p>{{card.vendor}}</p>
    </div>
</template>

<script>
/* 
import CardForm from '@/components/CardForm.vue' */


export default {

props: {
  cardnumber: String,
  cardholder: String,
  month: String,
  year: String,
  ccv: String,
  vendor: Boolean
},

    computed: {
        card: function(){
            return this.$root.$data.card
        }
    }
}
</script>

<style>
    .cardWrapper {
        background-color: gray;
          }
</style>