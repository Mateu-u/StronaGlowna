const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const resultOutput = document.getElementById('result');
const button = document.getElementById('button');
const clearButton = document.getElementById('clear');
const array = [];
const listaM = [];
const listaD = [];


button.addEventListener('click', ()=> {
  resultOutput.value = correct();
  array.length = 0;
})

function correct() {
  if (yearInput.value > 2079 || yearInput.value < 1901) {
    return resultOutput.value = "Niepoprawna wartość";
    
  } else {
    let x = yearInput.value.slice(2,4);
    array.push(x);
  }

  if (monthInput.value > 12 || monthInput.value < 1) {
      return resultOutput.value = "Niepoprawna wartość";
  } else if (yearInput.value > 2000) {
    let z = Number(monthInput.value) + 20;
    array.push(z);
  } else {
      let b = 0 + monthInput.value;
      for(let i = 0; i < b.length; i++) {
      listaM.push(b[i]);
      }
      let lasttwo = listaM.slice(-2);
      array.push(lasttwo.join(''));
  }

  if (dayInput.value > 31 || dayInput.value < 1) {
    return resultOutput.value = "Niepoprawna wartość";
  } else {
    let a = 0 + dayInput.value;
    for(let i = 0; i < a.length; i++) {
      listaD.push(a[i]);
    }
    let lasttwoo = listaD.slice(-2);
    array.push(lasttwoo.join(''));
  }


  array.push(PPP());

  if (manButton.checked == false && womanButton.checked == false) {
    return resultOutput.value = "Wybierz płeć";
  } else {
    if (manButton.checked == true) {
      let g = parzyste();
      array.push(g + 1);
    } else {
      let g = parzyste();
      array.push(g);
    }
    
  }

  array.push("K");
  
  return array.join('');
}

// PŁEĆ ----------------------------------------------------------------
const manButton = document.getElementById('man');
const womanButton = document.getElementById('woman');

manButton.addEventListener('click', ()=> {
  if (manButton.checked == true) {
    womanButton.checked = false;
  }
})

womanButton.addEventListener('click', ()=> {
  if (womanButton.checked == true) {
    manButton.checked = false;
  }
})

//Cyfry określające płeć ----------------------------------------------

function parzyste() {
  let choose = Math.floor(Math.random() * 10);
  if (choose % 2 == 0) {
    return choose
  } else {
    return choose - 1;
  }
}

function PPP() {
  return Math.floor(Math.random() * (999 - 100 + 1) ) + 100;
}

//Wyczyść ---------------------------------------------------------

clearButton.addEventListener('click', () => {
  dayInput.value = '';
  monthInput.value = '';
  yearInput.value = '';
  resultOutput.value = '';
  manButton.checked = false;
  womanButton.checked = false;
})
