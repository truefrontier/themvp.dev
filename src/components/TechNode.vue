<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps({
	mousemoveEvent: Object,
	hideNode: {
		type: Boolean,
		default: false,
	},
});

const mouseEvent = computed(() => props.mousemoveEvent);
const node = ref(null);
const top = ref(0);
const left = ref(0);
const width = ref(0);
const height = ref(0);
const xMultiplier = ref(0);
const yMultiplier = ref(1);

function run(event) {
	const el = node.value;
	if (!el) return;
	const { clientX, clientY } = event;
	const xOrigin = left.value + width.value / 2;
	const yOrigin = top.value + height.value / 2;

	const xm = ((xOrigin - clientX) / xOrigin) * 100;
	const ym = ((yOrigin - clientY) / yOrigin) * 100;

	xMultiplier.value =
		xm > 0
			? Math.min(xm, 75) / 100
			: Math.max(xm, -75) / 100;
	yMultiplier.value =
		ym > 0
			? Math.min(ym, 75) / 100
			: Math.max(ym, -75) / 100;
};

function init(el) {
	if (!el) return;
	const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
	top.value = t;
	left.value = l;
	width.value = w;
	height.value = h;
}

watch(node, (el) => {
	init(el);
}, { immediate: true });

watch(mouseEvent, (event) => {
	if (!event) return;
	// run(event);
	requestAnimationFrame(run.bind(this, event));
}, { immediate: true });

const styles = computed(() => {
	return {
		// backdropFilter: `blur(24px)`,
		// '--tw-bg-opacity': `${100 - (Math.abs(xMultiplier.value * 20) + Math.abs(yMultiplier.value * 20) + 20)}%`,
		'--node-shadow-opacity': `calc(${Math.abs(xMultiplier.value * 6) + Math.abs(yMultiplier.value * 6)}% + var(--node-shadow-opacity-min, 6%))`,
		boxShadow: `${xMultiplier.value * 4}px ${yMultiplier.value * 4}px var(--node-blur1)  rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			${xMultiplier.value * 8}px ${yMultiplier.value * 8}px var(--node-blur2) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			${xMultiplier.value * 16}px ${yMultiplier.value * 16}px var(--node-blur3) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			${xMultiplier.value * 32}px ${yMultiplier.value * 32}px var(--node-blur4) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			${xMultiplier.value * 64}px ${yMultiplier.value * 64}px var(--node-blur5) rgb(var(--node-shadow-color) / var(--node-shadow-opacity))`,
	};
});

const backdropBlur = computed(() => {
	return {
		// backdropFilter: `blur(${(Math.abs(xMultiplier.value) + Math.abs(yMultiplier.value)) * 1.5}px)`,
		// filter: `blur(${(Math.abs(xMultiplier.value) + Math.abs(yMultiplier.value)) * 1.5}px)`,
	};
});
</script>

<template>
	<div class="TechNode flex items-center justify-center" ref="node" :style="backdropBlur">
		<div v-if="!hideNode" class=" backdrop-blur-xl duration-200 w-1/2 max-w-gr-half-6 aspect-square bg-light dark:bg-neutral-100/30 bg-opacity-60 rounded-full" :style="styles"></div>
	</div>
</template>

<style>
	:root {
		--node-shadow-color: var(--color-primary-600);
		--node-shadow-opacity: 0.1;
		--node-horz1: 0;
		--node-horz2: 0;
		--node-horz3: 0;
		--node-horz4: 0;
		--node-horz5: 0;
		--node-vert1: 4px;
		--node-vert2: 8px;
		--node-vert3: 16px;
		--node-vert4: 32px;
		--node-vert5: 64px;
		--node-blur1: 2px;
		--node-blur2: 4px;
		--node-blur3: 8px;
		--node-blur4: 16px;
		--node-blur5: 32px;
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--node-shadow-color: var(--black);
			--node-shadow-opacity-min: 30%;
		}
	}
</style>
<!-- 
<style scoped>
	.TechNode .shadow {
		@apply duration-500;
		box-shadow: var(--node-horz1) var(--node-vert1) var(--node-blur1) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			var(--node-horz2) var(--node-vert2) var(--node-blur2) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			var(--node-horz3) var(--node-vert3) var(--node-blur3) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			var(--node-horz4) var(--node-vert4) var(--node-blur4) rgb(var(--node-shadow-color) / var(--node-shadow-opacity)),
			var(--node-horz5) var(--node-vert5) var(--node-blur5) rgb(var(--node-shadow-color) / var(--node-shadow-opacity));
	}
</style> 
-->