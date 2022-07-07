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
  head: {
    title:
      "Продаж нерухомості у Києві та передмісті (Первинний ринок) - GOLDTOWN",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Нерухомість від забудовників. Купуй квартиру, складське приміщення, паркомісце для себе або бізнесу. Продаж нерухомості без посередників",
      },
    ],
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
