<nav class="nav--desktop">
  <span class="nav--desktop--item"><a href="/">Home</a></span>
  <span class="nav--desktop--item"><a href="/clickbait-generator">Clickbait Generator</a></span>
  <span class="nav--desktop--item"><a href="/fill-in-the-bait">Fill In the Bait</a></span>
  <span class="nav--desktop--item"><a href="/bestof">Best of Clickbait</a></span>
  <span class="nav--desktop--item"><a href="/about">WAT</a></span>
</nav>

<style lang="scss">
  @import '$lib/sass/_media_query';
  @import '$lib/sass/_variables';
  @import '$lib/sass/_mixins';

  .nav--desktop {
    display: none;
    @media (min-width: $breakpoint-tablet) {
      display: flex;
      justify-content: flex-start;
      line-height: 1.75em;
      align-content: flex-start;
      font-size: 14px;
      padding: 0 32px;
    }
  }

  .nav--desktop--item {
    @media (min-width: $breakpoint-tablet) {
      margin: 12px 32px 0 0;
      padding: 4px 8px;
      &:hover, &:active {
        transition: background-color 300ms ease-out;
        border-radius: 4px 4px 0 0;
        background-color: $contrastcolor;
      }
    }
  }

  .nav--desktop--item a {
    color: $menu-linkcolor;
  }

  // TBD when hide/show is finshed
  .nav--mobile--expanded {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
  }


  .dark-mode {
    .xkxk--item {
      color: $contrastcolor;
    }
  }


  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: initial;
    }
  }
</style>
