import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import route from './route'
import cards from './cards'
import note from './note'
import teams from './teams'
import users from './users'
import modals from './modals'
import search from './search'
import members from './members'
import questions from './questions'
import collections from './collections'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        route,
        cards,
        note,
        teams,
        users,
        modals,
        search,
        members,
        questions,
        collections
    }
});

export default store
