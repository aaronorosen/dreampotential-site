<script>
    import Alert from '../Alert/Alert.svelte'
    import {Leads} from '../../services'
    let name = "";
    let phone = "";
    let email = "";
    let description = "";

    let message = "";
    let submiting = false;
    let resp 

    async function submitForm() {
        submiting = true;
        const res = await Leads.save({name, email, phone, description})

        if(res.error){
            resp = {
                status: "error",
                message: "Error occured while submitting, please try again later!"
            }
        }else{
            resp = {
                status: "success",
                message:"Thank you for contacting us, we will be in touch with you shorly."
            }
        }
    }
</script>

<style src="./connect.css">
</style>

<section id="connect">
    <h1>Get in Touch</h1>
    <div class="container">
        {#if resp}
            <div class="center">
                <Alert {...resp} />
            </div>
        {:else}
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
                    class="connect {submiting ? 'disabled':''}"
                    disabled={submiting}>{message || 'CONNECT'}</button>
            </form>
        {/if}
    </div>
</section>
