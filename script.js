const myLogo = document.querySelectorAll('#myLogo path');

for (let i = 0; i < myLogo.length; i++) {
  console.log(`Letter ${i} is ${myLogo[i].getTotalLength()}`);
}
