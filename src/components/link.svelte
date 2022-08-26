<script lang="ts">
	export let link: string;
	export let title: string;
	export let leftIcon: string;
	export let rightIcon: string;
	let editMode = true;
	const editModeClasses = editMode ? 'animate-wiggle cursor-move' : '';
</script>

<a href={editMode ? '#' : link} class={editModeClasses}>
	<div
		class="grid grid-cols-4 items-center p-0 m-1 h-16 bg-white border-2 border-black rounded-full shadow-md transition-all hover:scale-95 hover:bg-black hover:text-white hover:font-bold"
	>
		<div class="flex justify-start ml-[2px]">
			{#if leftIcon}
				<img src={leftIcon} alt="Icon" class="rounded-full h-14 border-2 border-black" />
			{/if}
		</div>
		<p class="col-span-2 py-4 whitespace-nowrap overflow-scroll text-xl">{title}</p>
		<div class="flex justify-end mr-[2px]">
			{#if rightIcon}
				<img src={rightIcon} alt="Icon" class="rounded-full h-14 border-2 border-black" />
			{/if}
		</div>
	</div>
</a>
