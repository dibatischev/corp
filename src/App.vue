<script setup>
import router from "./router";
import CanbanPage from "@/pages/CanbanPage.vue"
import OrderDetails from "./components/order/OrderDetails.vue";
</script>

<template>
  
    <RouterView />
  
</template>

<style lang="scss">
	@font-face {
		font-family: 'NT Somic';
		font-style: normal;
		font-weight: 400;
		src: local('NT Somic'), url('@/assets/fonts/NTSomic-Regular.otf');
	}
	@font-face {
		font-family: 'NT Somic';
		font-style: normal;
		font-weight: 500;
		src: local('NT Somic'), url('@/assets/fonts/NTSomic-Medium.otf');
	}
	@font-face {
		font-family: 'NT Somic';
		font-style: normal;
		font-weight: 600;
		src: local('NT Somic'), url('@/assets/fonts/NTSomic-Semibold.otf');
	}
	@font-face {
		font-family: 'NT Somic';
		font-style: normal;
		font-weight: 700;
		src: local('NT Somic'), url('@/assets/fonts/NTSomic-Bold.otf');
        }
        body {
		//font-family: 'Inter', serif;
		font-family: 'NT Somic', serif;
		
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scrollbar-gutter: stable;
		// todo
		&:has(.card-popup),
		&:has(.popup),
		&:has(.modal),
		&:has(.reqWrapper),
		&:has(.reqwrapper),
		&:has(.subWrapper) {
			overflow-y: hidden;
			padding-right: 17px;
		}
		&:has(.preloader) {
			overflow-y: hidden;
			padding-right: 17px;
		}
	}

	button {
		//font-family: 'Inter', serif;
		font-family: 'NT Somic', serif;
	}

	input[type='text'],
	input[type='number'] {
		//font-family: 'Inter', serif;
		font-family: 'NT Somic', serif;
	}

	//hi

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
