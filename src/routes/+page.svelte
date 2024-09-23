<div class="jumbotron home">
  <h1 class="home--title mobile--hidden">Hi! I'm Clickbait Jen</h1>
  <h3 class=""> What do you want to do?</h3>
  <div class="home--buttons">
    <p class="home--button">
      <a class="button sparkley round pink button--clickbait" href="/clickbait_generator">I want you to make me
        some clickbait!</a>
    </p>
    <p class="home--button">
      <a class="button sparkley round green button--clickbait" href="/bestof">I want to see the best clickbait
        ever!</a>
    </p>
    <p class="home--button">
      <a class="button sparkley round blue button--clickbait" href="/fill_in_the_bait">I want to make clickbait
        with friends!</a>
    </p>
  </div>
</div>

<style lang="scss">
  @import '$lib/sass/_media_query';
  @import '$lib/sass/_variables';

  .home--buttons {
    text-align: center;
    @media (min-width: $breakpoint-tablet) {
      text-align: left;
    }
  }
  a {
    color: $linkcolor;

    &:hover, &:active {
      color: $text-color;
    }
  }

</style>
