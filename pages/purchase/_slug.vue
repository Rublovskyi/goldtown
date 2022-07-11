<template lang="pug">
.buy(id="topOfPage")
    Header.header(:show="pageType")
    Houses.houses
    Footer
    PhoneBtn
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
    ScrollUpBtn(ref="scrollBtn")
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import Houses from "~/components/purchasePage/main.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";

export default {
  data() {
    return {
      pageType: "purchase",
      slug: "all",
      showPopup: false,
      successPopup: false,
    };
  },
  components: {
    Header,
    Footer,
    Houses,
    PhoneBtn,
    RequestPopup,
    SuccessPopup,
    ScrollUpBtn,
  },
  methods: {
    getData(data) {
      this.$store.dispatch("app/getDataPurchase", data);
    },
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
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
      title: this.$t(`purchase_slug_meta.${this.slug}.title`),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t(`purchase_slug_meta.${this.slug}.description`),
        },
        {
          hid: "title",
          name: "title",
          content: this.$t(`purchase_slug_meta.${this.slug}.title`),
        },
        {
          hid: "h1",
          name: "h1",
          content: this.$t(`purchase_slug_meta.${this.slug}.h1`),
        },
      ],
    };
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
