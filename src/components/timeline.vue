<template>
	
     <div id="timeline">
       <h1>Eventos Disponibles</h1>
       <input v-model="search" placeholder="search blogs" type="text">
       <div v-for="event in filteredBlogs" class="single-event">
         <router-link v-color :to="'/event/'+event.id">		<h1>{{event.title}}</h1>
		<h4>{{event.descripcion}}</h4>
		<p>Fecha: {{event.fecha}} Hora:{{event.Hora}} Lugar: {{event.lugar}}</p>
		<p></p>
		<h5>tipo: {{event.tipo}}</h5>
        
        </router-link>
       </div>
     </div>
</template>

<script>
import searchmix from '../mixins/searchmix';
	import firebase from 'firebase';

export default {


  data () {
   return{
      blogs: [],
      search:''

   }
  },

	methods: {
			logout: function(){
				firebase.auth().signOut().then(()=> {
					this.$router.replace('login')
				})
			},
			newEvent: function(){
									this.$router.replace('login')

			}
		},

  created(){
    this.$http.get("https://test-314db.firebaseio.com/posts.json").then(function(data){
      return data.json();

    }).then(function(data){
      var blogsArray=[];
      for (let key in data) {
        console.log(data[key]);
        data[key].id=key;
        blogsArray.push(data[key]);
      }

      this.blogs=blogsArray;
    });
  },


//Search bitches
  computed: {
  
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    color:{
      bind(el, binding, vnode){
      el.style.color= "#"+Math.random().toString().slice(2,8);
    }
    }
  },

  mixins:[searchmix]

}
</script>

<style scoped>
  

	router-link:hover{
		text-decoration: none;
	}
	a{
		text-decoration: none;

	}
	a:hover{
		text-decoration: none;
		opacity: 0.8;
		color: black;
	}

  #timeline{
    max-width: 800px;
    margin: 0 auto;

  margin-top: 60px;
  padding: 10px;
  }

  .single-event{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    box-shadow: 2px 3px 5px #888;
    		text-align: left;
  }
  
  h1,h2{
  	text-align: left;
	font-weight: 700;
  }
  h2{

  }
  input{
    width: 100%;
  }
</style>
