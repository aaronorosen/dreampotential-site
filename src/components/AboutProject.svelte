<script>
    import { createEventDispatcher } from "svelte";

    export let partner;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
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
        overflow-y: scroll;
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
    }
    .video-wrapper iframe {
        max-width: 100%;
    }
</style>

<div class="about-project">
    <div class="content-wrapper">
        <h2>{partner.name}</h2>
        {#each partner.about as about}
            <p>{about}</p>
        {/each}
        <div class="video-wrapper">
            <iframe
                title="youtube video"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/OvtBcf6QJRc?controls=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
        </div>
        <div class="buttons">
            <button class="close-btn" on:click={close}>x</button>
        </div>
    </div>
</div>
