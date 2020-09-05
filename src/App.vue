<template>
	<div id="app">
		<ForecastDay />
	</div>
</template>

<script>
import ForecastDay from "./pages/ForecastDay.vue";

export default {
	name: "App",
	components: {
		ForecastDay,
	},
};
</script>
<style>
body {
	height: 100vh;
	width: 100vw;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	font-family: "Arial";
	font-size: 16px;
	color: white;
	background-color: darkslategrey;
}
</style>
