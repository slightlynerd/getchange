<template>
  <div>
    <div class="hero container-fluid text-white py-4">
      <b-row class="align-items-center">
        <b-col cols="8">
          <p class="text-36 mb-0">₦{{ user.wallet }}</p>
          <p class="text-light">Available Balance</p>
        </b-col>
        <b-col cols="4" class="text-right">
          <p class="d-inline-block icon-bell text-24 mb-0"></p>
          <img src="@/assets/images/man.png" alt="user display picture" width="32" height="32" class="shadow-sm curved-edge ml-4">
        </b-col>
      </b-row>
      <b-row class="justify-content-between mb-4">
        <b-col cols="4" class="mt-5">
          <router-link to="/transfer">
            <div>
              <i class="icon icon-wallet"></i>
              <p class="text-white text-14 mt-3">Transfer</p>
            </div>
          </router-link>
        </b-col>
        <b-col cols="4" class="text-center mt-5">
          <router-link to="/withdrawal">
            <div>
              <i class="icon icon-wallet"></i>
              <p class="text-white text-14 mt-3">Withdraw</p>
            </div>
          </router-link>
        </b-col>
        <b-col cols="4" class="text-right mt-5">
          <router-link to="/airtime-topup">
            <div>
              <i class="icon icon-screen-smartphone"></i>
              <p class="text-white text-14 mt-3 mr-2">Topup</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </div>
    <div class="container-fluid overview">
      <p class="title text-18 mb-0">Overview</p>
      <!-- statistics -->
      <b-row>
        <b-col cols="12" md="4">
          <router-link to="/history">
            <b-card class="af-card af-card-1 mt-4">
              <b-row class="align-items-center">
                <b-col cols="3">
                  <div class="bg-light text-center curved-edge-2x p-2">
                    <img src="@/assets/images/masked-2.png" width="36" height="36">
                  </div>
                </b-col>
                <b-col cols="6">
                  <p class="font-weight-bold mb-0">Pending</p>
                  <p class="text-12">Transactions</p>
                </b-col>
                <b-col cols="3" class="text-right">
                  <p class="font-weight-bold text-18 mb-0">19</p>
                  <p class="text-12">Total</p>
                </b-col>
              </b-row>
            </b-card>
          </router-link>
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/history">
            <b-card class="af-card af-card-2 mt-4">
              <b-row class="align-items-center">
                <b-col cols="3">
                  <div class="bg-light text-center curved-edge-2x p-2">
                    <img src="@/assets/images/money.png" width="36" height="36">
                  </div>
                </b-col>
                <b-col cols="6">
                  <p class="font-weight-bold mb-0">Paid</p>
                  <p class="text-12">Transactions</p>
                </b-col>
                <b-col cols="3" class="text-right">
                  <p class="font-weight-bold text-18 mb-0">134</p>
                  <p class="text-12">Total</p>
                </b-col>
              </b-row>
            </b-card>
          </router-link>
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/history">
            <b-card class="af-card af-card-3 mt-4">
              <b-row class="align-items-center">
                <b-col cols="3">
                  <div class="bg-light text-center curved-edge-2x p-2">
                    <img src="@/assets/images/masked.png" width="36" height="36">
                  </div>
                </b-col>
                <b-col cols="6">
                  <p class="font-weight-bold mb-0">Declined</p>
                  <p class="text-12">Transactions</p>
                </b-col>
                <b-col cols="3" class="text-right">
                  <p class="font-weight-bold text-18 mb-0">12</p>
                  <p class="text-12">Total</p>
                </b-col>
              </b-row>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
      <!-- add funds -->
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
                  <b-col cols="9">
                    <p class="emphasize title text-18">Flip airtime to cash</p>
                    <p class="text-muted text-14">A quick and easy way to convert your airtme to cash.</p>
                  </b-col>
                  <b-col cols="3">
                    <router-link to="/convert-airtime">
                      <b-button variant="primary" class="text-24 mt-4 py-3 px-3">
                        <i class="icon-refresh text-18"></i>
                      </b-button>
                    </router-link>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- main actions -->
      <b-row>
        <b-col cols="4">
          <router-link to="/airtime-topup">
            <b-card class="af-card text-center mt-4 px-2 py-3" no-body>
              <img src="@/assets/images/mtn-logo.png" width="36" height="36" class="provider-logo curved-edge-2x mx-auto">
              <p class="text-muted mt-3">Buy <br>Airtime</p>
            </b-card>
          </router-link>
        </b-col>
        <b-col cols="4">
          <router-link to="/pay-bills">
            <b-card class="af-card text-center mt-4 px-2 py-3" no-body>
              <img src="@/assets/images/dstv-logo.png" width="36" height="36" class="provider-logo curved-edge-2x mx-auto">
              <p class="text-muted mt-3">Pay <br>Bills</p>
            </b-card>
          </router-link>
        </b-col>
        <b-col cols="4">
          <router-link to="/buy-data">
            <b-card class="af-card text-center mt-4 px-2 py-3" no-body>
              <img src="@/assets/images/9mobile-logo.png" width="36" height="36" class="provider-logo curved-edge-2x mx-auto">
              <p class="text-muted mt-3">Buy <br>Data</p>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
      <!-- recent transactions -->
      <b-row class="mobile-view">
        <b-col cols="12">
          <b-row class="no-gutters justify-content-between align-items-center mb-3">
            <p class="text-secondary text-18">Recent Transactions</p>
            <router-link to="/history">
              <i class="emphasize fa fa-arrow-right text-14"></i>
            </router-link>
          </b-row>
          <b-card class="af-card mt-4">
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
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
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
.hero {
  background-color: #F38D04;

  .icon-bell {
    transform: rotate(20deg);
  }
}
a {
  text-decoration: none;
}
.overview {
  border-radius: 30px 30px 0px 0px;
  margin-top: -20px;
  padding-top: 30px;
  background-color: #fff;
}
.provider-logo {
  object-fit: cover;
}
.af-card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  border: none;
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
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  color: #F38D04;
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
