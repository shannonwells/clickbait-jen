<script lang="ts">
</script>
<div class="jumbotron fill_in_the_bait">
  <h1>Fill In the Bait: A Game for You or More</h1>
  <p>Create your own hilarious headline! Ask your fellow player for the parts of speech
    shown, in order.</p>
  <h3>How to play:</h3>
  <ol class="fitb--rules">
    <li>Fill in each blank with their answer</li>
    <li>Press the shiny happy candylike button</li>
    <li>Read the hilarious result!</li>
  </ol>
  <div class="fitbGame--Result--Section hidden">
    <h1 class="fitbGame--NewHeadline"></h1>
    <button class="fitbGame--Reload button round pink glossy" type="submit">Again!</button>
  </div>
  <div class="fitbGame--Form" id="template_<%= @template.id %>">
    <div class="fitbGame--HasError"></div>
    <div class="fitbGame--Labels">
      <!-- list of words from get_needed_words -->
      {#each  ["foo","bar","bazz"] as word }
      <label class="fitbGame--Label" for="<%= word %>">
        <span class="fitbGame--LabelText">{ word }</span>
        <span class="fitbGame--Pointer">☞</span>
        <input class="fitbGame--Blank" id="<%= word %>" required>
      </label>
      {/each}
    </div>
    <button class="button pink round glossy fitbGame--Submit">Go!</button>
    <div class="hidden"></div>
  </div>
</div>

<style lang="scss">
  @import '$lib/sass/_media_query';
  @import '$lib/sass/_variables';
  @import '$lib/sass/_mixins';

  .fitbGame--Form {
    font-size: large;
    margin: 0 auto;
    @media (min-width: $breakpoint-tablet) {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 600px;
    }
  }

  button.fitbGame--Reload {
    @include candy-button;
  }

  .fitbGame--HasError {
    margin-top: 22px;
    height: fit-content;
    font-weight: bold;
    text-align: center;
    @media (min-width: $breakpoint-tablet) {
      text-align: left;
    }
  }

  .fitbGame__Blank--missing {
    border: 2px solid #ff00a1;
  }

  .fitbGame--Labels {
    display: flex;
    flex-direction: column;
    @media (min-width: $breakpoint-tablet) {
      margin-top: 22px;
      display: table;
    }
  }

  .fitbGame--Label {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: $breakpoint-tablet) {
      display: table-row;
      margin-bottom: 22px;
    }
  }

  .fitbGame--LabelText, .fitbGame--Blank {
    @media (min-width: $breakpoint-tablet) {
      margin-right: 12px;
      display: table-cell;
    }
  }

  .fitbGame--LabelText {
    font-weight: bold;
    @media (min-width: $breakpoint-tablet) {
      padding: 6px 12px;
      text-align: right;
    }
  }

  .fitbGame--Pointer {
    display: none;
    @media (min-width: $breakpoint-tablet) {
      display: revert;
      margin-right: 12px;
      font-size: x-large;
    }
  }

  .fitbGame--Blank {
    margin-top: .5em;
    padding: 4px;
    text-align: left;
    font-size: large;
    width: 200px;
    border-radius: 10px;
    border-color: transparent;
    @media (min-width: $breakpoint-tablet) {
      font-size: revert;
      width: 300px;
    }
  }

  button.fitbGame--Submit {
    display: block;
    margin: 0 auto 22px auto;
    @include candy-button;
    padding: 12px 52px;
    @media (min-width: $breakpoint-tablet) {
      margin: 22px auto;
    }
  }
</style>
