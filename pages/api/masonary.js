import axios from "axios";

export default async function handler(req, res) {

    try {

        const config = {
            headers: {
                Authorization: process.env.PEXELS_API_KEY
            },
        };

        if (req.method !== "GET") return res.send({ success: false, message: `${req.method} Method Not Allowed` })

        const url = `https://api.pexels.com/v1/curated?page=${1}`;

        const { data } = await axios.get(url, config)

        res.send({ success: true, photos: data.photos })

    } catch (error) {
        res.send({ success: false, message: error?.response?.data?.messaege || error.message || error })
    }

}
