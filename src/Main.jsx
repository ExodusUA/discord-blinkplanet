import React, { useEffect } from 'react'
import requestAPI from './requests'
import loading from './loading.svg'

function Main() {

    const urlCode = window.location.href.split('/').pop()

    useEffect(() => {

        if (urlCode.length > 0) {
            const isPrivate = requestAPI.getPassesData(urlCode)

            isPrivate.then((data) => {


                if (window.confirm('Дозволити відкриття нової вкладки?')) {
                    // Відкриття нової вкладки
                    window.open('https://www.example.com', '_blank');
                }


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