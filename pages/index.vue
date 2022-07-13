<template lang="pug">
.main-page(id="topOfPage")
    Header.header(ref="header")
    Hero
    AboutUs(id="about")
    Sample
    Request(id="request")
    //- SimilarCards(:changeBg="true")
    //- SimilarCards(v-if="ViewPageGetData" :changeBg="true" :CurrentPeaseData="CurrentPeaseData" :ViewPageGetData="ViewPageGetData" :SimilarCardsData="SimilarCardsData")
    RequestPopup(v-if="showPopup")
    Footer
    SuccessPopup(v-if="successPopup")
    PhoneBtn
    ScrollUpBtn(ref="scrollBtn")
</template>
<script>
import Header from "~/components/header.vue";

import Hero from "~/components/hero.vue";
import AboutUs from "~/components/aboutUs.vue";
import Request from "~/components/request.vue";
import RequestPopup from "~/components/requestPopup.vue";
import Footer from "~/components/footer.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import SuccessPopup from "~/components/successPopup.vue";
import Sample from "~/components/sample.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";
import SimilarCards from "~/components/view/similarCards.vue";

import { mapState } from "vuex";

export default {
  components: {
    Header,
    Hero,
    AboutUs,
    Request,
    RequestPopup,
    Footer,
    PhoneBtn,
    SuccessPopup,
    Sample,
    ScrollUpBtn,
    SimilarCards,
  },
  data() {
    return {
      showPopup: false,
      successPopup: false,
    };
  },
  methods: {
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.$refs.header.scrollViewHeader();
  },
  head() {
    return {
      title: this.$t(`index_meta.title`),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t(`index_meta.description`),
        },
        {
          hid: "title",
          name: "title",
          content: this.$t(`index_meta.title`),
        },
      ],
    };
  },
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData.attributes,
      ViewPageGetData: (state) => state.app.ViewPageGetData,
      SimilarCardsData: (state) => state.app.SimilarCardsData,
    }),
  },
};
</script>
<style lang="scss" scoped>
.main-page {
  position: relative;
}
.header {
  position: fixed;
}
</style>
