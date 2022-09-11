<template lang="pug">
.blog(id="topOfPage")
    Header(:show="'blog'")
    Blog
    PhoneBtn
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
    Footer
    ScrollUpBtn(ref="scrollBtn")
</template>
<script>
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import Blog from "~/components/blog.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";

export default {
  components: {
    Header,
    PhoneBtn,
    Footer,
    RequestPopup,
    SuccessPopup,
    Blog,
    ScrollUpBtn,
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
    let locale = this._i18n.locale;

    if (locale === "ru") {
      locale = "ru";
    } else {
      locale = "en";
    }
    this.$store.dispatch("app/getBlogData", locale);
  },
};
</script>
