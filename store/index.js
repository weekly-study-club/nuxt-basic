export default {
  state() {
    return {
      items: [],
    };
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    },
  },
}