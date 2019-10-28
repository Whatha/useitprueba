<template>
  <div class="wrapper">
    <header>
      <nav   id="navsi" class="navbar navbar-expand-md  navbar-dark ">
       <router-link to="/timeline"> <a class="navbar-brand"> Event Manager</a> </router-link>
        <a class="navbar-toggler" data-toggle="collapse" data-target="#mainNav" @click="toggleClass()">
          <div  class="hamburger" id="hamburger-6" v-bind:class="[isActive ? 'is-active' : '']">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        </a>
        <div @click="toggleClass()" class="navbar-collapse collapse align-items-right" id="mainNav">
          <ul class="navbar-nav">
           <li class="nav-item"><router-link to="/new" class="nav-link"> Crear evento </router-link></li>
            <li class="nav-item"><a  @click="logout" class="nav-link"> Logout </a></li>
          </ul>

        </div>
      </nav>
    </header>
  </div>
</template>
<script>
    import firebase from 'firebase';

export default {
  name: 'Navbar',
  data() {
    return {
      msg: 'navbar mamalon',
      isActive: false,
      user: ''
    }
  },
  methods:{
     toggleClass: function(event){
       // Check value
       $('#hamburger-6').toggleClass('is-active');
    },
    logout: function(){
        firebase.auth().signOut().then(()=> {
          this.$router.replace('login')
        })

      },
  },

  created(){
    var user = firebase.auth().currentUser;
    this.user=user;
  }
}



</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navsi{
  background: black;
}

a{
  cursor: pointer;
    color: lightgreen;

}

.hamburger .line{
  width: 30px;
  height: 2px;
  background-color: #ffffff;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.pepino .hamburger .line{
  background-color: #4BDB7D;
}

.navbar-toggler{
  opacity: 0.7;
  border: 0;
}

#hamburger-6.is-active{
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburger-6.is-active .line:nth-child(2){
  width: 0px;
}

#hamburger-6.is-active .line:nth-child(1),
#hamburger-6.is-active .line:nth-child(3){
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

#hamburger-6.is-active .line:nth-child(1){
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
}

#hamburger-6.is-active .line:nth-child(3){
  -webkit-transform: translateY(-10px) rotate(90deg);
  -ms-transform: translateY(-10px) rotate(90deg);
  -o-transform: translateY(-10px) rotate(90deg);
  transform: translateY(-10px) rotate(90deg);
}


</style>
