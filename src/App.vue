<template>
    <div id="app" class="app_main">
        <menu-head></menu-head>
        <router-view/>
<!--        <el-scrollbar style="height: 100%">-->
<!--          -->
<!--            <el-backtop target=".el-scrollbar__wrap" :bottom="100">-->
<!--                <div class="back_top_cls">-->
<!--                    <el-tooltip class="item" effect="dark" content="返回顶部" placement="left-start">-->
<!--                        <i class="el-icon-arrow-up"></i>-->
<!--                    </el-tooltip>-->
<!--                </div>-->
<!--            </el-backtop>-->
<!--        </el-scrollbar>-->
    </div>
</template>

<script>
    import MenuHead from '@/views/Home/MenuHead'

    export default {
        name: 'App',
        components: {
            MenuHead
        },
    }
</script>

<style lang="less">
    .app_main {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;
        height: 100%;
        /deep/.el-scrollbar__wrap {
            overflow-x: hidden;
        }

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: #fff;
        }
        ::-webkit-scrollbar-thumb {
             border-radius:5px;
            -webkit-box-shadow: inset 0 0 6px #DEDEE0;
            background-color: rgba(0, 0, 0, .1)
        }


        .back_top_cls{
            position: fixed;
            background-color: #fff;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #409EFF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            box-shadow: 0 0 6px rgba(0,0,0,0.12);
            cursor: pointer;
            z-index: 5;
        }
    }
</style>
