<template lang="pug">
    .buyBussiness(id="topOfPage")
        Header.header(:show="pageType")
        Houses.houses
        //- blockMetaTexts(:type="slug" :information="info")
        Footer
        PhoneBtn
        RequestPopup(v-if="showPopup")
        SuccessPopup(v-if="successPopup")
        ScrollUpBtn(ref="scrollBtn")
</template>

<script>
import Header from "~/components/header.vue";
import Houses from "~/components/commercePage/main.vue";
import Footer from "~/components/footer.vue";
import PhoneBtn from "~/components/phoneBtn.vue";

import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";
import blockMetaTexts from "~/components/blockMetaTexts.vue";

export default {
  data() {
    return {
      pageType: "commerce",
      slug: "all",
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
    blockMetaTexts,
  },
  methods: {
    getData(data) {
      this.$store.dispatch("app/getDataCommerce", data);
    },
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.slug = this.$route.params.slug;

    // let testslug = this.slug;
    // let test = testslug.split("_");

    // console.log("testtest", test);

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
    this.$store.dispatch("app/getFilters");
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
