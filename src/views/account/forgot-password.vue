<script>
import { authMethods } from "@/state/helpers";
import appConfig from "../../../app.config";

import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Lottie from "@/components/widgets/lottie.vue";

import animationData from "@/components/widgets/rhvddzym.json";
export default {
  components: { lottie: Lottie },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    email: {
      required: helpers.withMessage("Bạn phải nhập emal", required),
      email: helpers.withMessage("Email không hợp lệ", email),
    },
  },
  page: {
    title: "Forgot Password",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      email: "",
      submitted: false,
      error: null,
      tryingToReset: false,
      isResetError: false,
      defaultOptions: { animationData: animationData },
    };
  },
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToReset = true;
          // Reset the authError if it existed.
          this.error = null;
          return (
            this.resetPassword({
              email: this.email,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToReset = false;
                this.isResetError = false;
              })
              .catch((error) => {
                this.tryingToReset = false;
                this.error = error ? error : "";
                this.isResetError = true;
              })
          );
        }
      }
    },
  },
};
</script>
<template>
  <div class="auth-page-wrapper pt-5">
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120">
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
    </div>

    <div class="auth-page-content">
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="text-center mb-4 text-white-50">
              <div>
                <router-link to="/" class="d-inline-block auth-logo">
                  <b-row style="margin: 0 -0.6rem;">
                    <b-col class="p-2">
                        <b-img src="https://picsum.photos/250/250/?image=54" alt="" class="rounded avatar-lg"></b-img>
                    </b-col>
                    <b-col class="p-2">
                        <b-img src="https://picsum.photos/250/250/?image=54" alt="" class="rounded avatar-lg"></b-img>
                    </b-col>
                    <b-col class="p-2">
                        <b-img src="https://picsum.photos/250/250/?image=54" alt="" class="rounded avatar-lg"></b-img>
                    </b-col>
                    <b-col class="p-2">
                        <b-img src="https://picsum.photos/250/250/?image=54" alt="" class="rounded avatar-lg"></b-img>
                    </b-col>
                </b-row>
                </router-link>
              </div>
              <p class="mt-3 fs-15 fw-medium">
                Nền tảng báo cáo số liệu quảng cáo thực tế dành cho khách hàng.
              </p>
            </div>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col md="8" lg="6" xl="5">
            <b-card no-body class="mt-4">
              <b-card-body class="p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Quên mật khẩu</h5>
                  <p class="text-muted">Đặt lại mật khẩu với Adsplus</p>

                  <lottie class="avatar-xl" colors="primary:#0ab39c,secondary:#405189" :options="defaultOptions"
                    :height="120" :width="120" />

                </div>

                <div class="p-2">
                  <b-alert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{ error }}</b-alert>
                  <form @submit.prevent="tryToReset">
                    <div class="mb-4">
                      <label class="form-label">Email</label>
                      <input type="email" v-model="email" class="form-control" id="email"
                        :class="{ 'is-invalid': submitted && v$.email.$errors.length > 0 }" placeholder="Nhập email của bạn" @blur="tryToReset" @keydown="tryToReset"  />
                      <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <div class="text-center mt-4">
                      <b-button variant="success" class="w-100" type="submit">
                        Gứi
                      </b-button>
                    </div>
                  </form>
                </div>
              </b-card-body>
            </b-card>

            <div class="mt-4 text-center">
              <p class="mb-0">
                Tôi đã nhớ lại mật khẩu của mình...
                <router-link to="/login" class="fw-semibold text-primary text-decoration-underline">
                  Đăng nhập
                </router-link>
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <footer class="footer">
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="text-center">
              <p class="mb-0 text-muted">
                &copy; {{ new Date().getFullYear() }} Velzon. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
