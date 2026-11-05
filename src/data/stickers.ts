import catalog from './stickers.json'
import categories from './types.json'

const assetRoot = 'https://raw.githubusercontent.com/zhaoolee/ChineseBQB/' + catalog.revision
const groups: Record<string, string[]> = catalog.groups

function assetUrl(folder: string, name: string) {
  return [assetRoot, encodeURIComponent(folder), ...name.split('/').map(encodeURIComponent)].join('/')
}

export const stickerCategories = categories.map(category => {
  const names = groups[category.fullname]
  const cover = category.imgSrc.slice(category.imgSrc.lastIndexOf('/') + 1)
  return {
    ...category,
    imgNum: names.length,
    imgSrc: assetUrl(category.fullname, names.includes(cover) ? cover : names[0])
  }
})

export function categoryImages(folder: string) {
  const names = Object.prototype.hasOwnProperty.call(groups, folder) ? groups[folder] : []
  return names.map(name => assetUrl(folder, name))
}

export function searchImages() {
  return stickerCategories.reduce<{ name: string; imgSrc: string }[]>((images, category) => {
    for (const name of groups[category.fullname]) {
      images.push({
        name: name.slice(name.lastIndexOf('/') + 1).replace(/\.[^.]+$/, ''),
        imgSrc: assetUrl(category.fullname, name)
      })
    }
    return images
  }, [])
}
