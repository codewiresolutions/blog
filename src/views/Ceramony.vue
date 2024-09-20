<template>
  <div id="ceramony" class="container">
    <div style="text-align: center;" class="row">
      <div style="padding-top: 80px;padding-bottom:10px;" class="col-12 ">
        <img src="/images/nature-removebg-preview.png" alt=""
          style="filter: brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(-90deg);" />
      </div>
    </div>
    <div style="padding-bottom:40px;text-align: center;" class="row">
      <div style="color: pink; font-size: 3em;" class="col-12 sig4">The Ceramony Party</div>
      <div class="col-4"></div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <p class="sig4">Hey, here are some of the friends of the groom.o align all text </p>
      </div>
    </div>
    <div class="row p-0 justify-content-center">
      <div style="text-align: center;" class="col-lg-5 col-md-12 col-sm-12 p-0 m-3">
        <div><img style="width: 100%; height: 250px" src="/images/ceramony1.jpeg" alt="" /></div>
        <div class="mt-3 p-2" style="background-color:#F4F2E3;">
          <div class="row">
            <div class="col-12 sig4 text-center pt-5" style="color: pink; font-size:2em">Wedding ceremony</div>
            <div class="col-2"></div>
            <div class="col-3">
              <div><div>Saturday</div><div>2 Dec 2017</div></div>
            </div>
            <div class="col-2">
              <div class="heart"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div class="col-3">
              <div><div>10:am</div><div>11:am</div></div>
            </div>
          </div>
          <div class="pt-4 text-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
            itaque nesciunt aspernatur nisi asperiores quisquam dolorum praesentium, minima ullam delectus nobis
            explicabo temporibus sit vero id modi corporis tempora architecto.
          </div>
          <button style="background-color: red;color: white;margin-top:30px;border: none;margin-bottom:30px;padding-top:5px;padding-bottom:5px;">Change Mode</button>
        </div>
      </div>
      <div style="text-align: center;" class="col-lg-5 col-md-12 col-sm-12 p-0 m-3">
        <div><img style="width: 100%; height: 250px" src="/images/ceramony1.jpeg" alt="" /></div>
        <div class="mt-3 p-2" style="background-color:#F4F2E3;">
          <div class="row">
            <div class="col-12 sig4 text-center pt-5" style="color: pink; font-size:2em">Wedding ceremony</div>
            <div class="col-2"></div>
            <div class="col-3">
              <div><div>Saturday</div><div>2 Dec 2017</div></div>
            </div>
            <div class="col-2">
              <div class="heart"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div class="col-3">
              <div><div>10:am</div><div>11:am</div></div>
            </div>
          </div>
          <div class="pt-4 text-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
            itaque nesciunt aspernatur nisi asperiores quisquam dolorum praesentium, minima ullam delectus nobis
            explicabo temporibus sit vero id modi corporis tempora architecto.
          </div>
          <button style="background-color: red;color: white;margin-top:30px;border: none;margin-bottom:30px;padding-top:5px;padding-bottom:5px;">Change Mode</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-wrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.sig4 {
  font-family: 'Cedarville Cursive', cursive;
  margin-top: -11px;
  padding-bottom: 30px;
}

.heart {
  height: 40px;
  width: 40px;
  color: white;
  background-color: red;
  border-radius: 50%;
  text-align: center;
  padding-top: 7px;
}

@media (max-width: 768px) {
  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .col-4,
  .col-lg-4,
  .col-md-12,
  .col-sm-12 {
    padding: 0;
  }
}
</style>
