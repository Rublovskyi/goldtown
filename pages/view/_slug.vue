<template lang="pug">
    div 
        p New page 
        p {{CurrentPeaseData.attributes.title}}
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData,
    }),
  },
  mounted() {
    let id = window.location.href.split("/").pop();
    this.$store.dispatch("app/getDataCurrentPease", id);
  },
};
</script>
