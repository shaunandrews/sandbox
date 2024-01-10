<svg class="spotlights" width="393" height="268" xmlns="http://www.w3.org/2000/svg">
	<path
		class="spotlight-path-1"
		d="m-121.713-102.019 414.328 240.495-110.574 129.963-303.754-370.458Z"
		fill="white"
	/>

	<path
		class="spotlight-path-2"
		d="m36.264-162.496 304.407 361.081-45.829 34.115L36.265-162.496Z"
		fill="white"
	/>
</svg>

<style>
	.spotlights {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
		opacity: 0.125;
		transition: all 0.25s ease-in-out;
	}

	.spotlight-path-1,
	.spotlight-path-2 {
		filter: blur(20px);
	}

	.spotlight-path-1 {
		animation: shimmer 18s infinite;
	}

	.spotlight-path-2 {
		animation: shimmer 19s infinite;
	}

	@keyframes shimmer {
		0% {
			transform: rotate(0deg) scale(1.75);
		}
		50% {
			transform: rotate(30deg) scale(2);
			filter: blur(10px);
		}
		100% {
			transform: rotate(0deg) scale(1.75);
		}
	}
</style>
