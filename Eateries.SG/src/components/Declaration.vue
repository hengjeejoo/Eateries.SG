<template>
<body>
    <div id="Banner" class="banner">
        <div class="banner-wrap">
            <div class="notice-text">Check out our promotions and don't forget to invite yourfriends for more perks!</div>
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
                <button v-on:click.prevent="saveTemps">Submit</button>
            </form>
        </div>
        <div>
            <button v-on:click.prevent="loadTemps()">Load Records</button>
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

body {
    font-family: Montserrat, Inter;
    color: #333;
    font-size: 15px;
    line-height: 20px;
}

h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #f3f5fd;
    font-size: 60px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.03em;
}

h2 {
    margin-top: 20px;
    margin-bottom: 20px; 
    color: #C4C5E1;
    font-size: 55px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.03em;
}

h3 {
    margin-top: 20px;
    margin-bottom: 10px; 
    color: #191b22;
    font-size: 40px;
    line-height: 1;
    font-weight: 700;
}

h4 {
    margin-top: 10px;
    margin-bottom: 10px; 
    color: #191b22;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 700;
}

h5 {
    margin-top: 10px;
    margin-bottom: 10px; 
    color: #08090a;
    font-size: 22px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.03em;
}

p {
    margin-bottom: 10px; 
    color: #000000;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.02em;
}

.banner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox; 
    display: flex;
    min-height: 48px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center; 
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #b1b2d8;
    font-family: Inter, sans-serif;
    color: #ffffff;
    font-size: 15px;
} 

.banner-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 1000px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

}

.notice-text {
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    height: 20px;
}

.navigation-right a {
    padding-right: 16px;
    padding-left: 16px;
    opacity: 0.8;
    -webkit-transition: opacity 200ms ease;
    transition: opacity 200ms ease;
    color: #000000;
    font-size: 16px;
    text-transform: none;
}

.navigation-right a:hover {
    opacity: 1;
    color: #6b3c92;
}

.current {
    font-family: Montserrat, sans-serif;
    color: #b1b2d8;
    font-weight: 600;
}

.navigation-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: 20px 3%;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.brand {
    margin-right: 40px;
}

.logo-text {
    font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: 600;
}

.navbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 3%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
}

.navigation-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 3%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.navigation-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 3%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.nav-menu {
    margin-right: 14px;
}

.button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 60px;
    margin-right: 30px;
    margin-left: 30px;
    padding: 5px 30px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 20px;
    background-color: #f0bcbc;
    font-family: Montserrat, sans-serif;
    color: #f9f9f9;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    background-clip: border-box;
}

.header {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin-bottom: 15px;
    padding: 50px 3%;
    height: 200px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-image: url(https://d1otfi4uhdq3fm.cloudfront.net/wp-content/uploads/2019/06/06000549/Lazy-Breakfast_result-1920x1417.jpg);
    background-position: 0px 600px, 0px 0px;
    background-size: cover, auto;
    opacity: 0.8;
}

#container-flex {
    width: 100%;
}

.head-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-top: 5px;
    padding-right: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: left;
    -webkit-justify-content: left;
    -ms-flex-pack: left;
    justify-content: left;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    opacity: 1;
}

</style>