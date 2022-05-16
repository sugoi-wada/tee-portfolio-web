import type { IntrinsicElementsKeys } from '@stitches/react/types/styled-component'
import type { ComponentPropsWithRef } from 'react'
import { styled } from 'stitches.config'
import { StyledBox } from './base'

const StyledText = styled(StyledBox('p'), {})

export const Text = ({
  children,
  ...props
}: ComponentPropsWithRef<typeof StyledText> & {
  as?: IntrinsicElementsKeys | React.ComponentType<unknown>
}) => {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  )
}
