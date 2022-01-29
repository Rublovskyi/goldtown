<template lang="pug">
    .buy
        Header.header
        Houses
        Footer
</template>
<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import Houses from "~/components/purchasePage/main.vue";

export default {
  components: {
    Header,
    Footer,
    Houses,
  },
  mounted() {
    this.$store.dispatch("app/getDataPurchase");
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
}
</style>
