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
                <router-link class = "current" to="/history" exact>History</router-link>
                <router-link to="/partnereateries" exact>Partner Eateries</router-link>
                <router-link to="/currentbookings" exact>Current Bookings</router-link>
                <router-link to="/declaration" exact>Declaration</router-link>
            </div>
        </div>
    </div>
    <div id="Header" class="header">
        <div id="container-flex">
            <div class="head-content">
                <h1>History</h1>
                <p>Travel back in time!</p>
            </div>
        </div>
    </div>
    <div class="content-section">
        <div>
            <p>Display a chart of your choice by clicking on any of the following buttons</p>
        </div>
        <div class="sort-by-buttons w-container">
            <p>Plots of the past eateries visited</p>
            <div>
                <button class="button">Last 1 Month</button>
                <button class="button">Last 3 Months</button>
                <button class="button">Last 6 months</button>
            </div>
            <div>
                <img src="..\assets\breadyard.jpg" loading="lazy" alt="">
            </div>
        </div>
        <div class="sort-by-buttons w-container">
            <p>Plots of the past transactions (in SG$)</p>
            <div>
                <button class="button">Last 1 Month</button>
                <button class="button">Last 3 Months</button>
                <button class="button">Last 6 months</button>
            </div>
            <div>
                <img src="..\assets\breadyard.jpg" loading="lazy" alt="">
            </div>
        </div>
    </div>
</body>  
</template>

<script>
    export default {
        name: 'History',
    }

</script>

<style>
@import '../assets/basic_style.css';


</style>