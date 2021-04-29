<template>
   <form @submit.prevent="addCard">
        <p>
          <label for="cardnumber">CARD NUMBER:</label>
          <input id="cardnumber" maxlength="16" v-model="$root.$data.defaultCard.cardnumber" placeholder="XXXX XXXX XXXX XXXX XXXX">
        </p>
        <p>
          <label for="cardholder">CARDHOLDER NAME:</label>
          <input id="cardholder" v-model="$root.$data.defaultCard.cardholder" placeholder="FIRSTNAME LASTNAME">
        </p>
        <p>
          <label class="valid" for="validthru">VALID THRU:</label>
          <input class="month" maxlength="2" id="month" placeholder="MM" v-model="$root.$data.defaultCard.month">
          <input class="year" maxlength="2" id="month" placeholder="YY" v-model="$root.$data.defaultCard.year">
        </p>
        <p>
          <label for="ccv">CCV:</label>
          <input id="ccv" maxlength="3" v-model="ccv">
        </p>
        <p>
          <label for="vendor">VENDOR:</label>
          <select id="vendor" v-model="$root.$data.defaultCard.vendor" v-on:change="style($event, )">
            <option value="bitCoin">BITCOIN INC</option>
            <option value="ninjaBank">NINJA BANK</option>
            <option value="blockChaininc">BLOCK CHAIN INC</option>
            <option value="evilCorp">EVIL CORP</option>
          </select>
        </p>
      
       <input type="submit" value="ADD CARD" class="addButton">
           
      </form>
      
</template>

<script>


export default {


methods: {
  /*This need to turn into a v-on function, const card should be moved into the push*/
    addCard () {
        /* const card =  */
        this.$root.$data.autoId++;
        this.$root.$data.defaultCard.id = this.$root.$data.autoID;
        this.$root.$data.cards.push(this.$root.$data.defaultCard);

        let defaultCard = {
            id:"",
            cardnumber: "",
            cardholder: "",
            month: "",
            year: "",
            vendor: "defaultCard",}
        this.$root.$data.defaultCard = defaultCard;    
        this.$router.push('/')
        console.log('form was submitted', this.cards)
        }
    
},

    numberError() {
      let number = this.$root.$data.defaultCard.cardnumber

      if (number.length > 16) {
        return this.formError = "form-error";
      }
      else {
        return this.formError = "";
      }
    }

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

input, textarea, select {
  width: 400px;
  padding: 20px 10px;
  border-radius: 10px;
  border-width: 1px;
  display: inline-block;
  align-content: center;
}

.month {
  width: 185px;
  margin-right: 5px;
}

.year {
  width: 185px;
  margin-left: 5px;
}
</style>