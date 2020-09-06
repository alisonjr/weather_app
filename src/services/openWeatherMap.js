const urlWeather = "https://api.openweathermap.org/data/2.5/weather?";
const urlForecastWeek =
	"https://api.openweathermap.org/data/2.5/forecast/daily?";
const urlIcon = "https://openweathermap.org/img/wn";
const apiKeys = [
	"95b11822eb429c84c1143a19251b1881",
	"95b11822eb429c84c1143a19251b1881",
	"95b11822eb429c84c1143a19251b1881",
	"95b11822eb429c84c1143a19251b1881",
];

const getWeather = (lat, long, unit) => {
	let apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
	let url = `${urlWeather}lat=${lat}&lon=${long}&units=${unit}&APPID=${apiKey}`;

	return fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			return data;
		});
};

const getForecastWeek = (lat, long, unit, cnt) => {
	let apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
	let url = `${urlForecastWeek}lat=${lat}&lon=${long}&units=${unit}&cnt=${cnt}&APPID=${apiKey}`;

	return fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			return data;
		});
};

const getIcon = (iconCode, size) => {
	let url = `${urlIcon}/${iconCode}@${size}x.png`;
	return fetch(url).then((data) => {
		return data;
	});
};
export default { getWeather, getIcon, getForecastWeek };
