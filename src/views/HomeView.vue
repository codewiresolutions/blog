<script setup>
import { ref } from 'vue';
import Groom from './Groom.vue';
import Love from './Love.vue';
import Greeting from './Greeting.vue';
import Groommen from './Groommen.vue';
import Femalemaid from './Femalemaid.vue';
import Ceramony from './Ceramony.vue';
import Rsvp from './Rsvp.vue';
import gallery from './gallery.vue';
import blog from './blog.vue';

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;
</script>

<template>
  <div>
    <div class="background">
      <nav class="navbar">
        <div class="navbar-container">
          <button class="navbar-toggle" @click="toggleMenu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div :class="['navbar-menu', { 'is-active': isMenuOpen }]">
            <ul class="navbar-list">
              <div class="navbar-brand sig3">Wedding</div>
              <li class="navbar-item"><a href="#home" @click="closeMenu">Home</a></li>
              <li class="navbar-item"><a href="#groom" @click="closeMenu">Groom & Bride</a></li>
              <li class="navbar-item"><a href="#love" @click="closeMenu">Our Love Story</a></li>
              <li class="navbar-item"><a href="#greeting" @click="closeMenu">Greetings</a></li>
              <li class="navbar-item"><a href="#people" @click="closeMenu">People</a></li>
              <li class="navbar-item"><a href="#ceramony" @click="closeMenu">When and Where</a></li>
              <li class="navbar-item"><a href="#rsvp" @click="closeMenu">Rsvp</a></li>
              <li class="navbar-item"><a href="#gallery" @click="closeMenu">Gallery</a></li>
              <li class="navbar-item"><a href="#blog" @click="closeMenu">Blogs</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="home" class="text-center">
    <img src="/images/nature-removebg-preview.png" alt="Wedding Image" class="home-img" />
    <div class="wedding-title">
      <span class="line-left">__________</span>
      <span>THE WEDDING OF</span>
      <span class="line-right">__________</span>
    </div>
    <div class="navbar-brand sig4">
      Levis Lie & Monialize
    </div>
    <div class="event-date">
      <h6>02. 12. 2017</h6>
    </div>
  </div>
    </div>
    <Groom />
    <Love />
    <Greeting/>
    <Groommen />
    <Femalemaid />
    <Ceramony />
    <Rsvp />
    <gallery />
    <blog />
  </div>
</template>

<style scoped>
.background {
  background-image: url('https://media.istockphoto.com/id/868924246/photo/bride-and-groom-enjoying-in-their-love.webp?b=1&s=612x612&w=0&k=20&c=xQk7MeB-sbr9wUDm7uXnQVYQmvpwsL1Mqi9YYfkpM0s=');
  background-size: cover;
  background-position: center;
  width: 100%!important;
  height: 100vh;
}
.home-img {
  filter: brightness(0) invert(1);
  margin-top: 50px;
}

.wedding-title {
  color: white;
  position: relative;
  word-spacing: 9px;
  margin-top: 20px;
}

.line-left, .line-right {
  position: absolute;
  top: -6px;
}

.line-left {
  margin-left: -80px;
}

.line-right {
  margin-left: 10px;
}

.navbar-brand.sig4 {
  padding-top: 15px;
  font-size: 3em;
}

.event-date {
  color: white;
  word-spacing: 5px;
  margin-top: -30px;
}

@media (max-width:425px) { .background { height: 600px; } }
@media (width:1024px) { .background { height: 600px; } }
@media (width:768px) { .background { height: 600px; } }
@media (max-width:768px) { .navbar-item { margin-top: 30px; } }
.navbar { position: relative; top: 0; left: 0; width: 100%; background: none; z-index: 1000; }
.navbar-container { display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
.sig3 { margin-left: 200px; font-family: 'Cedarville Cursive', cursive; font-size: 1.8em; color: white; margin-top: -11px; margin-right: 100px; }
@media (width:1024px) { .sig3 { margin-left: 60px; margin-right: 50px; } }
.sig4 { font-family: 'Cedarville Cursive', cursive; color: white; margin-top: -11px; }
@media (max-width:375px) { .sig4 { margin-top: 30px; font-size: 15px; word-spacing: 2px; } }
@media (max-width:320px) { .sig4 { margin-top: 30px; font-size: 5px; word-spacing: 2px; } }
@media (max-width:425px) { .sig4 { margin-top: 30px; font-size: 35px!important; word-spacing: 2px; } }
.navbar-brand { font-size: 1.5rem; font-weight: bold; white-space: normal; }
.navbar-toggle { display: none; background: transparent; border: none; cursor: pointer; font-size: 1.5rem; }
.navbar-toggler-icon::before { content: '\2630'; }
.navbar-menu { display: flex; padding-top: 20px; }
.navbar-list { list-style: none; display: flex; gap: 1rem; margin-left: -100px; }
.navbar-item a { text-decoration: none; color: lightgray; padding: 0.2rem 0.2rem; border-radius: 4px; transition: background-color 0.3s; text-align: left; }
.navbar-item a:hover { background-color: rgba(0, 0, 0, 0.1); }
.is-active { display: block; }
@media (max-width:768px) {
  .navbar-menu { display: none; flex-direction: column; width: 100%; background: black; position: absolute; top: 60px; left: 0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center; }
  .navbar-menu.is-active { display: flex; }
  .navbar-toggle { display: block; }
  .navbar-list { display: flex; flex-direction: column; gap: 0; padding: 0; margin: 0; }
  .navbar-item a { padding-top: 30px; padding-bottom: 30px; }
  .navbar-brand { padding-top: 40px; margin: 0 auto; }
}


</style>
