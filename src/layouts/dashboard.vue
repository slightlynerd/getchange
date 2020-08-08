<template>
  <div>
    <!-- toolbar -->
    <div class="container-fluid bg-white">
      <b-row class="align-items-center justify-content-between mb-5">
        <b-col cols="6">
          <span @click="collapsed = !collapsed" class="text-16 mr-4">
            <img src="@/assets/images/logo.png" alt="user display picture" class="img-fluid">
          </span>
        </b-col>
        <b-col cols="6" class="text-right">
          <img src="@/assets/images/man.png" alt="user display picture" width="32" height="32" class="shadow-sm rounded-circle">
          <b-dropdown class="dropdown m-md-2" variant="empty" right>
            <template v-slot:button-content>
              <span class="capitalize text-16">Hi, Joshua</span>
            </template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
    </div>
    <section class="mt-4">
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :widthCollapsed="sidebarCollapsedWidth"
        :hideToggle="true"
        :disableHover="true"
        @item-click="collapsed = true"
        width="300px"
      />
      <section :class="{'page-content': true,
                        'menu-collapsed': collapsed
      }">
        <!-- page content -->
        <slot />
      </section>
    </section>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import '@/assets/scss/vue-sidebar-menu.css'
import menu from '../data/menu'

export default {
  components: {
    SidebarMenu
  },
  data () {
    return {
      collapsed: true,
      sidebarCollapsedWidth: '50px',
      menu
    }
  },
  mounted () {
    document.body.classList.add('light')
    this.resizeMenu()
    window.addEventListener('resize', this.resizeMenu)
  },
  methods: {
    resizeMenu () {
      if (window.innerWidth < 500) {
        this.sidebarCollapsedWidth = '0'
        this.collapsed = true
        return
      }
      this.sidebarCollapsedWidth = '50px'
    },
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  margin-left: 310px;
  transition: margin-left 0.3s;

  &.menu-collapsed {
    margin-left: 60px;
  }
}
.custom-toolbar {
  background-color: #F38D04;
  color: white;
}

@media screen and (max-width: 500px) {
  .menu-icon {
    color: #F38D04;
  }
  .page-content {
    margin-left: 0;

    &.menu-collapsed {
      margin-left: -5px;
    }
  }
}
</style>
