<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/admin/">
          <span class="icon"><i class="fa fa-tachometer" /></span>
          <span class="title">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/customers">
          <span class="icon"><i class="fa-solid fa-user-group" /></span>
          <span class="title">Customer</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/items">
          <span class="icon"
            ><i aria-hidden="true" class="fa fa-cutlery"
          /></span>
          <span class="title">Items</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/orders">
          <span class="icon"
            ><i aria-hidden="true" class="fa fa-archive"
          /></span>
          <span class="title">Order</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/reports">
          <span class="icon"><i aria-hidden="true" class="fa fa-book" /></span>
          <span class="title">Reports</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent",
};
</script>

<style scoped>
.wrapper .sidebar {
  position: fixed;
  top: 70px;
  left: 10px;
  background: #2cb93b;
  width: 200px;
  height: calc(100% - 80px);
  border-bottom-left-radius: 20px;
  transition: all 0.3s ease;
  z-index: 1000;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 20px;
  position: relative;
  margin-bottom: 1px;
  color: #000000;
  white-space: nowrap;
}

.wrapper .sidebar ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #9a1b00;
  display: none;
}

.wrapper .sidebar ul li a span.icon {
  margin-right: 10px;
  display: inline-block;
}

.wrapper .sidebar ul li a span.title {
  display: inline-block;
}

.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
  background: linear-gradient(
    133.59deg,
    #e03312 -1.23%,
    #e85435 50.67%,
    #faa395 105.91%
  );
  color: #ffffff;
  font-weight: bold;
}

.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
  display: block;
}

.wrapper.collapse .sidebar {
  width: 70px;
}

.wrapper.collapse .sidebar ul li a {
  text-align: center;
}

.wrapper.collapse .sidebar ul li a span.icon {
  margin: 0;
}

.wrapper.collapse .sidebar ul li a span.title {
  display: none;
}

ul {
  padding-left: 0;
}
</style>
