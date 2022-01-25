<template lang="pug">
    .buy
        .buy__cards(@click="")
            Card(v-for="(card, i) in houses" :key="i" :card="card")
</template>
<script>
import Card from "./card.vue";
export default {
  data() {
    return {
      houses: require("~/assets/data.json"),
    };
  },
  components: {
    Card,
  },
};
</script>
<style lang="scss" scoped>
.buy {
  padding: 9.944vw 6.944vw;
  // background-image: linear-gradient(to bottom, #fff, rgba(194, 146, 90, 0.5));
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 27.778vw);
    gap: 2.083vw;
  }
}
</style>
