<script>
    import { createEventDispatcher } from "svelte";

    export let partner;
    let videoWrapper;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }

    function autoplay(element) {
        const video = element.querySelector("video");
        if (video) {
            video.onloadstart = function () {
                video.play();
            };
        }
    }

    $: if (videoWrapper) {
        autoplay(videoWrapper);
    }
</script>

<style>
    .about-project {
        max-width: 90vw;
        width: 600px;
        background: #e6d3ff;
        border-radius: 0.4rem;
        position: relative;
        overflow: hidden;
    }
    .content-wrapper {
        padding: 1rem;
        max-width: 100%;
        max-height: 80vh;
        overflow-y: auto;
    }
    .buttons {
        display: flex;
    }
    .close-btn {
        background: #8855cc;
        color: #e6d3ff;
        border: none;
        outline: none;
        padding: 0.2rem 0.5rem;
        cursor: pointer;
        border-radius: 2px;
        font-size: 1.1rem;
        position: absolute;
        right: 0;
        top: 0;
    }
    h2,
    p {
        cursor: text;
    }
    .video-wrapper {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        --video-bg: #333;
    }
    :global(.video-wrapper iframe),
    :global(.video-wrapper video) {
        width: 100%;
        max-width: 100%;
        outline: none;
    }
</style>

<div class="about-project">
    <div class="content-wrapper">
        <h2>{partner.name}</h2>
        {#each partner.about as about}
            <p>{about}</p>
        {/each}
        {#if partner.video}
            <div class="video-wrapper" bind:this={videoWrapper}>
                {#if partner.video.iframe}
                    {@html partner.video.iframe}
                {:else if partner.video.videoTag}
                    {@html partner.video.videoTag}
                {:else if partner.video.src}
                    <video
                        src={partner.video.src}
                        autoplay
                        controls
                        muted
                        loop
                        playsinline />
                {/if}
            </div>
        {/if}
        <div class="buttons">
            <button class="close-btn" on:click={close}>x</button>
        </div>
    </div>
</div>
