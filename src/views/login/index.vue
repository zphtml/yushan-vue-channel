
<template>
    <el-row style="height: 100%;width: 100%; position: absolute;" class="loginBox">
       <el-col :span="24" style="text-align: center;padding: 100px">
           <div class="loginBox">
               <el-form :model="loginData" :rules="rules2" ref="loginData" label-position="left" label-width="0px" class="demo-ruleForm login-container">
                   <div class="loginTitle">
                       <span>用户名</span>
                   </div>
                   <el-form-item prop="account" style=" margin-bottom: 15px;">
                       <el-input type="text" class="textInput" v-model="loginData.username" auto-complete="off" placeholder="账号" @change="acountInput"></el-input>
                   </el-form-item>
                   <div class="loginTitle">
                       <span>密码</span>
                   </div>
                   <el-form-item prop="checkPass" style=" margin-bottom:5px;">
                       <el-input type="password" class="textInput" v-model="loginData.password" auto-complete="off" placeholder="密码"></el-input>
                   </el-form-item>
                   <el-form-item style="width:100%;">
                       <el-button type="primary" style="width:100%;" class="loginPull" @click.native.prevent="login" >立刻登录</el-button>
                   </el-form-item>
               </el-form>
           </div>
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
                loginData: {
                    username:'',
                    password: '',
                    checked:true,
                },
                rules2: {
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        //{ validator: validaePass }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        //{ validator: validaePass2 }
                    ]
                },
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions([
                    'getLogin',
            ]),
            acountInput(){
                if(this.loginData.username == ""){
                    this.ruleForm2.password = '';
                }
            },
            login(){
                this.getLogin(this.loginData).then(response => {
                    if(response == 'true'){
                        this.$router.push({ name: '/acount' });

                    }else{
                        this.$notify.error({
                            title: '错误',
                            message: '账户或密码错误'
                        });
                    }
                });


//                this.getInfo();
//
//                this.$router.push({ name: 'demo1' })
            },
        },
        destroyed() {
            // window.removeEventListener('hashchange', this.afterQRScan);
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
