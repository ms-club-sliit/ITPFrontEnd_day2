<template>
  <HeaderComponent />
  <main class="mainDiv mt-lg-5 mt-md-4 mt-sm-4 mb-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" v-for="item in items" :key="item.id">
          <ItemCard />
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from "@/components/client/header/HeaderComponent.vue";
import FooterComponent from "@/components/client/footer/FooterComponent.vue";
import ItemCard from "@/components/client/itemcard/ItemCard.vue";

export default {
  name: "ShopPage",
  data() {
    return {
      items: [
        { id: 1, message: "Foo" },
        { id: 2, message: "Bar" },
      ],
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    ItemCard,
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
