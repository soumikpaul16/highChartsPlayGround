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
	['us-va', 0],
	['us-ia', 0],
	['us-md', 0],
	['us-de', 0],
	['us-pa', 0],
	['us-nj', 0],
	['us-ny', 0],
	['us-id', 0],
	['us-sd', 0],
	['us-ct', 0],
	['us-nh', 0],
	['us-ky', 0],
	['us-oh', 0],
	['us-tn', 0],
	['us-wv', 0],
	['us-dc', 0],
	['us-la', 0],
	['us-fl', 0],
	['us-ga', 0],
	['us-sc', 0],
	['us-mn', 0],
	['us-mt', 0],
	['us-nd', 0],
	['us-az', 0],
	['us-ut', 0],
	['us-hi', 0],
	['us-ak', 0],
	['undefined', 0]
]

const mapOptions = ({ data , title , minColor, maxColor }) => ({
	title: {
		text: title || null
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
