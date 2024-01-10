<div class="coupon-code">
	<p>If you have a coupon code, please apply it below.</p>
	<fieldset>
		<input type="text" name="coupon" placeholder="Coupon code" />
		<button>Apply</button>
	</fieldset>
</div>

<style>
    .coupon-code {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
		background: rgba(0,0,0,0.025);
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
    }

    p {
        font-size: 0.85em;
    }

    fieldset {
        display: flex;
        gap: 20px;
    }

    input {
        width: 100%;
		appearance: none;
		border: 1px solid rgba(0, 0, 0, 0);
		background: rgba(0, 0, 0, 0.05);
		border-radius: 5px;
		font-size: 1em;
		padding: 10px;
	}

	input:hover {
		border-color: rgba(0, 0, 0, 0.5);
	}

	input:focus {
		background: white;
		border-color: rgba(0, 0, 0, 0.75);
	}
</style>
