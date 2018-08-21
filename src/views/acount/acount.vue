<template>
   <el-row class="acount_box">
       <el-col :span="24" class="acount_title">
           账户列表
       </el-col>
       <el-col :span="24" class="search">
           <el-input v-model="search" size="mini" style="width: 200px"></el-input>
           <span class="name">按客户查看:</span>
           <el-select v-model="acountselect" size="mini" placeholder="请选择" @change="acountAcount">
               <el-option
                       v-for="item in options"
                       :key="item.id"
                       :label="item.advertiser"
                       :value="item.id">
               </el-option>
           </el-select>
       </el-col>
       <el-col :span="24">
           <el-table
                   v-loading="loading"
                   :data="acountTable"
                   class="vue-table"
                   height="730"
                   stripe
                   border
                   style="width: 100%">
               <el-table-column
                       prop="package_name"
                       sortable="custom"
                       label="渠道名称">
                   <template scope="scope">

                       {{ scope.row.qudao_name }}
                   </template>
               </el-table-column>
               <el-table-column
                       label="账户名称">
                   <template
                           scope="scope">
                       {{ scope.row.a_users }}
                   </template>
               </el-table-column>
               <el-table-column
                       label="客户">
                   <template scope="scope">
                       {{ scope.row.advertiser }}
                   </template>
               </el-table-column>
               <el-table-column label="开户时间">
                   <template scope="scope">
                      {{ ctime | filterDate}}
                   </template>
               </el-table-column>
               <el-table-column label="操作">
                   <template scope="scope">


                   </template>
               </el-table-column>
           </el-table>
           <!-- 分页 -->
           <div class="block">
               <el-pagination
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageIndex"
                       :page-sizes="[ 20, 30,40]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="kehuTableLength"
                       style='text-align: right;'>
               </el-pagination>
           </div>
       </el-col>
   </el-row>
</template>
<script>
    import { mapGetters } from 'vuex';
    import {  place_advertiser_list,place_to_advertise } from '@/api/acount';
    const moment = require('moment');
    export default {
        data(){
            return {
                search:'',
                acountselect:'',
                options:[],
                loading:true,
//分页
                acountTable:[],
                av_id:'',
                page:'20',
                num:'1',
                pageIndex:1,
                pageSize:20,
                kehuTableLength:0,
// 下拉列表
                place_advertiser_list(){
                    place_advertiser_list({
                    }).then(response => {
                        this.options = response.data;
                    }).catch(err => {
                        this.$message.error(err);
                    });
                },
// 账户管理表格
                place_to_advertise(){
                    place_to_advertise({
                        av_id:this.av_id,
                        page:this.page,
                        num:this.num,
                        search:this.search,
                    }).then(response => {
                        this.loading = false;
                        this.acountTable = response.data.data;
                        this.kehuTableLength = response.data.totalCount;
                    }).catch(err => {
                        this.$message.error(err);
                    });
                },
            }
        },
        created(){
            let _this = this;
            document.onkeydown = function(e){
                if(e.which == '13'){
                    _this.place_to_advertise();
                }
            }
        },
        computed: {
            ...mapGetters([

            ])
        },
        mounted(){
            this.place_advertiser_list();
            this.place_to_advertise();
        },
        methods: {
            acountAcount(){
                this.av_id = this.acountselect;
                this.loading = true;
                this.place_to_advertise();
            },
//分页
            handleSizeChange(val) {
                this.page = val;
                this.pageSize =val;
                this.loading = true;
                this.place_to_advertise()
            },
            handleCurrentChange(val) {
                this.num = val;
                this.loading = true;
                this.place_to_advertise()

            },
        },
        filters: {
            filterDate: function (value) {
                return moment(value).format("YYYY-MM-DD HH:ss:mm");
            }
        },

    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "@/styles/table.scss";
    @import "./css/acount.scss";
</style>