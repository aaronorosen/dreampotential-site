<script>
    import Alert from '../Alert/Alert.svelte'
    import {Leads} from '../../services'
    let who = "--";
    let title = ""
    let companyName = ""
    let email = ""
    let phone = ""
    let submitting = false 
    let resp 

    async function submit(){
        submitting = true
        const res = await Leads.save({
            name: companyName,
            email,
            phone,
            description: `
                ${who}
                ${companyName}
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
        <span>Title / Role:</span>
        <input
          type="text"
          placeholder="title/role"
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
          placeholder="john@example.com"
          required
          bind:value={email}
          spellcheck="false" />
      </label>
      <label>
        <span>Phone:</span>
        <input
          type="tel"
          placeholder="123-45-678"
          pattern="\+?[-0-9 ]{'{3,15}'}"
          bind:value={phone}
          spellcheck="false" />
      </label>
      <label>
        <span />
        <button disabled={submitting} type="submit">Submit</button>
      </label>
    {/if}
  </form>
{/if}
