import { ref } from 'vue'

interface Toast {
  id: string
  title?: string
  description?: string
  action?: any
  variant?: 'default' | 'destructive'
  open?: boolean
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000

let count = 0
const genId = () => {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toasts = ref<Toast[]>([])
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    removeToast(toastId)
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const removeToast = (toastId?: string) => {
  if (toastId === undefined) {
    toasts.value = []
    return
  }
  toasts.value = toasts.value.filter(t => t.id !== toastId)
}

const dismissToast = (toastId?: string) => {
  if (toastId) {
    addToRemoveQueue(toastId)
  } else {
    toasts.value.forEach(toast => {
      addToRemoveQueue(toast.id)
    })
  }

  toasts.value = toasts.value.map(t => 
    t.id === toastId || toastId === undefined
      ? { ...t, open: false }
      : t
  )
}

export const useToast = () => {
  const toast = (props: Omit<Toast, 'id'>) => {
    const id = genId()
    
    const update = (props: Toast) => {
      toasts.value = toasts.value.map(t =>
        t.id === id ? { ...t, ...props } : t
      )
    }
    
    const dismiss = () => dismissToast(id)

    const newToast = {
      ...props,
      id,
      open: true,
    }

    toasts.value = [newToast, ...toasts.value].slice(0, TOAST_LIMIT)

    return {
      id,
      dismiss,
      update,
    }
  }

  return {
    toasts,
    toast,
    dismiss: dismissToast,
  }
}