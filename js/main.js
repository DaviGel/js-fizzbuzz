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
  'dimensions'
);

for (let i = 1; i <= 100; i++) {
  const elementLi = document.createElement('li');
  elementLi.classList.add('element-align');
  let value = i;
  if (i % 3 === 0 && i % 5 === 0) {
    value = 'fizzbuzz';
    elementLi.classList.add('bg-fizzbuzz');
  } else if (i % 5 === 0) {
    value = 'buzz';
    elementLi.classList.add('bg-buzz');
  } else if (i % 3 === 0) {
    value = 'fizz';
    elementLi.classList.add('bg-fizz');
  } else {
    elementLi.classList.add('bg-element');
  }
  console.log(value);
  elementLi.append(value);
  elementUl.append(elementLi);
}
