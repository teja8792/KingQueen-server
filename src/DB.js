module.exports = class DB {
  constructor() {
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }
  set(key, value) {
    this.data[key] = value;
  }
  remove(key) {
    delete this.data[key];
  }
  reset() {
    this.data = {};
  }
};
