<template>
    <div class="content">
        <el-row>
            <el-col :span="24">
                <el-breadcrumb separator="/" class="breadcump">
                    <el-breadcrumb-item>Administration</el-breadcrumb-item>
                    <el-breadcrumb-item>Logs</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-tabs v-model="activeName" >
                        <el-tab-pane label="Api Logs" name="api-logs">
                            <ApiLog />
                        </el-tab-pane>
                        <el-tab-pane label="Login Logs" name="login-logs">
                            <LoginFailLog />
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ApiLog from "../../../components/logs/ApiLog";
    import LoginFailLog from "../../../components/logs/LoginFailLog";

    export default {
        components: {
            ApiLog,
            LoginFailLog
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

<style scoped>


</style>
