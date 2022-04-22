# Hangman 2021/2022

## Author
   up2058177

## Contents
   My Hangman Web App for Application Programming

## Features
   * Random Words
      There is the option to randomise the word completely, meaning that the player will have no idea what the category or the difficulty is. In the settings menu (after pressing start), there is the RANDOM THEME button which does this. It also reappears at the end of the game    
   * Three Levels of Difficulty
      There are several difficulty levels to offer more gameplay depth and challenge players. These can be found in the settings menu (which appears after pressing start)
   * Five Categories of Words
      By having categories, players can receive a hint on what they're guessing and also customise the dictionary the program pulls from
   * Light and Dark Mode
      Two color scheme options for players. Dark mode is the default. The toggle switch in the bottom right corner accomplishes this.
   * Sound (Can be turned on/off)
      Sound adds that extra dimension to the web app. However, it can be turned off if proven to be an annoyance. The sound option can be found in the bottom left corner at all times.
   * Scoring system (+50 for correct letter guesses and -20 for incorrect guesses)
      Allows players to compete against others, as well as challenge themselves to do better. Score is displayed during the game.

## Design & Implementation Rationale
   I didn't focus too much on crazy additional features as I wanted to focus on a simple yet effective experience and improving upon it with quality of life additions. For example, the light/dark mode or sound effects. I also approached it with mobile phone users in mind. I made by web app responsive for phone users. I achieved this by utilising divs and flexbox. Although I had plans for some big features, I had to rethink the scope of my project multiple times across the year.

## Future Work
   * Multiplayer Mode:
      I plan on implementing a multiplayer mode where players can connect with each other and compete against each other. I will do this by using web scokets.
   * Game History:
      I plan on allowing players to view their game history by using localStorage and saving the game scores to a Postgres Database
   * Custom Words:
      I plan on utilising localStorage to allow users to enter custom words for that session only.
 
## Installation & Use
1. Clone the repository with:
   ```bash
   git clone https://github.com
   ```
2. Go into the locally cloned repo with:
   ```bash
   cd 
   ```
3. Initialise npm with:
   ```bash
   npm init
   ```
4. Install libraries with:
   ```bash
   npm install
   ```
5. Start a simple, local HTTP server on port 8080 with:
   ```bash
   npm start
   ```
6. Type 'localhost:8080' into the searchbar of browser of choice

## Built With
   * Visual Studio Code
   * Node.js
   * npm
   * Express.js
   * ESLint 
   * ESLint (PortSoC Config)

## Sources
   * MDN Web Docs
   * CSS-Tricks

## References
  * MDN Web Docs:
      MDN Web Docs. Developer.mozilla.org. (2022). Retrieved 21 April 2022, from https://developer.mozilla.org/en-US/.
  * CSS-Tricks:
      CSS-Tricks. CSS-Tricks. (2022). Retrieved 21 April 2022, from https://css-tricks.com/.
  *  04B_30__ Web Font:
        Oshimoto, Y. (1998). 04b_30 Font | dafont.com. Dafont.com. Retrieved 9 March 2022, from https://www.dafont.com/04b-30.font.
  *  click.wav Sound:
        Mixkit - Awesome free assets for your next video project. Mixkit.co. (2022). Retrieved 21 April 2022, from https://mixkit.co/.
  *  game-lose.wav Sound:
        Mixkit - Awesome free assets for your next video project. Mixkit.co. (2022). Retrieved 21 April 2022, from https://mixkit.co/.
  *  game-won.wav Sound:
        Mixkit - Awesome free assets for your next video project. Mixkit.co. (2022). Retrieved 21 April 2022, from https://mixkit.co/.
  *  right-guess.wav Sound:
        Mixkit - Awesome free assets for your next video project. Mixkit.co. (2022). Retrieved 21 April 2022, from https://mixkit.co/.
  *  wrong-guess.wav Sound:
        Mixkit - Awesome free assets for your next video project. Mixkit.co. (2022). Retrieved 21 April 2022, from https://mixkit.co/.