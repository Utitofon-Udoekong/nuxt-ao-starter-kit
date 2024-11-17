<template>
  <nav class="border-b">
      <div class="flex h-16 items-center px-4 container mx-auto">
        <div class="flex items-center space-x-2">
          <Icon name='lucide:terminal' class="h-6 w-6" />
          <span class="font-bold">Next.js + AO</span>
        </div>
        <div class="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <NuxtLink href="https://github.com/your-repo" target="_blank">
              <Icon name="lucide:github" class="h-5 w-5" />
              <span class="sr-only">GitHub</span>
            </NuxtLink>
          </Button>
          <WalletConnect />
        </div>
      </div>
    </nav>
</template>

<script lang="ts" setup>

</script>