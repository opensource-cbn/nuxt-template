<template>
    <div class="content">
        <el-row>
            <el-col :span="24">
                <el-breadcrumb separator="/" class="breadcump">
                    <el-breadcrumb-item>Administration</el-breadcrumb-item>
                    <el-breadcrumb-item>Mobile Device Info</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <ChartPieDeviceInfo />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ChartPieDeviceInfo from "../../../components/chart/ChartPieDeviceInfo";
    export default {
        components: {
            ChartPieDeviceInfo
        },
        data() {
            return {
                activeName: 'api-logs'
            }
        },
        mounted() {
        },
        computed: {
            ...mapGetters(['isAuthenticated', 'loggedInUser'])
        },
        methods: {

        },
        watch: {}
    }

</script>

<style lang="scss" scoped>


</style>
