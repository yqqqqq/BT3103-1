<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>

        <label>Item Category</label><br>
        <input type="checkbox" id="fruits" value="Fruits" v-model.lazy="item.category">
        <label for="fruits">Fruits</label><br>
        <input type="checkbox" id="vegetables" value="Vegetables" v-model.lazy="item.category">
        <label for="vegetables">Vegetables</label><br>
        <input type="checkbox" id="snacks" value="Snacks" v-model.lazy="item.category">
        <label for="snakcs">Snacks</label>
        
        <label>Added By</label>
        <input type="text" v-model.lazy="item.addedby"/>

        <label>Urgency</label><br>
        <input type="radio" id="urgent" name="urgencyBtn" value="Urgent" v-model.lazy="item.urgency"/>
        <label for="urgent">Urgent</label><br>
        <input type="radio" id="not urgent" name="urgencyBtn" value="Not urgent" v-model.lazy="item.urgency"/>
        <label for="not urgent">Not urgent</label><br>

        <label>Date</label>
        <input type="text" v-model.lazy="item.time"/>

        <button v-on:click.prevent="addItem">Add Item</button>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:[],
          addedby: '',
          urgency: '',
          time: '',
        }, 
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category=[];
          this.item.addedby="";
          this.item.urgency="";
          this.item.time="";
          alert("I am in the DB .... :-) Item saved successfully")
          
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline;
    padding: 8px;
    width:50%;
}
</style>