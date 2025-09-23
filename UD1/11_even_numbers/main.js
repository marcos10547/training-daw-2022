function evenNumbers() {
for (let i = 2; i < 100; i += 2) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
}

evenNumbers();
// expected output 2,4,6,8,10......98