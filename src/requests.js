import axios from "axios";

/* GET PASSES DATRA */

async function getPassesData(platformUserID) {
    try {
        const data = JSON.stringify({
            platformUserID: platformUserID,
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.REACT_APP_API_URL + '/v1/checkUserPasses',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Підкидаємо помилку, щоб її обробити вище в коді
    }
}

export default { getPassesData };