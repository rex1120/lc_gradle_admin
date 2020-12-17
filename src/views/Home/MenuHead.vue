<template>
    <div class="MenuHead">
        <el-menu
                :default-active="activeName"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="Home">首页</el-menu-item>
            <el-menu-item index="FileConversion">文件上传</el-menu-item>
            <el-menu-item index="SysUser">用户管理</el-menu-item>
            <el-menu-item index="SysMenu">菜单管理</el-menu-item>
            <el-menu-item class=" right_menu_item" index="UserSpace">
                <el-avatar src="https://empty" @error="errorHandler">
                    <img src="http://qg2fo3psn.hn-bkt.clouddn.com/581a2dbdab2043a0ada4ab97a34831d4.jpeg"/>
                </el-avatar>
            </el-menu-item>
            <el-menu-item class="right_menu_item" index="Login">登录</el-menu-item>
            <el-menu-item class="right_menu_item" index="Setting"><i class="el-icon-s-tools"/></el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "MenuHead",
        props: {},
        components: {},
        data() {
            return {
                activeName: 'Home',
            };
        },
        mounted() {
            this.handleSelect( this.activeName)
        },
        methods: {
            //选择导航菜单
            handleSelect(key) {
                console.log(key)
                this.activeName = key;
                this.$router.push({name: key});
            },

            errorHandler() {
                return true
            }
        },
    }
</script>
<style lang="less" scoped>
    .MenuHead {
        .right_menu_item {
            float: right;
            i {
                font-size: 20px;
            }
        }
    }
</style>
