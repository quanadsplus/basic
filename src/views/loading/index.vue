<template>
    <div id="preloader">
        <div id="status">
          <div class="spinner-border text-primary avatar-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push('/dashboard/dashboard-overview')
            }, 1000);
        }
    }
</script>

<style lang="scss" scoped>

</style>