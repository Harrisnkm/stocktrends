import React from 'react'
import './AnalystProfileInfo.scss'
import {UnorderedList, ListItem, Link, Tile} from 'carbon-components-react'

function AnalystProfileInfo(){

    return (
        <div className='AnalystProfileInfo'>

            <Tile className='AnalystProfileInfo-Meta'>
                    <img className='AnalystProfileInfo-MetaAvatar' src="https://unsplash.com/photos/gpp9Wyw15ck" alt="Avatar" width='40%' height='10%'/>

                <div className='AnalystProfileInfo-MetaData'>
                    <label>ANALYST NAME</label>
                    <label>#ServerName</label>
                </div>
            </Tile>

            <div className='AnalystProfileInfo-Links'>
                <UnorderedList>
                    <ListItem>
                         <Link href='#'>Discord</Link>
                    </ListItem>
                    <ListItem>
                         <Link href='#'>Twitter</Link>
                    </ListItem>
                </UnorderedList>

            </div>
        </div>

    )
}

export default AnalystProfileInfo