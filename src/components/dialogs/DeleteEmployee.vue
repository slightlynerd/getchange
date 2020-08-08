<template>
  <b-modal v-model="modalOpen" content-class="af-modal" hide-header hide-footer centered>
    <p class="lead title mb-3">Are you sure you want to delete this employee?</p>
    <form @submit.prevent="onSubmit">
      <div class="text-center">
        <b-button :disabled="loading" type="submit" variant="danger" class="px-4">
          Yes
        </b-button>
        <b-button @click="modalOpen = false" type="button" variant="empty" class="px-4">
          No
        </b-button>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { deleteEmployee } from '../../apis/employee'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      modalOpen: this.opened,
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
      this.loading = true
      try {
        await deleteEmployee(this.id)
        this.$bvToast.toast('Employee deleted successfully', {
          title: 'Notification',
          variant: 'success',
          solid: true
        })
        this.$store.dispatch('getEmployees')
        this.$emit('dialog-closed', false)
      } catch (e) {
        this.loading = false
        this.$bvToast.toast('Failed to delete employee', {
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
