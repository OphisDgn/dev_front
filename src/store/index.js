export default {
  state: {
      peoples: []
  },
  mutations: {
    peoplesList: (state, peoples) => {
      state.peoples = peoples;
    }
  },
  actions: {
    peopleDataInList (context, value) {
        context.commit('peoplesList', value);
    }
  }
}