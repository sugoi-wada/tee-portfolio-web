import { mauve, orange } from '@radix-ui/colors'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { CSS } from '@stitches/react'
import { StyledBox } from 'components/common'
import { keyframes, styled, theme } from 'stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledContent = styled(StyledBox(DropdownMenuPrimitive.Content), {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

const itemStyles: CSS = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$black',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: orange.orange9,
    color: orange.orange1,
  },
}

const StyledItem = styled(StyledBox(DropdownMenuPrimitive.Item), {
  ...itemStyles,
})
const StyledCheckboxItem = styled(
  StyledBox(DropdownMenuPrimitive.CheckboxItem),
  {
    ...itemStyles,
  }
)
const StyledRadioItem = styled(StyledBox(DropdownMenuPrimitive.RadioItem), {
  ...itemStyles,
})
const StyledTriggerItem = styled(StyledBox(DropdownMenuPrimitive.SubTrigger), {
  '&[data-state="open"]': {
    backgroundColor: orange.orange4,
    color: orange.orange11,
  },
  ...itemStyles,
})

const StyledLabel = styled(StyledBox(DropdownMenuPrimitive.Label), {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
})

const StyledSeparator = styled(StyledBox(DropdownMenuPrimitive.Separator), {
  height: 1,
  backgroundColor: theme.colors.separator,
  margin: 5,
})

const StyledItemIndicator = styled(
  StyledBox(DropdownMenuPrimitive.ItemIndicator),
  {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
)

const StyledArrow = styled(StyledBox(DropdownMenuPrimitive.Arrow), {
  fill: 'white',
})

const StyledTrigger = styled(StyledBox(DropdownMenuPrimitive.Trigger), {
  border: '0px none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = StyledTrigger
export const DropdownMenuContent = StyledContent
export const DropdownMenuItem = StyledItem
export const DropdownMenuCheckboxItem = StyledCheckboxItem
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
export const DropdownMenuRadioItem = StyledRadioItem
export const DropdownMenuItemIndicator = StyledItemIndicator
export const DropdownMenuTriggerItem = StyledTriggerItem
export const DropdownMenuLabel = StyledLabel
export const DropdownMenuSeparator = StyledSeparator
export const DropdownMenuArrow = StyledArrow
