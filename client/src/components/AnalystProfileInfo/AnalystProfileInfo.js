import React, {useState, useEffect} from 'react'
import './AnalystProfileInfo.scss'
import {connect} from "react-redux";
import {UnorderedList, ListItem, Link, Tile} from 'carbon-components-react'
import {actions} from '../../reducers/analysts'

function AnalystProfileInfo(props){


    return (
        <div className='AnalystProfileInfo'>

            <Tile className='AnalystProfileInfo-Meta'>
                    <img className='AnalystProfileInfo-MetaAvatar' src="https://unsplash.com/photos/gpp9Wyw15ck" alt="Avatar" width='40%' height='10%'/>

                <div className='AnalystProfileInfo-MetaData'>
                    <label>{props.analyst.discord_account}</label>
                    <label>{props.analyst.discord_server}</label>

                </div>
            </Tile>

            <div className='AnalystProfileInfo-Links'>
                <UnorderedList>
                    <ListItem>
                         <Link href={props.analyst.discord_channel} target="_blank">Discord</Link>
                    </ListItem>
                    <ListItem>
                         <Link href='#'>Twitter</Link>
                    </ListItem>
                </UnorderedList>

            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    analysts: state.analysts,
});

export default connect (mapStateToProps)(AnalystProfileInfo)