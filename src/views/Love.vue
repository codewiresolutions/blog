<template>
  <div id="love" class="mt-4 text-center">
    <img style="margin-top: 120px; height: 120px; width: 120px;" src="/images/ring.png" alt="">
  </div>
  <div style="padding-top:5px; font-size: 3em" class="signature">
    OUR LOVE STORY
  </div>
  <div class="container-fluid image-container">
    <div class="row">
      <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-end pr-0 boxset">
        <div class="box">
          <div style="padding-top: 15px;">
            <h3 class="sign">OUR First Meet</h3>
            <div class="pb-3">10 June, 2017</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ducimus eum qui reiciendis.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
        <div class="image-item">
          <img src="/images/love1.webp"
            alt="Image 1" />
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12"></div>
    </div>
    <div class="row">
      <div class="col-lg-5 col-md-12 col-sm-12"></div>
      <div class="col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
        <div class="image-item">
          <img src="/images/love2.jpeg"
            alt="Image 2" />
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-start pr-0 boxset">
        <div class="box">
          <div style="padding-top: 15px;">
            <h3 class="sign">First Date</h3>
            <div class="pb-3">10 June, 2017</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ducimus eum qui reiciendis.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-end pr-0 boxset">
        <div class="box">
          <div style="padding-top: 15px;">
            <h3 class="sign">In a Relationship</h3>
            <div class="pb-3">10 June, 2017</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ducimus eum qui reiciendis.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
        <div class="image-item">
          <img src="/images/love3.jpeg"
            alt="Image 3" />
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12"></div>
    </div>
    <div class="row">
      <div class="col-lg-5 col-md-12 col-sm-12"></div>
      <div class="col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
        <div class="image-item">
          <img src="/images/love4.jpeg"
            alt="Image 4" />
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-start pr-0 boxset">
        <div class="box">
          <div style="padding-top: 15px;">
            <h3 class="sign">We're Engaged</h3>
            <div class="pb-3">10 June, 2017</div>
            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ducimus eum qui reiciendis.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoveStory',
};
</script>

<style scoped>
.signature {
  font-family: 'Cedarville Cursive', cursive;
  color: pink;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 70px;
}

.sign {
  font-family: 'Cedarville Cursive', cursive;
  color: pink;
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
}

.image-container {
  position: relative;
  margin: 0 auto;
  padding: 50px 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.image-item {
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 150px;
}

.image-item img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 2px solid lightgray;
}

.image-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top:98%;
  width: 2px;
  height: 200px;
  background-color: lightgray;
  transform: translateX(-50%);
}

.box {
  background-color: #FEF5F8;
  width: 100%; /* Ensure the box takes the full width of its column */
  max-width: 300px; /* Cap the width for larger screens */
  padding: 15px;
  text-align: left;
}

@media (max-width: 768px) {
  .box {
    text-align: center; /* Center text on smaller screens */
    margin: 0 auto; /* Center the box on small screens */
  }
  
  .sign {
    text-align: center; /* Center the heading on smaller screens */
  }
}

@media (max-width: 425px) {
  .box {
    width: 100%;
    margin: 0 auto; /* Center the box on small screens */
  }
  
  .image-item {
    margin-bottom: 50px; /* Reduce margin for smaller screens */
  }

  .image-item::before {
    height: 100px; /* Adjust connector line height for smaller screens */
  }
}


@media (max-width: 425px) {
  .boxset{
margin-left:-8px!important;
margin-bottom:50px;
  }}


  @media (max-width:768px) {
  .boxset{

margin-bottom:50px;
  }}

</style>
