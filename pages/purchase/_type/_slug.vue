<template lang="pug">
.buy(id="topOfPage")
    Header.header(:show="pageType")
    Houses.houses
    BlockTest(v-if="slug" :type="slug" :information="info")
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
import BlockTest from "~/components/blockTest.vue";

export default {
  data() {
    return {
      pageType: "purchase",
      slug: "",
      type: "",
      showPopup: false,
      successPopup: false,
      info: require("~/assets/info.json"),
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
    BlockTest,
  },
  methods: {
    getData({ slug, locale, type, purchase }) {
      this.$store.dispatch("app/getDataPurchaseTest", {
        slug,
        locale,
        type,
        purchase,
      });
    },
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.slug = this.$route.params.slug;
    let slug = this.$route.params.slug;

    // let slug = this.$route.params.slug;
    this.type = this.$route.params.type;
    let type = this.$route.params.type;
    let locale = this._i18n.locale;
    let purchase = this.pageType;

    if (locale === "ru") {
      locale = "ru";
    } else {
      locale = "en";
    }

    this.getData({ slug, locale, type, purchase });
  },
  head() {
    return {
      title: this.$t(`purchase_slug_meta.${this.type}.title`),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t(`purchase_slug_meta.${this.type}.description`),
        },
        {
          hid: "title",
          name: "title",
          content: this.$t(`purchase_slug_meta.${this.type}.title`),
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
