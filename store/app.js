export const actions = {
  async getDataPurchase({ commit }, { slug, locale }) {
    const qs = require("qs");

    let filters = {
      filters: {
        // purchase_type: {
        //   $eq: "purchase",
        // },
      },
    };

    if (slug !== "all") {
      filters.filters.product_type = {
        $eq: slug,
      };
    }

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    try {
      const response = await this.$axios.get(
        `/api/products?populate[0]=Filters&populate[1]=Filters.City&populate[2]=Filters.Residential_quarter&populate[3]=Filters.Type_of_house&populate[4]=Filters.District&populate[5]=image&${query}&locale=${locale}&pagination[limit]=-1`
      );

      console.log("im hereee", response);

      commit("UPDATE_PUECHASE_DATA", { response, slug });
      // commit("UPDATE_FILTERS", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getDataCommerce({ commit }, { slug, locale }) {
    const qs = require("qs");

    let filters = {
      filters: {
        purchase_type: {
          $eq: "commerce",
        },
      },
    };
    if (slug !== "all") {
      filters.filters.product_type = {
        $eq: slug,
      };
    }

    const query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });
    try {
      const response = await this.$axios.get(
        `/api/products?populate[0]=Filters&populate[1]=Filters.City&populate[2]=Filters.Residential_quarter&populate[3]=Filters.Type_of_house&populate[4]=Filters.District&populate[5]=image&${query}&locale=${locale}&pagination[limit]=-1`
      );

      // console.log("im hereee", response);

      commit("UPDATE_COMMERCE_DATA", { response, slug });
      // commit("UPDATE_FILTERS", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },

  async getDataCurrentPease({ commit }, { slug, locale }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          alt_slug: {
            $eq: slug,
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify url
      }
    );

    try {
      const response = await this.$axios.get(
        `/api/products?populate[0]=Filters&populate[1]=Filters.City&populate[2]=Filters.Residential_quarter&populate[3]=Filters.Type_of_house&populate[4]=Filters.District&populate[5]=image&${query}&locale=${locale}`
      );

      console.log("response", response);
      commit("UPDATE_CURRENT_PEASE_DATA", response.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  },
  async getSimilarProposal({ commit }, data) {
    const qs = require("qs");

    let filters = {
      filters: {
        // purchase_type: {
        //   $eq: data.type,
        // },
        product_type: {
          $eq: data.filter,
        },
      },
    };

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    try {
      const response = await this.$axios.get(
        `/api/products?populate[0]=Filters&populate[1]=Filters.City&populate[2]=Filters.Residential_quarter&populate[3]=Filters.Type_of_house&populate[4]=Filters.District&populate[5]=image&${query}&locale=${data.locale}&pagination[limit]=-1`
      );

      commit("UPDATE_SIMILAR_PROPOSAL", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getFilteredProducts({ commit }, { slug, locale, type, purchase }) {
    const qs = require("qs");

    // getFilteredProducts;

    let filters = {
      filters: {
        // purchase_type: {
        //   $eq: purchase,
        // },
        Filters: {},
        // product_type: {
        //   $eq: type,
        // },
      },
    };

    if (type !== "all") {
      filters.filters.product_type = {
        $eq: type,
      };
    }

    let x = slug.split("&");

    x.forEach((el) => {
      if (el.length !== 0) {
        let y = el.split("=");

        let name = y[0];
        let value = y[1];

        console.log("name value", name, value);

        if (
          name === "city" ||
          name === "residential_quarter" ||
          name === "type_of_house"
        ) {
          filters.filters.Filters[name] = {
            Slug: {
              $eq: value,
            },
          };
        } else if (name === "price_from") {
          filters.filters.price = {
            $gte: value,
          };
        } else if (name === "price_to") {
          filters.filters.price = {
            $lte: value,
          };
        } else if (name === "pool") {
          filters.filters.pool = {
            $eq: true,
          };
        } else if (name === "instalment") {
          filters.filters.instalment = {
            $notNull: true,
          };
        } else {
          filters.filters[name] = {
            $eq: value,
          };
        }
      }
    });

    console.log("djhdhd", filters);

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    console.log("query", query);

    try {
      const response = await this.$axios.get(
        `/api/products?populate[0]=Filters&populate[1]=Filters.City&populate[2]=Filters.Residential_quarter&populate[3]=Filters.Type_of_house&populate[4]=Filters.District&populate[5]=image&${query}&locale=${locale}&pagination[limit]=-1`
      );

      // console.log("im hereee tests", response);

      if (purchase === "purchase") {
        commit("UPDATE_PUECHASE_DATA_TEST", { response, type });
      } else {
        commit("UPDATE_COMMERSE_DATA_TEST", { response, type });
      }

      // commit("UPDATE_FILTERS", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getFilters({ commit }) {
    try {
      const residential_quarters = await this.$axios.get(
        `/api/residential-quarters?populate=*&pagination[limit]=-1`
      );
      const cities = await this.$axios.get(
        `/api/cities?populate=*&pagination[limit]=-1`
      );
      const type_of_houses = await this.$axios.get(
        `/api/type-of-houses?populate=*&pagination[limit]=-1`
      );

      console.log(
        "im hereee in filters",
        residential_quarters
        // cities,
        // type_of_houses
      );

      let residential = residential_quarters.data.data;
      let city = cities.data.data;
      let type_of_house = type_of_houses.data.data;

      // commit("UPDATE_PUECHASE_DATA_TEST", { response, type });
      commit("UPDATE_FILTERS", { residential, city, type_of_house });
    } catch (err) {
      console.log(err);
    }
  },
  async getBlogData({ commit }) {
    try {
      const responce = await this.$axios.get(
        `/api/construction?populate[0]=Blocks&populate[1]=Blocks.Image&pagination[limit]=-1`
      );

      // console.log("responce blog", responce.data.data.attributes.Blocks);

      commit("UPDATE_BLOG_DATA", responce.data.data.attributes.Blocks);
    } catch (err) {
      console.log(err);
    }
  },
};
export const mutations = {
  UPDATE_PUECHASE_DATA(state, { response, slug }) {
    state.PurchaseData = response.data.data.reverse();
    state.PurchaseCategories.forEach((el) => {
      el.selected = false;
      if (el.slug === slug) {
        el.selected = true;
      } else if (el.slug.length === 0 && !slug) {
        el.selected = true;
      }
    });
    state.PurchaseCardsData = state.PurchaseData.slice(0, 6);
  },
  UPDATE_PUECHASE_DATA_TEST(state, { response, type }) {
    state.PurchaseData = response.data.data.reverse();
    state.PurchaseCategories.forEach((el) => {
      el.selected = false;
      if (el.slug === type) {
        el.selected = true;
      } else if (el.slug.length === 0 && !type) {
        el.selected = true;
      }
    });
    state.PurchaseCardsData = state.PurchaseData.slice(0, 6);
  },
  UPDATE_COMMERSE_DATA_TEST(state, { response, type }) {
    state.CommerceData = response.data.data.reverse();
    state.CommerceCaregoryes.forEach((el) => {
      el.selected = false;
      if (el.slug === type) {
        el.selected = true;
      } else if (el.slug.length === 0 && !type) {
        el.selected = true;
      }
    });
    state.CommerceCardsData = state.CommerceData.slice(0, 6);
  },
  UPDATE_COMMERCE_DATA(state, { response, slug }) {
    state.CommerceData = response.data.data.reverse();
    state.CommerceCaregoryes.forEach((el) => {
      el.selected = false;
      if (el.slug === slug) {
        el.selected = true;
      } else if (el.slug.length === 0 && !slug) {
        el.selected = true;
      }
    });

    state.CommerceCardsData = state.CommerceData.slice(0, 6);
  },
  UPDATE_CURRENT_PEASE_DATA(state, data) {
    state.CurrentPeaseData = data;
    state.ViewPageGetData = true;
  },
  UPDATE_FILTERS(state, { residential, city, type_of_house }) {
    state.Filters = [
      {
        name: "residential_quarter",
        arr: residential,
        selected: "",
      },
      {
        name: "city",
        arr: city,
        selected: "",
      },
      {
        name: "type_of_house",
        arr: type_of_house,
        selected: "",
      },
      {
        name: "number_of_rooms",
        selected: "",
        arr: [
          {
            attributes: {
              Name_rus: "1",
              Name_ukr: "1",
              Slug: "1",
            },
          },
          {
            attributes: {
              Name_rus: "2",
              Name_ukr: "2",
              Slug: "2",
            },
          },
          {
            attributes: {
              Name_rus: "3",
              Name_ukr: "3",
              Slug: "3",
            },
          },
          {
            attributes: {
              Name_rus: "4",
              Name_ukr: "4",
              Slug: "4",
            },
          },
          {
            attributes: {
              Name_rus: "5",
              Name_ukr: "5",
              Slug: "5",
            },
          },
        ],
      },
    ];

    console.log("filter selec ", state.Filters);
  },
  UPDATE_SIMILAR_PROPOSAL(state, data) {
    let currentPease = state.CurrentPeaseData;
    let newArr = [];
    data.forEach((el) => {
      if (el.id !== currentPease.id) {
        newArr.push(el);
      }
    });
    let slisedArr = newArr.slice(0, 4);
    state.SimilarCardsData = slisedArr;
  },
  CLEAR_SIMILAR_DATA(state) {
    state.SimilarCardsData = [];
    state.CurrentPeaseData = [];
    state.ViewPageGetData = false;
  },
  PAGINATION_PUECHASE(state, page) {
    let h = page * 6;
    let y = h + 6;
    state.PurchaseCardsData = state.PurchaseData.slice(h, y);
  },
  PAGINATION_COMMERSE(state, page) {
    let h = page * 6;
    let y = h + 6;
    state.CommerceCardsData = state.CommerceData.slice(h, y);
  },
  UPDATE_BLOG_DATA(state, data) {
    state.Blog = data;
  },
};
export const state = () => ({
  lang: "en",
  PurchaseData: [],
  CommerceData: [],
  CurrentPeaseData: {},
  CommerceCaregoryes: [
    {
      nameUa: "Всі варіанти",
      nameRu: "Все варианты",
      slug: "all",
      selected: false,
    },
    {
      nameUa: "Квартири",
      nameRu: "Квартиры",
      slug: "house",
      selected: false,
    },
    {
      nameUa: "Комори",
      nameRu: "Кладовки",
      slug: "storage",
      selected: false,
    },
    {
      nameUa: "Паркомісце",
      nameRu: "Пакоместо",
      slug: "parking",
      selected: false,
    },
    {
      nameUa: "Земельні ділянки",
      nameRu: "Земельные участки",
      slug: "stead",
      selected: false,
    },
    {
      nameUa: "Комерційні приміщення",
      nameRu: "Комерческие помещения",
      slug: "commercial_premises",
      selected: false,
    },
  ],
  PurchaseCategories: [
    {
      nameUa: "Все варіанти",
      nameRu: "Все варианты",
      slug: "all",
      selected: false,
    },
    {
      nameUa: "Квартири",
      nameRu: "Квартиры",
      slug: "house",
      selected: false,
    },
    {
      nameUa: "Комори",
      nameRu: "Кладовки",
      slug: "storage",
      selected: false,
    },
    {
      nameUa: "Паркомісце",
      nameRu: "Паркоместо",
      slug: "parking",
      selected: false,
    },
    {
      nameUa: "Земельні ділянки",
      nameRu: "Земельные участки",
      slug: "stead",
      selected: false,
    },
    {
      nameUa: "Комерційні приміщення",
      nameRu: "Комерческие помещения",
      slug: "commercial_premises",
      selected: false,
    },
  ],
  SimilarCardsData: [],
  ViewPageGetData: false,
  PurchaseCardsData: [],
  CommerceCardsData: [],
  Filters: [],
  Blog: [],
});
