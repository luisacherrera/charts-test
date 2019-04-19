import View from '../src/view/view';
import Model from '../src/model/model';

describe('View', function() {

  it('thousandMark: should seperate numbers after thousands', function() {
    const data = {
      devices: [
        { amount: 20000000 }
      ]
    }
    const view = new View(data);
    expect(view.thousandMark(data.devices[0].amount)).toEqual('20.000.000');
  });
});