import DonutChart from './donut-chart';
import LineChart from './line-chart';

class View {

  constructor(data) {
    this.data = data;
  }

  render() {
    const html = this.createHMTL(this.createHTMLFromData(this.data));
    document.getElementById('container').appendChild(html);

    this.chart = DonutChart(this.data.devices.map(d => ({
      type: d.type,
      value: d.amount,
      color: d.color
    })), this.data.id);

    this.LineChart = LineChart(this.data.getTabletColor(), this.data.id);
  }

  thousandMark(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  createHMTL(html) {
    const div = document.createElement('div');
    div.classList.add('wrapper');
    div.innerHTML = html;
    return div;
  }

  createHTMLFromData(data) {
    return `<div class="donut_chart" id="donut-${data.id}">
        <canvas class="canvas" id="canvas-${data.id}"></canvas>
      </div>
      <div class="info">
        <h2 class="info__title">${data.title}</h2>
        <p class="info__sum">${this.thousandMark(data.calculateTotal()) + data.unit}</p>
      </div>
      <div class="data">
      ${data.devices.map((element, index) => 
        `<div class="data__device">
          <div class="data__device_type" style="color:${element.color}">${element.type}</div>
          <div class="data__device_values">
            <span class="data__device_percentage">${data.calculatePercentage(index) + '%'}</span> 
            <span class="data__device_total">${this.thousandMark(element.amount) + data.unit}</span>
          </div>        
          </div>`
        ).join('')} 
      </div>`;
  }

}

export default View;