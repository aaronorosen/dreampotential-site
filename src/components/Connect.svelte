<script>
    let submitToUrl =
        "https://sfapp-api.dreamstate-4-all.org/form_lead/create/";

    let name = "";
    let phone = "";
    let email = "";
    let description = "";

    let message = "";
    let submiting = false;

    async function submitForm(event) {
        submiting = true;
        message = "submitting";
        try {
            const response = await fetch(submitToUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    blub: description,
                }),
            });
            await response.json();
        } catch (err) {
            submiting = false;
            message = "failed";
            setTimeout(() => {
                message = "";
            }, 10000);
            return;
        }
        submiting = false;
        message = "submited";
        setTimeout(() => {
            message = "";
        }, 5000);
        name = phone = email = description = "";
    }
</script>

<style>
    section {
        margin: 4rem 0;
        min-height: 37.5rem;
    }
    h1 {
        text-align: center;
        font-size: 2.6rem;
        color: #ccc;
        font-weight: lighter;
    }
    .container {
        max-width: 50rem;
        padding: 1rem;
        margin: 0 auto;
        color: #ccc;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    label {
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        color: #aaa;
        letter-spacing: 1px;
    }
    input,
    textarea {
        margin-top: 0.3rem;
        box-sizing: border-box;
        width: 100%;
        background: #411c7177;
        padding: 0.5rem;
        border: none;
        outline: none;
        font-size: 1rem;
        resize: none;
        color: #fff;
        border-radius: 2px;
    }
    textarea {
        height: 9.375rem;
        font-family: sans-serif;
    }
    .connect {
        padding: 0.5rem;
        font-size: 1rem;
        background: var(--first);
        color: #ffffffaa;
        font-weight: bold;
        border: none;
        outline: none;
    }
    .connect:hover {
        background: #411c71cc;
    }
    .connect:disabled {
        background: var(--first);
        opacity: 0.6;
    }
    input::placeholder,
    textarea::placeholder {
        color: #ffffff66;
    }
    button {
        cursor: pointer;
        user-select: none;
        text-transform: uppercase;
    }
    @media (max-width: 25rem) {
        h1 {
            font-size: 10vw;
        }
    }
</style>

<section id="connect">
    <h1>Get in Touch</h1>
    <div class="container">
        <form on:submit|preventDefault={submitForm}>
            <label for="name">
                name:
                <input
                    type="text"
                    class="name"
                    placeholder="John Doe"
                    required
                    spellcheck="false"
                    bind:value={name} />
            </label>
            <label for="phone">
                phone:
                <input
                    type="tel"
                    class="phone"
                    placeholder="123-45-678"
                    pattern="\+?[-0-9 ]{'{3,15}'}"
                    bind:value={phone} />
            </label>
            <label for="email">
                email:
                <input
                    type="email"
                    class="email"
                    placeholder="john@example.com"
                    required
                    bind:value={email} />
            </label>
            <label for="description">
                description:
                <textarea
                    class="description"
                    placeholder="type your message here"
                    required
                    spellcheck="false"
                    bind:value={description} />
            </label>
            <button
                class="connect"
                disabled={submiting}>{message || 'CONNECT'}</button>
        </form>
    </div>
</section>
