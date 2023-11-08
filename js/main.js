'use strict';

const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzbuzz = 'FizzBuzz';

const elementUl = document.getElementById('list');

elementUl.classList.add(
  'display-flex',
  'flex-wrap',
  'gap-20',
  'list-style-none',
  'dimentions'
);

for (let i = 1; i <= 100; i++) {
  const elementLi = document.createElement('li');
  elementLi.classList.add('element-align');
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log(fizz);
    elementLi.append(fizz);
    elementUl.append(elementLi);
    elementLi.classList.add('bg-fizz');
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(buzz);
    elementLi.append(buzz);
    elementUl.append(elementLi);
    elementLi.classList.add('bg-buzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizzbuzz);
    elementLi.append(fizzbuzz);
    elementUl.append(elementLi);
    elementLi.classList.add('bg-fizzbuzz');
  } else {
    console.log(i);
    elementLi.append(i);
    elementUl.append(elementLi);
    elementLi.classList.add('bg-element');
  }
}
