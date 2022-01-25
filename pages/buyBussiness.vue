<template lang="pug">
    .buyBussiness
        Header
        .test
            .t 
                h2 выбор категории
                p Комори
                p Parking
                p Квартири
                p Комерция
                button.filter Filter

            Houses
        //- Footer

</template>
<script>
import Header from "~/components/header.vue";
import Houses from "../components/buyPage/buy.vue";

import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    Footer,
    Houses,
  },
};
</script>
<style lang="scss" scoped>
.test {
  display: grid;
  grid-template-columns: 30% 70%;
}
.t {
  padding-top: 130px;
  border-right: 1px solid black;
  padding-left: 20px;
}
.filter {
  width: 100px;
  height: 45px;
  background-color: red;
  display: block;
  margin-top: 40px;
}
</style>
