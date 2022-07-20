export const actions = {
  async getDataPurchase({ commit }, { slug, locale }) {
    console.log(slug);
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
        $eq: "storage",
      };
    }
    if (slug == "house") {
      filters.filters.product_type = {
        $eq: "house",
      };
    }
    if (slug == "parking") {
      filters.filters.product_type = {
        $eq: "parking",
      };
    }
    if (slug == "stead") {
      filters.filters.product_type = {
        $eq: "stead",
      };
    }

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}&locale=${locale}`
      );

      console.log("im hereee", response);

      commit("UPDATE_PUECHASE_DATA", { response, slug });
      commit("UPDATE_FILTERS", response.data.data);
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
    if (slug == "storage") {
      filters.filters.product_type = {
        $eq: "storage",
      };
    }
    if (slug == "house") {
      filters.filters.product_type = {
        $eq: "house",
      };
    }
    if (slug == "parking") {
      filters.filters.product_type = {
        $eq: "parking",
      };
    }
    if (slug == "stead") {
      filters.filters.product_type = {
        $eq: "stead",
      };
    }
    if (slug == "commercial-premises") {
      filters.filters.product_type = {
        $eq: "commercial-premises",
      };
    }

    const query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });
    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}&locale=${locale}`
      );

      console.log("im hereee", response);

      commit("UPDATE_COMMERCE_DATA", { response, slug });
      commit("UPDATE_FILTERS", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getFilteredDataPurchase({ commit }, { slug, data, type, locale }) {
    const qs = require("qs");

    let filters = {
      filters: {
        purchase_type: {
          $eq: type,
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
        $eq: "Паркомісце",
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
    if (data.from !== "" && data.to === "") {
      filters.filters.price = {
        $gte: data.from,
      };
    }
    if (data.from === "" && data.to !== "") {
      filters.filters.price = {
        $lte: data.to,
      };
    }
    if (data.to !== "" && data.from !== "") {
      filters.filters.price = {
        $gte: data.from,
        $lte: data.to,
      };
    }

    if (data.address !== "") {
      filters.filters.adress = {
        $eq: data.address,
      };
    }
    if (data.rooms !== "") {
      filters.filters.number_of_rooms = {
        $eq: data.rooms,
      };
    }
    if (data.payback !== "") {
      filters.filters.payback = {
        $eq: data.payback,
      };
    }
    if (data.annual_income !== "") {
      filters.filters.annual_income = {
        $eq: data.annual_income,
      };
    }

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}&locale=${locale}`
      );

      if (type === "purchase") {
        commit("UPDATE_PUECHASE_DATA", { response, slug });
      } else {
        commit("UPDATE_COMMERCE_DATA", { response, slug });
      }
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
        `/api/products?populate=*&${query}&locale=${locale}`
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
        `/api/products?populate=*&${query}&locale=${data.locale}`
      );

      commit("UPDATE_SIMILAR_PROPOSAL", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async testAsync({ commit }, data) {
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
    const response = await this.$axios.get(
      `/api/products?populate=*&${query}&locale=${data.locale}`
    );

    console.log(response);
  },
};
export const mutations = {
  UPDATE_PUECHASE_DATA(state, { response, slug }) {
    state.PurchaseData = response.data.data.reverse();

    if (slug) {
      state.PurchaseCategories.forEach((el) => {
        el.selected = false;
        if (el.slug === slug) {
          el.selected = true;
        }
      });
    }
    state.PurchaseCardsData = state.PurchaseData.slice(0, 6);
  },
  UPDATE_COMMERCE_DATA(state, { response, slug }) {
    state.CommerceData = response.data.data.reverse();
    if (slug) {
      state.CommerceCaregoryes.forEach((el) => {
        el.selected = false;
        if (el.slug === slug) {
          el.selected = true;
        }
      });
    }
    state.CommerceCardsData = state.CommerceData.slice(0, 6);
  },
  UPDATE_CURRENT_PEASE_DATA(state, data) {
    state.CurrentPeaseData = data;
    state.ViewPageGetData = true;
  },
  UPDATE_FILTERS(state, data) {
    let arrNewAddress = [];
    let arrNewRooms = [];
    let arrNewPayback = [];
    let arrNewIncome = [];
    data.forEach((el) => {
      // if (el.attributes.adress) {
      //   arrNewAddress.push(el.attributes.adress);
      // }
      // if (el.attributes.number_of_rooms) {
      //   arrNewRooms.push(el.attributes.number_of_rooms);
      // }
      // if (el.attributes.payback) {
      //   arrNewPayback.push(el.attributes.payback);
      // }
      // if (el.attributes.annual_income) {
      //   arrNewIncome.push(el.attributes.annual_income);
      // }

      el.attributes.adress ? arrNewAddress.push(el.attributes.adress) : false;
      el.attributes.number_of_rooms
        ? arrNewRooms.push(el.attributes.number_of_rooms)
        : false;
      el.attributes.payback ? arrNewPayback.push(el.attributes.payback) : false;
      el.attributes.annual_income
        ? arrNewIncome.push(el.attributes.annual_income)
        : false;
    });
    let uniqueArrayAddress = arrNewAddress.filter(function (item, pos) {
      return arrNewAddress.indexOf(item) == pos;
    });
    let uniqueArrayRooms = arrNewRooms.filter(function (item, pos) {
      return arrNewRooms.indexOf(item) == pos;
    });
    let uniqueArrayPayback = arrNewPayback.filter(function (item, pos) {
      return arrNewPayback.indexOf(item) == pos;
    });
    let uniqueArrayIncome = arrNewIncome.filter(function (item, pos) {
      return arrNewIncome.indexOf(item) == pos;
    });

    console.log("uniqueArrayRooms", uniqueArrayRooms);

    state.Address = uniqueArrayAddress;
    state.NumOfRooms = uniqueArrayRooms.sort();
    state.Payback = uniqueArrayPayback.sort();
    state.AnnualIncome = uniqueArrayIncome.sort();
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
};
export const state = () => ({
  lang: "en",
  PurchaseData: [],
  CommerceData: [],
  CurrentPeaseData: {},
  Address: [],
  NumOfRooms: [],
  Payback: [],
  AnnualIncome: [],
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
      slug: "commercial-premises",
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
  ],
  SimilarCardsData: [],
  ViewPageGetData: false,
  PurchaseCardsData: [],
  CommerceCardsData: [],
});
