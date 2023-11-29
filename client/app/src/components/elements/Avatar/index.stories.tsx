import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'

const meta: Meta<typeof Avatar> = {
  title: 'elements/Avatar',
  component: Avatar
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    src: '',
    alt: '',
    size: 'md'
  }
}
