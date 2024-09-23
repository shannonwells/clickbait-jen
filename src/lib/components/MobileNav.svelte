<div class="menu--mobile">
  <div class="menu--mobile--topbar">
    <div class="menu--mobile--title">Buzz Killfeed</div>
    <div class="menu--mobile--close hidden">×</div>
    <div class="menu--mobile--hamburger">
      <svg height="32px" id="Layer_1"
           viewBox="0 0 32 32"
           width="32px"
           xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
            </svg>
    </div>
  </div>
  <nav class="menu--mobile--nav hidden">
    <span class="menu--mobile--link"><a href="/">Home</a></span>
    <span class="menu--mobile--link"><a href="/clickbait-generator">Clickbait Generator</a></span>
    <span class="menu--mobile--link"><a href="/fill-in-the-bait">Fill In the Bait</a></span>
    <span class="menu--mobile--link"><a href="/bestof">Best of Clickbait</a></span>
    <span class="menu--mobile--link"><a href="/about">WAT</a></span>
  </nav>
</div>

<style lang="scss">
  @import '$lib/sass/_media_query';
  @import '$lib/sass/_variables';
  @import '$lib/sass/_mixins';

  .menu--mobile {
    color: $menu-linkcolor;
    &:hover,&:active {
      color: $linkcolor
    }

    display: flex;
    flex-direction: column;
    padding: .5em 1em;
    @media (min-width: $breakpoint-tablet) {
      display: none;
    }
  }

  .menu--mobile--topbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu--mobile--link a {
    color: $footerText;
  }

  .menu--mobile--title, .menu--mobile--close {
    color: $naples-yellow;
  }

  .menu--mobile--title {
    font-size: 24px;
    font-weight: bold;
  }

  .menu--mobile--close {
    font-size: 52px;
    line-height: .5em;
  }

  .menu--mobile--hamburger {
    font-size: 24px;
    svg {
      fill: $menu-linkcolor;
    }
  }

  .menu--mobile--nav {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
  }
</style>
