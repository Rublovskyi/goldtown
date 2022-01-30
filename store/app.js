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
      const response = await this.$axios.get(`/api/products?${query}`);
      // console.log("products", response);
      commit("UPDATE_PUECHASE_DATA", response.data.data);
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
      const response = await this.$axios.get(`/api/products?${query}`);
      // console.log("products", response);
      commit("UPDATE_COMMERCE_DATA", response.data.data);
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
      console.log("product", response);
      commit("UPDATE_CURRENT_PEASE_DATA", response.data.data[0]);
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
};
export const state = () => ({
  PurchaseData: [],
  CommerceData: [],
  CurrentPeaseData: {},
});
