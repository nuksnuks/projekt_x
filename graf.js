google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Tjeneste', 'Mhl'],
  ['Google Workspace',54.8],
  ['Slack',48.6],
  ['Asana',44.4],
  ['Code Climate',23.9],
  ['browser Stack',14.5]
]);

var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data);
}
