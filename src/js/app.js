/* eslint-disable no-useless-escape */
export default class Validator {
  validateUsername(name) {
    // const exeptThreeNumbersInRow = /\w+([0-9])([0-9])([0-9])\w+/;
    const exeptThreeNumbersInRow = /\w+(\d{3,})\w+/;
    const dashAccept = /\w+-+\w+/;
    const underlineAccept = /\w+_+\w+/;
    const numbersAccept = /\w+[0-9]+\w+/;
    const latinLettersAccept = /^[a-z]+$/i;
    const exeptStartNumbersDashUnderline = /^[0-9\_\-]/;
    const exeptEndNumbersDashUnderline = /[0-9\_\-]$/;

    // if (name.search(/^[a-z0-9\_\-]+$/i) === -1) {
    if (name.search(latinLettersAccept && numbersAccept && dashAccept && underlineAccept) === -1) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }

    if (name.search(exeptThreeNumbersInRow) === 0) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }

    if (name.match(exeptStartNumbersDashUnderline) !== null) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }

    if (name.match(exeptEndNumbersDashUnderline) !== null) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }

    this.name = name;
    return this.name;
  }
}
