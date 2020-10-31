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
                <router-link class = "current" to="/partnereateries" exact>Partner Eateries</router-link>
                <router-link to="/currentbookings" exact>Current Bookings</router-link>
                <router-link to="/declaration" exact>Declaration</router-link>
            </div>
        </div>
    </div>
    <div id="Header" class="header">
        <div id="container-flex">
            <div class="head-content">
                <h1>Partner Eateries</h1>
                <p>Treat your taste buds and satisfy your cravings with our wide selection of partner eateries!</p>
            </div>
        </div>
    </div>
    <div class="content-section">
    <div class="sort-by-buttons w-container">
      <div class="sort">Sort by:</div>
      <a href="#" class="button">Location</a>
      <a href="#" class="button">Category</a>
      <a href="#" class="button">Ratings</a>
      </div>
    </div>
    <div class="container">
      <div class="title-wrap-centre"></div>
      <div class="layout-grid content-grid">
        <div class="content-card"><img src="../assets/kfc.jpg" width="270" height="200" alt="" class="step-image">
          <div class="content-wrapper">
            <h5>KFC @ Nex</h5>
            <p>Fast Food <br>Rating: 4/5</p>
          </div>
        </div>
        <div class="line-column">
          <!-- <div class="line"></div> -->
        </div>
        <div class="content-card"><img src="../assets/breadyard.jpg" width="270" height="200" alt="" class="step-image">
          <div class="content-wrapper">
            <h5>Bread Yard @ Fusionopolis</h5>
            <p>Western, Café, Brunch<br>Rating: 4.4/5</p>
          </div>
        </div>
        <div class="line-column">
          <!-- <div class="line"></div> -->
        </div>
        <div class="content-card"><img src="../assets/sushitei.jpg" width="270" height="200" alt="" class="step-image">
          <div class="content-wrapper">
            <h5>Sushi Tei @ Thomson Plaza</h5>
            <p>Japanese, Sushi<br>Rating: 4.7/5</p>
          </div>
        </div>
      </div>
    </div>

</body>  
</template>

<script>
export default {
    name: 'PartnerEateries'
}
</script>

<style>
@import '../assets/basic_style.css';

.sort-by-buttons {
    display: flex;
    margin-bottom: 40px;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.sort {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
}

.content-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.step-image {
    margin-bottom: 24px;
}

.content-wrapper {
    padding-right: 40px;
    padding-left: 40px;
}

.line-column {
    padding-bottom: 0px;
    flex-direction: column;
}

.line {
    width: 1px;
    height: 100%;
    min-height: 100px;
    border-style: none dashed none none;
}

.content-grid {
  grid-column-gap: 0px;
  -ms-grid-columns: 1fr 0.3fr 1fr 0.3fr 1fr;
  grid-template-columns: 1fr 0.3fr 1fr 0.3fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

</style>