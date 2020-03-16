<template>
    <div class="content">
        <el-row>
            <el-col :span="24">
                    <el-row type="flex" justify="space-between">
                        <el-col>
                        </el-col>
                        <el-col :span="9">
                            <el-input placeholder="Search" @input="page=1; getData()"
                                      prefix-icon="el-icon-search"
                                      v-model="filter">
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-table :data="tableData" style="width: 100%" v-loading="loading">
                        <el-table-column label="Uri">
                            <template slot-scope="scope">
                                {{ scope.row.uri }}
                            </template>
                        </el-table-column>
                        <el-table-column label="Method" width="80">
                            <template slot-scope="scope">
                                {{ scope.row.method }}
                            </template>
                        </el-table-column>
                        <el-table-column label="Users" width="150">
                            <template slot-scope="scope">
                                {{ scope.row.npp }} / {{ scope.row.kd_comp }}
                            </template>
                        </el-table-column>
                        <el-table-column label="Create At" width="170">
                            <template slot-scope="scope">
                                {{ scope.row.created_at }}
                            </template>
                        </el-table-column>
                    </el-table>

                    <el-row>
                        <el-col :span="24" align="center" style="margin-top:10px">
                            <el-pagination background layout="prev, pager, next, total"
                                           @current-change="handleCurrentChange" :current-page="page" :total="total">
                            </el-pagination>
                        </el-col>
                    </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                tableData: [],
                limit: 10,
                page: 1,
                loading: true,
                total: 1,
                filter: '',
            }
        },
        mounted() {
            this.getData();
        },
        computed: {
            ...mapGetters(['isAuthenticated', 'loggedInUser'])
        },
        methods: {
            getData() {
                this.loading = true;
                this.$axios.get(`/logs/api?limit=${this.limit}&page=${this.page}&filter=${this.filter}`).then(response => {
                    if (response.data.success) {
                        this.tableData = response.data.data;
                        this.total = response.data.total;
                    }
                    this.loading = false;
                }).catch(e => {
                    this.loading = false;
                })
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getData();
            },
        },
        watch: {

        }
    }

</script>

<style lang="scss" scoped>


</style>
