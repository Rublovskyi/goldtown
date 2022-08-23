<template lang="pug">
.construction
    Header(:show="'construction'")
    Hero
    Services
    Projects
    Request(id="request")
    PhoneBtn
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
    Footer
</template>
<script>
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import Projects from "~/components/construction/projects";
import Request from "~/components/request.vue";
import Hero from "~/components/construction/hero.vue";
import Services from "~/components/construction/services.vue";

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
