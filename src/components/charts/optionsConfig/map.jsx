import MapDataJson from '../../../data/us-map-data'

const defaultdata = [
	['us-ma', 0],
	['us-wa', 0],
	['us-ca', 0],
	['us-or', 0],
	['us-wi', 0],
	['us-me', 0],
	['us-mi', 0],
	['us-nv', 0],
	['us-nm', 0],
	['us-co', 0],
	['us-wy', 0],
	['us-ks', 0],
	['us-ne', 0],
	['us-ok', 0],
	['us-mo', 0],
	['us-il', 0],
	['us-in', 0],
	['us-vt', 0],
	['us-ar', 0],
	['us-tx', 0],
	['us-ri', 0],
	['us-al', 0],
	['us-ms', 0],
	['us-nc', 0],
	['us-va', 100],
	['us-ia', 100],
	['us-md', 100],
	['us-de', 100],
	['us-pa', 100],
	['us-nj', 100],
	['us-ny', 100],
	['us-id', 100],
	['us-sd', 100],
	['us-ct', 100],
	['us-nh', 24],
	['us-ky', 24],
	['us-oh', 24],
	['us-tn', 24],
	['us-wv', 24],
	['us-dc', 24],
	['us-la', 24],
	['us-fl', 24],
	['us-ga', 24],
	['us-sc', 56],
	['us-mn', 56],
	['us-mt', 56],
	['us-nd', 56],
	['us-az', 56],
	['us-ut', 56],
	['us-hi', 56],
	['us-ak', 56],
	['undefined', 0]
]

const mapOptions = ({ data = null, title = null, minColor, maxColor }) => ({
	title: {
		text: title
	},
	chart: {
		style: {
			fontFamily: 'Roboto, Arial, sans-serif'
		},
		map: MapDataJson
	},
	colorAxis: {
		min: 0,
		minColor: minColor || '#ebf9f7',
		max: 100,
		maxColor: maxColor || '#24b39b'
	},
	series: [
		{
			data: data || defaultdata
		}
	],
	credits: {
		enabled: false
	}
})

export default mapOptions
