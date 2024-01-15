<script>
	import PremiumSpotlights from '$lib/PremiumSpotlights.svelte';
</script>

<section>
	<h1>Premium Perks</h1>
	<p>A plethora of Premium possibilities. Plus, personal preferences for perks.</p>

	<hr />

	<p>Subscriber since Jan 8, 2024.</p>
	<button class="reversed">Manage your subscription</button>

	<hr />

	<div class="perks">
		<div class="premium-perk tumblrmart">
			<img src="/premium/perks/tumblrmart.svg" alt="TumblrMart" />
			<h3>TumblrMart</h3>
			<h4>Get or gift something new.</h4>
			<p>Pick out a new badge or give a gift to a friend each month.</p>
			<button>Start shopping</button>
		</div>

		<div class="premium-perk blaze">
			<h3>Blaze</h3>
			<h4>Promote posts with Blaze.</h4>
			<p>Look for the Blaze button anywhere on Tumblr to set a post ablaze.</p>
			<button>Set a blaze</button>
		</div>

		<div class="premium-perk patio">
			<h3>Patio</h3>
			<h4>Spread out and enjoy.</h4>
			<p>Try out the new multi-column "Patio" interface for Tumblr.</p>
			<button>Checkout the patio</button>
		</div>

		<div class="premium-perk communities">
			<h3>Communities</h3>
			<h4>Tumblr with friends.</h4>
			<p>Find a group of people just like you, and then reblog stuff to each other.</p>
			<button>Browse communities</button>
		</div>

		<div class="premium-perk limits">
			<h3>Increased limits</h3>
			<h4>Post and like more.</h4>
			<p>You can now publish and like more posts every day with increased limits.</p>
			<button>View your queue</button>
		</div>
	</div>

	<hr />

	<h3>Ad-free browsing</h3>
	<p>Experience a more pure Tumblr. Or make sure we get the most money by showing all ads.</p>
	<ol>
		<li>
			<label>
				<input type="radio" name="ad-free-option" value="show-all" />
				<span>Show all ads</span>
			</label>
		</li>
		<li>
			<label>
				<input type="radio" name="ad-free-option" value="show-blaze" checked />
				<span>Show Blaze ads only</span>
			</label>
		</li>
		<li>
			<label>
				<input type="radio" name="ad-free-option" value="show-none" />
				<span>Hide all ads</span>
			</label>
		</li>
	</ol>

	<hr />

	<h3>Supporter Badge</h3>
	<p>Show your loyalty by displaying the Tumblr Supporter badge next to your name.</p>
	<img src="/premium/supporter-badge.svg" alt="Tumblr Supporter" />
	<label>
		<input type="checkbox" checked />
		<span>Show Tumblr Supporter badge</span>
	</label>

	<hr />

	<label>
		<input type="checkbox" checked />
		<span>Show "Premium perks" button in sidebar</span>
	</label>
</section>

<PremiumSpotlights />

<style>
	section {
		background: #111;
		padding: 40px;
	}

	hr {
		border: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		margin: 20px 0;
	}

	.perks {
		display: flex;
		gap: 20px;
	}

	.premium-perk {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 25%;
		padding: 20px;
		border-radius: 15px;
		background: black;
	}

	.premium-perk h3 {
	}

	.premium-perk h4 {
		font-weight: normal;
		line-height: 1.25;
	}

	.premium-perk p {
		flex-grow: 1;
		line-height: 1.45;
		font-size: 0.85em;
		opacity: 0.75;
	}

	.premium-perk button {
		background: white;
	}

	.tumblrmart {
		background: #ff61ce url('/premium/perks/waves.svg') no-repeat 30% 50%;
		background-size: 800%;
		color: black;
		/* animation: waves 1s ease infinite; */
		transition: all 0.2s ease-in-out;
	}

	.tumblrmart:hover {
		/* background-position: 32% 50%; */
		background-size: 900%;
	}

	@keyframes waves {
		0% {
			background-size: 600%;
		}
		50% {
			background-size: 700%;
			background-position: 50% 60%;
		}
		100% {
			background-size: 600%;
		}
	}

	.blaze {
		background: linear-gradient(180deg, #e8d73a 61.25%, #ff8a00 83.07%, #f42f00 96.57%);
		color: black;
	}

	.patio {
		background: #FFF3DE;
		color: black;
	}

	.communities {
		background: #EBF1FF;
		color: black;
	}
</style>
