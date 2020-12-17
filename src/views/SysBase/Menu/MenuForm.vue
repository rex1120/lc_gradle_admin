<template>
    <div class="MenuForm">
        <el-form ref="form" :model="menuInfo" label-width="80px">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="上级目录" >
                        <el-input v-model="menuInfo.parentName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="目录名称" >
                        <el-input v-model="menuInfo.menuName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24" >
                    <el-form-item label="路由">
                        <el-input type="password" v-model="menuInfo.routePath"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="组件地址">
                        <el-input v-model="menuInfo.localPath"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="路由名称">
                        <el-input v-model="menuInfo.routeName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="菜单图标">
                        <el-input  v-model="menuInfo.menuIcon"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item class="form_foot_cls">
                <el-button type="primary" @click="saveMenu">保存</el-button>
                <el-button @click="cancelAction">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>

    export default {
        name: "MenuForm",
        props: {},
        components: {},
        data() {
            return {
                menuInfo:{
                    parentName:"",
                    menuName:"",
                    routePath:"",
                    localPath:"",
                    routeName:"",
                    menuIcon:"",
                }
            };
        },
        mounted() {

        },
        methods:{
            saveMenu(){
                console.log("保存菜单")
            },
            cancelAction(){
                this.$router.back(-1);
            }
        }
    }
</script>
<style lang="less" scoped>
    .MenuForm {
        margin-top: 7px;

        /deep/ .el-date-editor.el-input {
            width: 329px;
        }

        .form_foot_cls {
            text-align: center;
        }
    }
</style>

