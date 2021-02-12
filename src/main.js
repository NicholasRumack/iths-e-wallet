import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: function (){

    return {

      card:[ {
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "BitCoin"

      },
      {
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "BitCoin"

      },
      {
        cardnumber: "1234 4567 8910 1112",
        cardholder: "Peter Pan",
        month: "11",
        year: "23",
        ccv: "123",
        vendor: "BitCoin"

      }],
    }
  },
  render: h => h(App)
}).$mount('#app')


