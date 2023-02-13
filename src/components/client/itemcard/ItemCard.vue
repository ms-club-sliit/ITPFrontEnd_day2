<template>
  <div class="col-md-4">
    <div class="card">
      <img alt="..." class="card-img-top" :src="logo" height="150" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a class="btn btn-primary" href="#">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import LogoImage from "@/assets/Ms-Club.png";
export default {
  name: "ItemCard",
  data() {
    return {
      logo: LogoImage,
    };
  },
};
</script>

<style scoped></style>
