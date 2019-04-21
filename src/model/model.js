class Model {

  constructor(entry, index) {
    this.id = index;
    this.title = entry.title;
    this.devices = entry.devices;
    this.unit = entry.unit;
  }
  
  calculateTotal() {
    return this.devices.reduce((sum, device) => sum + device.amount, 0);
  }
  
  calculatePercentage(index) {
    return this.devices[index].amount / this.calculateTotal() * 100;
  }

  getTabletColor() {
    return this.devices.find(device => device.type === 'Tablet').color;
  }
  
}

export default Model;