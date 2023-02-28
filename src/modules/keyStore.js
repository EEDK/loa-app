import { observable } from 'mobx';

const keyStore = observable({
  // state
  apiKey: '',

  // action
  setAPIKEY(string) {
    this.apiKey = string;

    console.log(this.apiKey);
  },
});

export default keyStore;
