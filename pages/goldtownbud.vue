<template lang="pug">
.construction(id="topOfPage")
    Header.header(:show="'construction'")
    Hero
    Services
    WhyUs
    //- Projects
    Request(id="request")
    PhoneBtn
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
    Footer
    ScrollUpBtn(ref="scrollBtn")
    //- Preview(v-if="!VideoShowed")
</template>
<script>
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import Projects from "~/components/construction/projects";
import WhyUs from "~/components/construction/whyUs";

import Request from "~/components/request.vue";
import Hero from "~/components/construction/hero.vue";
import Services from "~/components/construction/services.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";

export default {
  components: {
    Header,
    PhoneBtn,
    Footer,
    RequestPopup,
    SuccessPopup,
    Projects,
    Request,
    Hero,
    Services,
    ScrollUpBtn,
    WhyUs,
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
    this.$store.dispatch("app/getBlogData");
  },
};
</script>
<style lang="scss" scoped>
.construction {
  position: relative;
}
.header {
  position: fixed;
}
</style>
