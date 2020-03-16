<template>
  <nuxt-child/>
</template>

<script>
export default {
    middleware: 'auth',
    layout:'admin'
}
</script>

<style scoped>
</style>