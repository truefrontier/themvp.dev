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

// let mousemoveTimeout = null;
function onMousemove(event) {
	// clearTimeout(mousemoveTimeout);
	// mousemoveTimeout = setTimeout(() => {
		mousemoveEvent.value = event;
	// }, 200);
}
</script>

<template>
	<div class="TechBackground grid grid-cols-32" @mousemove="onMousemove">
		<template v-for="i in 16">
			<template v-for="j in 16">
				<tech-node :hideNode="i%2 === 0" :mousemoveEvent="mousemoveEvent" class="relative z-10" />
				<tech-node :hideNode="i%2 !== 0" :mousemoveEvent="mousemoveEvent" class="relative z-10" />
			</template>
		</template>
		<div class="bg-circuits absolute z-0 rotate-45 -inset-[100%] bg-repeat bg-center opacity-50 dark:opacity-10"></div>
	</div>
</template>

<style scoped>
	.bg-circuits {
		background-image: url('@/assets/img/circuits-light.png');
		background-size: 440px 440px;
	}
	@media (prefers-color-scheme: dark) {
		.bg-circuits {
			background-image: url('@/assets/img/circuits-dark.png');
		}
	}
</style>