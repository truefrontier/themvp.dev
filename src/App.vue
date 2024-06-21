<script setup>
import TechBackground from './components/TechBackground.vue'
import Logo from './components/svgs/Logo.vue'
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
  <div class="App min-h-screen flex flex-col w-full justify-between duration-1000" :style="bgStyles" @mousemove="onMousemove">
    <tech-background :mousemoveEvent="mousemoveEvent" class="pointer-events-none rotate-[-23.6068deg] fixed z-0 min-w-[110vh] w-[110vw] h-[110vh] min-h-[110vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    <header class="relative z-10 grid grid-cols-5 my-gr-6">
      <div></div>
      <div class="col-span-3 text-center">
        <a href="/">
          <Logo class="link text-neutral-1000 w-full md:w-grp-5 max-w-gr-11 mx-auto" />
        </a>
      </div>
      <div></div>
    </header>
    <main class="relative z-10 pt-gr-7 pb-gr-8 px-gr-6 text-center container mx-auto max-w-lg sm:max-w-3xl">
        <h1 class="text-4xl font-bold sm:text-6xl sm:font-semibold text-neutral-1000 rounded-xl">Learn the Craft of Building Profitable Web&nbsp;Apps</h1>
        <h2 class="mt-gr-half-5 px-gr-5 py-gr-half-5 text-xl leading-gr-6 sm:text-3xl font-normal text-teal-400 backdrop-blur-sm rounded-xl">Join a community of passionate developers dedicated to building high-impact&nbsp;MVPs.</h2>
        <form class="mt-gr-5 sm:mt-gr-7" name="invite" netlify>
          <div class="flex max-sm:flex-col max-sm:space-y-gr-4 items-center justify-center">
            <input type="email" name="email" placeholder="Enter your email" class="max-sm:!w-full !max-w-gr-double-10 max-sm:text-center input sm:rounded-r-none shadow-lg w-grp-4" />
            <button class="max-sm:w-full max-w-gr-double-10 btn btn-primary sm:rounded-l-none shadow-lg">Request Invite</button>
          </div>
          <div class="text-xs py-gr-3 text-neutral-500">Looking for full-stack devs serious about learning fast.</div>
        </form>
    </main>
    <footer class="relative z-10 grid grid-cols-5 py-gr-5 text-sm text-neutral-500 backdrop-blur-xl">
      <div></div>
      <div class="col-span-3 text-center">
        &copy; 2024 <a href="https://truefrontierapps.com" class="link">True Frontier</a> // Building up the web, one dev at a time. 
      </div>
      <div></div>
    </footer>
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
