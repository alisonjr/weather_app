<template>
	<div>
		<Weather v-for="(forecast, i) in forecasts" :key="i"
			:icon="forecast.icon"
			:localizacao="forecast.localizacao"
			:regiao="forecast.regiao"
			:temperatura="forecast.temperatura"
		/>
	</div>
</template>

<script>
import openWeatherService from "../services/openWeatherMap";
import Weather from "../components/Weather.vue";
export default {
	name: "ForecastWeek",
	components: {
		Weather,
	},
	data: function() {
		return {
			forecasts: [],
			units: [
				{name: "metric", symbol : "ºC"}, 
				{name:"imperial", symbol:"ºF"},
			],
		};
	},
	computed:{
		address(){
			return (!(this.localizacao === ""))? `${this.localizacao} - ${this.regiao}`: "";
		},
	},
	methods: {
		getForecastWeek(unit, iconSize) {
			let self = this;
			navigator.geolocation.getCurrentPosition((pos) => {
				openWeatherService
					.getForecastWeek(pos.coords.latitude, pos.coords.longitude, unit.name, 10)
					.then((data) => {
						data.list.forEach((data, i) => {
							self.forecasts[i].localizacao = data.name;
							self.forecasts[i].regiao = data.sys.country;
							self.forecasts[i].temperatura = `${data.main.temp.toFixed(1)} ${unit.symbol}`;
						
							openWeatherService
								.getIcon(data.weather[0].icon, iconSize)
								.then((data) => {
									self.icon = data.url;
								});
						});
					});
			});
		},
	},
	created() {
		this.getForecastWeek(this.units[1], 2);
	},
};
</script>

<style>
</style>
