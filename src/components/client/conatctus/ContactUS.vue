<template>
  <div class="container">
    <div class="row mr-0 d-flex justify-content-center align-items-center">
      <div class="col-6">
        <form id="contactus" method="">
          <div class="row mb-2">
            <div class="col-lg-6 col-sm-12">
              <div class="input-group mb-3">
                <input
                  id="userName"
                  class="form-control"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="input-group mb-3">
                <input
                  id="fName"
                  class="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-12 col-sm-12">
              <div class="input-group mb-3">
                <input
                  id="subject"
                  class="form-control"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-12 col-sm-12">
              <div class="input-group mb-3">
                <textarea
                  id="message"
                  class="form-control"
                  name="Message"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-around mt-4">
            <button id="btnsend" class="btn" type="button">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUS",
};
</script>

<style scoped>
input,
textarea {
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(155, 155, 155, 0.4);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
}

input ::placeholder {
  color: #000000;
}

textarea ::placeholder {
  color: #000000;
}

#btnsend {
  width: 150px;
  height: 45px;
  background: linear-gradient(
    133.59deg,
    #015b08 -1.23%,
    #2cb93b 50.67%,
    #3fff53 105.91%
  );
  border: 3px solid #fafafa;
  box-sizing: border-box;
  border-radius: 26.5px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #fafafa;
  text-align: center;
}
</style>
