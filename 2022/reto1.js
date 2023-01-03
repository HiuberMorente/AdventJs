const gifts = ["cat", "game", "socks"];

function wrapping(gifts) {
  return gifts.map((gift) => {
    let star = "*".repeat(gift.length + 2);
    return `${star}\n*${gift}*\n${star}`;
  });
}

console.log(wrapping(gifts));
