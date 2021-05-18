<script>
    import { createEventDispatcher } from "svelte";
    import LinkIcon from '../Icons/LinkIcon.svelte'
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
        <h2>
            {#if partner.website?.url}
                <a href={partner.website.url} target="_blank">{partner.name}</a>
                <LinkIcon />
            {:else}
                {partner.name}
            {/if}
        </h2>
        {#each partner.about as about}
            <p>{about}</p>
        {/each}
        {#if partner.website}
            {#if partner.website.btn_link}
                <a href={partner.website.btn_link} target="_blank" class="site-btn">{partner.website.btn_label}</a>
            {/if}
        {/if}
        {#if partner.video}
            <div class="video-wrapper">
                {#if partner.video.iframe}
                    {@html partner.video.iframe}
                {:else if partner.video.img}
                    <img alt="img" class="img" src={partner.video.img}>
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
