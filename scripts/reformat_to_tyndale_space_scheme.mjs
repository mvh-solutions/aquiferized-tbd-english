import * as fs from 'node:fs/promises'

const sourceDirectory = '../mt-adapted-articles/'
const targetDirectory = sourceDirectory.replace('../', '../transformed/')

try {
  await fs.readdir(targetDirectory)
} catch (error) {
  await fs.mkdir(targetDirectory, { recursive: true })
}

const sourceFiles = await fs.readdir(sourceDirectory, { recursive: true });

for (const sourceFile of sourceFiles) {

  if (!sourceFile.endsWith('.xml')) {
    continue
  }

  const XMLSourcePath = sourceDirectory + sourceFile
  const XMLSourceTextHandler = await fs.open(XMLSourcePath)
  const XMLSourceText = await XMLSourceTextHandler.readFile({ encoding: "utf-8" })

  let XMLTargetText = XMLSourceText
    .replace(/[\r\n ]+/g, ' ')
    .replace(/[\r\n ]+(<\/[^>]+>)/g, '$1')
    .replace(/(<[^/][^>]+>)[\r\n ]+/g, '$1')
    .replace(/(<\/[^>]+>)[\r\n ]+(<[^/][^>]+>)/g, '$1$2')
    .replace(/<(\/?body|title)/g, '\n  <$1')
    .replace(/<(p|\/item|include_items)/g, '\n<$1')
    .replace(/(<\/p>) /g, '$1')
    .replace(/(<\/span>)(<a)/g, '$1 $2')

  const subDirectoryName = sourceFile.split('/')[0]

  try {
    await fs.readdir(targetDirectory + subDirectoryName)
  } catch (error) {
    await fs.mkdir(targetDirectory + subDirectoryName, { recursive: true })
  }

  const XMLTargetPath = targetDirectory + sourceFile
  const XMLTargetTextHandler = await fs.open(XMLTargetPath, 'w')
  await XMLTargetTextHandler.writeFile(XMLTargetText)
}
