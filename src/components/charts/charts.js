import React from 'react'
import PropTypes from 'prop-types'
import * as merge from 'deepmerge'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ChartOption } from './optionsCreator'

const Charts = props => {
    const chartOptions = props.options ? merge(ChartOption({}), props.options) : ChartOption(props)
    console.log(props.yAxisTitle)
	return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
}

Charts.propTypes = {
	options: PropTypes.object
}

export default Charts
