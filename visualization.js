const chartLibrary = require('some-chart-library@1.3.0');

function renderChart(data) {
    const chart = chartLibrary.createChart();
    chart.setData(data);
    chart.render();
}

module.exports = { renderChart };