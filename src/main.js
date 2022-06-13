import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*const myget = async function myGet(url) {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
    }
    return await response.json();
  };*/

createApp(App)
.use(store)
.use(router)
.mount('#app')
