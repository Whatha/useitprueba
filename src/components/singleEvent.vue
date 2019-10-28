<template>
	<div id="single-event">
		<h1>{{event.title}}</h1>
		<h4>{{event.descripcion}}</h4>
		<p>Fecha: {{event.fecha}} Hora:{{event.Hora}} Lugar: {{event.lugar}}</p>
		<p></p>
		<h5>{{event.tipo}}</h5>
        
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id: this.$route.params.id,
				event:{}
			}
		},
		created(){
			 this.$http.get("https://test-314db.firebaseio.com/posts/"+this.id+".json").then(function(data){
     			 this.event= data.body;
     			 console.log(this.event);
    });
		}
	}
</script>

<style>
	#single-event{
		max-width: 600px;
		margin:0 auto;
		text-align: left;
	}
</style>