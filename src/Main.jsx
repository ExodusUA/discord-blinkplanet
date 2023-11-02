import React, { useEffect } from 'react'
import requestAPI from './requests'
import loading from './loading.svg'

function Main() {

    const urlCode = window.location.href.split('/').pop()

    useEffect(() => {

        if (urlCode.length > 0) {
            const isPrivate = requestAPI.getPassesData(urlCode)

            isPrivate.then((data) => {
                window.location.replace(`https://blink-planet.vercel.app/redirect?code=${urlCode}&private=${data.isPrivate}`)
            }).catch((err) => {
                window.location.replace(`https://blink-planet.vercel.app/redirect?code=${urlCode}&private=false`)
            })
        } else {
            window.location.replace(`https://blink-planet.vercel.app/redirect?code=${urlCode}&private=false`)
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