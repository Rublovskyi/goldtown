<template lang="pug">
.blog
    Header(:show="'blog'")
    Blog
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
import Blog from "~/components/blog.vue";
export default {
  components: {
    Header,
    PhoneBtn,
    Footer,
    RequestPopup,
    SuccessPopup,
    Blog,
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
