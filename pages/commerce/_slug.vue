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
      slug: "all",
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
    this.slug = this.$route.params.slug;
    let locale = this._i18n.locale;

    if (locale === "ru") {
      locale = "ru";
    } else {
      locale = "en";
    }

    let data = {
      slug: this.slug,
      locale: locale,
    };

    this.getData(data);
  },
  head() {
    return {
      title: this.$t(`commerce_slug_meta.${this.slug}.title`),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t(`commerce_slug_meta.${this.slug}.description`),
        },
        {
          hid: "title",
          name: "title",
          content: this.$t(`commerce_slug_meta.${this.slug}.title`),
        },
        {
          hid: "h1",
          name: "h1",
          content: this.$t(`commerce_slug_meta.${this.slug}.h1`),
        },
      ],
    };
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
