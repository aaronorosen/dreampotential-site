<script>
    import Connect from "../components/Connect.svelte";

    let who = "--";
</script>

<style>
    section {
        width: 100%;
        min-height: 100vh;
        color: var(--third);
        padding: var(--offset, 150px);
        padding-top: 170px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
    }
    section::after {
        z-index: 6;
        background: red;
        right: 0;
        width: 100vw;
        height: 100vh;
        background: red;
        position: absolute;
        top: 0;
        content: "";
        background: url(/assets/Hero-Graphic-01.png);
        background-repeat: no-repeat;
        background-position-x: right;
        background-size: 37%;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-content: flex-start;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding-top: 2rem;
        min-height: 800px;
    }
    h2 {
        font-size: 2.4rem;
        padding: 0;
        margin: 3rem 0;
    }
    p,
    .wrapper > * {
        font-size: 1.2rem;
        max-width: 600px;
        margin: 0;
        font-weight: 100;
        letter-spacing: 1px;
    }
    .where_are_you {
        max-width: 588px;
        margin: 3rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    .where_are_you label {
        display: flex;
        max-width: 100%;
        /* overflow: hidden; */
        justify-content: space-between;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
    .where_are_you select {
        cursor: pointer;
    }
    .where_are_you select,
    .where_are_you input,
    .where_are_you button {
        min-width: 280px;
        box-sizing: border-box;
        padding: 0.3rem 0.4rem;
        outline: none;
        border: none;
        font-size: 1rem;
        background: #7736cc44;
        color: #ddd;
        border-radius: 2px;
    }
    .where_are_you label span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1rem;
        font-weight: 600;
        color: #aaa;
    }
    .where_are_you input::placeholder {
        color: #ffffff66;
    }
    .where_are_you option {
        background: #ffffff88;
        color: black;
    }
    .where_are_you button {
        min-width: 80px;
        background: #5a289bcc;
        cursor: pointer;
    }
    .where_are_you button:hover {
        background: #5a289bff;
        color: white;
    }
    @media (max-width: 1100px) {
        section {
            padding-left: 75px;
            padding-right: 75px;
        }
        section::after {
            background-size: 50%;
        }
    }
    @media (max-width: 700px) {
        section {
            padding-left: 25px;
            padding-right: 25px;
        }
        section::after {
            background-size: calc(600px - 30vw);
        }
    }
    @media (max-width: 825px) {
        .where_are_you label {
            margin: 0.3rem;
            justify-content: stretch;
        }
        .where_are_you select,
        .where_are_you input,
        .where_are_you button {
            margin-top: 0.3rem;
            width: 100%;
            box-sizing: border-box;
            background: #7736cc77;
        }
    }
    @media (max-width: 320px) {
        h2 {
            font-size: 10vw;
        }
        .wrapper {
            padding-top: calc(var(--navbar-height) / 2);
        }
        .where_are_you select,
        .where_are_you input,
        .where_are_you button {
            min-width: 100%;
        }
    }
</style>

<section>
    <div class="wrapper">
        <div class="space-vertical">
            <h2>Dream Labs</h2>
        </div>

        <!-- Have select input field which has these
        option for person to select - I am a founder with Idea I am a Business
        Owner I am a Health Care Provider I am Educator -->

        <p>
            Dream Labs Solves large, open-ended problems where the
            high-level nature of the solution is unclear.<br><br>

	    Your Integration Partner to drive and implement clear solutions to often large open-ended problems.
        </p>
        <form class="where_are_you">
            <label>
                <span>Where are you in the process?</span>
                <select required bind:value={who}>
                    <option value="--">--</option>
                    <option value="founder">I am a founder with Idea</option>
                    <option value="buisness_owner">
                        I am a Business Owner
                    </option>
                    <option value="health_care_provider">
                        I am a Health Care Provider
                    </option>
                    <option value="educator">I am Educator</option>
                    <option value="need_help_with_idea">
                        I need help with idea
                    </option>
                </select></label>
            {#if who && who !== '--'}
                <label>
                    <span>Title / Role:</span>
                    <input
                        type="text"
                        placeholder="title/role"
                        required
                        spellcheck="false" />
                </label>
                <label>
                    <span>Company Name:</span>
                    <input
                        type="text"
                        placeholder="Company Name"
                        required
                        spellcheck="false" />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        spellcheck="false" />
                </label>
                <label>
                    <span>Phone:</span>
                    <input
                        type="tel"
                        placeholder="123-45-678"
                        pattern="\+?[-0-9 ]{'{3,15}'}"
                        spellcheck="false" />
                </label>
                <label> <span /> <button type="submit">Submit</button> </label>
            {/if}
        </form>
    </div>
</section>

<Connect />
