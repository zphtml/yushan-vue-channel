<template>
    <el-row class="header">
        <el-col :span="24">
            <el-col :span="18" class="left_header">
                <el-menu :default-active="activeIndex" mode="horizontal"    @open="handleOpen">

                    <template v-for="item in permissionRoutes" v-if="!item.hidden">
                        <el-menu-item :index="item.path"  v-if="item.children.length<=1">
                            <router-link :to="item.path" class="router_class">
                                {{item.meta.title}}
                            </router-link>
                        </el-menu-item>

                        <el-submenu :index="item.path"   v-if="item.children.length>1">
                            <template slot="title" >
                                {{item.meta.title}}
                            </template>
                            <router-link
                                    class="header_tan"
                                    v-for="child1 in item.children"
                                    :key="child1.path"
                                    v-if="!child1.hidden"
                                         :to="{name:child1.name}">
                                <el-menu-item :index="child1.name">
                                    {{item.meta.title}}
                                </el-menu-item>

                            </router-link>
                        </el-submenu>
                    </template>

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
          header_router:[],
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
        handleOpen(){
            console.log(10)
        }
    },
    mounted(){
//console.log( permissionRoutes.get(this.$route))
        console.log(  permissionRoutes.getHeaderMenu())
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
        background: white;
        z-index: 99;
        .left_header {
            height:50px;
            ul{
                li {
                    padding: 0 15px;
                    height:50px;
                    line-height: 50px;
                    .router_class {
                        display: block;
                        width:100%;
                        height:100%;
                    }
                    .el-submenu__title {
                        height:50px;
                        line-height: 50px;
                    }
                }
            }

        }
        .right_header {
            height: 50px;
            line-height: 50px;
            text-align: right;
        }
    }
    .header_tan {
        display: block;
        height:40px;
        line-height: 40px;
        text-align: center;
    }
</style>