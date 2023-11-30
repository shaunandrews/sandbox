<script>
//   import { onMount } from 'svelte';
  import { page } from '$app/stores';

  // You might need to create this function
  // import { getGoalByTitle } from '$lib/db';

  let goalID;
//   let goal;

  $: goalId = $page.params.id;

//   onMount(async () => {
//     goal = await getGoalByTitle(goalTitle);
//   });
</script>

<h1>{goalID}</h1>