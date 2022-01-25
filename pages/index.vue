<template lang="pug">
.main-page
    Header.header
    HeroTop
    Hero
    AboutUs
    Request
    RequestPopup(v-if="showPopup")
    Footer
</template>
<script>
import Header from "~/components/header.vue";
import HeroTop from "~/components/heroTop.vue";

import Hero from "~/components/hero.vue";
import AboutUs from "~/components/aboutUs.vue";
import Request from "~/components/request.vue";
import RequestPopup from "~/components/requestPopup.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    HeroTop,
    Hero,
    AboutUs,
    Request,
    RequestPopup,
    Footer,
  },
  data() {
    return {
      showPopup: false,
    };
  },
};
</script>
<style lang="scss" scoped></style>
