export const actions = {
  async getDataPurchase({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          purchase_type: {
            $eq: "purchase",
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
      console.log("products", response);
      commit("UPDATE_PUECHASE_DATA", response.data.data);
      commit("UPDATE_FILTERS", response.data.data);
      commit("GET_CATEGORIES", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getDataCommerce({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          purchase_type: {
            $eq: "commerce",
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
      // console.log("products", response);
      commit("UPDATE_COMMERCE_DATA", response.data.data);
      commit("UPDATE_FILTERS", response.data.data);
      commit("GET_CATEGORIES", response.data.data);
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
      const response = await this.$axios.get(`/api/products?${query}`);
      // console.log("product", response);
      commit("UPDATE_CURRENT_PEASE_DATA", response.data.data[0].attributes);
    } catch (err) {
      console.log(err);
    }
  },
  async getDataPurchaseByType({ commit }, type) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          purchase_type: {
            $eq: "purchase",
          },
          Adress: {
            $eq: type,
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify url
      }
    );
    try {
      const response = await this.$axios.get(`/api/products?${query}`);
      console.log("products", response);
      // commit("UPDATE_PUECHASE_DATA", response.data.data);
      // commit("UPDATE_FILTERS", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
};
export const mutations = {
  UPDATE_PUECHASE_DATA(state, data) {
    state.PurchaseData = data;
  },
  UPDATE_COMMERCE_DATA(state, data) {
    state.CommerceData = data;
  },
  UPDATE_CURRENT_PEASE_DATA(state, data) {
    state.CurrentPeaseData = data;
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
  GET_CATEGORIES(state, data) {
    let arrNew = [];
    let newArr = [];
    data.forEach((el) => {
      if (el.attributes.product_type) {
        arrNew.push(el.attributes.product_type);
      }
    });
    let uniqueArray = arrNew.filter(function (item, pos) {
      return arrNew.indexOf(item) == pos;
    });

    uniqueArray.forEach((el) => {
      let data = {
        text: "",
        selected: false,
      };
      data.text = el;
      newArr.push(data);
    });

    state.Categories = newArr;
  },
  UPDATE_CATEGORIES(state, type) {
    state.Categories.forEach((el) => {
      el.selected = false;
      if (el.text === type) {
        el.selected = true;
      }
    });
  },
};
export const state = () => ({
  PurchaseData: [],
  CommerceData: [],
  CurrentPeaseData: {},
  Address: [],
  Categories: [],
});
