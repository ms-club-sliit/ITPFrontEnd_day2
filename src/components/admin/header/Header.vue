<template>
  <div class="top_navbar">
    <div class="hamburger">
      <div class="one" />
      <div class="two" />
      <div class="three" />
    </div>
    <div class="col-12 top_menu">
      <div class="col-6 d-flex justify-content-end">
        <img :src="logo" alt="" width="50" />
      </div>
      <div class="col-5 d-flex justify-content-end">
        <ul class="mb-0">
          <li class="mt-1">
            <p class="d-inline me-2">
              <i aria-hidden="true" class="fa fa-sign-out logoutIcon" />
            </p>
            <p class="d-inline ms-2 me-2 fw-bold profileText">Madhusha</p>
          </li>
          <li>
            <a href="/client">
              <i class="fas fa-user" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logoImage from "@/assets/Ms-Club.png";

export default {
  name: "HeaderComponent",
  data() {
    return {
      logo: logoImage,
    };
  },
};
</script>

<style scoped>
.wrapper .top_navbar {
  width: calc(100% - 20px);

  height: 60px;

  display: flex;

  position: fixed;

  top: 10px;

  left: 10px;

  z-index: 1000;
}

.wrapper .top_navbar .hamburger {
  width: 70px;

  height: 100%;

  background: #2cb93b;

  padding: 15px 17px;

  border-top-left-radius: 20px;

  cursor: pointer;
}

.wrapper .top_navbar .hamburger div {
  width: 35px;

  height: 4px;

  background: #000000;

  margin: 5px 0;

  border-radius: 5px;
}

.wrapper .top_navbar .top_menu {
  width: calc(100% - 70px);

  height: 100%;

  background: #fff;

  border-top-right-radius: 20px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  /*padding: 0 20px;*/

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

/*.wrapper .top_navbar .top_menu .logo {*/

/*    color: #2e4ead;*/

/*    font-size: 20px;*/

/*    font-weight: 700;*/

/*    letter-spacing: 3px;*/

/*}*/

.profileText {
  background: #000000;

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  background-clip: text;

  text-fill-color: transparent;
}

.logoutIcon {
  transform: rotate(180deg);
}

.wrapper .top_navbar .top_menu ul {
  display: flex;
}

.wrapper .top_navbar .top_menu ul li a {
  display: block;

  margin: 0 10px;

  width: 35px;

  height: 35px;

  line-height: 35px;

  text-align: center;

  background: #2cb93b;

  border-radius: 50%;

  color: #ffffff;
}

.wrapper .top_navbar .top_menu ul li a:hover {
  color: #fff;
}

.wrapper .top_navbar .top_menu ul li a:hover i {
  color: #fff;
}
</style>
