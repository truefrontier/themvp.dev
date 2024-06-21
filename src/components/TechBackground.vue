<script setup>
import TechNode from './TechNode.vue';

const props = defineProps({
	mousemoveEvent: Object,
});
</script>

<template>
	<div class="TechBackground grid grid-cols-32">
		<template v-for="i in 16">
			<template v-for="j in 16">
				<!-- <tech-node :hideNode="i%2 === 0" :mousemoveEvent="props.mousemoveEvent" class="relative z-10" /> -->
				<!-- <tech-node :hideNode="i%2 !== 0" :mousemoveEvent="props.mousemoveEvent" class="relative z-10" /> -->
				<component :is="i % 2 ? TechNode : 'div'" :mousemoveEvent="props.mousemoveEvent" class="relative z-10" />
				<component :is="i % 2 ? 'div' : TechNode" :mousemoveEvent="props.mousemoveEvent" class="relative z-10" />
			</template>
		</template>
		<div class="bg-circuits absolute z-0 rotate-[35deg] -inset-[100%] bg-repeat bg-center opacity-50 dark:opacity-20"></div>
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