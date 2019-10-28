<template>
	<div id="login">
		<h3>Login</h3>
		<input type="text" v-model="correo" placeholder="correo"><br>
		<input type="password" v-model="password" placeholder="contraseña"> <br>
		<button @click="login">iniciar sesion</button>

		<p>¿no estás registrado? <router-link to="/registro"> registrate </router-link></p>
	</div>
</template>

<script>
		import firebase from 'firebase'

	export default{
		name:'login',
		data(){
			return{
				correo:'',
				password:''
			}
		},
		methods:{
			login: function(){
				firebase.auth().signInWithEmailAndPassword(this.correo, this.password).then(
					(user) => {
						this.$router.replace('timeline');
					},
					(err) => {
						alert('correo y/o contraseña incorrectos');
					})
				
			}
		}
	}
</script>

<style scoped>
	#login{
		max-width: 400px;
		margin:0 auto;
		padding: 10px;
		margin-top: 10%;
	}

		input{
		width: 100%;
		padding: 5px;
		margin-top: 20px;
	 border-radius: 5px;
	 border: 1px solid #bbb;

	}

	 button{
      margin-top: 20px;
      width: 100%;
      padding: 15px;
      background: lightgreen;
      border: none;
      color: black;
      cursor: pointer;
      transition: all 0.5s;
      border-radius: 5px;
    }

    button:hover{
      background: black;
      color: lightgreen;
    }
    p{
    	margin: 10px;
    }
</style>