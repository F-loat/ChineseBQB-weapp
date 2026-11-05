const fs = require('fs')
const path = require('path')
const categories = require('../src/data/types.json')

const [revision, treeFile] = process.argv.slice(2)
if (!/^[a-f0-9]{40}$/.test(revision || '') || !treeFile) {
  throw new Error('Usage: node scripts/update-sticker-catalog.cjs <commit-sha> <recursive-tree.json>')
}

const tree = JSON.parse(fs.readFileSync(treeFile, 'utf8'))
if (tree.truncated !== false || !Array.isArray(tree.tree)) {
  throw new Error('The catalog requires a complete GitHub tree')
}

const groups = Object.fromEntries(categories.map(({ fullname }) => [fullname, []]))
for (const file of tree.tree) {
  const [folder, ...parts] = file.path.split('/')
  if (file.type === 'blob' && Object.prototype.hasOwnProperty.call(groups, folder)
      && /\.(gif|png|jpe?g|webp)$/i.test(file.path)) {
    groups[folder].push(parts.join('/'))
  }
}

for (const [folder, images] of Object.entries(groups)) {
  if (!images.length) throw new Error('No images found for ' + folder)
}
const rows = Object.entries(groups).map(([folder, images]) =>
  '    ' + JSON.stringify(folder) + ': ' + JSON.stringify(images)
)
fs.writeFileSync(path.join(__dirname, '../src/data/stickers.json'),
  '{\n  "revision": ' + JSON.stringify(revision) + ',\n  "groups": {\n'
  + rows.join(',\n') + '\n  }\n}\n'
)
