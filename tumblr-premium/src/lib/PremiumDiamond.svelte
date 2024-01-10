<script>
	export let size = 'small';
</script>

<div class="diamond {size}">
	<svg
		class="diamond-shape"
		width="28"
		height="24"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M27.8631 6.38887L21.3426 0.306631C21.2614 0.231831 21.1538 0.101845 21.042 0.101845H6.95786C6.84617 0.101845 6.7385 0.231831 6.6573 0.306631L0.13689 6.34466C-0.0267355 6.49507 -0.0461605 6.76402 0.0920458 6.93685C0.183921 7.0519 13.5775 23.8395 13.6772 23.9483C13.7219 23.9972 13.7823 24.0426 13.8271 24.0615C13.9481 24.1128 14.0493 24.1167 14.1728 24.0643C14.2177 24.0454 14.278 24.0069 14.3228 23.958C14.3294 23.9508 14.3393 23.9484 14.3454 23.9407L27.9079 6.95864C28.0461 6.78576 28.0267 6.53928 27.8631 6.38887Z"
			fill="currentColor"
		/>
	</svg>

	<svg
		class="diamond-lines"
		width="28"
		height="24"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path
				d="M27.8631 6.38887L21.3426 0.306631C21.2615 0.231831 21.1538 0.101845 21.0421 0.101845H6.95789C6.8462 0.101845 6.73853 0.231831 6.65733 0.306631L0.136916 6.34466C-0.0267088 6.49507 -0.0461338 6.76402 0.0920725 6.93685C0.183947 7.0519 13.5775 23.8395 13.6772 23.9483C13.7219 23.9972 13.7823 24.0426 13.8272 24.0615C13.9481 24.1128 14.0493 24.1167 14.1728 24.0643C14.2177 24.0454 14.278 24.0069 14.3228 23.958C14.3294 23.9508 14.3393 23.9484 14.3454 23.9407L27.9079 6.95864C28.0461 6.78576 28.0267 6.53928 27.8631 6.38887ZM6.83697 1.22406L9.02206 6.05865H1.57769L6.83697 1.22406ZM10.5348 6.05865L14 1.26695L17.4652 6.05865H10.5348ZM17.8146 6.90962L14 21.7493L10.1854 6.90962H17.8146ZM14.8425 0.952817H20.3298L18.2193 5.62236L14.8425 0.952817ZM9.78073 5.62236L7.67023 0.952817H13.1575L9.78073 5.62236ZM9.28338 6.90962L13.072 21.6478L1.30176 6.90962H9.28338ZM18.7166 6.90962H26.6982L14.928 21.6478L18.7166 6.90962ZM18.9779 6.05865L21.163 1.22406L26.4223 6.05865H18.9779Z"
				fill="currentColor"
			/>
		</g>
		<defs>
			<clipPath>
				<rect width="28" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
</div>

<style>
	.diamond {
		flex-shrink: 0;
		position: relative;
		height: 45px;
		width: 45px;
	}

	.diamond.tiny {
		height: 18px;
		width: 18px;
	}

	.diamond.small {
		height: 24px;
		width: 24px;
	}

	.diamond.medium,
	.diamond.default {
		height: 40px;
		width: 40px;
	}

	.diamond.large {
		height: 80px;
		width: 80px;
	}

	.diamond-lines,
	.diamond-shape {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.diamond-shape path {
		/* fill: url(#diamond-shape-gradient); */
		fill: #73c2ff;
		animation: shapeShimmer 2s infinite;
		border-radius: 25px;
	}

	.diamond-lines path {
		fill: #0008d0;
		opacity: 0.85;
		animation: linesTwinkle 1s infinite;
	}

	@keyframes shapeShimmer {
		0% {
			fill: #73c2ff;
		}
		50% {
			fill: #47d4ff;
		}
		100% {
			fill: #73c2ff;
		}
	}

	@keyframes linesTwinkle {
		0% {
			fill: #0008d0;
		}
		30% {
			fill: #6F04A1;
		}
		60% {
			fill: #7714c9;
		}
		100% {
			fill: #0008d0;
		}
	}
</style>
