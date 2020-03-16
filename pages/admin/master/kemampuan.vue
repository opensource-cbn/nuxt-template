<template>
  <div class="content">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator="/" class="breadcump">
          <el-breadcrumb-item>Master</el-breadcrumb-item>
          <el-breadcrumb-item>Skill</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover">
          <el-row type="flex" justify="space-between">
            <el-col>
              <el-select size="small" v-model="value" placeholder="Action">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-button size="small" type="primary" @click="aksi()">Ok</el-button>
            </el-col>
            <el-col :span="5">
              <el-input size="small" placeholder="Seacrh Skill or description" @input="page=1; getData()" prefix-icon="el-icon-search"
                v-model="filter">
              </el-input>
            </el-col>
          </el-row>
          <el-table ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange"
            v-loading="loading">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <!-- <el-table-column label="Nama Kemampuan">
              <template slot-scope="scope">
                <el-link type="primary" href="#" @click="detail(scope.row)">{{ scope.row.nm_skill }}</el-link>
              </template>
            </el-table-column> -->
            <el-table-column label="Name Skill">
              <template slot-scope="scope">
                <p @click="showDataUpdate(scope.row)"><el-link type="primary">{{ scope.row.nm_skill }}</el-link></p>
              </template>
            </el-table-column>
            <el-table-column label="Description">
              <template slot-scope="scope">
                {{ scope.row.description }}
              </template>
            </el-table-column>
          </el-table>

          <el-row>
            <el-col :span="24" align="center" style="margin-top:10px">
              <el-pagination background layout="prev, pager, next" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" :current-page="page" :total="total">
              </el-pagination>
            </el-col>
          </el-row>

          <!-- Floating Button -->
          <el-tooltip class="item" effect="dark" content="Add new Skill" placement="top-start">
            <a class="float" @click="tambahDialog = true; isUpdate = false; form.nm_skill = ''; form.description = '';">
              <i class="el-icon-plus my-float"></i>
            </a>
          </el-tooltip>
          <!-- End floating button-->

          <!-- Tambah Kemampuan Dialog -->
          <el-dialog title="Kemampuan" :visible.sync="tambahDialog" :width="$store.state.drawer.mode == 'mobile' ? '80%' : '50%'">
            <el-form :model="form" :rules="rule" ref="modalKemampuan" v-if="tambahDialog" label-width="auto">
              <el-form-item label="Name Skill :" prop="nm_skill">
                <el-input v-model="form.nm_skill" placeholder="Enter name skills"></el-input>
              </el-form-item>
              <el-form-item label="Description" prop="description">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" placeholder="Enter skill description"
                  v-model="form.description">
                </el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="tambahDialog = false">Cancel</el-button>
              <el-button type="primary" :loading="loadingButton" :disabled="loadingButton" v-if="isUpdate" @click="updateData()">update</el-button>
              <el-button type="primary" :loading="loadingButton" :disabled="loadingButton" v-else @click="saveData('tambah')">Save</el-button>
            </span>
          </el-dialog>
          <!-- End Tambah Kemampuan Dialog -->

          <!-- Delete Dialog -->
          <el-dialog title="Warning!" :visible.sync="centerDialogVisible" width="25%" center>
            <span style="text-align-center">Are you sure you want to delete this skill?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">No</el-button>
              <el-button type="primary" :loading="loadingButton" :disabled="loadingButton" @click="deleteData()">Yes</el-button>
            </span>
          </el-dialog>
          <!-- End Delete Dialog -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        form: {
          nm_skill: '',
          description: '',
          kd_comp: ''
        },
        rule: {
          nm_skill: [{
            required: true,
            message: 'Please enter a skill name',
            trigger: 'blur'
          }],
          description: [{
            required: true,
            message: 'Please enter a skill description',
            trigger: 'blur'
          }]
        },
        tableData: [],
        multipleSelection: [],
        limit: 10,
        page: 1,
        loading: true,
        total: 1,
        filter: '',
        description: '',
        options: [{
          value: 'hapus',
          label: 'Delete'
        }],
        tambahDialog: false,
        isUpdate: false,
        value: '',
        centerDialogVisible: false,
        bgColor: '#778899',
        position: 'top-right',
        fabActions: [{
            name: 'cache',
            icon: 'cached'
          },
          {
            name: 'alertMe',
            icon: 'add_alert'
          }
        ],
        loadingButton: false
      }
    },
    mounted() {
      this.getData();
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
      saveData(form) {
        this.$refs['modalKemampuan'].validate((valid) => {
          if (valid) {
            this.loadingButton = true;
            this.form.kd_comp = this.loggedInUser.kd_comp
            this.$axios.post('/skill/create', this.form).then(response => {
              if (response.data.success) {
                this.getData();
                this.$notify.success({
                  title: 'Successful',
                  message: 'Successfully added skills'
                });
                this.tambahDialog = false
              } else {
                let msg = '';
                if (response.data.data !== null) {
                  Object.keys(response.data.data).forEach((v, k) => {
                    setTimeout(() => {
                      this.$notify.error({
                        title: this.humanize(v),
                        message: response.data.data[v]
                      });
                    }, 1000)
                  })
                } else {
                  this.$notify.error({
                    title: 'Failed',
                    message: 'Failed to save skill' //response.data.message
                  });
                }
              }
              this.loadingButton = false;
            }).catch(e => {
              console.log(e);
              this.loadingButton = false;
            })
          }
        });
      },
      humanize(str) {
        let frags = str.split('_');
        for (let i = 0; i < frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
      },
      getData() {
        this.loading = true;
        this.$axios.get(`/skills?limit=${this.limit}&page=${this.page}&filter=${this.filter}`).then(response => {
          if (response.data.success) {
            this.tableData = response.data.data
            this.total = response.data.total
          }
          this.loading = false;
        }).catch(e => {
          this.loading = false;
          console.log(e)
        })
      },
      aksi() {
        if (this.value == 'hapus' && this.multipleSelection.length !== 0) {
          this.centerDialogVisible = true;
        }
      },
      
      showDataUpdate(data) {
        this.isUpdate = true
        this.form.nm_skill = data.nm_skill
        this.form.description = data.description
        this.form.id = data.id
        this.tambahDialog = true
      },
      
      updateData() {
        this.loadingButton = true;
        this.form.kd_comp = this.loggedInUser.kd_comp
        this.$axios.post('skill/' + this.form.id + '/update', this.form).then(response => {
          if (response.data.success) {
            this.getData();
            this.tambahDialog = false
            this.$notify.success({
              title: 'Successful',
              message: 'Updated successfully.'
            });
          } else {
            this.$notify.error({
              title: 'Failed',
              message: 'Failed to update' //response.data.message
            });
          }
        }).finally(() => {
          this.loadingButton = false;
        });
      },

      deleteData() {
        this.loadingButton = true;
        this.$axios.post('/skill/delete', {
          bulk: this.multipleSelection.map(kategori => (kategori.id))
        }).then(response => {  
          if (response.data.success) {
            this.$notify.success({
              title: 'Successful',
              message: 'Skill successfully deleted'
            });
            this.getData()
          } else {
            this.$notify.error({
              title: 'Error',
              message: response.data.message
            });
          }
        }).catch(e => {
          console.log(e)
        }).finally(() => {
            this.loadingButton = false;
            this.centerDialogVisible = false;
        });
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getData();
      },
      cache() {
        console.log('Cache Cleared');
      },
      alert() {
        alert('Clicked on alert icon');
      }
    },
    watch: {
      tambahDialog(newValue, oldValue) {
        if(newValue == false){
          this.$refs['modalKemampuan'].resetFields();
        }
      }
    }
  }

</script>

<style lang="scss" scoped>


</style>
