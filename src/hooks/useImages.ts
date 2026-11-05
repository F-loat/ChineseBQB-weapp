import { useState } from '@tarojs/taro'
import { categoryImages } from '../data/stickers'

export default function useImages(path: string) {
  const [data, setData] = useState(() => categoryImages(path))
  return { data, setData }
}
