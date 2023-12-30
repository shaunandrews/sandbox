<script>
	export let name = "";

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
</script>

<span class={name}>{name}</span>

<style>
	span {
		display: inline-block;
		padding: 1px 5px;
		border-radius: 5px;
	}
	.Dad {
		color: hsl(120, 100%, 25%);
		background: hsl(120, 100%, 90%);
	}
	.Amy {
		color: hsl(240, 100%, 50%);
		background: hsl(240, 100%, 90%);
	}
	.Jackson {
		color: hsl(0, 100%, 50%);
		background: hsl(0, 100%, 90%);
	}
	.Tyler {
		color: hsl(60, 100%, 10%);
		background: hsl(60, 100%, 70%);
	}
	.Mason {
		color: hsl(300, 100%, 25%);
		background: hsl(300, 100%, 90%);
	}
</style>