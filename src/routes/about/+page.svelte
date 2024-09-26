<script lang="ts">
  import CandyButton from "$lib/components/CandyButton.svelte";
</script>
<div class="jumbotron about">
  <h1 class="about--title button green">I Have Questions.</h1>

  <h2 class="about--title">What Is This?</h2>
  This is my side project. I like to make people laugh. I like writing software.
  Here I do both.
  <div class="about--new">
    <h2 class="about--title">What's on this website?</h2>
    <ul>
      <li class="about--new--item">
        <CandyButton color="blue"/>
        <strong class="new--item--name"><a href="/clickbait-generator">Clickbait Generator:</a></strong>
        The original feature on this website.
      </li>
      <li class="about--new--item">
        <CandyButton color="pink"/>
        <strong class="new--item--name"><a href="/fill-in-the-bait">Fill In the Bait:</a></strong>
        Play with others and generate hilarious headlines with your own words!
      </li>
      <li class="about--new--item">
        <CandyButton color="yellow"/>
        <strong class="new--item--name"><a href="/bestof">Best of CBG:</a></strong> You can save and
        share the headlines you love, and the site keeps track of and displays the most popular headlines!
      </li>
      <li class="about--new--item">
        <CandyButton color="green"/>
        <strong class="new--item--name">Seasonal changes:</strong> some words and phrases only show up a
        certain time of year.
        Keep checking back for fresh new headlines!
      </li>
      <li class="about--new--item">
        <CandyButton color="purple"/>
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
    Please <a target="new" href="https://github.com/shannonwells/clickbait-jen/issues/new">file a helpful issue on
    the GitHub repository</a> if you find a bug or want to suggest something family-friendly and fun.
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

  <h2>How can I help?</h2>
  <div class="about--answer">
    <p>Thanks for asking!  A great way to help is to <a href="https://github.com/shannonwells/clickbait-jen">contribute some code!</a></p>
    <p>If you don't want to or can't work on the site, helping keep the servers running is always appreciated:</p>
    <ul>
      <li>My PayPal username is @wellsshannone</li>
      <li>ETH address: 0xC32Cc7D6FF5f7f319CA92468023EdD686f7b16a5</li>
      <li>Polkadot address: 15cRvzXJgJHS9HkWB7udPH5ExknuuMKoCvSa1qN1LcDLrytL</li>
      <li>Wisetag: <a href="https://wise.com/pay/me/shannonelizabethw1">@shannonelizabethw1</a> </li>
    </ul>
  </div>

  <h2>What kind of person are you? What is your political party preference?
    What's your religion? Let me ask some more deeply personal questions or
    jump to conclusions if you don't answerruhhhh!!!!!</h2>
  <p class="about--answer">
    Uhm...parasocial relationship much? I live in the United States. Our votes are cast in private.
    We are free to choose or to choose not to have a religion, and we don't have to tell people what it is or
    who we voted for. Anyway it's not relevant to this website.
    With that said, all I can add is, what's so wrong with peace, love and understanding?
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
