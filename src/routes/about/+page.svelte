<div class="jumbotron about">
  <h1 class="about--title button green">I Have Questions.</h1>

  <h2 class="about--title">What Is This?</h2>
  This is my side project. I like to make people laugh. I like writing software.
  Here I do both.
  <div class="about--new">
    <h2 class="about--title">What's on this website?</h2>
    <ul>
      <li class="about--new--item">
<!--        <%= render(BuzzKillfeedWeb.LayoutView, "candy_button_bullet.html", %{color: "pink"}) %>-->
        <strong class="new--item--name"><a href="/clickbait-generator">Clickbait Generator:</a></strong>
        The original feature on this website.
      </li>
      <li class="about--new--item">
<!--        <%= render(BuzzKillfeedWeb.LayoutView, "candy_button_bullet.html", %{color: "pink"}) %>-->
        <strong class="new--item--name"><a href="/fill_in_the_bait">Fill In the Bait:</a></strong>
        Play with others and generate hilarious headlines with your own words!
      </li>
      <li class="about--new--item">
<!--        <%= render(BuzzKillfeedWeb.LayoutView, "candy_button_bullet.html", %{color: "yellow"}) %>-->
        <strong class="new--item--name"><a href="/bestof">Best of CBG:</a></strong> You can save and
        share the headlines you love, and the site keeps track of and displays the most popular headlines!
      </li>
      <li class="about--new--item">
<!--        <%= render(BuzzKillfeedWeb.LayoutView, "candy_button_bullet.html", %{color: "green"}) %>-->
        <strong class="new--item--name">Seasonal changes:</strong> some words and phrases only show up a
        certain time of year.
        Keep checking back for fresh new headlines!
      </li>
      <li class="about--new--item">
<!--        <%= render(BuzzKillfeedWeb.LayoutView, "candy_button_bullet.html", %{color: "purple"}) %>-->
        <strong class="new--item--name">There might be:</strong>
        <span>some Easter eggs.</span>
      </li>
    </ul>
  </div>
  <h2>How do you do this?</h2>
  <p class="about--answer">
    I've deconstructed clickbait, basically, and also I comb the internet for trends and
    fads in clickbait.
    Finally, I curate the results to randomly generate topical, seasonal headlines,
    using a combination of words, phrases and headline
    templates!
  </p>

  <h2>I can't believe you made that awful headline! What's wrong with you?</h2>
  <p class="about--answer">
    Okay. I think you need to reread 'How do you do this', or maybe you're just getting fussy.
    Did you get enough sleep?
    The headlines are put together by <i>randomly</i> selecting words and phrases.</p>
  <p class="about--answer">
    Seriously though, I try to make this pretty family friendly.
    Generally, any public figure or anyone with wealth and power is fair game for good sport.
    I'm sorry if you're offended. Everyone should be able to take a little good-natured ribbing, shouldn't they?
    Maybe there is something I didn't know or catch about a word or a person. I welcome new knowledge and insights!
    Please <a target="new" href="https://github.com/shannonwells/BuzzKillfeed/issues/new">file a helpful issue on
    the GitHub repository</a> if you find a bug or have an improvement to suggest.
  </p>

  <h2>Blah, blah, AI blah?</h2>
  <p class="about--answer">
    I don't use AI here.
    I asked a popular AI to generate me a "funny" clickbait headline just to see what would come out.
    Newsflash:  AIs aren't funny.  At least, not on purpose.
    As for the randomly generated stuff with words and phrases I curate, even when it flops it's funnier than what a LLVM
    can spit out.
  </p>

  <h2>Why can't I share my Fill In The Bait headline?</h2>
  <p class="about--answer">
    Since I can't control what people type into the Fill In the Bait game, I decided not to let
    people save and share the results. There's too much potential for abuse and I
    don't want a few determined KAOS agents to ruin it for everyone else.
  </p>
  <h3 class="about--title button purple glossy sparkley">Credits</h3>
  <ul>
    <li>
      Simon Goellner for the
      <a href="https://codepen.io/simeydotme/pen/jgcvi">Magical Sparkles.</a>
    </li>
    <li>
      <a href="https://simurai.com/">Simural</a> for the
      <a href="https://simurai.com/archive/buttons/">Bon Bon Buttons</a>.
    </li>
    <li>
      <a href="https://coolors.co/">Coolors.co</a>, a great tool for helping me choose a palette.
    </li>
  </ul>
</div>

<style lang="scss">
  @import '$lib/sass/media_query';
  @import '$lib/sass/_variables';

  a {
    color: $linkcolor;

    &:hover, &:active {
      color: $text-color;
    }
  }


  .about--title {
    margin-left: 0;
  }

  .about--new--item {
    list-style: none;
    margin-left: -40px;
    @media (min-width: $breakpoint-tablet) {
      margin-left: -20px;
      display: flex;
      align-items: center;
    }
  }

  .new--item--name {
    @media (min-width: $breakpoint-tablet) {
      width: 200px;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  .about--answer {
    margin-bottom: 2em;
  }
</style>
