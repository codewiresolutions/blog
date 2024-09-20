<template>
  <div id="people" class="container text-center">
    <div class="row">
      <div class="col-12" style="padding-top: 80px; padding-bottom: 10px;">
        <img src="/images/nature-removebg-preview.png" alt=""
          style="filter: brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(-90deg);" />
      </div>
    </div>
    <div class="row" style="padding-bottom: 40px;">
      <div class="col-12 sig4" style="color: pink; font-size: 3em;">The Groomsmen</div>
      <div class="col-4"></div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <p class="sig4">Hey, here are some of the friends of the groom.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/male.jpeg" alt="">
        <div class="sig5">Ion Butt</div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/male2.jpeg" alt="">
        <div class="sig5">Oran Smith</div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/male3.jpeg" alt="">
        <div class="sig5">Berrian Thomsan</div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/male4.jpeg" alt="">
        <div class="sig5">Thomas James</div>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Groomsmen"
};
</script>

<style scoped>
.sig4, .sig5 {
  font-family: 'Cedarville Cursive', cursive;
  margin-top: -11px;
}

.sig4 {
  padding-bottom: 10px;
}

.sig5 {
  padding-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
}

.round {
  height: 140px;
  width: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.text-center {
  text-align: center;
}
</style>
