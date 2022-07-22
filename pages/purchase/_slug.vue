<template lang="pug">
.buy(id="topOfPage")
    Header.header(:show="pageType")
    Houses.houses
    InfoBlock(v-if="slug === 'all' "  :info="infoBlockData")
    Footer
    PhoneBtn
    RequestPopup(v-if="showPopup")
    SuccessPopup(v-if="successPopup")
    ScrollUpBtn(ref="scrollBtn")
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import Houses from "~/components/purchasePage/main.vue";
import PhoneBtn from "~/components/phoneBtn.vue";
import RequestPopup from "~/components/requestPopup.vue";
import SuccessPopup from "~/components/successPopup.vue";
import ScrollUpBtn from "~/components/scrollUpBtn.vue";
import InfoBlock from "~/components/infoBlock.vue";

export default {
  data() {
    return {
      pageType: "purchase",
      slug: "all",
      showPopup: false,
      successPopup: false,
      infoBlockData: {
        title: "Продаж нерухомості у Києві та передмісті на первинному ринку",
        text: "Агентство нерухомості Goldtown пропонує вашій увазі актуальні пропозиції щодо продажу та оренди нерухомого майна в передмісті Києва та в Київській області - Софіївська, Петропавлівська Борщагівки, Святопетрівське, Новосілки, Ходосівка та ін. Також ви можете запропонувати власну нерухомість для продажу або здачі в оренду.",

        about: [
          {
            title: "Яку нерухомість можна купити",
            listtitle:
              "До вашої уваги найсвіжіші та перевірені об’яви від забудовників та власників. У нас на сайті ви можете знайти та купити:",
            list: [
              "Квартиру",
              "Будинок",
              "Таунхаус",
              "Дуплекс",
              "Земельну ділянку",
              "Комору",
              "Паркомісце",
              "Комерційний об’єкт та ін.",
            ],
            text: "На цій сторінці представлена первинна нерухомість - житлові та комерційні площі в новобудовах, в об’єктах, що будуються, та в таких, що вже введені в експлуатацію.",
          },
          {
            title: "Як знайти нерухомість в новобудовах Києва та передмістя",
            subtitle:
              "Ми цінуємо ваш час, тому для вашої зручності зробили категорії на сайті відповідно до типу майна, яке вас цікавить. Також у нас є зручний фільтр, який значно пришвидшить пошук на первинному ринку: ви задаєте максимальну та мінімальну ціни, кількість квартир (якщо цікавить житло), і відсортовуєте пропозиції.",
            listtitle: "Кожна з об’яв має детальний опис:",
            list: [
              "Розташування, точна адреса (назва населеного пункту, ЖК та ін.)",
              "Ціна",
              "Площа в кв. м.",
              "Коротка інформація про об’єкт.",
            ],
            text: "На цій сторінці представлена первинна нерухомість - житлові та комерційні площі в новобудовах, в об’єктах, що будуються, та в таких, що вже введені в експлуатацію.",
          },
        ],
      },
    };
  },
  components: {
    Header,
    Footer,
    Houses,
    PhoneBtn,
    RequestPopup,
    SuccessPopup,
    ScrollUpBtn,
    InfoBlock,
  },
  methods: {
    getData(data) {
      this.$store.dispatch("app/getDataPurchase", data);
    },
    goto() {
      document.getElementById("topOfPage").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.slug = this.$route.params.slug;
    let locale = this._i18n.locale;

    if (locale === "ru") {
      locale = "ru";
    } else {
      locale = "en";
    }

    let data = {
      slug: this.slug,
      locale: locale,
    };

    this.getData(data);
  },
  head() {
    return {
      title: this.$t(`purchase_slug_meta.${this.slug}.title`),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t(`purchase_slug_meta.${this.slug}.description`),
        },
        {
          hid: "title",
          name: "title",
          content: this.$t(`purchase_slug_meta.${this.slug}.title`),
        },
        {
          hid: "h1",
          name: "h1",
          content: this.$t(`purchase_slug_meta.${this.slug}.h1`),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
}
.houses {
  min-height: 90vh;
}
</style>
