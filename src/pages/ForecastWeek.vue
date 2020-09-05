<template>
	<div>

	</div>
</template>

<script>
import openWeatherService from "../services/openWeatherMap";
export default {
	name: "ForecastWeek",
	data: function() {
		return {
			localizacao: "",
			regiao: "",
			temperatura: "",
			unidadeMedida: {},
			apisKeys: [],
			icon: "",
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
		getWeather(unit, iconSize) {
			let self = this;
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					openWeatherService
						.getWeather(pos.coords.latitude, pos.coords.longitude, unit.name)
						.then(function(data) {
							self.temperatura = `${data.main.temp.toFixed(1)} ${unit.symbol}`;
							self.localizacao = data.name;
							self.regiao = data.sys.country;
							openWeatherService
								.getIcon(data.weather[0].icon, iconSize)
								.then(function(icon) {
									self.icon = icon.url;
								});
						});
				},
				(err) => {
					console.log(err);
				}
			);
		},
	},
	created() {
		this.getWeather(this.units[0], 4);
	},
}
</script>

<style>

</style>