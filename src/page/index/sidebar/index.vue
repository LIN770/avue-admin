<template>
  <div class="avue-sidebar">
    <logo></logo>
    <el-scrollbar style="height:100%">
      <el-menu unique-opened
               :default-active="nowTagValue"
               mode="vertical"
               :show-timeout="200"
               background-color="#20222a"
               text-color="rgba(255,255,255,0.7)"
               :collapse="keyCollapse">
        <sidebar-item :menu="menu"
                      first
                      :screen="screen"
                      :props="website.menu.props"
                      :collapse="keyCollapse"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '../logo';
import sidebarItem from './sidebarItem'
export default {
  name: 'sidebar',
  components: { sidebarItem, logo },
  data () {
    return {}
  },
  created () {
    this.$store.dispatch("GetMenu").then(data => {
      if (data.length === 0) return
      this.$router.$avueRouter.formatRoutes(data, true);                       //根据获取到的菜单动态加载路由
    })
  },
  computed: {
    ...mapGetters(['website', 'menu', 'tag', 'keyCollapse', 'screen']),
    nowTagValue: function () { return this.$router.$avueRouter.getValue(this.$route) }
  },
  mounted () { },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

