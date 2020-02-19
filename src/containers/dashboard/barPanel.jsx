import React from 'react'
import { GenericCard } from '../../components/cards'
import { Charts } from '../../components/charts'

const series = [
	{
		name: 'This List',
		data: [75, 25],
		color: '#17a1e6'
	},
	{
		name: 'US National Average',
		data: [68, 32],
		color: '#b8c5cc'
	}
]

const barPanel = () => (
	<div className="col-lg-6">
		<GenericCard
			title={'Bar Chart'}
			body={
				<div className="p-3">
					<div>
						<Charts type="bar" chartHeight={240} series={series} yAxisTitle="Percent" xAxisCategories={['Homeowners', 'Renters']} />
					</div>
				</div>
			}
		/>
	</div>
)

export default barPanel
