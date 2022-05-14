// 1 template litrals

let word1 = 'hello';
let word2 = 'world';
const msg = `${word1} ${word2}`;
console.log(msg);
document.getElementById('app').innerText = msg;
let msg2 = 'hello \n' + 'world';
document.getElementById('app').innerText = msg2;
// object destructuring

const personalInfo = {
  fName: 'udit',
  lName: 'thakur',
  city: 'thane',
  state: 'maharashtra',
  pincode: 400601,
};

// method 1
// const{fName,lName}=personalInfo
// console.log(`${fName} ${lName}`)

// method 2
const { fName: fn, lName: ln } = personalInfo;
console.log(`${fn} ${ln}`);

// Array destucturing

let [f, s, t] = ['udit', 'raj', 'ram'];

t = 'shyam';
console.log(f + s + t);

// object literal
function myAddress(city, state) {
  const newAddress = { city, state };
  console.log(newAddress);
}
myAddress('thane', 'maharashtra');

// challenge

function addressMaker(address) {
  const { city, state } = address;
  const nayaAddress = {
    city,
    state,
    country: 'india',
  };
  console.log(
    `${nayaAddress.city},${nayaAddress.state}, ${nayaAddress.country}`
  );
}
addressMaker({ city: 'thane', state: 'maharashtra' });

// for of loop--- can itirate item of array ,char in string etc

let incomes = [6000, 5000, 4500];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}
console.log(total);

let text = 'udit is here';
for (const char of text) {
  console.log(char);
}
