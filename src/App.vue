<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Today</router-link> |
			<router-link to="/week">Week</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
	body {
		height: 100vh;
		width: 100vw;
		margin: 0 auto;
		padding: 0;
		display: flex;
		justify-content: center;
		font-family: "Arial";
		font-size: 16px;
		background-color: darkslategray;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: gray;
	}

	#nav a.router-link-exact-active {
		color: white;
	}
</style>
