import React, { useEffect, useState } from 'react'

var count = 0;
const Player2 = (props) => {
    const [present, setPresent] = useState(false);

    useEffect(() => {
       const myinterval =  setInterval(() => {
            if(VIDGYOR) {
                clearInterval(myinterval)
                setPresent(true)
            }
        }, 500)
    }, [])

    function initPlayer() {
        count++;
        if(count === 1 && props.isActive) {
            console.log('inside if', count)
            return (
                <>
                    {
                        VIDGYOR.initPlayer({
                            "accountId": "vprism", // do not change this
                            "profile": "62bd56e4517f060009f59961/abded892e2461_vod", // do not change this
                            "playerDivId": "vidgyorPlayer2", // do not change this
                            "streamUrl": "https://media.nw18.com/9d3611d8-b834-436a-b934-11e44e68f0b9/f1209ab8-01a6-4079-b2d7-806530ca.ism/manifest(format=m3u8-aapl)",
                            "posterImageUrl": "https://static.vidgyor.com/live/news18_india.png",
                            "adTag": "",
                            "isAutoPlay": true, // values accepted as "true" or "false"  as boolean. (no quotes required)
                            "isMute": false, // values accepted as "true" or "false"  as boolean. (no quotes required)
                            "tapToUnmute": "", // values accepted as "true" or "false"  as boolean. (no quotes required)
                            "disableAds": true, // values accepted as "true" or "false"  as boolean. (no quotes required)
                            "pip": 0, // values accepted as 0 or 1 (no quotes required)
                            "piv": 0,
                            "mediaType": "m3u8", // pass mp4 here if the source is mp4, default is m3u8
                            "controls": true, // values accepted as "true" or "false"  as boolean. (no quotes required)
                            "token": "?hdnts=exp=1692764402~acl=/*~hmac=e7cabc8fdc05b8aa54ff9b23e9222bb1f23f818d9f94f1e3ff9a7f25b8f72069"

                        })
                    }
                </>
            )
        } else {
            return null
        }
    }

    return (
        <>

                <div id="vidgyorPlayer2" style={{width:"640px", height:"360px"}} className="vgrPlayerContainer">
                    <div id="closeButtonContainer">
                    </div>
                </div>

                {
                    setTimeout(() => {
                        initPlayer()
                    }, 1000)
                }
        </>
    )
}

export default Player2;