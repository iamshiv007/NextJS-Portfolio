import axios from "axios";

export default async function handler(req, res) {

    try {

        const { text, language } = req.query

        if (req.method !== "POST") return res.send({ success: false, message: `${req.method} Method Not Allowed` })

        const options = {
            method: "POST",
            url: "https://microsoft-translator-text.p.rapidapi.com/translate",
            params: {
              "to[0]": language,
              "api-version": "3.0",
              profanityAction: "NoAction",
              textType: "plain",
            },
            headers: {
              "content-type": "application/json",
              "X-RapidAPI-Key": process.env.RAPID_API_KEY,
              "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
            },
            data: [
              {
                Text: text,
              },
            ],
          };

        const { data } = await axios.request(options)

        res.send({ success: true, translatedText: data[0].translations[0].text })

    } catch (error) {
        res.send({ success: false, message: error?.response?.data?.messaege || error })
    }

}
