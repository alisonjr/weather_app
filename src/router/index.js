import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "day",
		component: () =>
			import(/* webpackChunkName: "day" */ "../pages/ForecastDay.vue"),
	},
	{
		path: "/week",
		name: "Week",
		component: () =>
			import(/* webpackChunkName: "week" */ "../pages/ForecastWeek.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
