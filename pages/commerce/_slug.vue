<template lang="pug">
    .buyBussiness
        Header.header(:show="pageType")
        Houses.houses
        Footer
        PhoneBtn

</template>
<script>
import Header from "~/components/header.vue";
import Houses from "~/components/commercePage/main.vue";
import Footer from "~/components/footer.vue";
import PhoneBtn from "~/components/phoneBtn.vue";

export default {
  data() {
    return {
      pageType: "commerce",
    };
  },
  components: {
    Header,
    Footer,
    Houses,
    PhoneBtn,
  },
  mounted() {
    let slug = this.$route.params.slug;
    this.$store.dispatch("app/getDataCommerce", slug);
  },
};
</script>
<style lang="scss" scoped>
.buyBussiness {
  background-color: var(--light-bg);
}
.houses {
  min-height: 90vh;
}
.header {
  position: absolute;
}
</style>
