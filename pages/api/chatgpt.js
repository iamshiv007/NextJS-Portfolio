import axios from "axios";

export default async function handler(req, res) {

    try {

        const { query } = req.query

        if (req.method !== "POST") return res.send({ success: false, message: `${req.method} Method Not Allowed` })

        const options = {
            method: "POST",
            url: "https://chatgpt-api8.p.rapidapi.com/",
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": process.env.RAPID_API_KEY,
                "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
            },
            data: [
                {
                    content: query,
                    role: "user",
                },
            ],
        };

        const { data } = await axios.request(options)

        res.send({ success: true, answer: data.text })

    } catch (error) {
        res.send({ success: false, message: error?.response?.data?.messaege || error })
    }

}
