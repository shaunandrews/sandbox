<script>
	import CheckoutPaymentMethods from '$lib/CheckoutPaymentMethods.svelte';
	import CheckoutCreditCard from '$lib/CheckoutCreditCard.svelte';
	import CheckoutProductHighlight from '$lib/CheckoutProductHighlight.svelte';
	import CheckoutCouponCode from '$lib/CheckoutCouponCode.svelte';

	let showCouponCode = false;
	function toggleCouponCode() {
		showCouponCode = !showCouponCode;
	}
</script>

<div id="checkout">
	<h1>Tumblr payment</h1>

	<CheckoutProductHighlight />

	<p>To complete your purchase please provide your payment information below.</p>

	<section>
		<h2>Billing details</h2>
		<fieldset class="label-input-group">
			<label for="name">Name</label>
			<input type="text" name="name" placeholder="First and last name" />
		</fieldset>
		<fieldset class="label-input-group">
			<label for="country">Country / Region</label>
			<select name="country">
				<option>United States</option>
				<option>Canada</option>
				<option>Mexico</option>
			</select>
		</fieldset>
		<div class="row">
			<fieldset class="label-input-group">
				<label for="state">State</label>
				<select name="state">
					<option>California</option>
					<option>Florida</option>
					<option>Massachusetts</option>
				</select>
			</fieldset>
			<fieldset class="label-input-group">
				<label for="zip">Zip code</label>
				<input type="text" name="zip" placeholder="Postal code" />
			</fieldset>
		</div>

        <hr />

		<header>
			<h3>Payment method</h3>
			<button class="toggle-coupon-code" on:click={toggleCouponCode}>
                {#if showCouponCode}
                    Hide coupon code
                {:else}
                    Coupon code?
                {/if}
            </button>
		</header>

		{#if showCouponCode}
            <CheckoutCouponCode />
        {/if}

		<div class="credit-card">
			<CheckoutCreditCard />
			<CheckoutPaymentMethods />
		</div>
	</section>

	<section>
		<p>
			You will be charged $69.99 today for a year of Tumblr Premium. Your subscription will renew
			automatically for $69.99 on January 8, 2025.
		</p>
		<a href="/" class="button primary">Pay now</a>
		<p class="legal">
			By clicking "Pay now" you agree to our <a href="/">Terms of Service</a>, have read our
			<a href="#">Privacy Policy</a>, and authorize your payment method to be saved until you delete
			it and charged on a recurring basis until you cancel. You understands
			<a href="/">how your subscription works</a>, <a href="/">how to cancel</a>, and
			<a href="/">how to delete your payment method</a>.
		</p>
	</section>

	<p>Secure and encrypted</p>
    <p>Powered by stripe</p>
</div>

<style>
	#checkout {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 480px;
	}

	section {
		background: white;
		color: black;
		border-radius: 5px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

    section hr {
        border: none;
        border-top: 1px solid rgba(0,0,0,0.1);
        margin: 5px -20px;
    }

	header {
		display: flex;
		justify-content: space-between;
	}

	h2 {
		font-size: 1em;
	}

	h3 {
		font-size: 0.85em;
	}

	p {
		line-height: 1.5;
		font-size: 0.85em;
	}

	.row {
		display: flex;
		gap: 20px;
	}

	.row > * {
		width: 50%;
	}

	input,
	select {
		appearance: none;
		border: 1px solid rgba(0, 0, 0, 0);
		background: rgba(0, 0, 0, 0.05);
		border-radius: 5px;
		font-size: 1em;
		padding: 10px;
	}

	input:hover,
	select:hover {
		border-color: rgba(0, 0, 0, 0.5);
	}

	input:focus,
	select:focus {
		background: white;
		border-color: rgba(0, 0, 0, 0.75);
	}

	.label-input-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.label-input-group > label {
		font-size: 0.85em;
	}

    button.toggle-coupon-code {
        background: none;
        border: none;
        padding: 3px 5px;
        box-shadow: none;
        font-size: 0.85em;
        color: #7c5cff;
        cursor: pointer;
    }

    button.toggle-coupon-code:hover {
        background: rgba(124, 92, 255,0.2);
    }

	.credit-card {
		display: flex;
		flex-direction: column;
        align-items: center;
		gap: 20px;
	}

	.button.primary {
		text-decoration: none;
		background: #7c5cff;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid rgba(0, 0, 0, 0.75);
		box-shadow: inset 0 0 10px 5px rgba(255, 255, 255, 0.1);

		font-size: 1.125em;
		font-weight: 600;
		color: black;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.125);
		padding: 15px 35px;
		line-height: 1.25;
		border-radius: 60px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		cursor: pointer;
	}

	p.legal {
		font-size: 0.75em;
		opacity: 0.75;
	}

	p.legal a {
		color: black;
	}
</style>
