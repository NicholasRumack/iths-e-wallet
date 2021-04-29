<template>
    <div class="defaultCard" >
        <img class="chip" src="@/assets/chip-light.svg" alt="">
        <img class="icon" src="@/assets/vendor-bitcoin.svg" alt="">
        <p class="cardnumber">{{cardNumberDisplay}}</p>
        <p class="name">{{cardholder}}</p> 
        <p class="date">{{month}}/{{year}}</p> 
    </div>
</template>

<script>
/* 
import CardForm from '@/components/CardForm.vue' */


export default {
computed: {

  cardNumberDisplay: function () {
    return this.cardnumber.substring(0,4) +" "+ this.cardnumber.substring(4,8) +" "+this.cardnumber.substring(8,12) +" "+this.cardnumber.substring(12,16)
  },

/* cardColor(){
    let className= '';
    switch(this.vendor) {
        case "bitCoin": className = 'bitCoin'; break;
        case "ninjaBank": className = 'ninjaBank'; break;
        case "blockChain": className = 'blockChain'; break;
        case "evilCorp": className = 'evilCorp'; break;
    }
    return className;
}, */
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      min-height: 300px;
      width: 450px;
      background-color: lightgray;
      border-radius: 10px;
      margin: 10px;
          }
    .chip {
      height: 100px;
      grid-column: 1/2;
      grid-row: 1/2;
      margin-top: 30px;
      margin-left: 20px;
    }
    .icon {
      margin-top: 30px;
      padding-left: 50px;
      grid-column: 4/5;
      grid-row: 1/2;
    }
    .cardnumber {
      grid-column: 1/5;
      grid-row: 3/4;
      margin-bottom: -30px;
      font-size: 35px;
    }
    .name {
      grid-column: 1/2;
      grid-row: 4/5;
    }
    .date {
      grid-column: 4/5;
      grid-row: 4/5;
    }
    .bitCoin {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      min-height: 300px;
      width: 450px;
      background-color: rgb(255, 204, 0);
      border-radius: 10px;
      margin: 10px;
          }
    .ninjaBank {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      min-height: 300px;
      width: 450px;
      background-color: rgb(81, 81, 81);
      border-radius: 10px;
      margin: 10px;
          }
    .blockChain {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      min-height: 300px;
      width: 450px;
      background-color: rgb(102, 3, 130);
      border-radius: 10px;
      margin: 10px;
          }
    .evilCorp {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      min-height: 300px;
      width: 450px;
      background-color: rgb(222, 29, 48);
      border-radius: 10px;
      margin: 10px;
          }

</style>