<template>
  <div class="background mt-4">
    <div id="greeting" class="container">
      <div style="text-align: center; margin-top: 110px;">
        <img src="/images/nature-removebg-preview.png" alt="" style="filter: brightness(0) invert(1)" />
      </div>
      <div style="padding-top: 15px; font-size: 3em; text-align: center;" class="sig4">Sweet Messages</div>
      <div class="row">
        <div class="col-2 grid-item"></div>
        <div class="col-8 grid-item">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 grid-item">
              <div>
                <div class="message">
                  <div class="astry">
                    <img src="/images/postropy.png" style="height: 20px; width: 20px; filter: invert(100%);" alt="">
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="tooltip-arrow"></div>
                <div style="color: white; margin-top: 20px;">john doe</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 grid-item">
              <div>
                <div class="message">
                  <div class="astry">
                    <img src="/images/postropy.png" style="height: 20px; width: 20px; filter: invert(100%);" alt="">
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="tooltip-arrow"></div>
                <div style="color: white; margin-top: 20px;">john doe</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 grid-item">
              <div>
                <div class="message">
                  <div class="astry">
                    <img src="/images/postropy.png" style="height: 20px; width: 20px; filter: invert(100%);" alt="">
                  </div>
                  <p>Lorem ipsum dolor sit amet, ct5t ggrgrgr guuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuugr grfrrf fgrfrff</p>
                </div>
                <div class="tooltip-arrow"></div>
                <div style="color: white; margin-top: 20px;">john doe</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2 grid-item"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('https://media.istockphoto.com/id/1933364794/photo/groom-and-bride-in-wedding-ceremony-on-the-beach.jpg?s=1024x1024&w=is&k=20&c=gfgGp2KUEggccYwwjip0t8qW4VrsLz5kqZ7iu29CHp0=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 375px) {
  .background {
    height: 1400px !important;
  }
}

@media (width: 768px) {
  .background {
    height: 1200px !important;
  }
}

@media (width: 1024px) {
  .background {
    height: 700px !important;
  }
}

@media (width: 425px) {
  .background {
    height: 1300px !important;
  }
}

.grid-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
}

.tooltip-arrow {
  position: absolute;
  margin-top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
}

.sig4 {
  font-family: 'Cedarville Cursive', cursive;
  color: white;
  margin-top: -11px;
  padding-bottom: 30px;
}

.message {
  background-color: white;
  padding: 30px;
  text-align: left;
}

.astry {
  background-color: red;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  padding-top: 5px;
  margin-top: -50px;
  margin-left: -20px;
}
</style>

<script>
export default {
  data() {
    return {
      // No tooltip visibility logic needed as it's always visible
    };
  },
};
</script>
