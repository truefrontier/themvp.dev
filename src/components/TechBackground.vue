<script setup>
import TechNode from './TechNode.vue';
import { onMounted, ref } from 'vue';

const mousemoveEvent = ref(null);
onMounted(() => {
	// find mouse and simulate mousemove event
	mousemoveEvent.value = new MouseEvent('mousemove', {
		clientX: window.innerWidth / 2,
		clientY: window.innerHeight / 2,
	});
})
</script>

<template>
	<div class="TechBackground grid grid-cols-48" @mousemove="mousemoveEvent = $event">
		<template v-for="i in 24">
			<template v-for="j in 24">
				<component :is="i % 2 ? TechNode : 'div'" :mousemoveEvent="mousemoveEvent" />
				<component :is="i % 2 ? 'div' : TechNode" :mousemoveEvent="mousemoveEvent" />
			</template>
		</template>
	</div>
</template>