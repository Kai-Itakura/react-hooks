import { useEffect, useRef } from 'react'

export const useAutoResize = (value: string) => {
  // refの作成
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // 現在参照している要素を参照
    const element = ref.current

    // 現在参照している要素がない場合何も返さない
    if (!element) {
      return
    }

    // 最低限の高さを保つ + 文字の大きさに合わせてtextareaが縮小するようにする
    element.style.height = 'auto'

    // element.scrollHeightを代入することでtextareaの高さを動的に変更する
    // element.scrollHeight: 溢れて画面上に表示されない部分を含めた要素の高さ
    element.style.height = `${element.scrollHeight}px`
  }, [value])

  return ref
}
