<template lang="pug">
    .buy
        Header.header(:show="pageType")
        Houses.houses
        Footer
        PhoneBtn
</template>

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
  methods: {
    getData(data) {
      this.$store.dispatch("app/getDataPurchase", data);
    },
  },
  mounted() {
    let locale = this._i18n.locale;

    let x;

    if (locale === "ru") {
      x = "ru";
    } else {
      x = "en";
    }

    let data = {
      slug: this.$route.params.slug,
      locale: x,
    };

    this.getData(data);
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
