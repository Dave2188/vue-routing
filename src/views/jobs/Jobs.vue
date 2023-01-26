<template>
    <div class="jobs">
        <h1>JOBS</h1>
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
                {{ job.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: 'Dave Ux Designer', id: 1, details: 'lorem lorem' },
                { title: 'Dave Web Developer', id: 2, details: 'lorem lorem' },
                { title: 'Dave Vue Developer', id: 3, details: 'lorem lorem' }
            ]
        }
    },

}
</script>

<style 
scoped>
.jobs div {
    font-size: larger;
}
</style>