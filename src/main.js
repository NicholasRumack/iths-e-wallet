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

      cards:[ {
        id: "1",
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        vendor: "BitCoin"

      },
      {
        id: "2",
        cardnumber: "1234 4567 8910 1113",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "NinjaBank"

      },
      {
        id: "3",
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "BitCoin"

      },
      {
        id: "4",
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "BitCoin",

      }],
    }
  },
  render: h => h(App)
}).$mount('#app')


