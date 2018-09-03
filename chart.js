var newChart = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "stats"
		},
		axisX:{        
			interval: 1
		  },
		// axisY{
		// 	interval: 1;

		// },
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: imgs
		}
		]
	});
	chart.render();
};
