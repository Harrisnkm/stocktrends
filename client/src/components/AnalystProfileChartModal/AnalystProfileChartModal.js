import React, {useState} from 'react'
import './AnalystProfileChartModal.scss'
import {Modal} from "carbon-components-react";

function AnalystProfileChartModal(props) {




    return (
        <Modal
          size='lg'
          open={props.stockModal}
          onRequestClose={() => props.setStockModal(false)}
		  modalLabel='Company Profile'
		  modalHeading={`${props.stockInfo.longName} (${props.stockInfo.symbol})`}
          passiveModal={true}>

            <h2>{props.stockInfo.longName}</h2>


            <div className='AnalystProfileChartModal-Bio'>
                <p>{props.stockInfo.longBusinessSummary}</p>

            </div>


            <div className='AnalystProfileChartModal-address'>
                <label></label>


            </div>




        </Modal>
    )
}

export default AnalystProfileChartModal