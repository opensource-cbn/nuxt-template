<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <!-- Card stats -->
                    <div class="row" style="padding-top:20px">
                        <div class="col-xl-3">
                            <div class="card card-stats">
                                <!-- Card body -->
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="card-title text-uppercase text-muted mb-0"><i
                                                class="las la-book-reader"></i> Learning Hours</h5>
                                            <span class="h2 font-weight-bold mb-0">{{numberWithCommas(summary.learning_hours.current)}}
                                                Hours</span>
                                        </div>
                                    </div>
                                    <p class="mt-3 mb-0 text-sm">
                                        <span :class="{'text-precentage': true, 'text-success': summary.learning_hours.type == 'up', 'text-danger': summary.learning_hours.type == 'down', 'mr-2': true}"><i :class="{'las': true, 'la-angle-double-up': summary.learning_hours.type == 'up', 'la-angle-double-down': summary.learning_hours.type == 'down'}"></i> <b>{{summary.learning_hours.precentage}}%</b></span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card card-stats">
                                <!-- Card body -->
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="card-title text-uppercase text-muted mb-0"><i
                                                class="las la-chalkboard-teacher"></i> Sharing Hours</h5>
                                            <span class="h2 font-weight-bold mb-0">{{numberWithCommas(summary.sharing_hours.current)}}
                                                Hours</span>
                                        </div>
                                    </div>
                                    <p class="mt-3 mb-0 text-sm">
                                        <span :class="{'text-precentage': true, 'text-success': summary.sharing_hours.type == 'up', 'text-danger': summary.sharing_hours.type == 'down', 'mr-2': true}"><i :class="{'las': true, 'la-angle-double-up': summary.sharing_hours.type == 'up', 'la-angle-double-down': summary.sharing_hours.type == 'down'}"></i> <b>{{summary.sharing_hours.precentage}}%</b></span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card card-stats">
                                <!-- Card body -->
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="card-title text-uppercase text-muted mb-0"><i
                                                class="las la-coins"></i> Learning Point</h5>
                                            <span class="h2 font-weight-bold mb-0">{{numberWithCommas(summary.point.current)}}</span>
                                        </div>
                                    </div>
                                    <p class="mt-3 mb-0 text-sm">
                                        <span :class="{'text-precentage': true, 'text-success': summary.point.type == 'up', 'text-danger': summary.point.type == 'down', 'mr-2': true}"><i :class="{'las': true, 'la-angle-double-up': summary.point.type == 'up', 'la-angle-double-down': summary.point.type == 'down'}"></i> <b>{{summary.point.precentage}}%</b></span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <div class="card card-stats">
                                <!-- Card body -->
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="card-title text-uppercase text-muted mb-0"><i
                                                class="las la-book"></i> Course Completed</h5>
                                            <span
                                                class="h2 font-weight-bold mb-0">{{summary.course_completed.current}}</span>
                                        </div>
                                    </div>
                                    <p class="mt-3 mb-0 text-sm">
                                        <span :class="{'text-precentage': true, 'text-success': summary.course_completed.type == 'up', 'text-danger': summary.course_completed.type == 'down', 'mr-2': true}"><i :class="{'las': true, 'la-angle-double-up': summary.course_completed.type == 'up', 'la-angle-double-down': summary.course_completed.type == 'down'}"></i> <b>{{summary.course_completed.precentage}}%</b></span>
                                        <span class="text-nowrap">Since last month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page content -->
        <div class="container-fluid mt--6">
            <div class="row" v-if="false">
                <div class="col-xl-8">
                    <div class="card bg-default">
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="text-light text-uppercase ls-1 mb-1">Mounthly</h6>
                                    <h5 class="h3 text-white mb-0">Learning Hours</h5>
                                </div>
                                <div class="col">
                                    <ul class="nav nav-pills justify-content-end">
                                        <li class="nav-item mr-2 mr-md-0" data-toggle="chart"
                                            data-target="#chart-sales-dark"
                                            data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                                            data-prefix="$" data-suffix="k">
                                            <a href="#" class="nav-link py-2 px-3 active" data-toggle="tab">
                                                <span class="d-none d-md-block">Learning Hours</span>
                                                <span class="d-md-none">M</span>
                                            </a>
                                        </li>
                                        <li class="nav-item" data-toggle="chart" data-target="#chart-sales-dark"
                                            data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                                            data-prefix="$" data-suffix="k">
                                            <a href="#" class="nav-link py-2 px-3" data-toggle="tab">
                                                <span class="d-none d-md-block">Course Completed</span>
                                                <span class="d-md-none">W</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- <la-cartesian autoresize :bound="[0, n => n + 1000]" :data="values">
                                <la-line dot curve prop="pv"></la-line>
                                <la-line dot curve prop="uv"></la-line>
                                <la-line dot curve prop="amt"></la-line>
                                <la-x-axis prop="name"></la-x-axis>
                                <la-y-axis></la-y-axis>
                                <la-tooltip></la-tooltip>
                            </la-cartesian> -->
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header bg-transparent">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                    <h5 class="h3 mb-0">Popular Course</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- Chart -->
                            <div class="chart">
                                <canvas id="chart-bars" class="chart-canvas"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="false">
                <div class="col-xl-4">
                    <!-- Members list group card -->
                    <div class="card">
                        <!-- Card header -->
                        <div class="card-header">
                            <!-- Title -->
                            <h5 class="h3 mb-0">Top Users</h5>
                        </div>
                        <!-- Card body -->
                        <div class="card-body">
                            <!-- List group -->
                            <ul class="list-group list-group-flush list my--3">
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/team-1.jpg">
                                            </a>
                                        </div>
                                        <div class="col ml--2">
                                            <h4 class="mb-0">
                                                <a href="#!">John Michael</a>
                                            </h4>
                                            <span class="text-success">●</span>
                                            <small>Online</small>
                                        </div>
                                        <div class="col-auto">
                                            <p class="h2 font-weight-bold mb-0">15770 <i
                                                class="el-icon-coin text-yellow"></i></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/team-2.jpg">
                                            </a>
                                        </div>
                                        <div class="col ml--2">
                                            <h4 class="mb-0">
                                                <a href="#!">Alex Smith</a>
                                            </h4>
                                            <span class="text-warning">●</span>
                                            <small>In a meeting</small>
                                        </div>
                                        <div class="col-auto">
                                            <p class="h2 font-weight-bold mb-0">10070 <i
                                                class="el-icon-coin text-yellow"></i></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/team-3.jpg">
                                            </a>
                                        </div>
                                        <div class="col ml--2">
                                            <h4 class="mb-0">
                                                <a href="#!">Samantha Ivy</a>
                                            </h4>
                                            <span class="text-danger">●</span>
                                            <small>Offline</small>
                                        </div>
                                        <div class="col-auto">
                                            <p class="h2 font-weight-bold mb-0">1570 <i
                                                class="el-icon-coin text-yellow"></i></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/team-4.jpg">
                                            </a>
                                        </div>
                                        <div class="col ml--2">
                                            <h4 class="mb-0">
                                                <a href="#!">John Michael</a>
                                            </h4>
                                            <span class="text-success">●</span>
                                            <small>Online</small>
                                        </div>
                                        <div class="col-auto">
                                            <p class="h2 font-weight-bold mb-0">150 <i
                                                class="el-icon-coin text-yellow"></i></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <!-- Checklist -->
                    <div class="card">
                        <!-- Card header -->
                        <div class="card-header">
                            <!-- Title -->
                            <h5 class="h3 mb-0">Schedule</h5>
                        </div>
                        <!-- Card body -->
                        <div class="card-body p-0">
                            <!-- List group -->
                            <ul class="list-group list-group-flush" data-toggle="checklist">
                                <li class="checklist-entry list-group-item flex-column align-items-start py-4 px-4">
                                    <div class="checklist-item checklist-item-success">
                                        <div class="checklist-info">
                                            <h5 class="checklist-title mb-0">Call with Dave</h5>
                                            <small>10:30 AM</small>
                                        </div>
                                        <div>
                                            <div class="custom-control custom-checkbox custom-checkbox-success">
                                                <input class="custom-control-input" id="chk-todo-task-1" type="checkbox"
                                                       checked>
                                                <label class="custom-control-label" for="chk-todo-task-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="checklist-entry list-group-item flex-column align-items-start py-4 px-4">
                                    <div class="checklist-item checklist-item-warning">
                                        <div class="checklist-info">
                                            <h5 class="checklist-title mb-0">Lunch meeting</h5>
                                            <small>10:30 AM</small>
                                        </div>
                                        <div>
                                            <div class="custom-control custom-checkbox custom-checkbox-warning">
                                                <input class="custom-control-input" id="chk-todo-task-2"
                                                       type="checkbox">
                                                <label class="custom-control-label" for="chk-todo-task-2"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="checklist-entry list-group-item flex-column align-items-start py-4 px-4">
                                    <div class="checklist-item checklist-item-info">
                                        <div class="checklist-info">
                                            <h5 class="checklist-title mb-0">Argon Dashboard Launch</h5>
                                            <small>10:30 AM</small>
                                        </div>
                                        <div>
                                            <div class="custom-control custom-checkbox custom-checkbox-info">
                                                <input class="custom-control-input" id="chk-todo-task-3"
                                                       type="checkbox">
                                                <label class="custom-control-label" for="chk-todo-task-3"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="checklist-entry list-group-item flex-column align-items-start py-4 px-4">
                                    <div class="checklist-item checklist-item-danger">
                                        <div class="checklist-info">
                                            <h5 class="checklist-title mb-0">Winter Hackaton</h5>
                                            <small>10:30 AM</small>
                                        </div>
                                        <div>
                                            <div class="custom-control custom-checkbox custom-checkbox-danger">
                                                <input class="custom-control-input" id="chk-todo-task-4" type="checkbox"
                                                       checked>
                                                <label class="custom-control-label" for="chk-todo-task-4"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <!-- Progress track -->
                    <div class="card">
                        <!-- Card header -->
                        <div class="card-header">
                            <!-- Title -->
                            <h5 class="h3 mb-0">Survey</h5>
                        </div>
                        <!-- Card body -->
                        <div class="card-body">
                            <!-- List group -->
                            <ul class="list-group list-group-flush list my--3">
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder"
                                                     src="~static/assets/img/theme/bootstrap.jpg">
                                            </a>
                                        </div>
                                        <div class="col">
                                            <h5>Argon Design System</h5>
                                            <div class="progress progress-xs mb-0">
                                                <div class="progress-bar bg-orange" role="progressbar"
                                                     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                     style="width: 60%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/angular.jpg">
                                            </a>
                                        </div>
                                        <div class="col">
                                            <h5>Angular Now UI Kit PRO</h5>
                                            <div class="progress progress-xs mb-0">
                                                <div class="progress-bar bg-green" role="progressbar"
                                                     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                                                     style="width: 100%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/sketch.jpg">
                                            </a>
                                        </div>
                                        <div class="col">
                                            <h5>Black Dashboard</h5>
                                            <div class="progress progress-xs mb-0">
                                                <div class="progress-bar bg-red" role="progressbar" aria-valuenow="72"
                                                     aria-valuemin="0" aria-valuemax="100" style="width: 72%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item px-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <a href="#" class="avatar rounded-circle">
                                                <img alt="Image placeholder" src="~static/assets/img/theme/react.jpg">
                                            </a>
                                        </div>
                                        <div class="col">
                                            <h5>React Material Dashboard</h5>
                                            <div class="progress progress-xs mb-0">
                                                <div class="progress-bar bg-teal" role="progressbar" aria-valuenow="90"
                                                     aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <ChartPieCoursesByType />
                </div>

                <div class="col-md-6">
                    <ChartPieCoursesByCategory />
                </div>

            </div>


            <!-- popular couses -->
            <div class="row">
                <div class="col-xl-6">
                    <el-card>
                        <!-- Card header -->
                        <div slot="header" class="clearfix">
                            <!-- Title -->
                            <h5 class="h3 mb-0">Popular Courses</h5>
                        </div>
                        <!-- Card body -->
                        <!-- <div class="card-body"> -->
                        <!-- <TableSkeleton></TableSkeleton> -->
                        <el-table :data="popularCourses" stripe v-loading="loadingPopularCourses">
                            <el-table-column type="index" width="50" align="center">
                            </el-table-column>
                            <el-table-column label="Course Title">
                                <template slot-scope="scope">
                                    <el-tooltip class="item" effect="dark" :content="scope.row.title" placement="top">
                                        <router-link :to="`/admin/pembelajaran/kursus/view?id=${scope.row.id}`">
                                            <el-link type="primary" class="text-truncate">{{scope.row.title}}</el-link>
                                        </router-link>
                                    </el-tooltip>
                                </template>
                            </el-table-column>
                            <el-table-column label="Completed" width="130" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.total_completed}}
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- </div> -->
                    </el-card>
                </div>
                <div class="col-xl-6">
                    <el-card class="card">
                        <!-- Card header -->
                        <div slot="header" class="clearfix">
                            <!-- Title -->
                            <h5 class="h3 mb-0">Top Users</h5>
                        </div>
                        <!-- Card body -->
                        <!-- <div class="card-body"> -->
                        <!-- List group -->
                        <el-table :data="topUsers" stripe v-loading="loadingTopUsers" width="100%">
                            <el-table-column type="index" width="50" align="center">
                            </el-table-column>
                            <el-table-column label="User">
                                <template slot-scope="scope">
                                    <el-popover placement="top-start" title="" width="300" trigger="click">
                                        <el-row :gutter="10">
                                            <el-col :span="5">
                                                <el-image class="avatar" fit="cover" :src="scope.row.photo_url">
                                                </el-image>
                                            </el-col>
                                            <el-col :span="19">
                                                <h5>{{scope.row.nm}}</h5>
                                                <small>{{ scope.row.posisi }}</small>
                                                <br>
                                                <div class="badge badge-pill badge-primary"
                                                     style="margin-top:10px; margin-right:5px"
                                                     v-for="skill in scope.row.user_skill.slice(0,5)" :key="skill.id">
                                                    {{skill.nm_skill}}
                                                </div>
                                                <span class="badge badge-pill badge-light"
                                                      v-if="scope.row.user_skill.length > 5 ">+
                                                    {{scope.row.user_skill.length-5}} More</span>
                                            </el-col>
                                        </el-row>

                                        <div slot="reference">
                                            <el-image class="avatar"
                                                      style="width:25px !important; height:25px !important; "
                                                      fit="cover" alt="Image placeholder"
                                                      :src="scope.row.photo_url"></el-image>
                                            <span style="margin-left:10px" class="top-nama">
                                                <el-link type="primary">{{scope.row.nm}}</el-link>
                                            </span>
                                        </div>
                                    </el-popover>
                                </template>
                            </el-table-column>
                            <el-table-column label="Completed" width="110" align="center">
                                <template slot-scope="scope">
                                    {{scope.row.course_completed}}
                                </template>
                            </el-table-column>
                            <el-table-column label="Point" width="70">
                                <template slot-scope="scope">
                                    {{numberWithCommas(scope.row.learning_point)}}
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- </div> -->
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TableSkeleton from '../../components/skeleton/TableSkeleton'
    import ChartPieCoursesByType from "../../components/chart/ChartPieCoursesByType";
    import ChartPieCoursesByCategory from "../../components/chart/ChartPieCoursesByCategory";
    // import ChartPieDeviceInfo from "../../components/chart/ChartPieDeviceInfo";

    export default {
        components: {
            TableSkeleton,
            ChartPieCoursesByType,
            ChartPieCoursesByCategory,
            // ChartPieDeviceInfo
        },
        data() {
            return {
                summary: {
                    point: {
                        type: "up",
                        current: 0,
                        previous: 0,
                        precentage: 0
                    },
                    learning_hours: {
                        type: "up",
                        current: 0,
                        previous: 0,
                        precentage: 0
                    },
                    sharing_hours: {
                        type: "up",
                        current: 0,
                        previous: 0,
                        precentage: 0
                    },
                    course_completed: {
                        type: "up",
                        current: 0,
                        previous: 0,
                        precentage: 0
                    }
                },
                topUsers: [],
                popularCourses: [],
                loadingTopUsers: true,
                loadingPopularCourses: true
            }
        },
        mounted() {
            this.getSummary();
            this.getTopUsers()
            this.getPopularCourses()
        },
        methods: {
            async getSummary() {
                await this.$axios.get('/admin/summary').then(response => {
                    if (response.data.success) {
                        this.summary = response.data.data
                    }
                }).catch(e => {
                    console.log(e)
                })
            },
            async getTopUsers() {
                await this.$axios.get('/topusers').then(response => {
                    if (response.data.success) {
                        this.topUsers = response.data.data
                    }
                }).finally(() => {
                    this.loadingTopUsers = false
                })
            },
            async getPopularCourses() {
                this.loadingPopularCourses = true;
                await this.$axios.get('/popularcourses').then(response => {
                    if (response.data.success) {
                        this.popularCourses = response.data.data
                    }
                }).finally(() => {
                    this.loadingPopularCourses = false
                })
            }
        },
    }

</script>

<style scoped>
.text-precentage {
    font-size: 14px;
    font-weight: bold
}
span.top-nama > a > span.el-link--inner {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    width: 150px !important;
}
</style>
