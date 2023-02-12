<template>
  <div class="wrapper">
    <AdminHeader />
    <AdminSideBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import AdminHeader from "@/components/admin/header/Header.vue";
import AdminSideBar from "@/components/admin/sidebar/Sidebar.vue";

export default {
  name: "Dash-board",
  components: {
    AdminHeader: AdminHeader,
    AdminSideBar: AdminSideBar,
  },
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
