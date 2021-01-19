import React, {useState, useEffect} from 'react'
import './AnalystProfileInfo.scss'
import {connect} from "react-redux";
import {Button} from 'carbon-components-react'
import {actions} from '../../reducers/analysts'

function AnalystProfileInfo(props){


    return (
        <div className='AnalystProfileInfo'>

            <div className='AnalystProfileInfo-Meta'>
                <div className='AnalystProfileInfo-MetaAvatar'>
                    <img className='' src="https://unsplash.com/photos/gpp9Wyw15ck" alt="Avatar" width='40%' height='10%'/>
                </div>

                <div className='AnalystProfileInfo-Meta-User'>
                    <label className='AnalystProfileInfo-Meta-User-Account'>[{props.analyst.discord_account}]</label> <br/>
                    <label className='AnalystProfileInfo-Meta-User-Server'>#{props.analyst.discord_server} <i className="fab fa-discord"></i></label>

                </div>
            </div>

            <div className='AnalystProfileInfo-Subscribe'>
                <Button className='AnalystProfileInfo-SubscribeBtn'>Subscribe</Button>

            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    analysts: state.analysts,
});

export default connect (mapStateToProps)(AnalystProfileInfo)