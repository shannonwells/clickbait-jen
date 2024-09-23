<script lang="ts">
  import DesktopNav from "$lib/components/DesktopNav.svelte";
  import MobileNav from "$lib/components/MobileNav.svelte";
</script>
<DesktopNav/>
<MobileNav/>
<slot></slot>

<style lang="scss">
  @import '$lib/sass/_media_query';
  @import '$lib/sass/_variables';

  :global(body) {
    margin: 0;
    padding-top: 0;
    background: $bgcolor;
    font-family: "Montserrat", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  }

  :global(footer) {
    padding: 0 32px;
    color: $footerText;
  }

  :global(.jumbotron) {
    background: $contrastcolor;
    padding: .5em 1em;
    @media (min-width: $breakpoint-tablet) {
      padding: 30px;
    }
  }

  :global(h1,h2,h3) {
    color: $headercolor;
    text-align: center;
    line-height: 1.2em;
    margin: 0;
    @media (min-width: $breakpoint-tablet) {
      text-align: left;
      margin: .5em 0;
    }
  }

  :global(h1) {
    font-size: 32px;
  }

  :global(h2) {
    font-size: 26px;
    margin-top: .25em
  }

  :global(h3) {
    font-size: 20px;
    margin-top: .25em;
  }

  :global(.container) {
    padding: 22px;
  }

  :global(nav) {
    background-color: $bgcolor;
    font-weight: bold;
    text-align: left;
    font-size: 18px;
    line-height: 2em;
  }
</style>
