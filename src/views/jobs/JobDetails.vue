<template>
    <div>
        <h1>Job Details Page</h1>
        <p>The job id is {{ id }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            props: [id]
            // id: this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>

</style>