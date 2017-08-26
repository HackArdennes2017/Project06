import path from 'path'
import sharp from 'sharp'

const UPS = path.resolve(__dirname, '../assets/uploads')

export default async function resizeImage(filename) {
  try {
    // LOL. what a shitty block of code
    const fullFilename = path.resolve(UPS, filename)
    const extension = path.extname(fullFilename)
    const withoutExtFull = fullFilename.substr(0, fullFilename.lastIndexOf('.'))
    const resizeFilenameFull = `${withoutExtFull}_small${extension}`
    const withoutExt = filename.substr(0, filename.lastIndexOf('.'))
    const resizeFilename = `${withoutExt}_small${extension}`
    await sharp(fullFilename).resize(300, 300).toFile(resizeFilenameFull)
    return resizeFilename
  } catch (e) {
    return ''
  }
}
