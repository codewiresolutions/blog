<template>
  <div id="rsvp" class="form-container">
    <div style="text-align: center;padding-top:90px;padding-bottom:10px;">
      <img src="/images/nature-removebg-preview.png" alt="" style="filter: brightness(0) invert(1)" />
    </div>
    <div style="font-size: 3em;text-align: center;" class="sig4">
     you Are Invited
    </div>
    <div style="text-align: center;">
      <p class="text-wrap sig4">
        Hey, here are some of the friends of the groom. And this is the ceremony party,
      </p>
    </div>
    <form class="form-inline">
      <input style="width: 230px;" type="text" placeholder="Name" class="form-input inspace" />
      <input style="width: 230px;" type="email" placeholder="Email" class="form-input inspace " />
      <button style="width: 230px;" type="submit" class="form-button">I am attending</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AttendingForm',
};
</script>

<style scoped>
.form-container {
  background-color: gray;
  padding: 20px;
  text-align: center;
  height: 100vh;
}

@media (max-width:375px) {
  .form-container {
    height: 850px;
  }
}

@media (width:768px) {
  .form-container {
    height: 550px;
  }
}


@media (width:425px) {
  .form-container {
    height: 850px;
  }
}
@media (width:1024px) {
  .form-container {
    height: 550px;
  }
}

@media (max-width:425px) {
  .inspace {
    margin-bottom: 40px;
  }
}




.form-inline {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-input {
  background-color: lightgray;
  color: white;
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  width: 150px;
}

.form-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: darkred;
}

.sig4 {
  font-family: 'Cedarville Cursive', cursive;

  color: white;
  margin-top: -11px;
  padding-bottom: 30px;
}
</style>