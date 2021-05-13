<script>
    import Alert from '../Alert/Alert.svelte'
    import {Leads} from '../../services'
    let who = "--";
    let title = ""
    let name = ""
    let companyName = ""
    let email = ""
    let phone = ""
    let submitting = false 
    let resp 

    async function submit(){
        submitting = true
        const res = await Leads.save({
            name: `${name} - ${title}`,
            email,
            phone,
            description: `
                ${who},
                Company: ${companyName}
            `
        })

        if(res.error){
            resp = {
                status: "error",
                message: "Error occured while saving your information, please try again later!"
            }
        }else{
            resp = {
                status: "success",
                message:"Thank you for submitting your contact, we will be in touch with you shorly."
            }
        }
        // scroll to show the alert, useful on mobile
        window.scrollTo({
          top: window.scrollY - 300 
        })
    }
</script>

<style src="./lead-connect.css"></style>

{#if resp}
  <Alert {...resp} />
{:else}
  <form class="where_are_you" on:submit|preventDefault={submit}>
    <label>
      <span>Where are you in the process?</span>
      <select required bind:value={who}>
        <option value="--">--</option>
        <option value="founder">I am a founder with Idea</option>
        <option value="buisness_owner">I am a Business Owner</option>
        <option value="health_care_provider">
          I am a Health Care Provider
        </option>
        <option value="educator">I am Educator</option>
        <option value="need_help_with_idea">I need help with idea</option>
      </select>
    </label>
    {#if who && who !== '--'}
      <label>
        <span>Name:</span>
        <input
          type="text"
          placeholder="Name"
          required
          bind:value={name}
          spellcheck="false" />
      </label>
      <label>
        <span>Title / Role:</span>
        <input
          type="text"
          placeholder="Title/Role"
          required
          bind:value={title}
          spellcheck="false" />
      </label>
      <label>
        <span>Company Name:</span>
        <input
          type="text"
          placeholder="Company Name"
          required
          bind:value={companyName}
          spellcheck="false" />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="Email Address"
          required
          bind:value={email}
          spellcheck="false" />
      </label>
      <label>
        <span>Phone:</span>
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="\+?[-0-9 ]{'{3,15}'}"
          bind:value={phone}
          spellcheck="false" />
      </label>
      <label>
        <span />
        <button class={submitting ? 'disabled':''} disabled={submitting} type="submit">Submit</button>
      </label>
    {/if}
  </form>
{/if}
