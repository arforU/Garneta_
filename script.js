const content = document.getElementById('content');
const buttons = document.querySelectorAll('.buttons button');

const messages = {
  1: "“Jika hidup adalah cupcake, maka tambahkan selalu topping manis kebahagiaan.” 🍓",
  2: "“Jangan takut jadi lucu, bahkan strawberry pun punya duri tapi tetap manis!” 😄",
  3: "“Kamu seperti cupcake strawberry, unik dan selalu bikin hari jadi lebih cerah.” 🌸",
  4: "“Keindahan sejati datang dari hati yang penuh cinta, seperti cupcake penuh kasih sayang.” ❤️"
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');
    content.textContent = messages[page] || "Kata-kata manis belum tersedia.";
  });
});
