<template>
   <form v-on:submit='onSubmit' id=addcard>
     <div class="cardWrapper">
        <p>{{cardnumber}}</p>
        <p>{{cardholder}}</p>
        <p>{{month}}{{year}}</p>
      </div>  
        <p>
          <label for="cardnumber">CARD NUMBER:</label>
          <input class="field" id="cardnumber" v-model="cardnumber">
        </p>
        <p>
          <label for="cardholder">CARDHOLDER NAME:</label>
          <input id="cardholder" v-model="cardholder" placeholder="FIRSTNAME LASTNAME">
        </p>
        <p>
          <label for="validthru">VALID THRU:</label>
          <input id="month" v-model="month">
          <input id="month" v-model="year">
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
          <input class="addButton" type="submit" value="ADD CARD">  
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

<style>
 .addButton{
  border-style: solid;
    border-color: black;
    background-color: white;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    padding: 15px 50px 15px 50px;
 }
 
/*  .field{
   border-style: solid;
   border-color: black;
   background-color: white;
   border-radius: 10px;
   border-width: 1px;
   
 } */

input, label {
  display: block;
}

input, textarea {
  width: 30%;
  padding: 20px 10px;
  border-radius: 10px;
  display: inline-block;
  align-items: center;
}
</style>