<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }
</script>

<style src="./partner-overlay.css">
</style>

<section on:click|self={close}>
    <div class="content">
        <slot />
    </div>
</section>
