import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Jobs from "./views/jobs/Jobs.vue";
import JobDetails from "./views/jobs/JobDetails.vue";
import FourFour from "./views/FourFour.vue";

const router = createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/about",
			name: "About",
			component: About,
		},
		{
			path: "/jobs",
			name: "Jobs",
			component: Jobs,
		},
		{
			path: "/jobs/:id",
			name: "JobDetails",
			component: JobDetails,
			props: true,
		},
		{
			path: "/all-jobs",
			redirect: "/jobs",
		},
		{
			path: "/:catchAll(.*)",
			name: "FourFour",
			component: FourFour,
		},
	],
});

createApp(App).use(router).mount("#app");
