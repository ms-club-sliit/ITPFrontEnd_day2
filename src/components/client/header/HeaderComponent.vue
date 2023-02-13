<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <div class="mt-3 mt-lg-0 mt-md-3 mt-sm-5">
          <img :src="logo" alt="logo" width="50" />
        </div>
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul
            class="navbar-nav text-center text-md-center text-sm-center m-auto me-lg-6 mb-2 mb-lg-0 col-lg-9 d-lg-flex justify-content-lg-center align-item-lg-center"
          >
            <li class="nav-item">
              <router-link
                aria-current="page"
                class="nav-link fw-bold active"
                to="/"
                >Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/shop"
                >Shop
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="/#contactUs">Contact Us </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoImage from "@/assets/Ms-Club.png";

export default {
  name: "HeaderComponent",
  data() {
    return {
      logo: LogoImage,
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 55px;
  background: #ffffff;
}

#logo {
  margin-top: 10px;
  height: 40px;
}

.active {
  background: linear-gradient(
    180deg,
    #c5dcff 0%,
    rgba(197, 220, 255, 0.5) 96.87%,
    rgba(196, 196, 196, 0) 100%
  );
  border-radius: 5px;
  font-family: "Roboto";
  font-weight: bold;
}

.navLink {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
</style>
