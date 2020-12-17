<template>
    <div class="FileConversion" >
        <el-upload
                ref = "upload"
                drag
                :auto-upload="false"
                :action="uploadUrl"
                :on-success = "clearFiles"
                >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
<!--            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
    </div>
</template>

<script>
    export default {
        name: "FileConversion",
        props: {},
        components: {},
        data() {
            return {
                uploadUrl: "/api/FilesController/uploadFiles"
            };
        },
        mounted() {
        },
        methods: {
            //文件上传提交
            submitUpload() {
                this.$refs.upload.submit();
            },

            //清除文件列表
            clearFiles(){
                // this.$refs.upload.submit();
            }
        },
    }
</script>
<style lang="less" scoped>
    .FileConversion {
        height: 800px;
    }
</style>
