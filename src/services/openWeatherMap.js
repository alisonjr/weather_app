const urlBaseAPI = "https://api.openweathermap.org/data/2.5/weather?";
const urlBaseIcon = "http://openweathermap.org/img/wn";

const getWeather = (lat, long, unit) => {
	let apiKey = "95b11822eb429c84c1143a19251b1881";
	let url = `${urlBaseAPI}lat=${lat}&lon=${long}&units=${unit}&APPID=${apiKey}`;

	return fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			return data;
		});
};
const getIcon = (iconCode, size) => {
	let url = `${urlBaseIcon}/${iconCode}@${size}x.png`;
	return fetch(url).then((data) => {
		return data;
	});
};
export default { getWeather, getIcon };
