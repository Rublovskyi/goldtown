<template lang="pug">
.view(v-if="ViewPageGetData" id="topOfPage")
    Header
    .view__wrap
        MainInfo
        //- SimilarCards(v-if="ViewPageGetData")
        SimilarCards(v-if="ViewPageGetData" :CurrentPeaseData="CurrentPeaseData" :ViewPageGetData="ViewPageGetData" :SimilarCardsData="SimilarCardsData")
    Footer
    PhoneBtn
    ViewPhotoPopup(v-if="showPhotoPopup" :photosData="photosData")
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
    ScrollUpBtn(ref="scrollBtn")
</template>

<script>
import { mapState } from "vuex";
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import MainInfo from "~/components/view/main.vue";
import SimilarCards from "~/components/view/similarCards.vue";
import ViewPhotoPopup from "~/components/viewPhotosPopup.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData.attributes,
      ViewPageGetData: (state) => state.app.ViewPageGetData,
      SimilarCardsData: (state) => state.app.SimilarCardsData,
    }),
  },
  watch: {
    // ViewPageGetData() {
    //   this.$refs.scrollBtn.scrollViewBtn();
    // },
  },
  data() {
    return {
      showPhotoPopup: false,
      photosData: {},
      showPopup: false,
      successPopup: false,
    };
  },

  components: {
    Header,
    PhoneBtn,
    MainInfo,
    SimilarCards,
    ViewPhotoPopup,
    Footer,
    RequestPopup,
    SuccessPopup,
    ScrollUpBtn,
  },
  mounted() {
    this.$store.commit("app/CLEAR_SIMILAR_DATA");
    // let slug = this.$route.params.slug;

    let locale = this._i18n.locale;

    if (locale === "ru") {
      locale = "ru";
    } else {
      locale = "en";
    }

    let data = {
      slug: this.$route.params.id,
      locale: locale,
    };

    this.$store.dispatch("app/getDataCurrentPease", data);
  },
  methods: {
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
}
.view {
  background-color: var(--light-bg);
  position: relative;
  &__wrap {
    min-height: 90vh;
  }
}
</style>
