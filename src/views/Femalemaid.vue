<template>
  <div class="container text-center">
    <div class="row pt-5 pb-2">
      <div class="col-12">
        <img src="/images/nature-removebg-preview.png" alt="" class="styled-img" />
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-12 sig4 text-pink">The Bridesmaid</div>
      <div class="col-lg-4 offset-lg-4 col-md-12">
        <p class="sig4">Here are some of the bride's best friends.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/female1.jpeg" alt="">
        <div class="sig5">Angle Thomas</div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/female2.jpeg" alt="">
        <div class="sig5">Kety Steal</div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/female3.jpeg" alt="">
        <div class="sig5">Ross Male</div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12">
        <img class="round" src="/images/female4.jpeg" alt="">
        <div class="sig5">Jolly Smith</div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bridesmaid"
};
</script>

<style scoped>
.sig4, .sig5 {
  font-family: 'Cedarville Cursive', cursive;
  margin-top: -11px;
  padding-bottom: 30px;
}
.sig5 {
  font-size: 20px;
  font-weight: bold;
}
.round {
  height: 140px;
  width: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.styled-img {
  filter: brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(-90deg);
}
.text-pink {
  color: pink;
}
</style>
