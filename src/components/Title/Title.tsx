import React from 'react'

type Props = {
  titleText: string
}

const Title = React.memo(({ titleText }: Props): JSX.Element => {
  console.log('title')

  return (
    <div>
      <h2>{titleText}</h2>
    </div>
  )
})

export default Title
