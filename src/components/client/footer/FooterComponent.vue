<template>
  <div class="container-fluid">
    <p class="text-center">
      Copyright © 2023 - All Rights Reserved | Powered By SLIIT MSClub
    </p>
  </div>
</template>

<script>
import LogoImage from "@/assets/Ms-Club.png";

export default {
  name: "FooterComponent",
  data() {
    return {
      logo: LogoImage,
    };
  },
};
</script>

<style scoped></style>
