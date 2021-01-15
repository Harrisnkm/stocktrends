import React from 'react'
import AnalystProfileInfo from '../../AnalystProfileInfo/AnalystProfileInfo'
import AnalystProfileTable from "../../AnalystProfileTable/AnalystProfileTable";
import AnalystProfileAwards from "../../AnalystProfileAwards/AnalystProfileAwards";

function AnalystProfile() {

    return (
        <div className='AnalystProfile'>
            <p> Analyst Page</p>
            <AnalystProfileInfo/>
            <AnalystProfileTable/>
            <AnalystProfileAwards/>


        </div>
    )
}

export default AnalystProfile