import * as fs from 'node:fs/promises'

const XMLSourceFile = 'Faith.xml'
const XMLSourcePath = '../mt-adapted-articles/' + XMLSourceFile.substring(0, 1).toUpperCase() + '/' + XMLSourceFile
const XMLTargetPath = XMLSourcePath.replace('.xml', '_transformed.xml')

const XMLSourceTextHandler = await fs.open(XMLSourcePath)
const XMLSourceText = await XMLSourceTextHandler.readFile({ encoding: "utf-8" })

let XMLTargetText = XMLSourceText
  .replace(/[\r\n ]+/g, ' ')
  .replace(/[\r\n ]+(<\/[^>]+>)/g, '$1')
  .replace(/(<[^/][^>]+>)[\r\n ]+/g, '$1')
  .replace(/(<\/[^>]+>)[\r\n ]+(<[^/][^>]+>)/g, '$1$2')
  .replace(/<(\/?body|title)/g, '\n  <$1')
  .replace(/<(p|\/item)/g, '\n<$1')
  .replace(/(<\/p>) /g, '$1')

const XMLTargetTextHandler = await fs.open(XMLTargetPath, 'w')

await XMLTargetTextHandler.writeFile(XMLTargetText)
