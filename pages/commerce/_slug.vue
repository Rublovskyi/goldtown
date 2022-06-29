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
  methods: {
    getData(data) {
      this.$store.dispatch("app/getDataCommerce", data);
    },
  },
  mounted() {
    let locale = this._i18n.locale;

    if (locale === "ru") {
      locale = "ru";
    } else {
      locale = "en";
    }

    let data = {
      slug: this.$route.params.slug,
      locale: locale,
    };

    this.getData(data);
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
  position: relative;
}
</style>
