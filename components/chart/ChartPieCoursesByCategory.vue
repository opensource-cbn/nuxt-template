<template>
    <el-card style="margin-bottom: 20px">
            <highcharts :options="chartOptions" ref="chart"></highcharts>
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
                        height: 300,
                        type: 'pie',
                        events: {
                        load() {
                          this.showLoading();
                        }
                      }
                    },
                    title: {
                        text: 'Courses by Category'
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                            'Jumlah: <b>{point.y}</b><br/>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)'
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
                this.$axios.get('/summary/chart-course-by-category')
                    .then((res) => {
                        console.log(res.data.data);
                        this.chartOptions.series[0].data = res.data.data;
                    })
                    .catch((e) => {
                        console.log(e)
                    })
                    .finally(() => {
                        this.$refs.chart.chart.hideLoading();
                    })
            }
        }
    }
</script>
