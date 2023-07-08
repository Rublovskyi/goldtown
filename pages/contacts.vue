<template lang="pug">
.contacts 
    Header(:show="'contacts'")
    ContactsBlock
    Footer
    PhoneBtn
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
</template>
<script>
import Header from "~/components/header.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import Footer from "~/components/footer.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import ContactsBlock from "~/components/contactsBlock.vue";

export default {
  data() {
    return {
      showPopup: false,
      successPopup: false,
    };
  },
  components: {
    Header,
    PhoneBtn,
    Footer,
    RequestPopup,
    SuccessPopup,
    ContactsBlock,
  },
  methods: {
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>


