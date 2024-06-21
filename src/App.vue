<script setup>
import TechBackground from './components/TechBackground.vue'

import { onMounted, ref, watch, computed } from 'vue';

const mousemoveEvent = ref(null);
onMounted(() => {
	// find mouse and simulate mousemove event
	setTimeout(() => {
		mousemoveEvent.value = new MouseEvent('mousemove', {
			clientX: window.innerWidth / 2,
			clientY: window.innerHeight / 2,
		});
    onMousemove(mousemoveEvent.value);
	}, 500)
});

const bgStyles = ref({});
// let mousemoveTimeout = null;
function onMousemove(event) {
  mousemoveEvent.value = event;
	// clearTimeout(mousemoveTimeout);
	// mousemoveTimeout = setTimeout(() => {
    const { clientX, clientY } = event;
    const x = clientX / window.innerWidth * 100;
    const y = clientY / window.innerHeight * 100;
    bgStyles.value = {
      '--bg-position': `${x}% ${y}%`,
    };
    // const x = clientX < window.innerWidth / 3 ? 1 : clientX < window.innerWidth / 3 * 2 ? 2 : 3;
    // const y = clientY < window.innerHeight / 3 ? 1 : clientY < window.innerHeight / 3 * 2 ? 2 : 3;
    // mouseRegionX.value = x;
    // mouseRegionY.value = y;
	// }, 200);
}
// const bgClass = ref('bg-neutral-100/70 dark:bg-neutral-100/50');
// const bgClass = ref('bg-gradient-to-b from-neutral-50 via-neutral-100/50 to-neutral-200/50');
// const mouseRegionX = ref(2);
// const mouseRegionY = ref(2);

// watch([mouseRegionX, mouseRegionY], ([x, y]) => {
//   if (x === 1 && y === 1) {
//     bgClass.value = 'bg-gradient-to-br from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 1 && y === 2) {
//     bgClass.value = 'bg-gradient-to-r from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 1 && y === 3) {
//     bgClass.value = 'bg-gradient-to-tr from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 2 && y === 1) {
//     bgClass.value = 'bg-gradient-to-b from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 2 && y === 2) {
//     bgClass.value = 'bg-gradient-to-b from-neutral-100/50 via-neutral-50 to-neutral-100/50';
//   } else if (x === 2 && y === 3) {
//     bgClass.value = 'bg-gradient-to-t from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 3 && y === 1) {
//     bgClass.value = 'bg-gradient-to-bl from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 3 && y === 2) {
//     bgClass.value = 'bg-gradient-to-l from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   } else if (x === 3 && y === 3) {
//     bgClass.value = 'bg-gradient-to-tl from-neutral-50 via-neutral-100/50 to-neutral-200/50';
//   }
// });

/**
 * @see https://stackoverflow.com/a/63848864/622287
 * @description Animate transition for bg gradient
 */


</script>

<template>
  <div class="App min-h-screen flex flex-row items-center justify-between duration-1000" :style="bgStyles" @mousemove="onMousemove">
    <tech-background :mousemoveEvent="mousemoveEvent" class="rotate-[-23.6068deg] fixed min-w-[110vh] w-[110vw] h-[110vh] min-h-[110vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
    <header></header>
    <main class="pt-gr-8 pb-gr-9">
      <div class="relative z-20">
        <!--  -->
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
.App {
  --bg-position: 50% 50%;
  background-image: radial-gradient(circle at var(--bg-position), rgb(var(--color-neutral-50) / 1) 0%, rgb(var(--color-neutral-100) / 0.50) 50%, rgb(var(--color-neutral-100) / 1) 100%);
}
@media (prefers-color-scheme: dark) {
  .App {
    background-image: radial-gradient(circle at var(--bg-position), rgb(var(--color-neutral-100) / 1) 0%, rgb(var(--color-neutral-100) / 0.70) 50%, rgb(var(--color-neutral-100) / 0.50) 100%);
  }
}
</style>
