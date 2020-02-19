import * as merge from 'deepmerge'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'
import React from 'react'
import { MapOption } from './optionsCreator'
import HighchartsMap from 'highcharts/modules/map'

HighchartsMap(Highcharts)

const Maps = (props) => {
	const chartOptions = props.options ? merge(MapOption({}), props.options) : MapOption(props)

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
