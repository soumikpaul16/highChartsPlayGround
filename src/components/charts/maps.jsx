import * as merge from 'deepmerge'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'
import React from 'react'
import { MapOption } from './optionsConfig'
import HighchartsMap from 'highcharts/modules/map'

HighchartsMap(Highcharts)

const Maps = ({ options, data, title, minColor, maxColor }) => {
	const chartOptions = options ? merge(MapOption({}), options) : MapOption({ data, title, minColor, maxColor })

	return (
		<div>
			<HighchartsReact options={chartOptions} highcharts={Highcharts} constructorType={'mapChart'} />
		</div>
	)
}

Maps.propTypes = {
	options: PropTypes.object,
	data: PropTypes.array,
	title: PropTypes.string,
	minColor: PropTypes.string,
	maxColor: PropTypes.string
}
Maps.defaultProps = {
	options: null,
	data: null,
	title: '',
	minColor: '',
	maxColor: ''
}
export default Maps
