
const instance = new Typewriter('#typewriter', {
    loop: true,
  });

  instance.typeString("Hello, ")
  .deleteAll()
  .typeString("Bonjour, ")
  .pause(1000)
  .deleteAll()
  .typeString("Namaste, ")
  .pause(1000)
  .deleteAll()
  .typeString("Jambo, ") .pause(1000)
  .start();
  

//   const texts = ['Hello, ', 'Bonjour, ', 'Namaste, ', 'Jambo, '];
// let count = 0;
// let index = 0;
// let currentText = 0;
// let letter = '';

// (function type(){
//     if(count === texts.length){
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);

//     document.querySelector(".typing").textContent = letter;
//     if(letter.length === currentText.length){
//         count++;
//         index = 0;
//     }
//     setTimeout(type, 400);
// })();
