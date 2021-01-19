import React, {useState, useEffect} from 'react'
import './AnalystProfileAwards.scss'

function AnalystProfileAwards(){

    const [awards, setAwards] = useState([])

    function fetchAwards(){
        //TODO Gets the Awards for the specific
        fetch('/dummyData/data.json')
            .then(response => response.json())
            .then(data => {
                setAwards(data.result)

            })
    }

    useEffect(fetchAwards, [])

    return(
        <div className='AnalystProfileAwards'>

            {
                awards.map((award, index) => (
                    <div className='AnalystProfileAwards-Award' key={index}>
                        <div className='AnalystProfileAwards-AwardRank'>
                            <label className='AnalystProfileAwards-AwardRank-Type'>{award.award_rank_type}</label>
                            <label className='AnalystProfileAwards-AwardRank-Rank'> #{award.award_rank_rank}</label>
                        </div>
                        <div className='AnalystProfileAwards-AwardStats'>
                            <label className='AnalystProfileAwards-AwardStats-Item'>{award.award_stats_item}</label>

                            {
                                award.award_stats_additional !== '' ? <label
                                className='AnalystProfileAwards-AwardStats-AdditionalInfo'>Info</label> : null
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default AnalystProfileAwards
