<template>
  <div class="main_container">
    <h1 class="mb-2">Item Page</h1>
    <div class="item">
      <div class="row mt-5 ps-3">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="row">
              <div class="d-flex justify-content-start align-items-center">
                <button id="btn-generate-report" class="btn me-3">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 px-3">
        <form id="clientForm">
          <div class="row">
            <div class="col d-flex justify-content-end align-items-center">
              <div class="col d-flex justify-content-end">
                <div>
                  <button id="btnAddImg" class="btn btnAddImg" type="button">
                    <i aria-hidden="true" class="fa fa-plus text-white" />
                  </button>
                  <button id="btnEditImg" class="btn btnEditImg" type="button">
                    <i class="fa-solid fa-pen text-white" />
                  </button>
                  <button
                    id="btnImgDelete"
                    class="btn btnImgDelete"
                    type="button"
                  >
                    <i class="fa-solid fa-trash-can d-inline text-white" />
                  </button>
                </div>
              </div>
              <div id="imgInputDiv">
                <div>
                  <img id="ProfileImage" :src="itemImg" alt="" class="imgDiv" />
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input
                v-model="itemName"
                class="form-control"
                placeholder="Item Name"
                type="text"
              />
              <small
                id="itemName"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <textarea
                v-model="description"
                class="form-control"
                placeholder="Description"
              />
              <small
                id="itemDescription"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input
                v-model="qtyOnHand"
                class="form-control"
                placeholder="Item Quantity"
                type="text"
              />
              <small
                id="itemName"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
            <div class="col d-flex">
              <span
                id="basic-addon1"
                class="input-group-text bg-black d-inline text-black"
                >RS:
              </span>
              <input
                id="price"
                v-model="unitPrice"
                class="form-control d-inline"
                name="price"
                placeholder="Price"
                type="text"
              />
            </div>
            <small
              class="d-block text-danger form-text invalid-feedback"
              for="patientName"
              name="charge"
            ></small>
          </div>
          <div class="row mt-5">
            <div class="d-flex justify-content-around align-items-center">
              <button class="btn btnRegister" type="button" @click="addItem">
                Register
              </button>
              <button class="btn btnUpdate" type="button" @click="updateItem">
                Update
              </button>
              <button
                class="btn btnDelete"
                type="button"
                @click="deleteItemByItemCode"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="row mt-5 px-3">
        <div class="col-6">
          <h6 class="mb-2 fw-bold mt-2">Customer List</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="col-6">
          <div class="d-flex justify-content-end align-items-center">
            <div class="d-flex justify-content-center align-items-center">
              <input
                id="searchID"
                v-model="itemCode"
                class="form-control col-8 me-5"
                placeholder="Item Code"
                type="text"
                @change="searchItemByCharacter"
              />
            </div>
            <div>
              <input
                class="form-control btnSearch text-white"
                type="button"
                value="Search"
                @click="searchItemByItemCode"
              />
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <table id="assignLabsTable" class="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">itemCode</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Image</th>
                <th scope="col">Item description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Mobile</th>
                <th scope="col">Unit Price</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in itemList" :key="item.itemCode">
                <td>{{ item.itemCode }}</td>
                <td>{{ item.itemName }}</td>
                <td>
                  <img :src="item.itemImg" alt="profileImage" height="50" />
                </td>
                <td>{{ item.description }}</td>
                <td>{{ item.qtyOnHand }}</td>
                <td>{{ item.unitPrice }}</td>
                <td>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="editItem(item)"
                    >
                      <i class="fa-solid fa-pen text-black" />
                    </button>
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="deleteItem(item)"
                    >
                      <i class="fa-solid fa-trash-can d-inline text-black" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sweetalert from "sweetalert2";

export default {
  name: "ItemPage",
  data() {
    return {
      itemList: [],
      id: "",
      itemCode: "",
      itemName: "",
      itemImg:
        "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      description: "",
      qtyOnHand: 0,
      unitPrice: 0.0,
    };
  },
  mounted() {
    this.getAllItems();
  },

  methods: {
    addItem() {
      const updatedItem = {
        itemCode: this.itemCode,
        itemName: this.itemName,
        itemImg: this.itemImg,
        description: this.description,
        qtyOnHand: this.qtyOnHand,
        unitPrice: this.unitPrice,
      };
      axios
        .put("http://localhost:3001/api/item/", updatedItem)
        .then((response) => {
          sweetalert.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            title: response.data.message,
            icon: "success",
          });
          this.clearTextFeilds();
          this.getAllItems();
        });
    },

    getAllItems() {
      axios.get("http://localhost:3001/api/item").then((response) => {
        this.itemList = response.data;
      });
    },

    deleteItem(item) {
      axios
        .delete("http://localhost:3001/api/item/" + item._id)
        .then((response) => {
          sweetalert.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            title: response.data.message,
            icon: "success",
          });
          this.clearTextFeilds();
          this.getAllItems();
        });
    },

    deleteItemByItemCode() {
      axios
        .delete("http://localhost:3001/api/item/delete/" + this.itemCode)
        .then((response) => {
          console.log(response);
          this.getAllItems();
          this.clearTextFeilds();
        });
    },

    editItem(item) {
      this.id = item._id;
      this.itemCode = item.itemCode;
      this.itemName = item.itemName;
      this.itemImg = item.itemImg;
      this.description = item.description;
      this.qtyOnHand = item.qtyOnHand;
      this.unitPrice = item.unitPrice;
    },

    updateItem() {
      const updatedItem = {
        itemCode: this.itemCode,
        itemName: this.itemName,
        itemImg: this.itemImg,
        description: this.description,
        qtyOnHand: this.qtyOnHand,
        unitPrice: this.unitPrice,
      };
      axios
        .put("http://localhost:3001/api/item/" + this.itemCode, updatedItem)
        .then((response) => {
          console.log(response.data.message);
          sweetalert.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            title: response.data.message,
            icon: "success",
          });
          this.getAllItems();
          this.clearTextFeilds();
        });
    },

    searchItemByCharacter(event) {
      axios
        .get("http://localhost:3001/api/item/search/" + event.target.value)
        .then((response) => {
          console.log(response.data);
          this.itemList = [];
          this.itemList.push(response.data);
        });
    },
    searchItemByItemCode() {
      axios
        .get("http://localhost:3001/api/item/search/" + this.itemCode)
        .then((response) => {
          console.log(response.data);
          this.itemList = [];
          this.itemList.push(response.data);
        });
    },

    clearTextFeilds() {
      this.id = "";
      this.itemCode = "";
      this.itemName = "";
      this.itemImg = "";
      this.description = "";
      this.qtyOnHand = "";
      this.unitPrice = "";
    },
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

#btn-generate-report {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  border: 3px solid rgba(0, 0, 0, 0.24);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  filter: drop-shadow(2px 5px 4px rgba(199, 199, 199, 0.25));
  width: 232px;
  height: 49px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
}

.btnSearch {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  border: 3px solid rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
}

.imgDiv {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  box-sizing: border-box;
  width: 209px;
  height: 208px;
}

.btnRegister {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  border: 3px solid rgba(0, 0, 0, 0.24);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  box-sizing: border-box;
  width: 128px;
  height: 49px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
}

.btnUpdate {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  border: 3px solid rgba(0, 0, 0, 0.24);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  box-sizing: border-box;
  width: 128px;
  height: 49px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
}

.btnDelete {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  border: 3px solid rgba(0, 0, 0, 0.24);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  box-sizing: border-box;
  width: 128px;
  height: 49px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
}

.btnAddImg {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  width: 31px;
  height: 31px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.btnEditImg {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  width: 31px;
  height: 31px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.btnImgDelete {
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  width: 31px;
  height: 31px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
</style>
