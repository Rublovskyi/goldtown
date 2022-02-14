<template lang="pug">
    .view(v-if="CurrentPeaseData")
        Header
        MainInfo
        SimilarCards
        Footer
        PhoneBtn
</template>
<script>
import { mapState } from "vuex";
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import MainInfo from "~/components/view/main.vue";
import SimilarCards from "~/components/view/similarCards.vue";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData,
    }),
  },
  components: {
    Header,
    PhoneBtn,
    MainInfo,
    SimilarCards,
    Footer,
  },
  mounted() {
    let slug = this.$route.params.slug;
    this.$store.dispatch("app/getDataCurrentPease", slug);
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
}
.view {
  min-height: 87vh;
  background-color: var(--light-bg);
}
</style>
