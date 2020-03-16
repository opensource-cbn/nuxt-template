<template>
    <el-card style="margin-bottom: 20px" title="as">
        <el-row type="flex" justify="space-between">
            <el-col>
                <h3>Mobile Device Info</h3>
            </el-col>
            <el-col :span="5">
            </el-col>
        </el-row>
        <div class="row">
            <div class="col-md-6">
                <highcharts :options="chartOptions" ref="chart"></highcharts>
            </div>
            <div class="col-md-6">
                <highcharts :options="chartOptions2" ref="chart2"></highcharts>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: false,
                chartOptions: {
                    credits: false,
                    chart: {
                        height: 500,
                        type: 'pie',
                        events: {
                            load() {
                                this.showLoading();
                            }
                        }
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                            'Jumlah: <b>{point.y}%</b><br/>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.y}%'
                            }
                        }
                    },
                    series: [
                        {
                            minPointSize: 10,
                            innerSize: '20%',
                            zMin: 0,
                            name: 'Type',
                            data: [
                                // {
                                //     name: 'Spain',
                                //     y: 505370,
                                // },
                                // {
                                //     name: 'France',
                                //     y: 551500,
                                // },
                                // {
                                //     name: 'Poland',
                                //     y: 312685,
                                // }
                            ]
                        }
                    ]
                },
                chartOptions2: {
                    credits: false,
                    chart: {
                        height: 500,
                        type: 'pie',
                        events: {
                            load() {
                                this.showLoading();
                            }
                        }
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                            'Jumlah: <b>{point.y}%</b><br/>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.y}%'
                            }
                        }
                    },
                    series: [
                        {
                            minPointSize: 10,
                            innerSize: '20%',
                            zMin: 0,
                            name: 'Type',
                            data: [
                                // {
                                //     name: 'Spain',
                                //     y: 505370,
                                // },
                                // {
                                //     name: 'France',
                                //     y: 551500,
                                // },
                                // {
                                //     name: 'Poland',
                                //     y: 312685,
                                // }
                            ]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.geData();
        },
        methods: {
            geData() {
                this.$axios.get('/summary/chart-user-device')
                    .then((res) => {
                        console.log(res.data.data);
                        this.chartOptions.series[0].data = res.data.data.data;
                        this.chartOptions2.series[0].data = res.data.data.total;
                    })
                    .catch((e) => {
                        console.log(e)
                    })
                    .finally(() => {
                        this.$refs.chart.chart.hideLoading();
                        this.$refs.chart2.chart.hideLoading();
                    })
            }
        }
    }
</script>
