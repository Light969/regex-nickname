export default class Validator {
  validateUsername(name) {
    if (name.search(/^[a-z0-9\_\-]+$/i) === -1) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }

    if (name.search(/\w+([0-9])([0-9])([0-9])\w+/) === 0) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }

    if (name.match(/^[0-9\_\-]/) !== null) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }

    if (name.match(/[0-9\_\-]$/) !== null) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }

    this.name = name;
    return this.name;
  }
}
