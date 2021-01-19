import React, {useState, useEffect} from 'react'
import './AnalystProfile.scss'
import AnalystProfileInfo from '../../AnalystProfileInfo/AnalystProfileInfo'
import AnalystProfileTable from "../../AnalystProfileTable/AnalystProfileTable";
import AnalystProfileAwards from "../../AnalystProfileAwards/AnalystProfileAwards";
import AnalystProfileChart from "../../AnalystProfileChart/AnalystProfileChart";

function AnalystProfile(props) {

    const [analyst, setAnalyst] = useState({})

      function doFetch() {
        fetch(`/api/analysts/${props.match.params.analystId}/`)
            .then(response => response.json())
            .then(data => setAnalyst(data.results[0].fields))
    }


    console.log('analystId:'+ props.match.params.analystId)
    //useEffect(doFetch, [])


    return (
        <div className='AnalystProfile'>

            <AnalystProfileInfo
                analyst={analyst}
            />
            <AnalystProfileAwards/>
            <AnalystProfileChart/>
            <AnalystProfileTable/>


        </div>
    )
}

export default AnalystProfile