<template>
    <div class="Login">
        <el-form ref="loginForm" :model="loginInfo" label-width="80px">
            <el-form-item label="用户名称">
                <el-input v-model="loginInfo.loginName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginInfo.pwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginClick">登录</el-button>
                <el-button  @click="cancelClick">取消</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>


<script>
    import {loginAction} from "@/js/SysUser";
    import {redisGet} from "@/js/PublicMethods";

    import JSEncrypt from 'jsencrypt'

    export default {
        name: "Login",
        props: {},
        components: {},
        data() {
            return {
                loginInfo:{
                    loginName:"",
                    pwd:""
                }
            };
        },
        mounted(){
            this.getRedisDataByKey()
        },
        methods: {
            getRedisDataByKey(){
                if (!localStorage.getItem('publicKey')){
                    redisGet({key:"publicKey"}).then(res=>{
                        if (res.data){
                            localStorage.setItem('publicKey', res.data)
                        }
                    })
                }
            },
            cancelClick(){
                this.$router.back(-1);
            },
            loginClick(){
                // 然后页面头引入import JSEncrypt from 'jsencrypt';
                const encrypt = new JSEncrypt();
                encrypt.setPublicKey(localStorage.getItem('publicKey'));
                let params=Object.assign({},this.loginInfo);
                params.pwd = encrypt.encrypt(params.pwd);
                loginAction(params).then(res=>{
                    if (res.code==0){
                        this.$message.success(res.msg)
                    }else{
                        this.$message.error(res.msg)
                    }
                })
            }
        },
    }
</script>
<style lang="less" scoped>
    .Login {

    }
</style>

