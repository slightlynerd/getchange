<template>
  <main class="container-fluid">
    <b-row class="align-items-center">
      <b-col cols="6">
        <p class="page-title text-20 mb-0">Employees</p>
      </b-col>
      <b-col cols="6" class="text-right">
        <b-button @click="addEmployeeModal = true" variant="primary" class="px-4" type="submit">Add New</b-button>
        <NewEmployee :opened="addEmployeeModal" @dialog-closed="addEmployeeModal = false" />
      </b-col>
    </b-row>
    <div class="bg-white text-center curved-edge my-4 py-4 px-3">
      <b-row class="no-gutters justify-content-between">
        <p class="text-28 text-md-left title">Josh Bakery Ventures</p>
        <p class="text-20 text-md-right">62, Bode Thomas, Surulere, Lagos</p>
      </b-row>
    </div>
    <b-row>
      <b-col cols="12" md="9" class="mt-4">
        <b-row class="no-gutters">
          <select v-model="role" class="custom-select mr-3">
            <option selected disabled value="">Change Role</option>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
          <div class="mr-3">
            <b-button @click="changeRole" :disabled="loading" class="px-4" variant="primary" type="submit" size="lg">
              <b-spinner v-if="loading" class="align-middle"></b-spinner>
              <span v-else>Change</span>
            </b-button>
          </div>
          <b-form-group class="af-input d-none d-md-block">
            <b-input-group class="mb-3">
              <b-form-input v-model="filter" class="af-input-field" required></b-form-input>
              <template v-slot:append>
                <b-input-group-text class="af-input-append">
                  <span class="icon-magnifier"></span>
                </b-input-group-text>
              </template>
            </b-input-group>
          </b-form-group>
        </b-row>
      </b-col>
      <b-col cols="12" md="3" class="d-none d-md-block text-right mt-4">
        <span class="mr-2">{{ currentPage }} of {{ Math.ceil(pagesTotal / perPage) >= 1 ? Math.ceil(pagesTotal / perPage) : 1 }}</span>
        <b-button
          @click="goToPreviousPage"
          variant="primary"
          class="rounded-circle mr-2"
          size="sm"
        >
          <i class="icon-arrow-left"></i>
        </b-button>
        <b-button
          @click="goToNextPage"
          variant="primary"
          class="rounded-circle"
          size="sm"
        >
          <i class="icon-arrow-right"></i>
        </b-button>
      </b-col>
    </b-row>
    <!-- table -->
    <b-table
      id="af-table"
      :items="employees"
      :fields="fields"
      :tbody-tr-class="rowClass"
      :busy="processing"
      :currentPage="currentPage"
      :perPage="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      class="mt-3"
      hover
      responsive
      borderless
    >
      <template v-slot:table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle mr-2"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:head(select)>
        <b-form-radio v-model="selectedEmployee" name="select-employee" value=""></b-form-radio>
      </template>
      <template v-slot:head(delete)>
        <span></span>
      </template>
      <template v-slot:cell(select)="data">
        <b-form-radio v-model="selectedEmployee" :value="data.item" name="select-employee" buttons button-variant="primary"></b-form-radio>
      </template>
      <template v-slot:cell(role)="data">
        <span class="capitalize mr-5">{{ data.value }}</span>
      </template>
      <template v-slot:cell(delete)="data">
        <b-button @click="del(data)" variant="empty">
          <i class="icon-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-row>
      <b-col cols="6" class="d-block d-md-none text-center my-4">
        <b-form-group class="af-input">
          <b-input-group class="mb-3">
            <b-form-input v-model="filter" class="af-input-field" required></b-form-input>
            <template v-slot:append>
              <b-input-group-text class="af-input-append">
                <span class="icon-magnifier"></span>
              </b-input-group-text>
            </template>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="6" class="d-block d-md-none text-center my-4">
        <span class="mr-2">{{ currentPage }} of {{ Math.ceil(pagesTotal / perPage) }}</span>
        <b-button
          @click="goToPreviousPage"
          variant="primary"
          class="rounded-circle mr-2"
          size="sm"
        >
          <i class="icon-arrow-left"></i>
        </b-button>
        <b-button
          @click="goToNextPage"
          variant="primary"
          class="rounded-circle"
          size="sm"
        >
          <i class="icon-arrow-right"></i>
        </b-button>
      </b-col>
    </b-row>
    <DeleteEmployee
      :opened="openDeleteModal"
      :id="selectedEmployeeId"
      @dialog-closed="openDeleteModal = false"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { updateEmployeeRole } from '../../apis/employee'
import NewEmployee from '../../components/dialogs/NewEmployee'
import DeleteEmployee from '../../components/dialogs/DeleteEmployee'

export default {
  metaInfo: {
    title: 'Employees',
    titleTemplate: '%s | GetChange'
  },
  components: {
    NewEmployee,
    DeleteEmployee
  },
  data () {
    return {
      addEmployeeModal: false,
      openDeleteModal: false,
      role: '',
      selectedEmployee: '',
      selectedEmployeeId: '',
      currentPage: 1,
      perPage: 5,
      filter: null,
      filterOn: ['firstName', 'lastName'],
      loading: false,
      fields: [
        'select',
        'firstName',
        'lastName',
        'email',
        'phone',
        'role',
        'delete'
      ]
    }
  },
  computed: {
    ...mapGetters(['employees', 'processing']),
    pagesTotal () {
      return this.employees.length
    },
    rowClass (item, type) {
      return 'row-class'
    }
  },
  mounted () {
    this.$store.dispatch('getEmployees')
  },
  methods: {
    goToPreviousPage () {
      return this.currentPage > 1 ? this.currentPage-- : this.currentPage
    },
    goToNextPage () {
      return this.currentPage < Math.ceil(this.pagesTotal / this.perPage) ? this.currentPage++ : this.currentPage
    },
    del (data) {
      this.selectedEmployeeId = data.item._id
      this.openDeleteModal = true
    },
    async changeRole () {
      if (!this.selectedEmployee._id) {
        return this.$bvToast.toast('Please select an employee', {
          title: 'Notification',
          variant: 'warning',
          solid: true
        })
      }
      const payload = {
        firstName: this.selectedEmployee.firstName,
        lastName: this.selectedEmployee.lastName,
        email: this.selectedEmployee.email,
        phone: this.selectedEmployee.phone,
        role: this.role
      }
      this.loading = true
      try {
        await updateEmployeeRole(payload, this.selectedEmployee._id)
        this.$bvToast.toast('Employee role updated', {
          title: 'Notification',
          variant: 'success',
          solid: true
        })
        this.role = ''
        this.loading = false
        this.selectedEmployee = ''
        this.$store.dispatch('getEmployees')
      } catch (e) {
        this.loading = false
        this.$bvToast.toast('Failed to update employee role', {
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
.dropdown {
  color: #868686;
}
.page-item.active .page-link {
  background-color: #2BDA53;
  color: #fff;
}
</style>
<style>
.row-class {
  background-color: #fff;
  border-bottom: 15px solid #fafafa;
}
</style>
