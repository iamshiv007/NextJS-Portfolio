// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectdb } from '../../database/connection'
import { User } from '../../models/user'
import multer from 'multer'

export default async function handler(req, res) {

  await connectdb()

  // Image upload
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './userImages')
    },
    filename: function (req, file, cb) {
      const newName = Date.now() + '-' + file.originalname
      cb(null, newName)
    }
  })

  const upload = multer({ storage })

  upload.single('image')
  console.lof(req.file.filename)

  const image = req.file.filename


  User.create({ image })
    .then((res) => res.status(201).json({ success: true, message: "User createsd" }))
    .catch((err) => res.status(500).json(err))
}
