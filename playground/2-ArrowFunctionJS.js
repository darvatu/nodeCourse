// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

const square = (x) => x * x;

console.log(square(4));

const event = {
  name: "bisrthday party",
  printGuestList() {
    console.log("Guest List For" + this.name);
  },
};

event.printGuestList();
