<template>
  <main class="mb-5">
    <h1 class="text-24 text-center text-md-left">Create your free account</h1>
    <p class="hint mb-4 text-center text-md-left">Already registered? <span class="emphasize">Sign in</span></p>
    <b-card class="shadow border-0">
      <form @submit.prevent="onSubmit">
        <b-row>
          <b-col cols="12" md="6">
            <!-- firstname -->
            <b-form-group class="af-input">
              <label for="firstname" class="af-input-label">First Name</label>
              <b-input-group class="mb-3">
                <b-form-input id="firstName" v-model="payload.firstName" class="af-input-field" required></b-form-input>
                <template v-slot:append>
                  <b-input-group-text class="af-input-append">
                    <span class="icon-user"></span>
                  </b-input-group-text>
                </template>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <!-- lastname -->
            <b-form-group class="af-input">
              <label for="lastname" class="af-input-label">Last Name</label>
              <b-input-group class="mb-3">
                <b-form-input id="lastname" v-model="payload.lastname" class="af-input-field" required></b-form-input>
                <template v-slot:append>
                  <b-input-group-text class="af-input-append">
                    <span class="icon-user"></span>
                  </b-input-group-text>
                </template>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- email -->
        <b-form-group class="af-input">
          <label for="email" class="af-input-label">Email Address</label>
          <b-input-group class="mb-3">
            <b-form-input id="email" v-model="payload.email" type="email" class="af-input-field" required></b-form-input>
            <template v-slot:append>
              <b-input-group-text class="af-input-append">
                @
              </b-input-group-text>
            </template>
          </b-input-group>
        </b-form-group>
        <!-- password -->
        <b-form-group class="af-input">
          <label for="password" class="af-input-label">Password</label>
          <b-input-group class="mb-3">
            <b-form-input id="password" v-model="payload.password" :type="passwordHidden ? 'password' : 'text'" class="af-input-field" required></b-form-input>
            <template v-slot:append>
              <b-input-group-text @click="passwordHidden = !passwordHidden" class="af-input-append">
                <span class="icon-eye"></span>
              </b-input-group-text>
            </template>
          </b-input-group>
        </b-form-group>
        <b-row class="align-items-center justify-content-end no-gutters">
          <b-button variant="primary" class="mt-4" type="submit">Continue</b-button>
        </b-row>
      </form>
    </b-card>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: 'Signup',
    titleTemplate: '%s | GetChange'
  },
  data () {
    return {
      terms: false,
      loading: false,
      passwordHidden: true,
      payload: {
        firstName: '',
        lastname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/employees')
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 3rem;

  form {
    padding: 1.5rem;

    button[type="submit"] {
      width: 45%;
    }
  }
}
.shadow {
  box-shadow: 0px 20px 50px #EAEEE9;
}
@media screen and (max-width: 767px) {
  main {
    padding: 1rem;

    form {
      padding: 0.3rem;

      button[type="submit"] {
        width: 75%;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  main {
    form {
      button[type="submit"] {
        width: 100%;
      }
    }
  }
}
</style>
