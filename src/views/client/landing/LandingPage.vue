<template>
  <div>
    <HeaderComponent />
    <main class="mainDiv mt-lg-2 mt-md-4 mt-sm-4">
      <h1>Hello</h1>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/client/header/HeaderComponent.vue";
import FooterComponent from "@/components/client/footer/FooterComponent.vue";

export default {
  name: "LandingPage",
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
  },
};
</script>

<style scoped>
@media screen and (max-device-width: 425px) {
  .mainDiv {
    margin-top: 28px;
    height: auto;
  }
}
</style>
