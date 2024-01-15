<script>
	import StreamTabs from '$lib/StreamTabs.svelte';
	import PremiumBanner from '$lib/PremiumBanner.svelte';
	import PostRibbon from '$lib/PostRibbon.svelte';
	import StreamEndcap from '$lib/StreamEndcap.svelte';
	import PostHeader from '$lib/PostHeader.svelte';
	import RightRail from '$lib/RightRail.svelte';
</script>

<div id="stream">
	<header>
		<StreamTabs />
	</header>
	<PostRibbon />
	<div id="stream-content">
		<StreamEndcap />
		<PremiumBanner type="mini" graphic="diamond" marginHorizontal="20px" />
		<article class="post">
			<PostHeader
				isReblogged={true}
				avatar="http://fpoimg.com/60?text=goresbian"
				username="strange-aeons"
				isFollowed={true}
				hasBadges={true}
				timestamp="16h ago"
			/>

			<PostHeader
				avatar="http://fpoimg.com/60?text=goresbian"
				username="goresbian"
				isFollowed={false}
				timestamp="1d ago"
			/>

			<!--
			<header>
				<div class="avatar">
					<img class="avatar-image" src="http://fpoimg.com/60?text=goresbian" alt="goresbian" />
				</div>
				<div class="meta">
					<div class="byline">
						<a class="username" title="Visit goresbian Tumblr blog" href="#">goresbian</a>
						<div class="badges">
							<div class="user-badge">
								<img src="/badges/supporter/copper.png" alt="Tumblr Supporter, Copper (3 months)" />
							</div>
						</div>
						<button class="follow-button" title="Follow goresbian">Follow</button>
					</div>
					<span class="timestamp">1d ago</span>
				</div>
				<button class="post-options" title="View more options for this post">Options</button>
			</header>
            -->

			<div class="post-media">
				<img src="/pickup-the-pieces.gif" alt="Pick up the pieces" />
			</div>

			<div class="post-content">
				<p>work from december 2021</p>
			</div>

			<div class="post-tags">
				<div>#undescribed</div>
				<div>#honestly i dont even know HOW to describe this tbh</div>
			</div>

			<footer>
				<div class="post-notes">20,6019 notes</div>
				<div class="post-actions">
					<button class="post-action">Share</button>
					<button class="post-action">Reply</button>
					<button class="post-action">Reblog</button>
					<button class="post-action">Like</button>
				</div>
			</footer>
		</article>
		<article class="post">
			<PostHeader
				avatar="http://fpoimg.com/60?text=daily-deliciousness"
				username="daily-deliciousness"
				isFollowed={true}
				timestamp="Dec 20, 2023"
			/>

			<div class="post-media">
				<img src="/post-media/steak-1.jpg" alt="Black pepper crusted beef tenderloin" />
				<img src="/post-media/steak-2.jpeg" alt="Black pepper crusted beef tenderloin" />
			</div>

			<div class="post-content">
				<p>
					<a href="/" title="Black pepper crusted beef tenderloin"
						>Black pepper crusted beef tenderloin</a
					>
				</p>
			</div>

			<div class="post-tags">
				<span>#beef</span>
				<span>#meat</span>
				<span>#beef tenderloin</span>
				<span>#roast beef</span>
				<span>#food</span>
				<span>#dinner</span>
				<span>#black pepper</span>
				<span>#meal</span>
				<span>#main dishes</span>
				<span>#mashed potatoes</span>
				<span>#horseradish</span>
				<span>#holiday food</span>
			</div>

			<button>Blaze</button>

			<hr />

			<footer>
				<div class="post-notes">1,056 notes</div>
				<div class="post-actions">
					<button class="post-action">Share</button>
					<button class="post-action">Reply</button>
					<button class="post-action">Reblog</button>
					<button class="post-action">Like</button>
				</div>
			</footer>
		</article>
	</div>
</div>

<RightRail />

<style>
	#stream {
		flex-grow: 0;
		flex-shrink: 0;
		width: 580px;
		max-width: calc(100% - 300px);
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	#stream header {
		position: sticky;
		top: 0;
		z-index: 10;
	}

	#stream-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	article.post {
		background: var(--color-surface);
		color: var(--color-surface-text);
		border-radius: 10px;
		margin: 0 20px;
	}

	article.post img {
		max-width: 100%;
	}
</style>
