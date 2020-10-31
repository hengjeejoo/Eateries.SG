<template>
<body>
    <div id="Banner" class="banner">
        <div class="banner-wrap">
            <div class="notice-text">Check out our promotions and don't forget to invite your friends for more perks!</div>
        </div>
    </div>
    <div data-collapse="medium" data-animation="default" data-duration="400" id="Navigation">
        <div class="navigation-container">
            <div class="navigation-left"><img src="../assets/EateriesSG.png" loading="lazy" width="83" height="auto">
                <div class="logo-text">EATERIES.SG</div>
            </div>
            <div class="navigation-right">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/profile" exact>Profile</router-link>
                <router-link to="/history" exact>History</router-link>
                <router-link to="/partnereateries" exact>Partner Eateries</router-link>
                <router-link to="/currentbookings" exact>Current Bookings</router-link>
                <router-link class = "current" to="/declaration" exact>Declaration</router-link>
            </div>
        </div>
    </div>
    <div id="Header" class="header">
        <div id="container-flex">
            <div class="head-content">
                <h1>Declaration</h1>
                <p>Do your part to make it a safer place for all</p>
            </div>
        </div>
    </div>
    <div>
        <h3>Complete before entering the Eatery</h3>
        <div class="">
            <form id="temperature-form">
                <label for="temp">Current Temperature:</label>
                <br>
                <input type="text" class="w-input" v-model.lazy="content.temp">
                <br>
                <label for="symptoms">Do you have any COVID-19 symptoms that you recently acquired?:</label>
                <br>
                <input type="text" class="w-input" v-model.lazy="content.q1">
                <br>
                <label for="family">Do you have anyone in the same household having fever, and/or showing the any symptoms of COVID-19?</label>
                <br>
                <input type="text" class="w-input" v-model.lazy="content.q2">
                <br>
                <button class="button" v-on:click.prevent="saveTemps">Submit</button>
            </form>
        </div>
        <div>
            <button class="button" v-on:click.prevent="loadTemps()">Load Records</button>
            <ul id="temperature-list"></ul>
        </div>
    </div>


</body>  
</template>

<script>
import database from '../firebase.js'
    export default {
        name: 'Declaration',
        
        data() {
            return {
                content : {
                    temp : "",
                    q1: "",
                    q2: ""
                }            
            }
        },

        methods: {
            renderTemperature: function(doc, tempList) {
                let li = document.createElement('li');
                let temp = document.createElement('span');
                let q1 = document.createElement('span');
                let q2 = document.createElement('span');
                let space = document.createTextNode("   ");

                li.setAttribute('data-id', doc.id);
                temp.textContent = doc.data().temp;
                q1.textContent = doc.data().q1;
                q2.textContent = doc.data().q2;

                li.appendChild(temp);
                let counter = 0;
                while (counter < 1000 ) {
                    let space = document.createTextNode(" ");
                    li.appendChild(space);
                    counter++;
                }
                li.appendChild(space);
                li.appendChild(q1);
                li.appendChild(space);
                li.appendChild(q2);

                tempList.appendChild(li);
            },
            //getting data of temperatures from db
            loadTemps: function() {
                const tempList = document.querySelector('#temperature-list');
                while (tempList.firstChild) {
                    tempList.removeChild(tempList.lastChild);
                }
                database.collection('stuff').doc('gmJX3VpOcpE8MF8cgANo').collection('temperature').get().then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        this.renderTemperature(doc, tempList);
                    });
                });
            },

            saveTemps: function() {
                //const form = document.querySelector('#temperature-form');
                //window.alert("donezo saving");
                database.collection('stuff').doc('gmJX3VpOcpE8MF8cgANo').collection('temperature').add(this.content);
                //window.alert("finished")
                this.content.temp = "";
                this.content.q1 = "";
                this.content.q2 = "";
            }
        }

    }


</script>

<style>
@import '../assets/basic_style.css';

label {
    text-align: left;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-family: Inter, sans-serif;
    color: #333;
    font-size: 15px;
    
}

.w-input {
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;
}

/*
button{
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898EC;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 22;
}
*/

</style>    