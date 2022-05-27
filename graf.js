google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  numbers = localStorage.getItem("tlongp");

  if(numbers !== null) {
      numbers = numbers.split(",");

      sum(numbers)
  }
  else{
      localStorage.setItem("tlongp", "1768,700")
      let numbers = localStorage.getItem("tlongp").split(",");

      sum(numbers)
  }

  function sum(x){
      let sum = 0;
      for (let i = 0; i < x.length ; i++) {
      sum += parseInt(x[i]);
      }

  var data = google.visualization.arrayToDataTable([
      ['Tjeneste', 'forbrug i kr.'],
      ['Total', sum, ],
      ['Slack',48.6],
      ['Asana',44.4],
      ['Code Climate',23.9],
      ['browser Stack',14.5]
  ]);

    var options = {
    'max-width': '100%'
  }

    var chart = new google.visualization.ColumnChart(document.getElementById('myChart'));
    chart.draw(data);
  };
}
