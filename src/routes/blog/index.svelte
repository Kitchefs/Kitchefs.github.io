<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	h1 {
		font-family: "Playfair Display";
	}
	hr {
        border: 0;
        clear: both;
        display: block;
        width: 96%;
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
    }
</style>

<svelte:head>
	<title>Kitchefs | Blog</title>
</svelte:head>

<div class="container">
	<h1>Recent posts</h1>
	<hr>
	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
		{/each}
	</ul>
</div>

