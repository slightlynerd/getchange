<template>
  <div class="container-fluid page-layout">
    <b-row class="align-items-center">
      <b-col cols="12" md="5" class="d-none d-md-block hero-image text-white text-center">
        <div class="hero-text">
          <p>No Hazzles</p>
          <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod.</p>
        </div>
      </b-col>
      <b-col cols="12" md="7">
        <slot />
        <b-row class="justify-content-between">
          <b-col cols="12" md="6">
            <p class="footer-text text-center text-md-left mb-3">
              By siging up, you agree to our <span class="emphasize">Terms</span> and <span class="emphasize">Privacy Policy</span>
            </p>
          </b-col>
          <b-col cols="12" md="6">
            <p class="footer-text text-center text-md-right mb-3">
              © 2019 Tinylabs. All rights reserved.
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  mounted () {
    document.body.classList.remove('light')
  }
}
</script>

<style lang="scss" scoped>
.page-layout {
  min-height: 100vh;
  position: relative;

  .hero-image {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(~@/assets/images/man.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hero-text {
    position: absolute;
    bottom: 30px;
    left: 25%;
  }

  .footer-text {
    color: #6A7E8A;
    font-size: 13px;
  }
}
</style>
