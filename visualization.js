const chartLibrary = require('some-chart-library');

function renderChart(data) {
    const chart = chartLibrary.createChart();
    chart.setData(data);
    chart.render();
}

module.exports = { renderChart };