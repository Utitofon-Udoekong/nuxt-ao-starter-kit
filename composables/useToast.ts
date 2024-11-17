// composables/useToast.ts
import { toast } from 'vue-sonner'

export function useToast() {
  const showToast = (message: string, options?: any) => {
    toast(message, options)
  }

  const successToast = (message: string, options?: any) => {
    toast.success(message, options)
  }

  const errorToast = (message: string, options?: any) => {
    toast.error(message, options)
  }

  const promiseToast = async <T>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string
      error: string
    },
    options?: any
  ) => {
    return toast.promise(promise, messages)
  }

  return {
    toast: showToast,
    success: successToast,
    error: errorToast,
    promise: promiseToast
  }
}