<template>
   <form v-on:submit='onSubmit' id=addcard>
     <div class="cardWrapper">
        <p>{{cardnumber}}</p>
        <p>{{cardholder}}</p>
        <p>{{month}}/{{year}}</p>
      </div>  
        <p>
          <label for="cardnumber">CARD NUMBER:</label>
          <input id="cardnumber" v-model="cardnumber">
        </p>
        <p>
          <label for="cardholder">CARDHOLDER NAME:</label>
          <input id="cardholder" v-model="cardholder" placeholder="FIRSTNAME LASTNAME">
        </p>
        <p>
          <label for="validthru">VALID THRU:</label>
          <select id="month" v-model="month">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select id="month" v-model="year">
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
          </select>
        </p>
        <p>
          <label for="ccv">CCV:</label>
          <input id="ccv" v-model="ccv">
        </p>
        <p>
          <label for="vendor">VENDOR:</label>
          <select id="vendor" v-model="vendor">
            <option value="bitcoin">BITCOIN INC</option>
            <option value="ninjabank">NINJA BANK</option>
            <option value="blockchaininc">BLOCK CHAIN INC</option>
            <option value="evilcorp">EVIL CORP</option>
          </select>
        </p>
         
        <p>
          <input type="submit" value="ADD CARD">  
        </p>    

           
      </form>
      
</template>

<script>

export default {

        data() {
            return{
            cardnumber: '',
            cardholder: '',
            month: '',
            year: '',
            ccv: '',
            vendor: ''
        }
}, 
methods: {
  /*This need to turn into a v-on function, const card should be moved into the push*/
    onSubmit () {
        const card = {
            cardnumber: this.cardnumber,
            cardholder: this.cardholder,
            month: this.month,
            year: this.year,
            ccv: this.ccv,
            vendor: this.vendor
        }
        this.$root.$data.card.push(card);
        console.log('form was submitted', this.card)
        }
    
},

/*    */
/* props: {
  cardnumber: String,
  cardholder: String,
  month: String,
  year: String,
  ccv: String,
  vendor: Boolean
} */
}

</script>

