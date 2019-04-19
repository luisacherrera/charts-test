import Model from '../src/model/model';

describe('Model', function() {
    
  it('getTabletColor: should get the color of the tablet', function() {
    const data = {
      devices: [
        { type: 'Tablet', 
          color: '#FFFFFF' }
      ]
    }
    const model = new Model(data);
    expect(model.getTabletColor()).toEqual('#FFFFFF');
  });

  it('calculateTotal: should return the total sum of all amounts', function() {
    const data = {
      devices: [
        { amount: 120 },
        { amount: 80 }
      ]
    }
    const model = new Model(data);
    expect(model.calculateTotal()).toEqual(200);
  });

  it('calculatePercentage: should calculate the percentages', function() {
    const data = {
      devices: [
        { amount: 120 },
        { amount: 80 }
      ]
    }
    const index = 1;
    const model = new Model(data);
    expect(model.calculatePercentage(index)).toEqual(40);
  });
});