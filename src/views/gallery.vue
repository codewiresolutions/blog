<template>
  <!-- Gallery -->
  <div  id="gallery" class="container-fluid">
    <div style="text-align: center;" class="row">
      <div style="padding-top: 80px;padding-bottom:10px;" class="col-12 ">
        <img src="/images/nature-removebg-preview.png" alt=""
          style="filter: brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(-90deg);" />
      </div>
    </div>
    <div style="padding-bottom:40px;text-align: center;" class="row">
      <div style="color: pink; font-size: 3em;" class="col-12 sig4">
      Our Selfies and photos
      </div>
      <div class="col-4"></div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <p class="sig4">Here are the our some of best photos and vides let me show you our few best photos</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <img src="/images/selfie.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
        <img src="/images/selfie2.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
        <img src="/images/selfie3.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
        <img src="/images/selfie4.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <img src="/images/selfie5.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />
        <img src="/images/selfie6.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <img src="/images/selfie7.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
        <img src="/images/selfie8.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
        <img src="/images/selfie9.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
        <img src="/images/selfie9.jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageGrid',
};
</script>
<style>
.sig4 {
  font-family: 'Cedarville Cursive', cursive;
  margin-top: -11px;
  padding-bottom: 30px;
}
</style>