<template>
    <div v-if="job">
        <h1>Job Details Page</h1>
        <p>The job id is {{ id }} -- {{ job.title }} -- {{ job.details }}</p>
    </div>
    <h1 v-else>Loading...</h1>
</template>

<script>
export default {
    data() {
        return {
            job: null
            // id: this.$route.params.id

        }
    },
    props: ['id'],

    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }

}
</script>

<style lang="scss" scoped>

</style>