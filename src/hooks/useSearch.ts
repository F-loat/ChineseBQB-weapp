import { useMemo } from '@tarojs/taro'
import { searchImages } from '../data/stickers'

export default function useSearch() {
  const data = useMemo(searchImages, [])
  return { data }
}
