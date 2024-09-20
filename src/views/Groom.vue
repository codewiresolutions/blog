<template>
    <div id="groom" class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 text-center mt-5">
          <img src="/images/couple.png" style="height:159px;width:140px;" alt="">
          <div class="sig3" style="font-weight: 900;font-size:3em;margin-bottom:40px;">Groom & Bride</div>
          <p style="text-align:justify;margin-bottom:100px;color:gray;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem doloribus inventore expedita maiores adipisci quo optio repudiandae temporibus unde, ab reiciendis delectus praesentium, vero labore iste saepe obcaecati culpa.
          </p>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <div class="row pb-4 pt-4">
        <div class="col-lg-2"></div>
        <div class="col-lg-4 groom">
          <div class="box pl-3 pr-3">
            <img src="/images/groom_1.png" style="height:140px;width:140px;border-radius:50%;margin-top:-70px;" alt="">
            <div class="sig3 pt-4" style="font-weight: 900;font-size:1.9em;margin-bottom:20px;">Loe jel Monshey</div>
            <p style="color: gray;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia asperiores, soluta inventore, possimus et distinctio, nihil repellendus deleniti necessitatibus eveniet a alias quae quisquam eaque tempora tempore placeat sed numquam!</p>
            <div class="icon-container">
              <div class="icon"><i class="fa-solid fa-x"></i></div>
              <div class="icon"><i class="fa-brands fa-facebook-f"></i></div>
              <div class="icon"><i class="fa-brands fa-instagram"></i></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box pl-3 pr-3">
            <img src="/images/bride.jpg" style="height:140px;width:140px;border-radius:50%;margin-top:-70px;" alt="">
            <div class="sig3 pt-4" style="font-weight: 900;font-size:1.9em;margin-bottom:20px;">Monaliza R.taby</div>
            <p style="color: gray;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia asperiores, soluta inventore, possimus et distinctio, nihil repellendus deleniti necessitatibus eveniet a alias quae quisquam eaque tempora tempore placeat sed numquam!</p>
            <div class="icon-container">
              <div class="icon"><i class="fa-solid fa-x"></i></div>
              <div class="icon"><i class="fa-brands fa-facebook-f"></i></div>
              <div class="icon"><i class="fa-brands fa-instagram"></i></div>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .sig3 {
    color: palevioletred;
    font-family: 'Cedarville Cursive', cursive;
    word-wrap: break-word;
  }
  
  .box {
    background-color: #fef5f5;
    border: 1px solid lightgray;
    text-align: center;
    padding: 0 15px;
  }
  
  .icon-container {
    display: flex;
    justify-content: center;
  }
  
  .icon {
    background-color: red;
    height: 35px;
    width: 35px;
    margin-left: 10px;
    border-radius: 50%;
    color: white;
    padding-top: 6px;
    margin-bottom: 20px;
  }
  
  @media (max-width:768px) {
    .groom {
      margin-bottom: 120px;
    }
  }
  </style>
  