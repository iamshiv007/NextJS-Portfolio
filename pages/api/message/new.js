import { connectDb } from "@/database/connect"
import { Message } from "@/models/message"


const sendMessage = async (req, res) => {

    try {

        connectDb()

        if (req.method !== 'POST')
            errorHandler(res, 400, "Only post method is allowed")

        const message = await Message.create(req.body)

        res.status(201).json({ success: true, message })
    } catch (error) {
        console.log(error)
    }
}

export default sendMessage