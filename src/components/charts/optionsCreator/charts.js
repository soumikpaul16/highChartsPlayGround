const chartOptions = ({ type, chartHeight, title, xAxisTitle, xAxisCategories, series, plotOptions, legend, tooltip }) => ({
	chart: {
		height: chartHeight || 120,
		type: type,
		marginTop: 0,
		marginBottom: 0,
		style: {
			fontFamily: 'Roboto, Arial, sans-serif'
		}
	},
	title: {
		text: title || null
	},
	xAxis: {
		categories: xAxisCategories || [],
		labels: {
			enabled: xAxisCategories ? true : false
		},
	},
	yAxis: {
		title: {
			text: 'percent'
		}
	},
	plotOptions:
		type === 'pie'
			? plotOptions
				? plotOptions
				: {
						pie: {
							innerSize: '60%',
							dataLabels: {
								enabled: false
							},
							showInLegend: true,
							shadow: false
						}
				  }
			: {},
	series: series || [],
	legend: legend || {},
	tooltip: tooltip || {},
	credits: {
		enabled: false
	}
})

export default chartOptions
