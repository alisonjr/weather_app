<template>
	<div>
		<transition name="fade">
			<img v-if="icon.length > 2" :src="icon" />
		</transition>

		<transition name="fade">
			<h1  v-if="address.length > 2" class="city">{{ address}}</h1>
		</transition>

		<transition name="fade">
			<h2  v-if="temperatura.length > 2">{{ temperatura }}</h2>
		</transition>
	
	</div>
</template>

<script>
export default {
	name: "Weather",
	props:{
		localizacao: {
			type: String,
			required: true
		},
		regiao:  {
			type: String,
			required: true
		},
		temperatura:  {
			type: String,
			required: true
		},
		icon:  {
			type: String,
			required: true
		},
	},
	computed:{
		address(){
			return (!(this.localizacao === ""))? `${this.localizacao} - ${this.regiao}`: "";
		},
	},
};
</script>
<style>
h2 {
	font-size: 150%;
	font-weight: 200;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
