import { observable } from 'mobx';

const valueStore = observable({
  // state
  discountValue: 0.0,

  // action
  setDiscount(float) {
    this.discountValue = float;
  },
});

export default valueStore;
