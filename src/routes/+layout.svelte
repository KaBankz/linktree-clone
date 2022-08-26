<script>
	import '../app.postcss';
</script>

<header>
	<div class="text-center text-black pt-5">
		<p>
			Made with <span class="text-red-500">❤</span> by
			<a
				href="https://github.com/KaBankz"
				target="_blank"
				title="KaBankz on GitHub"
				class="transition-all hover:bg-red-500 hover:text-white hover:font-bold hover:italic hover:p-1"
				>@KaBankz</a
			>
		</p>
	</div>
</header>

<main class="text-center flex flex-col gap-10 justify-start items-center px-96 py-24">
	<slot />
</main>

<footer>
	<div class="text-center text-black">
		<p>
			Made with <span class="text-red-500">❤</span> by
			<a
				href="https://github.com/KaBankz"
				target="_blank"
				title="KaBankz on GitHub"
				class="transition-all hover:bg-red-500 hover:text-white hover:font-bold hover:italic hover:p-1"
				>@KaBankz</a
			>
		</p>
	</div>
</footer>
