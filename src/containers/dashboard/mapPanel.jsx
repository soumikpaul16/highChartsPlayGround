import React from 'react'
import { GenericCard } from '../../components/cards'
import { Maps } from '../../components/charts'
import mapData from '../../fakeData/map-data'

const mapPanel = () => (
	<div className="col-lg-6">
		<GenericCard
			className={'h-100'}
			title={'Maps'}
			body={
				<>
					<Maps data={mapData.data} />
				</>
			}
		/>
	</div>
)

export default mapPanel
