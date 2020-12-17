<template>
    <div class="FishClass">
        <div class="wrap">
            <div class="cluster one"></div>
            <div class="cluster two"></div>
            <div class="cluster three"></div>
            <div class="cluster four"></div>
            <div class="cluster five"></div>
        </div>
        <div class="wrap">
            <div class="shark">
                <div class="front">
                </div>
                <div class="tail">
                </div>
            </div>
        </div>
        <h1>
            <a>
                <span>S</span>
                <span>E</span>
                <span>A</span><br>
                <span>D</span>
                <span>E</span>
                <span>B</span>
                <span>R</span>
                <span>I</span>
                <span>S</span>
            </a>
        </h1>

    </div>
</template>

<script>
    // import {addDemoData} from "../../js/FirstVue";

    export default {
        name: "Fish",
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
        methods: {},
    }
</script>
<style lang="less" scoped>
</style>
