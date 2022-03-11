class BaseClass {

  constructor(name) {
    super()   // this will not work! super needs a parent class!
    this.name = name
  }
}

const instance = new BaseClass("hallo")