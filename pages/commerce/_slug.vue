<template lang="pug">
    .buyBussiness
        Header.header
        Houses
        Footer

</template>
<script>
import Header from "~/components/header.vue";
import Houses from "~/components/commercePage/main.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    Footer,
    Houses,
  },
  mounted() {
    let slug = this.$route.params.slug;
    this.$store.dispatch("app/getDataCommerce", slug);
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
}
</style>
