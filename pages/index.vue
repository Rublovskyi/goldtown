<template lang="pug">
.main-page
    Header.header
    Hero
    AboutUs(id="about")
    Request(id="request")
    RequestPopup(v-if="showPopup")
    Footer
    SuccessPopup(v-if="successPopup")
    //- PhoneBtn
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
  },
  data() {
    return {
      showPopup: false,
      successPopup: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.main-page {
  position: relative;
}
</style>
