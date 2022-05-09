<template lang="pug">
    .view(v-if="ViewPageGetData")
        Header
        .view__wrap
            MainInfo
            SimilarCards(v-if="ViewPageGetData")
        Footer
        PhoneBtn
        ViewPhotoPopup(v-if="showPhotoPopup" :photosData="photosData")
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
import { mapState } from "vuex";
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import MainInfo from "~/components/view/main.vue";
import SimilarCards from "~/components/view/similarCards.vue";
import ViewPhotoPopup from "~/components/viewPhotosPopup.vue";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData.attributes,
      ViewPageGetData: (state) => state.app.ViewPageGetData,
      SimilarCardsData: (state) => state.app.SimilarCardsData,
    }),
  },
  data() {
    return {
      showPhotoPopup: false,
      photosData: {},
    };
  },

  components: {
    Header,
    PhoneBtn,
    MainInfo,
    SimilarCards,
    ViewPhotoPopup,
    Footer,
  },
  mounted() {
    this.$store.commit("app/CLEAR_SIMILAR_DATA");
    let slug = this.$route.params.slug;
    this.$store.dispatch("app/getDataCurrentPease", slug);
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
}
.view {
  background-color: var(--light-bg);
  &__wrap {
    min-height: 90vh;
  }
}
</style>
