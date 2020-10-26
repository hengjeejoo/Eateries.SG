<template>
    <div id=app>
        <h1>Add Item Page</h1>
        <form id="fm1">
            <label>Item Name</label>
            <input type="text" v-model.lazy="item.name" required/>
            <label>Item Category</label>
            <input type="text" v-model.lazy="item.category"/>
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
            category:''
            },
        }
    },
    methods:{
        addItem: function () {
            database.collection('stuff').add(this.item);
        }
    }       
    }
</script>