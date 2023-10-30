import React, { useEffect } from 'react'
import requestAPI from './requests'
import loading from './loading.svg'

function Main() {

    const urlCode = window.location.href.split('/').pop()

    useEffect(() => {

        var letNewTab = window.open()

        if (urlCode.length > 0) {
            const isPrivate = requestAPI.getPassesData(urlCode)

            isPrivate.then((data) => {

                window.open(`https://blink-planet.vercel.app/code=${urlCode}`, '_blank', 'noreferrer');

                if (data.isPrivate === true) {
                    window.location.replace(`http://discord.gg/54G95nUytY`)
                } else {
                    window.location.replace(`http://discord.gg/blinkplanet`)
                }

            }).catch((err) => {
                console.log(err)
            })
        }

    }, [])


    return (
        <div class='custom-overlay'>
            <div class='custom-loader'>
                <img class='custom-icon' src={loading} alt="Loading" />
            </div>
        </div>
    )
}

export default Main