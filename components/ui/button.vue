<!-- components/ui/Button.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariants['variant']>,
    default: 'default'
  },
  size: {
    type: String as PropType<ButtonVariants['size']>,
    default: 'default'
  },
  class: {
    type: String,
    default: ''
  },
  asChild: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClass = computed(() => {
  return cn(
    buttonVariants({ variant: props.variant, size: props.size }),
    props.class
  )
})
</script>

<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    :class="buttonClass"
    :type="type"
    :disabled="disabled"
    @click="(e: MouseEvent) => emit('click', e)"
  >
    <slot />
  </component>
</template>