import path from 'path'
import sharp from 'sharp'

const UPS = path.resolve(__dirname, '../assets/uploads')

export default async function resizeImage(filename) {
  try {
    const fullFilename = path.resolve(UPS, filename)
    const extension = path.extname(fullFilename)
    const withoutExt = fullFilename.substr(0, fullFilename.lastIndexOf('.'))
    const resizeFilename = `${withoutExt}_small${extension}`
    await sharp(fullFilename).resize(200, 200).toFile(resizeFilename)
    return resizeFilename
  } catch (e) {
    return ''
  }
}
