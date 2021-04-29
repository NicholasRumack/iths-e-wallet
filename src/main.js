import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: function (){

    return {

      autoId: 4,

      activeCard: {
        id: "",
        cardnumber: "",
        cardholder: "",
        month: "",
        year: "",
        vendor: ""
      },
      defaultCard: {
        id: "",
        cardnumber: "",
        cardholder: "",
        month: "",
        year: "",
        vendor: "defaultCard",
      },

      activeCardIndex: 0,

      cards:[ {
        id: "1",
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        vendor: "bitCoin"

      },
      {
        id: "2",
        cardnumber: "1234 4567 8910 1113",
        cardholder: "Joe Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "ninjaBank"

      },
      {
        id: "3",
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Smiles Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "evilCorp"

      },
      {
        id: "4",
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Who Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "blockChaininc",

      }],
    }
  },
  render: h => h(App)
}).$mount('#app')


