<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }
</script>

<style>
    section {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #ffffff33;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 200;
    }
    .content {
        cursor: default;
    }
</style>

<section on:click|self={close}>
    <div class="content">
        <slot />
    </div>
</section>
