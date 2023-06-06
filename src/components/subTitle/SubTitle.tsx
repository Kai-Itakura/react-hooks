import React from 'react'

type Props = {
  subTitleText: string
}

const SubTitle = React.memo(({ subTitleText }: Props): JSX.Element => {
  console.log('subTitle')

  return (
    <div>
      <h3>{subTitleText}</h3>
    </div>
  )
})

export default SubTitle
