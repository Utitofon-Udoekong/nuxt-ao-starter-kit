<script setup lang="ts">
import { ToastRoot, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastProvider, ToastViewport } from 'radix-vue'
const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <TransitionGroup name="toast">
      <ToastRoot
        v-for="{ id, title, description, action, variant, ...props } in toasts"
        :key="`${id}-${title}`"
        :class="[
          'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
          variant === 'destructive' 
            ? 'destructive border-destructive bg-destructive text-destructive-foreground'
            : 'border bg-background text-foreground'
        ]"
        v-bind="props"
      >
        <div class="grid gap-1">
          <ToastTitle v-if="title" class="text-sm font-semibold">
            {{ title }}
          </ToastTitle>
          <ToastDescription v-if="description" class="text-sm opacity-90">
            {{ description }}
          </ToastDescription>
        </div>
        <template v-if="action">
          <ToastAction
            class="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
            v-bind="action"
          />
        </template>
        <ToastClose
          class="absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100"
        />
      </ToastRoot>
    </TransitionGroup>
    <ToastViewport 
      class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    />
  </ToastProvider>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>