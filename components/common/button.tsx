import type { ComponentPropsWithRef } from 'react'
import { styled } from 'stitches.config'
import { StyledBox } from './base'

const StyledButton = styled(StyledBox('button'), {
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

export const Button = ({
  children,
  ...props
}: ComponentPropsWithRef<typeof StyledButton>) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
