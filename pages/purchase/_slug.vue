<template lang="pug">
    .buy
        Header.header(:show="pageType")
        Houses.houses
        Footer
        PhoneBtn
</template>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-228249365-1">
</script>
<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'UA-228249365-1');
</script>
<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import Houses from "~/components/purchasePage/main.vue";
import PhoneBtn from "~/components/phoneBtn.vue";

export default {
  data() {
    return {
      pageType: "purchase",
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
    this.$store.dispatch("app/getDataPurchase", slug);
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
}
.houses {
  min-height: 90vh;
}
</style>
