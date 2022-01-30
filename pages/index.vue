<template lang="pug">
.main-page
    Header.header
    HeroTop
    Hero
    AboutUs(id="about")
    Request(id="request")
    RequestPopup(v-if="showPopup")
    Footer
    //- PhoneBtn
</template>
<script>
import Header from "~/components/header.vue";
import HeroTop from "~/components/heroTop.vue";

import Hero from "~/components/hero.vue";
import AboutUs from "~/components/aboutUs.vue";
import Request from "~/components/request.vue";
import RequestPopup from "~/components/requestPopup.vue";
import Footer from "~/components/footer.vue";
import PhoneBtn from "~/components/phoneBtn.vue";

export default {
  components: {
    Header,
    HeroTop,
    Hero,
    AboutUs,
    Request,
    RequestPopup,
    Footer,
    PhoneBtn,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
      console.log("scrollTo");
    },
  },
};
</script>
<style lang="scss" scoped>
.main-page {
  position: relative;
}
</style>
