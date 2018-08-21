<template>
    <el-row class="requestapply" style="background:white;">

        <el-tabs type="" style="min-width: 900px;" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="上线推广页面" class="tab_top" name="first">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <div class="main">
                            <!-- 新增需求 -->
                            <div class="titles">上传素材</div>   
                            <div class="lis" style="text-indent:1em;">
                                <span>选择账户：</span>
                                <el-select size="mini" v-model="tuiguang.value" filterable placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="lis" style="text-indent:1em;">
                                <span>账户名称：</span>
                                <el-input  size="mini" v-model="tuiguang.usrName" placeholder="请输入帐户名"></el-input>
                            </div>
                            <div class="lis" style="text-indent:1em;">
                                <span>二级域名：</span>
                                <el-input size="mini" v-model="tuiguang.domain" placeholder="请输入二级域名"></el-input>
                            </div>
                            <div class="lis" style="text-indent:1em;">
                                <span>需求备注：</span>
                                <el-input size="mini" v-model="tuiguang.coment" 
                                type="textarea"
                                style="margin-left:1em;"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入内容"></el-input>
                            </div>
                            <div class="lis" style="text-indent:1em;">
                                <span style="vertical-align: top;">上传素材包：</span>
                                <el-upload style="display: inline-block;" :on-success="upsuccess" class="upload-demo" action="/demand/uploadF" :on-change="handleChange">
                                    <el-button size="mini" style="margin-left: 15px;" type="primary">选择上传文件</el-button>
                                    <div slot="tip" style="margin-left: 15px;" class="el-upload__tip">只能上传zip文件</div>
                                </el-upload>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="titles">标准合规页面样例</div>
                        <div class="redinfo">注：需标准页面执行，否则不予上线</div>
                        <div class="phone">
                            <img class="logo" src="http://test.myushan.com//logo/black_zhiniao.png" alt="">
                            <div class="rules">
                                <h3>落地页规范</h3>
                                <p>1.严禁自动下载</p>
                                <p>2.严禁全屏下载</p>
                                <p>3.只有按钮点击下载</p>
                                <p>4.logo，版权清晰可见</p>

                            </div>
                            <div class="banquan">北京智鸟科技有限公司版权所有</div>
                        </div> 
                    </el-col>
                    
                </el-row>
                <div style="text-align:center;">
                    <el-button size="mini" type="primary" @click="goTuiGuang">确 定</el-button>
                    <el-button size="mini" @click="clear">清空内容</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="二级域名解析" class="tab_top" name="second">
                <el-row :gutter="20" class="urljiexi" >
                    <el-col :span="10" style="min-width:370px;">
                        <div class="main"> 
                            
                            <div class="lis" style="text-indent:1em;">
                                <span>渠道</span>
                                <el-input  size="mini" v-model="tuiguang.usrName" placeholder="请输入帐户名"></el-input>
                            </div>
                            <div class="lis" style="text-indent:1em;">
                                <span>选择客户：</span>
                                <el-select size="mini" v-model="tuiguang.value" filterable placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="lis" style="text-indent:1em;">
                                <span>选择账户：</span>
                                <el-select size="mini" v-model="tuiguang.value" filterable placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>

                        </div>
                    </el-col>
                    <el-col :span="14" style="min-width:470px;">
                        <div v-for="(item,index) in urlrequest" >
                            
                            <span style="vertical-align:center;">{{index+1}} 解析需求备注：</span>
                            <el-input  size="mini" v-model="tuiguang.coment" 
                            type="textarea"
                            style="margin-left:1em;width:350px;"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            :placeholder="defaultContent">
                            </el-input>
                        </div>
                        <div class="addurl" style="" @click="addurlEvent">
                            <i  style="color: red;
                            font-size: 50px;
                            margin: 5px auto;
                            vertical-align:middle;" 
                            class="el-icon-circle-plus">
                            </i>添加解析数量
                        </div>
                    </el-col>
                    
                </el-row>
                <div style="text-align:center;">
                    <el-button size="mini" type="primary" @click="goTuiGuang">确 定</el-button>
                    <el-button size="mini" @click="clear">清空内容</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="历史申请" class="tab_top" name="third">
                <div class="main">
                    <!-- 搜索框 -->
                    <el-input style="width: 35%;" v-model="lishi.search1" placeholder="搜索账户名">
                        <el-button size="mini"slot="append" icon="el-icon-search" @click="searchinfo1"></el-button>
                    </el-input>
                    <!-- 时间选择 -->
                    <el-date-picker style="width: 35%;" v-model="lishi.timeChoose1" type="daterange" align="right" unlink-panels range-separator="至"
                    @change="timeChooseEvent1" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                    </el-date-picker>
                    <el-row>
                        <el-col :span="8">
                            <!-- 状态筛选 -->
                            <span >进度</span>
                            <el-select @change="statusChange" size="mini" style="width:90px" v-model="lishi.valuestatus" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="8">
                            <!-- 状态筛选 -->
                            <span >状态审核</span>
                            <el-select @change="statusChange" size="mini" style="width:90px" v-model="lishi.valuestatus" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="8">
                            <!-- 状态筛选 -->
                            <span >需求类型</span>
                            <el-select @change="statusChange" size="mini" style="width:90px" v-model="lishi.valuestatus" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-button style="float:right;margin-right:40px;" size="mini" type="primary" @click="daochu"><a target="_blank" :href="excelurl">导出</a></el-button>
        
                    <!-- 表格数据展示 -->
                    <el-table v-loading="tableshow" :data="tableData1" class="vue-table" height="440"  border @sort-change="sortTable"  >
                        <el-table-column prop="id" label="编号" sortable='custom' min-width="80">
                        </el-table-column>
                        <el-table-column  prop="sub_date" label="日期" sortable='custom' min-width="140">
                            <template slot-scope="scope">
                                  {{scope.row.ctime|timeFormat1}}  
                            </template>
                        </el-table-column>
                        <el-table-column label="客户" min-width="180">
                                <template slot-scope="scope">
                                        <span>{{scope.row.advertiser||"空"}}</span>
                                    </template>
                        </el-table-column>
                        <el-table-column  label="帐户" min-width="180">
                                <template slot-scope="scope">
                                        <span>{{scope.row.a_users||"空"}}</span>
                                    </template>
                        </el-table-column>
                        <el-table-column prop="true_url" label="处理状态" min-width="150" sortable='custom'>
                            <template slot-scope="scope">
                                <el-alert
                                    :title="scope.row.true_url|requestStatus1"
                                    :type="scope.row.true_url|statuss1"
                                    :closable="false"
                                    style="background-color: transparent;"
                                    show-icon>
                                </el-alert>
                            </template>
                        </el-table-column>
                        <el-table-column  label="投放方式" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.prname||'空'}}</span>
                            </template>
                            
                        </el-table-column>
                        <el-table-column  label="申请人" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.name||'空'}}</span>
                            </template>
                            
                        </el-table-column>
                        <el-table-column  label="二级域名"  min-width="180">
                            <template slot-scope="scope">
                                <span>{{scope.row.true_url||"空"}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" style="" min-width="130" >
                            <template slot-scope="scope">
                                <el-button size="mini" v-if="!scope.row.true_url" type="primary"  style="cursor:pointer;border: none;" @click="jiexi(scope.row)">解析</el-button>
                                <span v-else>完成</span>
                                <el-button size="mini" v-if="!scope.row.true_url"  type="primary"  style="cursor:pointer;border: none;" @click="shanchu(scope.row)">删除</el-button>
                                
                            </template>
                        </el-table-column>
        
                    </el-table>
                    <!-- 表格分页 -->
                    <el-pagination @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :current-page="currentPage1" :page-sizes="[20, 30, 50]"
                         layout="total, sizes, prev, pager, next, jumper" style="text-align: center;margin-top: 10px;"
                        :total="totalnum1">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
    </el-row>
</template>
<script>
export default {
    data() {
        return{
            newTask:true,
            tableData:[],
            activeName:'first',
            tuiguang:{
                value:'',
                usrName:'',
                domain:'',
                coment:'',
            },
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            urlrequest:[''],
            defaultContent:'解析格式：\n产品名；前缀；主域；投放方式；客户ip地址',
            // 历史申请
            tableData1:[],
            excelurl:'',
            tableshow:false,
            currentPage1:1,
            totalnum1:111,
            lishi:{
                search1:'',
                timeChoose1:'',
                valuestatus:'',

            },
            pickerOptions: {
                disabledDate(time){
                    return time.getTime() >= Date.now() ;
                },
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        //tab切换事件
        handleClick(val){
            console.log('i am in'+val);
        },
        //上传压缩包
        upsuccess(){

        },
        //上传change触发事件
        handleChange(){

        },
        //清空需求内容
        clear(){

        },
        //上线推广
        goTuiGuang(){

        },
        //添加url解析
        addurlEvent(){
            this.urlrequest.push('');
        },
        /* 历史申请中用到的 方法 */
        searchinfo1(){

        },
        timeChooseEvent1(){

        },
        statusChange(){

        },
        daochu(){

        },
        sortTable(){

        },
        handleSizeChange1(){

        },
        handleCurrentChange1(){

        },
        
        
    },
    filters:{

    },
    computed:{

    }
}
</script>
<style lang="scss" scoped>
    .requestapply {
       .main{
           .lis{
               padding: 6px 0 6px 0 ;
               span{
                   display: inline-block;
                   width: 110px;
                   font-size: 14px;
               }
               .el-input,.el-textarea{
                   vertical-align: top!important;
                   display: inline-block;
                   width:200px;
               }

               .el-select__caret{
                   line-height: 28px!important;
               }



           }

       }
       .phone{
           position: relative;
            width: 220px;
            height: 400px;
            background:  url(http://test.myushan.com//lingzhong/ipon.png) no-repeat ;
            background-size: 100% 100%;
            .logo{
                position: absolute;
                width: 30%;
                top: 41px;
                left: 17px;
            }
            .banquan{
                position: absolute;
                left: 0;
                right: 0;
                font-size: 12px;
                text-align: center;
                bottom: 50px;
                transform: scale(.7);
                -webkit-transform: scale(.7);
            }
            .rules{
                padding: 50px 0 0 17px;
                font-size: 14px;
            }
        }
        .titles{
            font-weight: 600;
            color: black;
        }
        .redinfo{
            font-size: 12px;
            color: #F56C6C;
        }
        .urljiexi{
            .addurl{
                text-align:center;
                cursor: pointer;
            }
        }
    }
</style>

