<script setup>
import TechNode from './TechNode.vue';
import { onMounted, ref } from 'vue';

const mousemoveEvent = ref(null);
onMounted(() => {
	// find mouse and simulate mousemove event
	setTimeout(() => {
		mousemoveEvent.value = new MouseEvent('mousemove', {
			clientX: window.innerWidth / 2,
			clientY: window.innerHeight / 2,
		});
	}, 500)
});
</script>

<template>
	<div class="TechBackground grid grid-cols-24" @mousemove="mousemoveEvent = $event">
		<template v-for="i in 12">
			<template v-for="j in 12">
				<tech-node :hideNode="i%2 === 0" :mousemoveEvent="mousemoveEvent" class="relative z-10" />
				<tech-node :hideNode="i%2 !== 0" :mousemoveEvent="mousemoveEvent" class="relative z-10" />
			</template>
		</template>
		<div class="bg-circuits absolute z-0 rotate-45 -inset-[100%] bg-repeat bg-center opacity-50"></div>
	</div>
</template>

<style scoped>
	.bg-circuits {
		background-image: url('@/assets/img/circuits-light.png');
		background-size: 440px 440px;
	}
</style>