// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Resource from 'vue-resource'

Vue.use(Resource);
Vue.config.productionTip = false
let app = '';
const config= {
	  apiKey: "AIzaSyBiXWstHZ5ab8yiWZAcMM0hKkdf3hFMSUQ",
    authDomain: "test-314db.firebaseapp.com",
    databaseURL: "https://test-314db.firebaseio.com",
    projectId: "test-314db",
    storageBucket: "test-314db.appspot.com",
    messagingSenderId: "780823299225",
    appId: "1:780823299225:web:8a35345bc3147649e5a408",
    measurementId: "G-XGY23L37Z6"
};



firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(()=>{
	if(!app){
	app= new Vue({
	  router,
	  render: h => h(App)
	}).$mount('#app');
	}
});

