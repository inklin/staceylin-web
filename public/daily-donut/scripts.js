// Load the visualization API and the piechart package
  google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google visualization API is loaded
  google.setOnLoadCallback(drawChart);

  // Call back that creates and populates a data table, instantiates a pie
  // chart, passes in the data, and draws the chart
  function drawChart(){

    // Create a data table 
    var data = new google.visualization.DataTable();

    // Create two columns in the table
    data.addColumn('string', 'Activity');
    data.addColumn('number', 'Hours');

    // Populate the data table 
    data.addRows([
      ["Sleeping", 8],
      ["Eating", 2],
      ["Thinking about eating", 5],
      ["Petting other people's dogs and cats", 2],
      ["Beep beep boop", 4],
      ["Other", 3],
    ]);

    // Set chart options 
    var options = {'title':'A Day in the life of Stacey',
                    'width': 600,
                    'height': 500,
                    'chartArea': {'width': '90%', 'height': '70%'},
                    'legend': {position: 'left', textStyle:{color: '#FFFFFF', fontSize: 13}},
                    'backgroundColor':'#000000',
                    'pieHole': 0.3,
                    'titleTextStyle':{ color: "#FFFFFF", fontName: "Arial", fontSize: 23, bold: true, italic: false}};

    // Draw the chart and pass in parameters 
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

