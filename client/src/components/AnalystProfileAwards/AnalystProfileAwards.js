import React from 'react'
import './AnalystProfileAwards.scss'

function AnalystProfileAwards(){

    return(
        <div className='AnalystProfileAwards'>
            <div className='AnalystProfileAwards-Award'>
                <div className='AnalystProfileAwards-AwardRank'>
                    <label> Subscriber</label>
                    <label> Rank #20</label>
                </div>
                <div className='AnalystProfileAwards-AwardStat'></div>
            </div>

            <div className='AnalystProfileAwards-Award'>2</div>

            <div className='AnalystProfileAwards-Award'>3</div>
        </div>
    )
}

export default AnalystProfileAwards
