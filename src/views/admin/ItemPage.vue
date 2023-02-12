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
                  <img
                    id="ProfileImage"
                    alt=""
                    class="imgDiv"
                    src="client_profilePicture"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input
                class="form-control"
                placeholder="First Name"
                type="text"
              />
              <small
                id="client_FirstName"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
            <div class="col">
              <input class="form-control" placeholder="Last Name" type="text" />
              <small
                id="client_LastName"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input
                class="form-control"
                placeholder="Mobile Number"
                type="tel"
              />
              <small
                id="client_Mobile"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <textarea class="form-control" placeholder="Address" />
              <small
                id="client_Address"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <select aria-label="role" class="form-select" name="gender">
                <option disabled selected value="0">Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              <small
                id="client_Gender"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
            <div class="col">
              <select aria-label="role" class="form-select" name="status">
                <option disabled selected value="0">Status</option>
                <option value="1">Online</option>
                <option value="2">Offline</option>
              </select>
              <small
                id="client_Status"
                class="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
          </div>
          <div class="row mt-5">
            <div class="d-flex justify-content-around align-items-center">
              <button class="btn btnRegister" type="button">Register</button>
              <button class="btn btnUpdate" type="button">Update</button>
              <button class="btn btnDelete" type="button">Delete</button>
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
                class="form-control col-8 me-5"
                placeholder="ID"
                type="text"
              />
            </div>
            <div>
              <input
                class="form-control btnSearch text-white"
                type="button"
                value="Search"
              />
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <table id="assignLabsTable" class="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Profile Picture</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemPage",
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
