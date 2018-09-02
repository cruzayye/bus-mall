var newChart = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "stats"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "doughnut",
			dataPoints: imgs
		}
		]
	});
	chart.render();
};
