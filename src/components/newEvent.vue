<template>
      <div id="newEvent">
        <h2>Add new Event</h2>

        <form v-if="!submitted" action="">
          <label for="">Titulo</label>
          <input type="text" v-model.lazy="event.title" required>
          <label for="">Descripción:</label>
          <textarea v-model.lazy="event.descripcion"></textarea>
          <label for="start">Fecha:</label>
          <input type="date" v-model="event.fecha" name="fecha">
          <label for="appt">Hora:</label>
          <input type="time" id="appt" name="appt">
          <label for="">Lugar</label>
          <input type="text" v-model.lazy="event.lugar" required>
          <label for="">Tipo: </label>
          <select name="" id="" v-model="event.tipo">
            <option v-for="tipo in tipos">{{tipo}}</option>
          </select>

          <button @click.prevent="post">Add event</button>
        </form>
        <div v-if="submitted">
          <h3>Tu evento se ha agregado</h3>
        </div>
        <div id="preview">
          <h3>Preview</h3>
          <p>Titulo: {{event.title}}</p>
          <p>descripcion:</p>
          <p> {{event.descripcion}}</p>
          <p>Fecha: {{event.fecha}}</p>
          <p>Hora: {{event.hora}}</p>
          <p>Tipo: {{event.tipo}}</p>
           <p>Lugar: {{event.lugar}}</p>
        </div>
      </div>
</template>

<script>

export default {


  data () {
    return{
      event:{
        title:'',
        descripcion:'',
        categories: [],
        tipo:'',
        fecha:'',
        Hora:'',
        lugar:'',
        autor:'',

              },
      tipos:["Publico","Privado","Cerrado"],
      submitted: false
    }
  },

  methods:{
    post(){
      this.$http.post('https://test-314db.firebaseio.com/posts.json', this.event).then(function(data){
        this.submitted=true;
                    this.$router.replace('timeline');

      });
    }
  },

}
</script>

<style scoped>
    #newEvent *{
        box-sizing: border-box;
    }
    #newEvent{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }

    input, label, select{
      display: flex;
      min-width: 50%;
    }
    select{
      padding: 10px;
    }

    button{
      margin-top: 20px;
      width: 100%;
      padding: 20px;
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

    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
        text-align: left;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
      display: inline-block;
      margin-right: 10px;
    }
    #checkboxes label{
      display: inline-block;
    }

</style>
