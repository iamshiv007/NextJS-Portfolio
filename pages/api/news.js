import axios from "axios";

export default async function handler(req, res) {

    try {

        const { category, lang, country, max } = req.query

        if (req.method !== "GET") return res.send({ success: false, message: `${req.method} Method Not Allowed` })

        const apikey = process.env.GOOGLE_NEWS_API_KEY;

        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=${max}&apikey=` + apikey;

        const { data } = await axios.get(url)

        res.send({ success: true, articles: data.articles })

    } catch (error) {
        res.send({ success: false, message: error?.response?.data?.messaege || error.message || error })
    }

}
