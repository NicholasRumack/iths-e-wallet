<template>
  <div class="home">
    <Top/>
     <!-- make these vbinds functional?? -->
    <Card
    v-bind="this.$root.$data.card"
    v-bind:cardnumber="this.$root.$data.cardnumber"
   
    />
    <button>ADD A NEW CARD</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
/* import CardStack from '@/components/CardStack.vue'
 */
export default {
  name: 'Home',
  components: {
    Top,
    Card
    /* CardStack */
  },
  computed: {
    activeCard: function(){
      return this.$root.$data.card
    }
  }
};
</script>
