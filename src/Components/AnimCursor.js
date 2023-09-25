import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={45}
      color='24,61,103'
      outerAlpha={0.6}
      innerScale={1}
      outerScale={2}
      trailingSpeed={10}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'input[type="password"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
  )
}

export default AnimCursor