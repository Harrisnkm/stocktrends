import React, {useState, useEffect} from 'react'
import './AnalystProfileChart.scss'
import { SimpleBarChart} from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { DatePicker, DatePickerInput, TextInput, Modal, Loading, ContentSwitcher, Switch} from "carbon-components-react";
import AnalystProfileChartModal from "../AnalystProfileChartModal/AnalystProfileChartModal";
import AnalystProfileChartChart from "../AnalystProfileChartChart/AnalystProfileChartChart";


function AnalystProfileChart(){

	const [loading, setLoading] = useState(false)
	const [stockSymbol, setStockSymbol] = useState('')
	const [stockModal, setStockModal] = useState(false)
	const [stockInfo, setStockInfo] = useState({})



	function onSymbolChange(ev) {
		setStockSymbol(ev.target.value)
	}


	function fetchStockInfo() {
		//check if ticker is filled out

		setLoading(!loading)
		fetch(`/stocks/${stockSymbol}/info/`)
			.then(response => response.json())
			.then(data => {
				console.log(data['results'])
				setLoading(!loading)
			})
			.catch((error) => {console.error('error:', error) })

	}

	function launchInfoModal(){
		setLoading(!loading)
		fetch(`/stocks/${stockSymbol}/info/`)
			.then(response => response.json())
			.then(data => {
				setStockInfo(data['results']['stock_info'])
				setLoading(false)
				setStockModal(true)
			})



	}

	// useEffect(fetchStockInfo, [])




    return(
        <div className='AnalystProfileChart'>

			<AnalystProfileChartChart
				stockSymbol={stockSymbol}
			/>

            <div className='AnalystProfileChart-Form'>
                <h2 className='AnalystProfileChart-FormHeader'>Search Options</h2>

				<div className='AnalystProfileChart-Ticker'>
					<div className='AnalystProfileChart-Ticker-Text'>
						<TextInput
							id="ticker-input"
							invalidText="Not a valid symbol"
							labelText="Symbol"
							placeholder="Ticker Symbol"
							onChange={onSymbolChange}

						  />
					</div>
					<div className='AnalystProfileChart-Ticker-Info'>
						{
							loading == false ? <i onClick={launchInfoModal} className="fas fa-info-circle"></i> : <Loading
      description="Active loading indicator" withOverlay={false}
    small />
						}
					</div>



				</div>

				<DatePicker dateFormat="m/d/Y" datePickerType="range">
                  <DatePickerInput
                    id="date-picker-range-start"
                    placeholder="mm/dd/yyyy"
                    labelText="Start Date"
                    type="text"
                  />
                  <DatePickerInput
                    id="date-picker-range-end"
                    placeholder="mm/dd/yyyy"
                    labelText="End Date"
                    type="text"
                  />
                </DatePicker>
            </div>


		<AnalystProfileChartModal
			stockInfo={stockInfo}
			stockModal={stockModal}
			setStockModal={setStockModal}
			stockSymbol={stockSymbol}
		/>



        </div>

    )
}

export default AnalystProfileChart