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

    console.log(data);

    let filters = {
      filters: {
        purchase_type: {
          $eq: type,
        },
      },
    };

    if (slug !== "all") {
      filters.filters.product_type = {
        $eq: slug,
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

    for (let key in data) {
      if (key !== "to" && key !== "from") {
        filters.filters[`${key}`] = {
          $eq: data[key],
        };
      }
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
    state.Filters = [];

    let arrNewRooms = {
      name: "number_of_rooms",
      arr: [],
    };
    let arrNewPayback = {
      name: "payback",
      arr: [],
    };
    let arrNewIncome = {
      name: "annual_income",
      arr: [],
    };
    let arrNewResidence = {
      name: "Residential_quarter",
      arr: [],
    };

    let arrTypeOfHouse = {
      name: "type_of_house",
      arr: [],
    };
    let arrKyivRegion = {
      name: "kyiv_or_region",
      arr: [],
    };

    let arrDistrict = {
      name: "district",
      arr: [],
    };

    data.forEach((el) => {
      el.attributes.number_of_rooms
        ? arrNewRooms.arr.push(el.attributes.number_of_rooms)
        : false;

      el.attributes.payback
        ? arrNewPayback.arr.push(el.attributes.payback)
        : false;

      el.attributes.annual_income
        ? arrNewIncome.arr.push(el.attributes.annual_income)
        : false;

      el.attributes.Residential_quarter
        ? arrNewResidence.arr.push(el.attributes.Residential_quarter)
        : false;

      el.attributes.type_of_house
        ? arrTypeOfHouse.arr.push(el.attributes.type_of_house)
        : false;

      el.attributes.kyiv_or_region
        ? arrKyivRegion.arr.push(el.attributes.kyiv_or_region)
        : false;

      el.attributes.district
        ? arrDistrict.arr.push(el.attributes.district)
        : false;
    });

    arrNewRooms.arr = arrNewRooms.arr
      .filter(function (item, pos) {
        return arrNewRooms.arr.indexOf(item) == pos;
      })
      .sort(function (a, b) {
        return a - b;
      });

    arrNewPayback.arr = arrNewPayback.arr
      .filter(function (item, pos) {
        return arrNewPayback.arr.indexOf(item) == pos;
      })
      .sort(function (a, b) {
        return a - b;
      });
    // arrNewPayback.arr = uniqueArrayPayback.sort();

    arrNewIncome.arr = arrNewIncome.arr
      .filter(function (item, pos) {
        return arrNewIncome.arr.indexOf(item) == pos;
      })
      .sort(function (a, b) {
        return a - b;
      });

    arrNewResidence.arr = arrNewResidence.arr.filter(function (item, pos) {
      return arrNewResidence.arr.indexOf(item) == pos;
    });

    arrTypeOfHouse.arr = arrTypeOfHouse.arr.filter(function (item, pos) {
      return arrTypeOfHouse.arr.indexOf(item) == pos;
    });

    arrKyivRegion.arr = arrKyivRegion.arr.filter(function (item, pos) {
      return arrKyivRegion.arr.indexOf(item) == pos;
    });
    arrDistrict.arr = arrDistrict.arr.filter(function (item, pos) {
      return arrDistrict.arr.indexOf(item) == pos;
    });

    state.Filters.push(arrNewRooms);
    state.Filters.push(arrNewResidence);
    state.Filters.push(arrNewIncome);
    state.Filters.push(arrNewPayback);
    state.Filters.push(arrTypeOfHouse);
    state.Filters.push(arrKyivRegion);
    state.Filters.push(arrDistrict);

    console.log("hrfghdcftyhj", state.Filters);
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
  Residence: [],
  Filters: [],
});
