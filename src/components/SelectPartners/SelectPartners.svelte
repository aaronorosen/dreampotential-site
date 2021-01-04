<script>
  import AboutProject from "../AboutProject/AboutProject.svelte";
  import PartnerOverlay from "../PartnerOverlay/PartnerOverlay.svelte";
  import {partners} from '../../data'

  let activePartner = -1;
</script>

<style src="./select-partners.css">
</style>

<section>
  <div class="heading">
    <div class="hr" />
    <h2>SELECT PARTNERS</h2>
    <div class="hr" />
  </div>
  <div class="partners">
    {#each partners as partner, index}
      <div class="partner" on:click={() => (activePartner = index)}>
        <img
          style={partner.imageWith ? `width: ${partner.imageWith}px` : ''}
          src={partner.img}
          alt="" />
      </div>
      {#if index === activePartner}
        <PartnerOverlay on:close={() => (activePartner = -1)}>
          <AboutProject {partner} on:close={() => (activePartner = -1)} />
        </PartnerOverlay>
      {/if}
    {/each}
  </div>
  <div class="closing">
    <div class="hr" />
    <img src="/assets/Circles-01.svg" alt="" />
    <div class="hr" />
  </div>
</section>
