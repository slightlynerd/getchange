import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { getEmployees } from '../apis/employee'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    employees: [],
    processing: false
  },
  getters: {
    employees: (state) => state.employees,
    processing: (state) => state.processing
  },
  mutations: {
    employees (state, payload) {
      state.employees = payload
    },
    processing (state, payload) {
      state.processing = payload
    }
  },
  actions: {
    async getEmployees ({ commit }) {
      commit('processing', true)
      try {
        const { data } = await getEmployees()
        commit('employees', data)
        commit('processing', false)
      } catch (error) {
        commit('employees', [])
        commit('processing', false)
      }
    }
  },
  plugins: [vuexLocal.plugin]
})
