<script>
	import Link from '../components/link.svelte';

	const name = 'KaBanks';
	const tag = '@KaBanks';
	const image = 'https://avatars.githubusercontent.com/u/20971850?v=4';
	const description = 'A Svelte app to help you manage your bank accounts.';
	const verified = true;
	const links = [
		{
			title: 'GitHub',
			link: 'https://github.com/KaBankz',
			leftIcon: 'https://avatars.githubusercontent.com/u/20971850?v=4',
			rightIcon: 'https://avatars.githubusercontent.com/u/20971850?v=4'
		},
		{
			title: 'Twitter',
			link: 'https://twitter.com/KaBankz',
			leftIcon: '',
			rightIcon: ''
		},
		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/kabanks/',
			leftIcon: '',
			rightIcon: ''
		}
	];
</script>

<div class="flex flex-col gap-2 justify-center items-center align-middle text-center">
	<img src={image} alt={name} class="rounded-full h-36 shadow-md border-black border-2" />
	<h2 class="font-bold text-2xl">{tag} {verified ? '✅' : ''}</h2>
	<p>{description}</p>
</div>

<div class="flex flex-col">
	{#each links as link}
		<Link link={link.link} title={link.title} leftIcon={link.leftIcon} rightIcon={link.rightIcon} />
	{/each}
</div>

<div>icon row</div>
