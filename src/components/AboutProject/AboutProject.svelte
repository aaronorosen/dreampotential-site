<script>
    import { createEventDispatcher } from "svelte";

    export let partner;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }
</script>

<style src="./about-project.css">
</style>

<div class="about-project">
    <div class="content-wrapper">
        <h2>{partner.name}</h2>
        {#each partner.about as about}
            <p>{about}</p>
        {/each}
        {#if partner.website}
            <a href={partner.website.url} target="_blank">{partner.website.name}</a>
        {/if}
        {#if partner.video}
            <div class="video-wrapper">
                {#if partner.video.iframe}
                    {@html partner.video.iframe}
                {:else if partner.video.src}
                    <video id="video-player" src={partner.video.src} controls />
                {/if}
            </div>
        {/if}
        <div class="buttons">
            <button class="close-btn" on:click={close}>x</button>
        </div>
    </div>
</div>
