<template lang="pug">
.about(id="topOfPage")
    Header.header( :show="'about_us'")
    OurTeam
    ContactsBlock
    RequestPopup(v-if="showPopup")
    Footer
    SuccessPopup(v-if="successPopup")
    PhoneBtn
    ScrollUpBtn(ref="scrollBtn")
</template>
<script>
import Header from "~/components/header.vue";
import OurTeam from "~/components/ourTeam.vue";
import RequestPopup from "~/components/requestPopup.vue";
import Footer from "~/components/footer.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import SuccessPopup from "~/components/successPopup.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";
import ContactsBlock from "~/components/contactsBlock.vue";

export default {
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
  components: {
    Header,
    RequestPopup,
    Footer,
    PhoneBtn,
    SuccessPopup,
    ScrollUpBtn,
    ContactsBlock,
    OurTeam,
  },
};
</script>
