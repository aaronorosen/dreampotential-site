<script>
    export let status = "success"
    export let message = ""
</script>

{#if message}
    <div class="msg msg-{status}">
        {message}
    </div>
{/if}

<style src="./alert.css"></style>