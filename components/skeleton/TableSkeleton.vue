<template>
    <skeleton-loading style="margin-bottom: 20px">
        <table style="width: 100%" class="table">
            <thead>
            <tr>
                <th v-for="index2 in parseInt(column)" :key="index2">
                    <square-skeleton :count="1" :boxProperties="{
                              bottom: '0px',
                              width: '100%',
                              height: '25px'
                          }">
                    </square-skeleton>
                </th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="index in row" :key="index">
                    <td v-for="index2 in parseInt(column)" :key="index2">
                        <square-skeleton :count="1" :boxProperties="{
                                  bottom: '0px',
                                  width: '100%',
                                  height: '25px'
                              }">
                        </square-skeleton>
                    </td>
                </tr>
            </tbody>
        </table>
    </skeleton-loading>
</template>

<script>
    export default {
        props: {
            column: {
                // type: Number,
                default: 3
            },
            row: {
                default: 3
            }
        },
    }
</script>
