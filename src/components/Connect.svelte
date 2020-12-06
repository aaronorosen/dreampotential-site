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
        <form action="">
            <label for="name">
                name:
                <input
                    type="text"
                    class="name"
                    placeholder="John Doe"
                    required
                    spellcheck="false" />
            </label>
            <label for="phone">
                phone:
                <input
                    type="tel"
                    class="phone"
                    placeholder="123-45-678"
                    pattern="\+?[-0-9]{'{3,15}'}" />
            </label>
            <label for="email">
                email:
                <input
                    type="email"
                    class="email"
                    placeholder="john@example.com"
                    required />
            </label>
            <label for="description">
                description:
                <textarea
                    class="description"
                    placeholder="type your message here"
                    required
                    spellcheck="false" />
            </label>
            <button class="connect">Connect</button>
        </form>
    </div>
</section>
