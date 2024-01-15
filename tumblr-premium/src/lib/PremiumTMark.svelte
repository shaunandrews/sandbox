<script>
	export let size = 'default';
</script>

<div class="premium-t-mark {size}">
	<svg class="t-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<path
			id="background"
			d="M71.225 26.207a2 2 0 0 1 2 2v13.335a2 2 0 0 1-.986 1.725l-11.823 6.946v9.793c0 2.456.607 3.687 1.29 4.338.185.176.395.33.635.464.714.396 1.74.635 3.172.635h6.216a2 2 0 0 1 2 2v14.062a2 2 0 0 1-.987 1.724l-14.457 8.495a2 2 0 0 1-1.013.276H45.553c-1.81 0-3.566-.152-5.242-.472a22.327 22.327 0 0 1-2.722-.695c-3.71-1.207-6.876-3.399-9.094-6.728-2.208-3.314-3.379-7.607-3.379-12.869V52.037H17.5a2 2 0 0 1-2-2V38.54a2 2 0 0 1 .987-1.724l9.355-5.497c3.276-3.633 4.877-8.45 5.159-12.95a2 2 0 0 1 .983-1.599L46.44 8.276A2 2 0 0 1 47.454 8h10.962a2 2 0 0 1 2 2v16.207h10.81Zm-12.809 2V10H47.454l-14.457 8.495c-.31 4.939-2.095 10.33-5.883 14.396l-9.614 5.65v11.496h9.617v21.2c0 9.937 4.418 15.523 11.092 17.694.795.259 1.623.47 2.478.633 1.538.293 3.168.436 4.867.436h11.718l14.457-8.495V67.443h-6.216c-1.627 0-3.028-.267-4.144-.887a5.088 5.088 0 0 1-1.042-.763c-1.228-1.17-1.91-3.03-1.91-5.787V49.07l12.808-7.527V28.207H58.416Z"
		/>
		<path
			id="bottom-left"
			d="M41.575 41.542v21.2l-14.458 8.494V50.037l14.457-8.495ZM60.01 81.505H71.73L57.27 89.999H45.554c-10.583 0-18.437-5.513-18.437-18.762l14.457-8.495c0 13.25 7.854 18.763 18.437 18.763Z"
		/>
		<path id="right-under" d="M58.416 41.542h12.81l-14.458 8.495h-12.81l14.458-8.495Z" />
		<path
			id="top-left"
			d="M47.454 10c-.41 6.541-3.409 13.876-10.22 17.876l-14.45 8.49c6.806-4 9.803-11.332 10.213-17.871L47.454 10Z"
		/>
		<path id="left-under" d="M31.957 41.542h9.618l-14.458 8.495H17.5l14.457-8.495Z" />
		<path id="left-side" d="M31.957 30.046v11.497L17.5 50.037V38.54l14.457-8.494Z" />
		<path
			id="surface"
			fill="white"
			d="M60.054 81.505c-10.583 0-18.437-5.514-18.437-18.763v-21.2H32V30.045C42.583 27.267 46.993 18.035 47.497 10H58.46v18.207h12.809v13.335h-12.81v18.465c0 5.513 2.73 7.436 7.098 7.436h6.216v14.062H60.054Z"
		/>
	</svg>

	<svg class="sparkles" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M41.486 58.113C41.486 65.3814 38.8366 71.5564 32.7954 71.5564C38.8366 71.5564 41.486 77.7314 41.486 84.9997C41.486 77.7314 44.1354 71.5564 50.1766 71.5564C44.1354 71.5564 41.486 65.3814 41.486 58.113Z"
			fill="currentColor"
			class="spark1"
		/>
		<path
			d="M58.5 38C58.5 39.8923 57.7378 41.5 56 41.5C57.7378 41.5 58.5 43.1077 58.5 45C58.5 43.1077 59.2621 41.5 61 41.5C59.2621 41.5 58.5 39.8923 58.5 38Z"
			fill="currentColor"
			class="spark2"
		/>
		<path
			d="M31.7525 26.2735C31.7525 29.1426 30.5868 31.5801 27.9287 31.5801C30.5868 31.5801 31.7525 34.0176 31.7525 36.8867C31.7525 34.0176 32.9183 31.5801 35.5764 31.5801C32.9183 31.5801 31.7525 29.1426 31.7525 26.2735Z"
			fill="currentColor"
			class="spark3"
		/>
	</svg>
</div>

<style>
	.premium-t-mark {
		height: 80px;
		width: 80px;
		position: relative;
	}

	.premium-t-mark.small {
		height: 50px;
		width: 50px;
	}

	.premium-t-mark.large {
		height: 120px;
		width: 120px;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.spark1,
	.spark2,
	.spark3 {
		/* display: none; */
		fill: yellow;
		animation: pulse 8s linear infinite;
	}

	.spark1 {
		transform-origin: 40px 65px;
	}

	.spark2 {
		animation-delay: 2s;
		transform-origin: 55px 38px;
	}

	.spark3 {
		animation-delay: 4s;
		transform-origin: 35px 35px;
	}

	@keyframes pulse {
		0% {
			transform: scale(1.25);
		}
		50% {
			transform: scale(1.5) rotate(15deg);
		}
		100% {
			transform: scale(1.25);
		}
	}

	#top-left,
	#left-side,
	#left-under,
	#right-under,
	#bottom-left {
		fill: #c6b7f8;
		animation: phase 2s linear infinite;
	}

	@keyframes phase {
		0% {
			fill: #62d4ff;
		}
		40% {
			fill: #c6b7f8;
		}
		80% {
			fill: #ffa0f8;
		}
		100% {
			fill: #62d4ff;
		}
	}

	#surface {
		/* fill: #7C5CFF; */
		fill: white;
		stroke: rgba(0, 0, 0, 0.5);
		stroke-width: 2.5px;
	}
</style>
