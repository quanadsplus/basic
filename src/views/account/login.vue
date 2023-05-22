<script>
import {
    required,
    email,
    helpers
} from "@vuelidate/validators";

import {
    reactive
} from 'vue'
import {
    useVuelidate
} from '@vuelidate/core'
import appConfig from "../../../app.config";


import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
    setup() {
        const initialState = {
            email: 'admin@themesbrand.com',
            password: '123456',
            success: false
        }
        const rules = {
            email: {
                required: helpers.withMessage("ID đăng nhập là bắt buộc.", required),
                email: helpers.withMessage("Bạn vui lòng nhập E-Mail.", email),
            },
            password: {
                required: helpers.withMessage("Mật khẩu là bắt buộc.", required),
            },
        }
        const state = reactive({
            ...initialState,
        })
        const v$ = useVuelidate(rules, state)

        const store = useStore()
        const router = useRouter()

        async function signinapi() {
        v$.value.$validate()
            if (v$.value.$invalid) {
                return;

            } else {
              state.success = true
              const respone = await store.dispatch("authentication/loginEmailPassword",{email: state.email,password: state.password})
              respone && router.push("/");
            }

        }
        return {
            v$,
            state,
            signinapi,
            router,
        }
    },
    page: {
        title: "Login",
        meta: [{
            name: "description",
            content: appConfig.description,
        }, ],
    },

};
</script>

<template>
<div class="auth-page-wrapper pt-3">
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div class="bg-overlay"></div>

        <div class="shape">

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg>
        </div>
        <Particles id="tsparticles" :options="{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.2,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: '#b61924',
          background_image: '',
          background_position: '50% 50%',
          background_repeat: 'no-repeat',
          background_size: 'cover',
        },
      }" />
    </div>

    <div style="pb-2">
        <b-container>
            <b-row class="">
                <b-col lg="12">
                    <div class="text-center  text-white-50">
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
                        <p class="mt-1 fs-15 fw-medium">
                            Nền tảng báo cáo số liệu quảng cáo thực tế dành cho khách hàng.
                        </p>

                    </div>
                </b-col>
            </b-row>

            <b-row class="justify-content-center">
                <b-col md="8" lg="6" xl="5" style="z-index: 1 !important;">
                    <b-card no-body class="mt-2">
                        <b-card-body class="p-4">
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Chào mừng đến với Adsplus</h5>
                                <p class="text-muted">Tiếp tục đăng nhập để thay đổi số liệu QC</p>
                            </div>
                            <div class="p-2 mt-4">

                                <div>

                                </div>

                                <form>
                                    <div class="mb-2">
                                        <label for="email" class="form-label">ID Đăng nhập</label>
                                        <input type="email" class="form-control" :class="{ 'is-invalid': v$.email.$error, 'active':v$.email.$error}" @input="v$.email.$touch" @blur="v$.email.$touch" placeholder="Enter email" v-model="state.email" />
                                        <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                                            <span v-if="item.$message">{{ item.$message }}</span>
                                        </div>
                                        <div class="float-end">
                                            <router-link to="/forgot-password" class="text-muted">Quên ID?</router-link>
                                        </div>
                                        <div class="invalid-feedback">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div class="mb-3">

                                        <label class="form-label" for="password-input">Mật khẩu</label>
                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                            <input type="password" v-model="state.password" @input="v$.password.$touch" @blur="v$.password.$touch" class="form-control pe-5" placeholder="Enter password" :class="{ 'is-invalid': v$.password.$error}" id="password-input" />
                                            <div v-for="(item, index) in v$.password.$errors" :key="index" class="invalid-feedback">
                                                <span v-if="item.$message">{{ item.$message }}</span>
                                            </div>
                                            <b-button variant="link" class="position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon">
                                                <i class="ri-eye-fill align-middle"></i>
                                            </b-button>

                                        </div>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                        <label class="form-check-label" for="auth-remember-check">Lưu thông tin đăng nhập</label>
                                        <div class="float-end">
                                            <router-link to="/forgot-password" class="text-muted">Quên mật khẩu?</router-link>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                      <div v-if="state.success">
                                        <button type="button" class="btn w-100 btn-success btn-load">
                                          <span class="d-flex align-items-center">
                                              <span class="spinner-border flex-shrink-0" role="status">
                                                  <span class="visually-hidden">Loading...</span>
                                              </span>
                                              <span class="flex-grow-1 ms-2">
                                                  Loading...
                                              </span>
                                          </span>
                                      </button>
                                      </div>
                                        <div v-else>
                                            <b-button variant="success" class="w-100" type="submit" @click.prevent="signinapi">
                                                Đăng nhập
                                            </b-button>
                                        </div>
                                        
                                        
                                    </div>

                                    <div class="mt-4 text-center">
                                        <div class="signin-other-title">
                                            <h5 class="fs-13 mb-4 title">Đăng nhập với</h5>
                                        </div>
                                        <div>
                                            <b-button variant="primary" type="button" class="btn btn-primary btn-icon">
                                                <i class="ri-facebook-fill fs-16"></i>
                                            </b-button>
                                            <b-button variant="danger" type="button" class="btn btn-danger btn-icon ms-1">
                                                <i class="ri-google-fill fs-16"></i>
                                            </b-button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </b-card-body>
                    </b-card>

                    <div class="mt-4 text-center">
                        <p class="mb-0">
                            Chưa có thông tin đăng nhập !
                            <!-- <router-link to="/register" class="fw-semibold text-primarytext-decoration-underline">
                                Nhận thông tin qua E-mail
                            </router-link> -->
                        </p>
                        <span>(Dành cho <strong>khách hàng Adsplus</strong> đang sử dụng dịch vụ tại adsplus)</span>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <!-- Load More Buttons -->

</div>
</template>

<style scoped>
.is-invalid {
    background-image: none;
}
</style>
