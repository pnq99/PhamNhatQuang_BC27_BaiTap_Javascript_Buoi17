// DOM FUNCTIONAL
var inputIntBtn = document.querySelector('.inputInt-btn');
var inputRealBtn = document.querySelector('.inputReal-btn');
var inputDataView = document.getElementById('inputDataView');
var exportDataView = document.getElementById('exportDataView');

// DOM DATA
var inputIntNum = document.getElementById('inputIntNum');
var inputRealNum = document.getElementById('inputRealNum');

// INITIAL
var intNums = [];
var realNums = [];
var nums = [];

function dataHandler() {
  var sumPosBtn = document.getElementById('sumPosInt');
  var countIntBtn = document.getElementById('countInt');
  var smallestBtn = document.getElementById('smallestInt');
  var smallestPosBtn = document.getElementById('smallestPosInt');
  var lastEvenBtn = document.getElementById('lastEvenInt');
  var firstPrimeBtn = document.getElementById('firstPrimeInt');
  var swapBtn = document.getElementById('swapInt');
  var sortBtn = document.getElementById('sortInt');
  var compareBtn = document.getElementById('compareInt');

  var howManyRealBtn = document.getElementById('howManyRealInt');

  if (inputIntNum.value === '') return;
  intNums.push(+inputIntNum.value);

  inputDataView.querySelector(
    '.intNum'
  ).innerHTML = `<span style="color:red"> 👉 Mảng số nguyên đã nhập: </span> <span style="color:blue"> [${intNums.join(', ')}] </span>`;

  sumPosBtn.addEventListener('click', sumPosNums);
  countIntBtn.addEventListener('click', countPosIntNums);
  smallestBtn.addEventListener('click', smallestNum);
  smallestPosBtn.addEventListener('click', smallestPosNum);
  lastEvenBtn.addEventListener('click', lastEvenNum);
  firstPrimeBtn.addEventListener('click', firstPrimeNum);
  swapBtn.addEventListener('click', swapTwoNums);
  sortBtn.addEventListener('click', sortAscendant);
  compareBtn.addEventListener('click', comparePosNe);

  howManyRealBtn.addEventListener('click', howManyRealNums);

  clearIntInput();
};

function clearIntInput() {
  inputIntNum.value = '';
  inputIntNum.focus();
};

// 1. Tổng số dương
function sumPosNums() {
  var sumNums = 0;
  for (var i = 0; i < intNums.length; i++) {
    if (intNums[i] >= 0) {
      sumNums += intNums[i];
    }
  }
  exportDataView.innerHTML += `<p>Tổng các số nguyên dương: ${sumNums}</p>`;
};

// 2. Đếm số dương
function countPosIntNums() {
  var count = 0;
  for (var i = 0; i < intNums.length; i++) {
    if (intNums[i] >= 0) {
      count++;
    }
  }
  exportDataView.insertAdjacentHTML(
    'beforeend',
    `<p>Số dương có trong mảng là: ${count} </p>`
  );
};

// 3. Số nhỏ nhất
function smallestNum() {
  var smallest = intNums[0];
  for (var i = 1; i < intNums.length; i++) {
    if (intNums[i] < smallest) smallest = intNums[i];
  }
  exportDataView.innerHTML += `<p> Số nhỏ nhất trong mảng là: ${smallest}</p>`;
};

// 4. Số dương nhỏ nhất
function smallestPosNum() {
  var posNums = intNums.filter(num => num >= 0);
  var smallest = posNums[0];
  for (var i = 1; i < posNums.length; i++) {
    if (posNums[i] < smallest) smallest = posNums[i];
  }

  if (posNums.length === 0) {
    exportDataView.innerHTML = 'Mảng không có số dương';
  } else {
    exportDataView.innerHTML += `<p> Số dương nhỏ nhất trong mảng là: ${smallest}</p>`;
  }
};

// 5. Số chẵn cuối cùng
function lastEvenNum() {
  var evenNums = intNums.filter(num => num % 2 === 0);
  if (evenNums.length === 0) {
    exportDataView.innerHTML += `<p>Không có số chẵn</p>`;
    return -1;
  } else {
    exportDataView.innerHTML += `<p> Số chẵn cuối cùng trong mảng là: ${
      evenNums[evenNums.length - 1]
    }</p>`;
  }
};

// 6. Sắp xếp tăng dần
function sortAscendant() {
  function compareAs(a, b) {
    return a - b;
  };

  intNums.sort(compareAs);
  exportDataView.innerHTML += `<p>Mảng đã sắp xếp: [${intNums.join(', ')}]</p>`;
};

// 7. Số nguyên tố đầu tiên
function firstPrimeNum() {
  function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  for (var i = 0; i < intNums.length; i++) {
    var isPrime = checkPrime(intNums[i]);
    if (isPrime) {
      exportDataView.innerHTML += `<p>Số nguyên tố đầu tiên trong mảng: ${intNums[i]}</p>`;
      break;
    }
  }
};

// 8. So sánh số dương và số âm
function comparePosNe() {
  var posNums = [];
  var neNums = [];

  for (var i = 0; i < intNums.length; i++) {
    if (intNums[i] >= 0) {
      posNums.push(intNums[i]);
    } else {
      neNums.push(intNums[i]);
    }
  }

  console.log(posNums, neNums);

  if (posNums.length < neNums.length) {
    exportDataView.innerHTML += `<p>Dương < âm</p>`;
  } else if (posNums.length > neNums.length) {
    exportDataView.innerHTML += `<p>Dương > âm</p>`;
  } else {
    exportDataView.innerHTML += `<p>Dương = âm</p>`;
  }
};

// 9. Đếm số nguyên
function howManyRealNums() {
  var count = 0;
  var newIntNums = intNums.filter(num => Number.isInteger(num));

  if (newIntNums.length === 0) {
    exportDataView.innerHTML += `<p>Không tìm thấy mảng số nguyên</p>`;
  } else {
    for (var i = 0; i < intNums.length; i++) {
        count++;
      } 
  }
  exportDataView.innerHTML += `<p>Số nguyên có trong mảng là: ${count}</p>`;
};

// 10. Đổi chỗ
function swapTwoNums() {
  // DOM DATA
  var posi1 = +document.querySelector('.posi1').value;
  var posi2 = +document.querySelector('.posi2').value;

  // guard clause
  if (posi1 === 0 || posi2 === 0) return;

  // swap
  var swappedNums = intNums.slice();

  var swapA = swappedNums[posi1 - 1];
  var swapB = swappedNums[posi2 - 1];
  swappedNums[posi1 - 1] = swapB;
  swappedNums[posi2 - 1] = swapA;

  //render
  exportDataView.innerHTML += `<p>Mảng đã hoán đổi vị trí: [${swappedNums.join(
    ', '
  )}]</p>`;

  document.querySelector('.posi1').value = '';
  document.querySelector('.posi2').value = '';
};



// //////
inputIntBtn.addEventListener('click', dataHandler);

// test case
const sammpel = [22, 22, 33, 13, -4, -5, -6, -5];
const sample = [7654, 3, 125, 7];

const realnumsss = [1.2, 42, 5, 5.234, -123, -12.2, 94.5];