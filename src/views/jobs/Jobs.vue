<template>
    <div class="jobs" v-if="jobs.length">
        <h1>JOBS</h1>
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
                {{ job.title }}
            </router-link>
        </div>
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message))

    }
}


</script>

<style 
scoped>
.jobs div {
    font-size: larger;
}
</style>