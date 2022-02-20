import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiBaseUrl: "https://dog.ceo/api/",
    form: {
      email: null,
      breed: null,
      breedsList: null,  
      radio: null,
      switch: null,
      rating: null,
      dogImage: null,
    },
  },
  getters: {
    breeds: (state) => {
      return state.breeds;
    }
  },
  mutations: {
    setEmail(state, payload) {
      state.form.email = payload;
    },
    setBreed(state, payload) {
      state.form.breed = payload;
    },
    setBreedsList(state, payload) {
      state.form.breedsList = Object.keys(payload);
    },
    setRadio(state, payload) {
      state.form.radio = payload;
    },
    setSwitch(state, payload) {
      state.form.switch = payload;
    },
    setRating(state, payload) {
      state.form.rating = payload;
    },
    setDogImage(state, payload) {
      state.form.dogImage = payload;
    }
  },
  actions: {
    async getAllBreeds({ state, commit }) {
      try {
        const url = `${state.apiBaseUrl}breeds/list/all`;
        const response = await axios.get(url);

        if (
          response?.status === 200 &&
          response?.data?.status === "success"
        ) {
          const data = response?.data?.message || null;
          commit('setBreedsList', data);

        } else {
          console.warn("store.js - Warning on request getAllBreeds", response);
        }

      } catch (error) {
        console.error(
          "store.js - Exception on method getAllBreeds",
          error
        );
        commit('setBreedsList', null);
      }
    },
    async getDogImage({ state, commit }, breed) {
      try {
        breed = breed || state.form.breed;
        const url = `${state.apiBaseUrl}breed/${breed}/images/random`;
        const response = await axios.get(url);

        if (
          response?.status === 200 &&
          response?.data?.status === "success"
        ) {
          const data = response?.data?.message || null;
          commit('setDogImage', data);

        } else {
          console.warn("store.js - Warning on request getDogImage", response);
        }

      } catch (error) {
        console.error(
          "store.js - Exception on method getDogImage",
          error
        );
        commit('setDogImage', null);
      }
    },
    clearFormValues({ state }) {
      state.form = {
        email: null,
        breed: null,  
        radio: null,
        switch: null,
        rating: null,
        dogImage: null,
      };
    }
  },
})
