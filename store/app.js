export const actions = {
  async getDataPurchase({ commit }, slug) {
    const qs = require("qs");

    let filters = {
      filters: {
        purchase_type: {
          $eq: "purchase",
        },
      },
    };

    if (slug == "storage") {
      filters.filters.product_type = {
        $eq: "Комора",
      };
    }
    if (slug == "house") {
      filters.filters.product_type = {
        $eq: "Квартира",
      };
    }
    if (slug == "parking") {
      filters.filters.product_type = {
        $eq: "Parking",
      };
    }
    if (slug == "stead") {
      filters.filters.product_type = {
        $eq: "Земельна ділянка",
      };
    }

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}`
      );

      commit("UPDATE_PUECHASE_DATA", { response, slug });
    } catch (err) {
      console.log(err);
    }
  },

  async getDataCommerce({ commit }, slug) {
    const qs = require("qs");

    let filters = {
      filters: {
        purchase_type: {
          $eq: "commerce",
        },
      },
    };
    if (slug == "storage") {
      filters.filters.product_type = {
        $eq: "Комора",
      };
    }
    if (slug == "house") {
      filters.filters.product_type = {
        $eq: "Квартира",
      };
    }
    if (slug == "parking") {
      filters.filters.product_type = {
        $eq: "Parking",
      };
    }
    if (slug == "stead") {
      filters.filters.product_type = {
        $eq: "Земельна ділянка",
      };
    }
    if (slug == "commercial-premises") {
      filters.filters.product_type = {
        $eq: "Комерційні приміщення",
      };
    }

    const query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });
    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}`
      );
      // console.log("products", response);
      commit("UPDATE_COMMERCE_DATA", { response, slug });
    } catch (err) {
      console.log(err);
    }
  },
  async getDataCurrentPease({ commit }, id) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          id: {
            $eq: id,
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify url
      }
    );

    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}`
      );
      console.log("product", response);
      commit("UPDATE_CURRENT_PEASE_DATA", response.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  },
  async getSimilarProposal({ commit }, data) {
    const qs = require("qs");

    let filters = {
      filters: {
        purchase_type: {
          $eq: data.type,
        },
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
        `/api/products?populate=*&${query}`
      );

      commit("UPDATE_SIMILAR_PROPOSAL", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
};
export const mutations = {
  UPDATE_PUECHASE_DATA(state, { response, slug }) {
    state.PurchaseData = response.data.data;

    if (slug) {
      state.PurchaseCategories.forEach((el) => {
        el.selected = false;
        if (el.slug === slug) {
          el.selected = true;
        }
      });
    }
  },
  UPDATE_COMMERCE_DATA(state, { response, slug }) {
    state.CommerceData = response.data.data;
    if (slug) {
      state.CommerceCaregoryes.forEach((el) => {
        el.selected = false;
        if (el.slug === slug) {
          el.selected = true;
        }
      });
    }
  },
  UPDATE_CURRENT_PEASE_DATA(state, data) {
    state.CurrentPeaseData = data;
    state.ViewPageGetData = true;
    // console.log(data);
  },
  UPDATE_FILTERS(state, data) {
    let arrNew = [];
    data.forEach((el) => {
      if (el.attributes.adress) {
        arrNew.push(el.attributes.adress);
      }
    });
    let uniqueArray = arrNew.filter(function (item, pos) {
      return arrNew.indexOf(item) == pos;
    });
    state.Address = uniqueArray;
  },
  UPDATE_SIMILAR_PROPOSAL(state, data) {
    let currentPease = state.CurrentPeaseData;
    let newArr = [];
    data.forEach((el) => {
      if (el.id !== currentPease.id) {
        newArr.push(el);
      }
    });
    newArr.slice(0, 4);
    state.SimilarCardsData = newArr;
    // console.log(newArr);
  },
  CLEAR_SIMILAR_DATA(state) {
    state.SimilarCardsData = [];
    state.CurrentPeaseData = [];
    state.ViewPageGetData = false;
  },
};
export const state = () => ({
  PurchaseData: [],
  CommerceData: [],
  CurrentPeaseData: {},
  Address: [],
  CommerceCaregoryes: [
    {
      name: "Всі варіанти",
      slug: "all",
      selected: false,
    },
    {
      name: "Квартири",
      slug: "house",
      selected: false,
    },
    {
      name: "Комори",
      slug: "storage",
      selected: false,
    },
    {
      name: "Parking",
      slug: "parking",
      selected: false,
    },
    {
      name: "Земельні ділянки",
      slug: "stead",
      selected: false,
    },
    {
      name: "Комерційні приміщення",
      slug: "commercial-premises",
      selected: false,
    },
  ],
  PurchaseCategories: [
    {
      name: "Всі варіанти",
      slug: "all",
      selected: false,
    },
    {
      name: "Квартири",
      slug: "house",
      selected: false,
    },
    {
      name: "Комори",
      slug: "storage",
      selected: false,
    },
    {
      name: "Parking",
      slug: "parking",
      selected: false,
    },
    {
      name: "Земельні ділянки",
      slug: "stead",
      selected: false,
    },
  ],
  SimilarCardsData: [],
  ViewPageGetData: false,
});
