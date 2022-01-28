export const actions = {
  async getData({ commit }) {
    try {
      const response = await this.$axios.get(`/products`);
      commit("UPDATE_HOUSES_DATA", response);
    } catch (err) {
      console.log(err);
    }
  },
};
export const mutations = {
  UPDATE_HOUSES_DATA(state, data) {
    state.housesData = data;
  },
};
export const state = () => ({
  housesData: [],
});
