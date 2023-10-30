import React, { useEffect } from 'react'
import requestAPI from './requests'
import loading from './loading.svg'

function Main() {

    const urlCode = window.location.href.split('/').pop()
    const urlParams = new URLSearchParams(window.location.search)

    useEffect(() => {

        if (urlParams.get('i') !== null) {
            const isPrivate = requestAPI.getPassesData(urlCode)

            isPrivate.then((data) => {
                if (data.isPrivate === true) {
                    window.location.replace(`http://discord.gg/54G95nUytY`)
                } else {
                    window.location.replace(`http://discord.gg/blinkplanet`)
                }

            }).catch((err) => {
                console.log(err)
            })
        } else {
            const isPrivate = requestAPI.getPassesData(urlCode)

            isPrivate.then((data) => {

                window.location.replace(`https://blink-planet.vercel.app/redirect?code=${urlCode}&private=${data.isPrivate}`)
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