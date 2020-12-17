<template>
    <div class="FirstVue">
        <input v-model="demoInfo.title">
        <input v-model="demoInfo.info">
        <button @click="addData">增加</button>
    </div>
</template>

<script>
    // import {addDemoData} from "../../js/FirstVue";

    export default {
        name: "project-performance",
        props: {},
        components: {},
        data() {
            return {
                demoInfo: {
                    title: "",
                    info: "",
                },
            };
        },
        mounted() {
        },
        methods: {
            addData() {
                this.$axios.post("/demo/addDemoData",this.demoInfo)
                    .then((res)=>{
                        console.log(res);
                    }).catch((error)=>{
                        console.log(error)
                    })

                // addDemoData(this.demoInfo).then(res => {
                //     console.log(res)
                // })
            }
        },
    }
</script>
<style lang="less" scoped>
    .FirstVue {
        height: 900px;
        H1 {
            text-align: center;
        }
    }
</style>
