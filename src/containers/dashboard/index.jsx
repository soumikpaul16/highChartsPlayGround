import React from 'react'
import logo from '../../assets/images/logo.svg'
import { GenericCard } from '../../components/cards'
import MapPanel from './mapPanel'
import BarPanel from './barPanel'

const Dashboard = () => (
	<>
		<img src={logo} className="App-logo" alt="logo" style={{ width: '10%' }} />
		<div className="container">
			<div className="row p-3">
				<BarPanel/>
				<div className="col-lg-6">
					<GenericCard className={'h-100'} title={'column Chart'} body={<>soumik</>} />
				</div>
			</div>
			<div className="row p-3">
				<MapPanel />
				<div className="col-lg-6">
					<div className="row p-3">
						<div className="col-lg">
							<GenericCard className={'h-100'} title={'Pie Chart'} body={<>soumik</>} />
						</div>
						<div className="col-lg">
							<GenericCard className={'h-100'} title={'Dynamic Chart'} body={<>soumik</>} />
						</div>
					</div>
					<div className="row p-3">
						<div className="col-lg">
							<GenericCard className={'h-100'} title={'Pie Chart'} body={<>soumik</>} />
						</div>
						<div className="col-lg">
							<GenericCard className={'h-100'} title={'Dynamic Chart'} body={<>soumik</>} />
						</div>
					</div>
				</div>
			</div>
			<div className="row p-3">
				<div className="col-lg">
					<GenericCard className={'h-100'} title={'Donut and Bar Chart Combo'} body={<>soumik</>} />
				</div>
			</div>
		</div>
	</>
)

export default Dashboard
