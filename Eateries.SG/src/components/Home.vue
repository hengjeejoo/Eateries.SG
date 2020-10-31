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
                <router-link class = "current" to="/" exact>Home</router-link>
                <router-link to="/profile" exact>Profile</router-link>
                <router-link to="/history" exact>History</router-link>
                <router-link to="/partnereateries" exact>Partner Eateries</router-link>
                <router-link to="/currentbookings" exact>Current Bookings</router-link>
                <router-link to="/declaration" exact>Declaration</router-link>
            </div>
        </div>
    </div>
    <div id="Header" class="header">
        <div id="container-flex">
            <div class="head-content">
                <h1>Home</h1>
                <p>Testing! Home displayed here. How else can i edit</p>
            </div>
        </div>
    </div>
    <div>
        <h2>More stuff down below</h2>
        <additem></additem>
    </div>
    

</body>  
</template>

<script>
    import AddItem from './Additem.vue'
    export default {
        name: 'Home',
        components:{
            'additem': AddItem
        }
    }    
</script>

<style>
@import '../assets/basic_style.css';

</style>