<template lang="pug">
.main-page
    Header.header(ref="header")
    Hero
    AboutUs(id="about")
    Sample
    Request(id="request")
    RequestPopup(v-if="showPopup")
    Footer
    SuccessPopup(v-if="successPopup")
    PhoneBtn
</template>
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=UA-228249365-1"
></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-228249365-1");
</script>
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
  },
  data() {
    return {
      showPopup: false,
      successPopup: false,
    };
  },
  mounted() {
    this.$refs.header.scrollViewHeader();
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
