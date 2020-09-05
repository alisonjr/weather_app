<template>
	<Weather
		:icon="icon"
		:localizacao="localizacao"
		:regiao="regiao"
		:temperatura="temperatura"
	/>
</template>

<script>
	import openWeatherService from "../services/openWeatherMap";
	import Weather from "../components/Weather.vue";
	export default {
		name: "ForecastDay",
		components: {
			Weather,
		},
		data() {
			return {
				icon: "",
				localizacao: "",
				regiao: "",
				temperatura: "",
				units: [
					{ name: "imperial", symbol: "ºF" },
					{ name: "metric", symbol: "ºC" },
				],
			};
		},
		methods: {
			getWeather(unit, iconSize) {
				let self = this;
				navigator.geolocation.getCurrentPosition((pos) => {
					openWeatherService
						.getWeather(pos.coords.latitude, pos.coords.longitude, unit.name)
						.then((data) => {
							self.localizacao = data.name;
							self.regiao = data.sys.country;
							self.temperatura = `${data.main.temp.toFixed(1)} ${unit.symbol}`;
							openWeatherService
								.getIcon(data.weather[0].icon, iconSize)
								.then((data) => {
									self.icon = data.url;
								});
						});
				});
			},
		},
		created() {
			this.getWeather(this.units[1], 4);
		},
	};
</script>

<style></style>
