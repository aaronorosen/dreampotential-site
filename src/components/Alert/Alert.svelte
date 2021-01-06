<script>
    import {fade} from 'svelte/transition'
    export let status = "success"
    export let message = ""
</script>

{#if message}
    <div transition:fade class="msg msg-{status}">
        {message}
    </div>
{/if}

<style src="./alert.css"></style>