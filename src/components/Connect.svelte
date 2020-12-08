<script>
    let submitToUrl = "https://sfapp-api.dreamstate-4-all.org/form_lead/create";

    let name = "test 2";
    let phone = "01431 431 111";
    let email = "test2@mail.com";
    let description = "what next ...";

    let message = "";
    let submiting = false;

    async function submitForm(event) {
        submiting = true;
        message = "submitting";
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
        const responseData = await response.json();
        false && console.log(responseData);
        submiting = false;
        message = "submited";
        setTimeout(() => {
            message = "";
        }, 5000);
    }
</script>

<style>
    section {
        margin: 4rem 0;
        min-height: 600px;
    }
    h1 {
        text-align: center;
        font-size: 2.6rem;
        color: #ccc;
        font-weight: lighter;
    }
    .container {
        max-width: 800px;
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
        height: 150px;
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
