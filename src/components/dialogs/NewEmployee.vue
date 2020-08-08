<template>
  <b-modal v-model="modalOpen" content-class="af-modal" hide-header hide-footer centered>
    <form @submit.prevent="onSubmit">
      <p class="lead mb-4">Add New Employee</p>
      <b-form-input v-model="firstName" type="text" class="af-input-field mb-4" placeholder="First Name" required></b-form-input>
      <b-form-input v-model="lastName" type="text" class="af-input-field mb-4" placeholder="Last Name" required></b-form-input>
      <b-form-input v-model="email" type="email" class="af-input-field mb-4" placeholder="Email" required></b-form-input>
      <b-form-input v-model="phone" type="number" class="af-input-field mb-4" placeholder="Phone Number" required></b-form-input>
      <select v-model="role" class="custom-select mb-4 w-100">
        <option selected disabled value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
      </select>
      <b-button :disabled="loading" type="submit" variant="primary" class="w-100">
        Save
      </b-button>
    </form>
  </b-modal>
</template>

<script>
import { addEmployee } from '../../apis/employee'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modalOpen: this.opened,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: '',
      loading: false
    }
  },
  watch: {
    opened (val) {
      this.modalOpen = val
    },
    modalOpen (val) {
      if (!val) {
        this.$emit('dialog-closed', false)
      }
    }
  },
  methods: {
    async onSubmit () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        role: this.role
      }
      this.loading = true
      try {
        await addEmployee(payload)
        this.$bvToast.toast('Employee added successfully', {
          title: 'Notification',
          variant: 'success',
          solid: true
        })
        this.loading = false
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.role = ''
        this.$store.dispatch('getEmployees')
        this.$emit('dialog-closed', false)
      } catch (e) {
        this.loading = false
        this.$bvToast.toast('Failed to add new employee', {
          title: 'Notification',
          variant: 'danger',
          solid: true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
