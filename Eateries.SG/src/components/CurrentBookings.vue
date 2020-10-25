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
                <a href="#home">Home</a>
                <a href="#profile">Profile</a>
                <router-link to="/partnereateries" exact>Partner Eateries</router-link>
                <router-link class = "current" to="/currentbookings" exact>Current Bookings</router-link>
                <a href="#declaration">Declaration</a>
            </div>
        </div>
    </div>
    <div id="Header" class="header">
        <div id="container-flex">
            <div class="head-content">
                <h1>Current Bookings</h1>
                <p>Testing! Current Bookings displayed here</p>
            </div>
        </div>
    </div>

</body>  
</template>

<script>
    export default {
        name: 'CurrentBookings',
    }

</script>

<style>
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