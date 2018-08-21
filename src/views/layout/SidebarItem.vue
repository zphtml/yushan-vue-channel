<template>
    <el-row class="header">
        <el-col :span="24">
            <el-col :span="18" class="left_header">
                <el-menu :default-active="activeIndex" mode="horizontal" >
                    <el-menu-item :index="item.path" v-for="item in permissionRoutes" v-if="!item.hidden">
                        <router-link :to="item.path">
                            {{item.name}}
                        </router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="6" class="right_header">
                <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        赵鹏
                        <i class="el-icon-caret-bottom"/>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                        <router-link  class='inlineBlock' to="">
                            <el-dropdown-item>
                                个人中心
                            </el-dropdown-item>
                        </router-link>
                        <router-link  class='inlineBlock' to="">
                            <el-dropdown-item>
                                个人设置
                            </el-dropdown-item>
                        </router-link>
                        <el-dropdown-item divided><span  style="display:block;" @click="go_login">退出登录</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>

    </el-row>
</template>

<script>
    import { mapGetters } from 'vuex';
  import Cookies from 'js-cookie';
    import permissionRoutes from '@/store/permission';

    export default {
    name: 'SidebarItem',
    data(){
      return {
          activeIndex: '',
          permissionRoutes:[],
      }
    },
      computed: {
          ...mapGetters([
              'LogOut',
                'permission_routers'
          ])
      },
      watch: {

      },
    methods: {
        go_login(){
            this.$router.push({ name: 'Login' })
        },
    },
    mounted(){
        this.permissionRoutes =  permissionRoutes.getHeaderMenu();
        this.activeIndex =  this.activeNav='/'+this.$route.path.split('/')[1];
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    .header {
        width:100%;
        height:50px;
        border: 1px solid red;
        .el-menu {
            li {
                height:50px;
                line-height: 50px;
            }
        }
        .right_header {
            height: 50px;
            line-height: 50px;
            text-align: right;
        }
    }
</style>