const chartLibrary = require('some-chart-library@1.2.3');

function renderChart(data) {
    const chart = chartLibrary.createChart();
    chart.setData(data);
    chart.render();
}

module.exports = { renderChart };