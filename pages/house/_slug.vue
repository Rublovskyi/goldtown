<template lang="pug">
    div 
        p New page 
        p {{currentHouse.id}}
        p(v-if="currentHouse") {{currentHouse.title}}
</template>
<script>
export default {
  data() {
    return {
      houses: require("~/assets/data.json"),
      currentHouse: {},
    };
  },
  mounted() {
    let url = window.location.href.split("/").pop();

    this.houses.forEach((house) => {
      if (house.id == url) {
        this.currentHouse = house;
        // console.log(this.currentHouse);
      }
    });
  },
};
</script>
