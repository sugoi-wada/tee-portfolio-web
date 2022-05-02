import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from '@stitches/react'
import React, { ComponentProps, PropsWithChildren } from 'react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$dim',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  boxSizing: 'border-box',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '$5',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
  variants: {
    fullscreen: {
      true: {
        maxWidth: 'inherit',
        maxHeight: 'inherit',
        borderRadius: '0px',
        width: '100%',
        height: '100%',
      },
    },
  },
})

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$bold',
  fontSize: '$4',
})

const StyledDescription = styled(DialogPrimitive.Description, {
  marginTop: '$2',
  marginBottom: '$4',
  fontSize: '$3',
  lineHeight: 1.5,
})

const StyledDialog = styled(DialogPrimitive.Root, {})

export const DialogContent = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof StyledContent>>) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
}
export const Dialog = StyledDialog
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$black',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$gray300' },
  '&:focus': { boxShadow: `0 0 0 2px $outline` },
})
