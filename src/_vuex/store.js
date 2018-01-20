import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'

const state = {
    foc: 0,
    holdHeight: true,
    b: 2
}


const mutations = {

    Number(state) {
        state.foc++;
    },
    Hold(state) {
        state.holdHeight = true;
        console.log('hold')
    },
    // hold(state){
    // 	state.holdHeight = false,
    // 	console.log('hold')
    // }

}


const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store