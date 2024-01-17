const newArray = (newArr, regexpArr) =>
  newArr.filter(item => item.match(regexpArr) !== null);

console.log('Модуль 3 урок 9, задание 1-1:');
const arr = [
  'module.jsx',
  'index.html',
  'style.css',
  'index.js',
  'file.ts',
  'library.css',
  'my.plugin.js',
];

const regexpArr = /.js(x)?$|.ts$/;

console.log('Исходный массив: \n', arr);
console.log('Новый массив: \n', newArray(arr, regexpArr));

console.log(`\n`);

console.log('Модуль 3 урок 9, задание 1-2:');

const emailes = [
  'info@methed.ru',
  'max24@mail.com',
  'java_script@google.io',
  'my-mail@yandex.ru',
  'tom_yam@ya.ru',
  'zero@mai1.xyz',
];

const regexpEmail = /^\w+@[A-Z]{3,}.[A-Z]{2,5}$/i;

console.log('Исходный массив email: \n', emailes);
console.log('Валидные email: \n', newArray(emailes, regexpEmail));

console.log(`\n`);

console.log('Модуль 3 урок 9, задание 1-3:');

const text = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

const regexpText = /\([^)]+\)/g;
const textInParentheses = text.match(regexpText);

console.log('Исходный текст: \n', text);
console.log('Текст в скобках: ', textInParentheses);

console.log(`\n`);

console.log('Модуль 3 урок 9, задание 1-4:');

const replaceUrls = (str) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urlShortRegex = /(https?:\/\/)/;

  const replacedString = str.replace(urlRegex, url => {
    const urlShort = url.replace(urlShortRegex, '');
    return `<a href="${url.replace(/\.$/, '')}">${urlShort.replace(/\.$/, '')}</a>`;
  });

  return replacedString;
}

var inputString = 'Это пример URL: http://site.ru и еще один https://site.com. А здесь нет URL.';
var result = replaceUrls(inputString);
console.log('Исходная строка с URL: \n', inputString);
console.log('Новая строка с URL: \n', result);