function writeCards(names, event) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);
  
  countDown(10);
  