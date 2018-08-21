<template>
    <div class="components-container" >
        <div class="app-wrapper">
            <div class="sidebar-wrapper">
                <el-menu mode="vertical"  theme="dark" :default-active="$route.name">
                    <sidebar-item ></sidebar-item>
                </el-menu>
            </div>
            <div class="main-container" >
                <App-main/>
            </div>
        </div>
    </div>
    <!--</div>-->
</template>

<script>
    import { mapGetters } from 'vuex';
    import {  AppMain } from '@/views/layout';
    import SidebarItem from './SidebarItem';
    import Cookies from 'js-cookie';
    export default {
        data(){

            return {

            }
        },
        components: { AppMain,SidebarItem},

        mounted(){
        },
        methods: {

        },

    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .components-container{
        width: 100%;
        height:100%;
        .app-wrapper {
            width:100%;
            height:100%;
        }
        .main-container {
            width:100%;
            height:100%;
        }
    }

</style>
