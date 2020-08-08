<template>
  <div class="container-fluid">
    <b-row>
      <b-col cols="12" md="8">
        <!-- welcome -->
        <b-card class="af-card mt-4">
          <b-row>
            <b-col cols="12" md="9">
              <p class="lead text-secondary">Welcome {{ user.fullname }}</p>
              <p class="text-secondary">You are almost at the finish line, 70% of the registration done. please ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla, duis ultricies consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent.</p>
            </b-col>
            <b-col cols="12" md="3">
              <img src="@/assets/images/dashboard-1.png" alt="" class="img-fluid">
            </b-col>
          </b-row>
        </b-card>
        <!-- welcome end -->
        <!-- statistics -->
        <b-row>
          <b-col cols="12" md="4">
            <router-link to="/history">
              <b-card class="af-card af-card-1 mt-4">
                <b-row>
                  <b-col cols="12" md="4">
                    <div class="bg-light text-center curved-edge-2x p-2">
                      <img src="@/assets/images/masked-2.png" width="36" height="36">
                    </div>
                  </b-col>
                  <b-col cols="12" md="8" class="text-right">
                    <p class="text-18 mb-0">19</p>
                    <p class="text-12 text-uppercase">Pending transactions</p>
                  </b-col>
                </b-row>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" md="4">
            <router-link to="/history">
              <b-card class="af-card af-card-2 mt-4">
                <b-row>
                  <b-col cols="12" md="4">
                    <div class="bg-light text-center curved-edge-2x p-2">
                      <img src="@/assets/images/money.png" width="36" height="36">
                    </div>
                  </b-col>
                  <b-col cols="12" md="8" class="text-right">
                    <p class="text-18 mb-0">132</p>
                    <p class="text-12 text-uppercase">Paid transactions</p>
                  </b-col>
                </b-row>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" md="4">
            <router-link to="/history">
              <b-card class="af-card af-card-3 mt-4">
                <b-row>
                  <b-col cols="12" md="4">
                    <div class="bg-light text-center curved-edge-2x p-2">
                      <img src="@/assets/images/masked.png" width="36" height="36">
                    </div>
                  </b-col>
                  <b-col cols="12" md="8" class="text-right">
                    <p class="text-24 mb-0">12</p>
                    <p class="text-12 text-uppercase">Declined transactions</p>
                  </b-col>
                </b-row>
              </b-card>
            </router-link>
          </b-col>
        </b-row>
        <!-- statistics -->
      </b-col>
      <b-col cols="12" md="4">
        <!-- wallet -->
        <b-card class="af-card mt-4">
          <p class="font-weight-bold text-36 mb-0 mt-4">
            N {{ user.wallet }}
          </p>
          <p class="text-muted mb-4">Available Balance</p>
          <b-row class="justify-content-between mb-4">
            <b-col cols="12" md="4" class="mt-4">
              <router-link to="/transfer">
                <div>
                  <i class="icon icon-wallet"></i>
                  <p class="text-muted text-14 mt-3">Transfer</p>
                </div>
              </router-link>
            </b-col>
            <b-col cols="12" md="4" class="mt-4">
              <router-link to="/withdrawal">
                <div>
                  <i class="icon icon-wallet"></i>
                  <p class="text-muted text-14 mt-3">Withdraw</p>
                </div>
              </router-link>
            </b-col>
            <b-col cols="12" md="4" class="mt-4">
              <router-link to="/airtime-topup">
                <div>
                  <i class="icon icon-screen-smartphone"></i>
                  <p class="text-muted text-14 mt-3">Topup</p>
                </div>
              </router-link>
            </b-col>
          </b-row>
        </b-card>
        <!-- wallet end -->
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="8">
        <b-row>
          <b-col cols="12" md="5">
            <b-card class="af-card bg-rainbow mt-4">
              <div class="d-inline-block bg-dark text-white p-3 curved-edge-2x mb-5">
                <i class="icon-lock text-24"></i>
              </div>
              <router-link to="/wallet">
                <div class="row no-gutters justify-content-between bg-light curved-edge-2x px-3 py-2">
                  <span class="text-blue">Add Funds</span>
                  <i class="icon-arrow-right bg-blue"></i>
                </div>
              </router-link>
            </b-card>
          </b-col>
          <b-col cols="12" md="7">
            <b-card class="af-card mt-4">
              <b-row class="align-items-center">
                <b-col cols="12" md="6">
                  <img src="@/assets/images/flip-cash.png" class="img-fluid">
                </b-col>
                <b-col cols="12" md="6">
                  <p class="emphasize title text-18">Flip airtime to cash</p>
                  <p class="text-muted text-14">A quick and easy way to convert your airtme to cash.</p>
                  <router-link to="/convert-airtime">
                    <b-button variant="primary" class="mt-4 px-4">
                      Flip Now
                    </b-button>
                  </router-link>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="4">
        <b-row>
          <b-col cols="12" md="4">
            <router-link to="/airtime-topup">
              <b-card class="af-card text-center mt-4">
                <img src="@/assets/images/mtn-logo.png" width="71" height="71" class="curved-edge-2x">
                <p class="text-muted mt-4">Buy Airtime</p>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" md="4">
            <router-link to="/pay-bills">
              <b-card class="af-card text-center mt-4">
                <img src="@/assets/images/dstv-logo.png" width="71" height="71" class="curved-edge-2x">
                <p class="text-muted mt-4">Pay Bills</p>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" md="4">
            <router-link to="/buy-data">
              <b-card class="af-card text-center mt-4">
                <img src="@/assets/images/9mobile-logo.png" width="71" height="71" class="curved-edge-2x">
                <p class="text-muted mt-4">Buy Data</p>
              </b-card>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- recent transactions/complete profile -->
    <b-row>
      <b-col cols="12" md="8">
        <b-card class="af-card mt-4">
          <b-row class="no-gutters justify-content-between align-items-center mb-3">
            <p class="text-secondary text-18">Recent Transactions</p>
            <router-link to="/history">
              <i class="emphasize fa fa-arrow-right text-14"></i>
            </router-link>
          </b-row>
          <b-table
            :items="items"
            :fields="fields"
            hover
            responsive
            thead-class="hidden_header"
          >
            <template v-slot:cell(date)="data">
              <span class="text-muted">{{ data.value }}</span>
            </template>

            <template v-slot:cell(time)="data">
              <span class="text-muted">{{ data.value }}</span>
            </template>

            <template v-slot:cell(type)="data">
              <span class="font-weight-bold">{{ data.value }}</span>
            </template>

            <template v-slot:cell(receipt_no)="data">
              <span class="font-weight-bold">{{ data.value }}</span>
            </template>

            <template v-slot:cell(amount)="data">
              <span class="text-success">₦{{ data.value }}</span>
            </template>
          </b-table>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card class="af-card mt-4">
          <b-row class="no-gutters justify-content-between align-items-center mb-3">
            <p class="text-secondary text-18">Complete Profile</p>
            <p class="emphasize text-14">2/4</p>
          </b-row>
          <b-row class="no-gutters align-items-center justify-content-between mb-3">
            <div>
              <p class="emphasize mb-0">Confirm your email</p>
              <p class="text-14 text-muted">Add basic account security</p>
            </div>
            <b-form-checkbox v-model="email" variant="success" disabled>
            </b-form-checkbox>
          </b-row>
          <b-row class="no-gutters align-items-center justify-content-between mb-3">
            <div>
              <p class="emphasize mb-0">Add bank account</p>
              <p class="text-14 text-muted">Add a primary account</p>
            </div>
            <b-form-checkbox v-model="email" variant="success" disabled>
            </b-form-checkbox>
          </b-row>
          <b-row class="no-gutters align-items-center justify-content-between mb-3">
            <div>
              <p class="emphasize mb-0">Add BVN number</p>
              <p class="text-14 text-muted">Link BVN to account</p>
            </div>
            <b-form-checkbox v-model="email" variant="success" disabled>
            </b-form-checkbox>
          </b-row>
          <b-row class="no-gutters align-items-center justify-content-between mb-3">
            <div>
              <p class="emphasize mb-0">Add PIN number</p>
              <p class="text-14 text-muted">Add PIN to complete transactions</p>
            </div>
            <b-form-checkbox
              v-model="email"
              variant="success"
              disabled
            >
            </b-form-checkbox>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: true,
      items: [
        { date: '05.11.2019', time: '03:39 PM', type: 'Bill Payment', receipt_no: '#3069859', amount: 10000 },
        { date: '05.11.2019', time: '03:39 PM', type: 'Withdrawal', receipt_no: '#3069859', amount: 10000 },
        { date: '05.11.2019', time: '03:39 PM', type: 'Bill Payment', receipt_no: '#3069859', amount: 10000 },
        { date: '05.11.2019', time: '03:39 PM', type: 'Bill Payment', receipt_no: '#3069859', amount: 10000 }
      ],
      fields: [
        'date',
        'time',
        'type',
        'receipt_no',
        'amount'
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.af-card-1 {
  background-color: #3FBBC2;
  color: #fff;
}
.af-card-2 {
  background-color: #AC8EDC;
  color: #fff;
}
.af-card-3 {
  background-color: #ED5A86;
  color: #fff;
}
.icon {
  background-color: #F38D04;
  border-radius: 10px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 24px;
}
.bg-rainbow {
  background: url(../../assets/images/bg-rainbow.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.text-blue {
  color: #4388C2;
}
.bg-blue {
  background-color: #4388C2;
  color: #fff;
  padding: 5px;
  border-radius: 50%;
}
</style>
<style>
.hidden_header {
  display: none;
}
</style>
