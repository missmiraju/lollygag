const emojis = [
  "😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","🎈",
  "🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶",
  "🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","😍",
  "😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉",
  "🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮",
  "🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋",
  "😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙",
  "🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰",
  "🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"
];

const generateBtn = document.getElementById("EmojiGenerateBtn");
const emoji = document.querySelector(".emoji");

// generate a random number
randomNumber = () => {
  return Math.floor(Math.random()*emojis.length);
}

// generate a random emoji based on the value of randomNumber
generateBtn.addEventListener("click" , () => {
  emoji.textContent = emojis[randomNumber()];
})
