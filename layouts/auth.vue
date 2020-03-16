<template>
    <div>
        <div class="row" style="height: 100vh">
            <div class="col-md-6 bg-login">

            </div>
            <div class="col-md-6">
                <div style="text-align: center">
                    <div style="width: 80%; margin-left: auto; margin-right: auto; margin-top: 15%">
                        <nuxt/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            bodyAttrs: {
              class: 'ohide bg-putih'
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .bg-login {
        background: url('../static/assets/img/bg-login.svg') no-repeat top right/cover;
    }
</style>
