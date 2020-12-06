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
    .close-btn {
        background: #411c71;
        color: #e6d3ff;
        border: none;
        outline: none;
        padding: 0.4rem;
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
    <button class="close-btn" on:click={close}>close</button>
</div>
