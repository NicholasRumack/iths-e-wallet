<template>
    <div class="defaultCard" v-bind:class="cardColor">
        <p>{{number}}</p>
        <p>{{fName}}</p> 
        <p>{{valid}}</p> 
    </div>
</template>

<script>
/* 
import CardForm from '@/components/CardForm.vue' */


export default {
computed: {
        number() {
            return this.$root.$data.defaultCard.cardnumber
        },
      
        fName () {
            return this.$root.$data.defaultCard.cardholder
        }, 
        valid () {
            return this.$root.$data.defaultCard.month + "/" + this.$root.$data.defaultCard.year               
        }
},

cardColor(){
    let className= '';
    switch(this.vendor) {
        case "bitCoin": className = 'bitCoinCard'; break;
        case "ninjaBank": className = 'ninjaBankCard'; break;
        case "blockChain": className = 'blockChainCard'; break;
        case "evilCorp": className = 'evilCorpCard'; break;
    }
    return className;
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
    .defaultCard {
        display: flex;
        justify-content: center;
        align-self: center;
        min-height: 300px;
        width: 450px;
        margin-left: 40%;
        margin-right: 40%;
        background-color: lightgray;
        border-radius: 10px;
        margin: 10px;
          }
    .bitCoin {
        display: flex;
        justify-content: center;
        align-self: center;
        min-height: 300px;
        width: 450px;
        margin-left: 40%;
        margin-right: 40%;
        background-color: rgb(255, 204, 0);
        border-radius: 10px;
        margin: 10px;
          }
    .ninjaBank {
        display: flex;
        justify-content: center;
        align-self: center;
        min-height: 300px;
        width: 450px;
        margin-left: 40%;
        margin-right: 40%;
        background-color: rgb(81, 81, 81);
        border-radius: 10px;
        margin: 10px;
          }
    .blockChain {
        display: flex;
        justify-content: center;
        align-self: center;
        min-height: 300px;
        width: 450px;
        margin-left: 40%;
        margin-right: 40%;
        background-color: rgb(102, 3, 130);
        border-radius: 10px;
        margin: 10px;
          }
    .evilCorp {
        display: flex;
        justify-content: center;
        align-self: center;
        min-height: 300px;
        width: 450px;
        margin-left: 40%;
        margin-right: 40%;
        background-color: rgb(222, 29, 48);
        border-radius: 10px;
        margin: 10px;
          }

</style>