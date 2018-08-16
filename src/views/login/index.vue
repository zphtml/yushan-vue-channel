
<template>
    <el-row style="height: 100%;width: 100%; position: absolute;" class="loginBox">
       <el-col :span="24" style="text-align: center;padding: 100px">
           <el-input v-model="name" placeholder="请输入内容"></el-input>
           <el-input v-model="password" placeholder="请输入内容"></el-input>
           <el-button @click="login">登录</el-button>
       </el-col>
    </el-row>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex';
    import {  getInfo } from '@/api/login';
    export default {

        data() {
            return {
                name:'',
                password:'',
                getInfo(){
                    getInfo({
                        username:'蒋玉',
                        password:'06ebfbbbb4cd14de011d6bd1ef5f220d',
                        key:'1534239183202',
                    })
                        .then(response => {

                            this.GetInfo({ username: user,password: code,key:random}).then(response => {

                            }).catch(err => {
                                this.$notify.error({
                                    title: '错误',
                                    message: '无该账户'
                                });
//                    this.$message.error(err.message);
//                  _self.loading = false;
                            });


                            console.log(response.data)
                        })
                        .catch(err => {
                            this.$message.error(err);
                        });
                },
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions([
                'GetInfo'
            ]),
            login(){
                this.getInfo();
            },
        },
        destroyed() {
            // window.removeEventListener('hashchange', this.afterQRScan);
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
