<script>
	export let name = "";
	export let display = "text";

	// Define a mapping of names to colors
	const userColors = {
		Dad: "green",
		Amy: "blue",
		Jackson: "red",
		Tyler: "yellow",
		Mason: "purple",
	};

	// Function to get the color for a given user
	function getColorForUser(userName) {
		return userColors[userName] || "black"; // Default to black if user not found
	}

	$: classnames = `${name} ${display === "text" ? "text" : "dot"}`;
</script>

<span class={classnames}>{name}</span>

<style>
	span {
		display: inline-block;
		padding: 1px 5px;
		border-radius: 5px;
	}

	.text.Dad {
		color: hsl(120, 100%, 25%);
		background: hsl(120, 100%, 90%);
	}
	.text.Amy {
		color: hsl(240, 100%, 50%);
		background: hsl(240, 100%, 90%);
	}
	.text.Jackson {
		color: hsl(0, 100%, 50%);
		background: hsl(0, 100%, 90%);
	}
	.text.Tyler {
		color: hsl(60, 100%, 10%);
		background: hsl(60, 100%, 70%);
	}
	.text.Mason {
		color: hsl(300, 100%, 25%);
		background: hsl(300, 100%, 90%);
	}

	.dot {
		height: 8px;
		width: 8px;
		text-indent: -5000px;
	}

	.dot.Dad {
		color: hsl(120, 100%, 90%);
		background: hsl(120, 100%, 25%);
	}
	.dot.Amy {
		color: hsl(240, 100%, 90%);
		background: hsl(240, 100%, 50%);
	}
	.dot.Jackson {
		color: hsl(0, 100%, 90%);
		background: hsl(0, 100%, 50%);
	}
	.dot.Tyler {
		color: hsl(60, 100%, 70%);
		background: hsl(60, 100%, 10%);
	}
	.dot.Mason {
		color: hsl(300, 100%, 90%);
		background: hsl(300, 100%, 25%);
	}
</style>
