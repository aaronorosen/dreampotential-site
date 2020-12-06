<script>
    import { createEventDispatcher } from "svelte";

    export let partner;
    partner;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }
</script>

<style>
    .about-project {
        max-width: 600px;
        background: #e6d3ff;
        padding: 1rem;
        border-radius: 0.4rem;
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
    }
    h2,
    p {
        cursor: text;
    }
</style>

<div class="about-project">
    <h2>{partner.name}</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eos in
        placeat facere vitae debitis quia. Nam eligendi incidunt odio pariatur
        accusamus repellendus praesentium obcaecati architecto ipsum nisi.
        Doloribus, alias?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        reprehenderit, neque aliquam dolore dignissimos ullam nulla doloribus
        facilis deserunt! Officiis inventore illo facere atque dicta modi dolor,
        accusantium aliquid recusandae unde expedita praesentium ut consequatur
        quasi dolorem sit. Fuga, nobis. Aut quibusdam sed cupiditate minus? Sint
        mollitia excepturi at obcaecati.
    </p>
    <div class="buttons">
        <button class="close-btn" on:click={close}>close</button>
    </div>
</div>
