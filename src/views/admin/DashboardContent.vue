<template>
  <div className="main_container">
    <h1 class="mb-2">Dashboard</h1>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente
      adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae
      aspernatur!
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardContent",
};
</script>

<style scoped>
.wrapper .main_container {
  width: calc(99.3% - 200px);
  margin-top: 70px;
  margin-left: 200px;
  padding: 15px 20px 15px 25px;
  transition: all 0.3s ease;
}

.wrapper .main_container .item:nth-child(1) {
  z-index: -10;
  background: #ffffff;
  border-radius: 15px;
}

.wrapper .main_container .item {
  border-radius: 15px;
  background: #ffffff;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 14px;
  line-height: 22px;
}

.wrapper.collapse .main_container {
  width: calc(100% - 70px);
  margin-left: 70px;
}
</style>
