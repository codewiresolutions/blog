<template>
  <div id="blog" class="container-fluid w-100" style="background-color: #f4f4f4">
  <div class="row">
    <div class="col-1"></div>
<div class="col-10">
  <div class="row center-content">
    <div class="col-12 img-container">
      <img src="/images/nature-removebg-preview.png" alt="Nature Image" class="img-filter" />
    </div>
  </div>
  <div class="row text-center mb-4">
    <div class="col-12 sig4">
      Our Blogs
    </div>
    <div class="col-4"></div>
    <div class="col-lg-4 col-md-12 col-sm-12">
      <p class="sig5">Here are some of our beautiful blogs. I hope you really enjoy them.</p>
    </div>
  </div>


  
    <div class="row">
      <div class="col-1 d-none d-lg-block"></div>
      <div class="col-lg-5 col-md-12 col-sm-12 pr-lg-4 mb-4">
        <div class="row no-gutters">
          <div style="background-color: white" class="col-lg-6 col-md-12 col-sm-12 pl-4">
            <div class="text-content">
              <h5 class="pt-4">The Wedding Party</h5>
              <div
                style="height: 2px; width: 50px; background-color: red; margin-bottom: 20px"
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur molestiae
           
              </p>
              <button type="submit" class="form-button mt-3 mb-3 w-100">Wedding Card</button>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 p-0">
            <div class="text-content">
              <div>
                <img
                  style="height: 350px; width: 100%"
                  src="/images/last1.jpeg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 pl-lg-4 mb-4">
        <div class="row no-gutters">
          <div class="col-lg-6 col-md-12 col-sm-12 p-0">
            <div class="text-content">
              <div>
                <img
                  style="height: 350px; width: 100%"
                  src="/images/last2.jpeg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div style="background-color: white" class="col-lg-6 col-md-12 col-sm-12 pl-4" >
            <div class="text-content">
              <h5 class="pt-4">Wedding Party</h5>
              <div
                style="height: 2px; width: 50px; background-color: red; margin-bottom: 20px"
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur molestiae
             
              </p>
              <button type="submit" class="form-button mt-3 mb-3 w-100">Wedding Card</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 d-none d-lg-block"></div>
    </div>





    <div class="row mt-4">
      <div class="col-1 d-none d-lg-block"></div>
      <div class="col-lg-5 col-md-12 col-sm-12 pr-lg-4 mb-4">
        <div class="row no-gutters">
          <div style="background-color: white" class="col-lg-6 col-md-12 col-sm-12 pl-4">
            <div class="text-content">
              <h5 class="pt-4">The Wedding Party</h5>
              <div
                style="height: 2px; width: 50px; background-color: red; margin-bottom: 20px"
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur molestiae
              </p>
              <button type="submit" class="form-button mt-3 mb-3 w-100">Venu Wedding</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 p-0">
            <div class="text-content">
              <div>
                <img
                  style="height: 350px; width: 100%"
                  src="/images/last3.jpeg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 pl-lg-4 mb-4">
        <div class="row no-gutters">
          <div class="col-lg-6 col-md-12 col-sm-12 p-0">
            <div class="text-content">
              <div>
                <img
                  style="height: 350px; width: 100%"
                  src="/images/last4.jpeg"
                  alt=""
                  class="img-fluid"/>
              </div>
            </div>
          </div>
          <div style="background-color: white;" class="col-lg-6 col-md-12 col-sm-12 pl-4">
            <div class="text-content">
              <h5 class="pt-4">About The Couple</h5>
              <div
                style="height: 2px; width: 50px; background-color: red; margin-bottom: 20px"
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur molestiae
                
              </p>
              <button type="submit" class="form-button mt-3 mb-3 w-100">Wedding Card</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 d-none d-lg-block"></div>
    </div>
</div>
<div class="col-1"></div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'ImageGrid'
}
</script>
<style scoped>
.sig4 {
  font-family: 'Cedarville Cursive', cursive;
  margin-top: -11px;
  padding-bottom: 30px;
}

.sig5 {
  font-family: 'Cedarville Cursive', cursive;

}

.text-content {
  word-break: break-word;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.center-content {
  text-align: center;
}

.img-container {
  padding-top: 80px;
  padding-bottom: 10px;
}

.img-filter {
  filter: brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(-90deg);
}

.text-center {
  text-align: center;
}

.mb-4 {
  padding-bottom: 40px;
}

.sig4 {
  font-family: 'Cedarville Cursive', cursive;
  color: pink;
  font-size: 3em;
  margin-top: -11px;
  padding-bottom: 30px;
}

.form-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  height:40px !important;;
  width:150px!important;

}

@media (width:1024px) {
  .form-button{
   width:120px !important;;
  }}

.form-button:hover {
  background-color: darkred;
}

@media (max-width: 576px) {
  .pr-lg-4, .pl-lg-4 {
    padding-right: 0;
    padding-left: 0;
  }

  .text-content img {
    width: 100%;
    height: auto;
  }

  .form-button {
    width: 100%;
  }
}
</style>
