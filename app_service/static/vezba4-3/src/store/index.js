import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kategorije: [],
    palacinke: [],
    sviPalacinkaIDs: [],
    token: '',
  },
  getters: {
  },
  mutations: {
    addKategorije(state, kategorije) {
      state.kategorije = kategorije;
    },
    addPalacinka(state, palacinka) {
      state.palacinke[palacinka.id] = palacinka;
    },
    addSviPalacinkaIDs(state, niz) {
      state.sviPalacinkaIDs = niz;
    },
    setToken(state, token) {
      console.log("Stigao token: ", token);
      state.token = token;
      localStorage.token = token;
       console.log("Stigao Localtoken: ", localStorage.token);
    },
    removeToken(state) {
      state.token = "";
      localStorage.token = "";
    }
  },
  actions: {

    register({ commit }, obj) {
      fetch("http://127.0.0.1:9001/register", {
        method: "POST",
         headers: { 'Content-Type': 'application/json', 
               
                },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( data => commit('setToken', data.token) );
    },
    login({ commit }, obj) {
      fetch('http://127.0.0.1:9001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( data => {
        if (data.msg) {
          alert(data.msg);
        } else {
          commit('setToken', data.token)
        }
      });
    },

    async fetchKategorije({commit}){
      fetch("http://localhost:9000/kategorija", {
        headers:{
        'Authorization': `Bearer ${localStorage.token}`
         },
      })
        .then( res=>res.json() )
          .then( data => commit('addKategorije', data) );
    },
    async getPalacinka({ commit, state }, palacinkaID) {
      return new Promise((resolve, reject) => {
        if (state.palacinke[palacinkaID]) {
          resolve(state.palacinke[palacinkaID]);
        }
        else {
          fetch(`http://localhost:9000/palacinka/${palacinkaID}`, {
             headers:{
              'Authorization': `Bearer ${localStorage.token}`
         },
          })
            .then(res => res.json())
            .then(data => {
              commit('addPalacinka', data)
              resolve(data);
            });
        }
      });

    },
   async fetchSviPalacinke({ commit }) {
  try {
    console.log('Fetching palacinke...');
    
    const response = await fetch("http://localhost:9000/palacinke", {
       headers:{
        'Authorization': `Bearer ${localStorage.token}`
         },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch palacinke. Status: ${response.status}`);
    }

    const data = await response.json();
    commit('addSviPalacinkaIDs', data);
    
    console.log('Successfully fetched palacinke:', data);
  } catch (error) {
    console.error('Error fetching palacinke:', error.message);
    throw error; // Rethrow the error to propagate it to the caller
  }
}


  },
  modules: {
  }
})
