export const actions = {
  async getDataPurchase({ commit }) {
    try {
      const response = await this.$axios.get(`/api/products`);
      console.log("products", response.data.data);
      commit("UPDATE_PUECHASE_DATA", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getDataCommerce({ commit }) {
    try {
      const response = await this.$axios.get(`/api/products`);
      console.log("products", response);
      commit("UPDATE_COMMERCE_DATA", response);
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
};
export const state = () => ({
  PurchaseData: [],
  CommerceData: [],
});
