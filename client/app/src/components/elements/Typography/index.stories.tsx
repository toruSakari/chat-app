import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const meta: Meta<typeof Typography> = {
  title: 'elements/Typography',
  component: Typography
}

export default meta

type Story = StoryObj<typeof Typography>

export const Primary: Story = {
  args: {
    children: 'Hello World',
    color: 'gray',
    size: 'md',
  }
}
