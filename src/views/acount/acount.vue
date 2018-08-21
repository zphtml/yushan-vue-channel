<template>
   <el-row class="acount_box">
       <el-col :span="24" class="acount_title">
           账户列表
       </el-col>
       <el-col :span="24" class="search">
           <el-input v-model="search" size="mini" style="width: 200px"></el-input>
           <span class="name">按客户查看:</span>
           <el-select v-model="acountselect" size="mini" placeholder="请选择">
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
                   :data="acountTable"
                   class="vue-table"
                   height="600"
                   stripe
                   border
                   style="width: 100%">

               <el-table-column
                       prop="package_name"
                       sortable="custom"
                       label="渠道名称">
                   <template scope="scope">
                   </template>
               </el-table-column>
               <el-table-column
                       label="账户名称">
                   <template
                           scope="scope">
                   </template>
               </el-table-column>
               <el-table-column
                       label="客户">
                   <template scope="scope">

                   </template>
               </el-table-column>
               <el-table-column label="开户时间">
                   <template scope="scope">


                   </template>
               </el-table-column>
               <el-table-column label="二级域名">
                   <template scope="scope">


                   </template>
               </el-table-column>
               <el-table-column label="推广链接">
                   <template scope="scope">


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
                       :page-sizes="[ 10, 15,20]"
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
    import {  place_advertiser_list } from '@/api/acount';
    export default {
        data(){
            return {
                search:'',
                acountselect:'',
                options:[],
//分页
                acountTable:[],
                page:'20',
                num:'1',
                pageIndex:1,
                pageSize:10,
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
            }
        },
        computed: {
            ...mapGetters([

            ])
        },
        mounted(){
            this.place_advertiser_list();
        },
        methods: {
//分页
            handleSizeChange(val) {
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                this.pageIndex = val;
            },
        },

    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "@/styles/table.scss";
    @import "./css/acount.scss";
</style>