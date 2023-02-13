<template>
  <div>
    <HeaderComponent />
    <main class="mainDiv mt-lg-5 mt-md-4 mt-sm-4 mb-3">
      <ContactUS />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/client/header/HeaderComponent.vue";
import FooterComponent from "@/components/client/footer/FooterComponent.vue";
import ContactUS from "@/components/client/conatctus/ContactUS.vue";

export default {
  name: "LandingPage",
  components: {
    ContactUS,
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
