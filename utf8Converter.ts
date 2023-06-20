
import iconv from 'iconv'

export const convertToUTF8 = <T extends any>(body: T, fromEncoding = 'iso-8859-1'): T => {
  const ic = new iconv.Iconv(fromEncoding, 'utf-8')
  const buf = ic.convert(JSON.stringify(body))
  return JSON.parse(buf.toString('utf-8'))
}
