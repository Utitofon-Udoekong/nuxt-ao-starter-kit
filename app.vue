<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <UiToaster />
    <div class="flex min-h-screen flex-col">
      <Navbar />
      <main class="flex-1">
        <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div class="container flex mx-auto max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Build Web3 Apps with
              <span class="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00AD6D] to-[#060923]">
                Nuxt.js + AO
              </span>
            </h1>
            <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The ultimate boilerplate for building decentralized applications
              with Next.js and AO. Get started in minutes with full-stack Web3
              development.
            </p>
            <div class="space-x-4">
              <UiButton size="lg" variant="outline" asChild>
                <NuxtLink href="https://github.com/Utitofon-Udoekong/nuxt-ao-starter-kit">View on GitHub</NuxtLink>
              </UiButton>
            </div>
          </div>
        </section>

        <section class="container space-y-6 py-8 mx-auto">
          <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon name="lucide:code-xml" class="h-12 w-12" />
                <div class="space-y-2">
                  <h3 class="font-bold">Nuxt 3.14</h3>
                  <p class="text-sm text-muted-foreground">
                    Built on the latest Nuxt.js features with Auto imports and HMR
                  </p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon name="lucide:cpu" class="h-12 w-12" />
                <div class="space-y-2">
                  <h3 class="font-bold">AO Integration</h3>
                  <p class="text-sm text-muted-foreground">
                    Seamless integration with AO for building decentralized
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon name="lucide:zap" class="h-12 w-12" />
                <div class="space-y-2">
                  <h3 class="font-bold">Instant Setup</h3>
                  <p class="text-sm text-muted-foreground">
                    Get started in seconds with our pre-configured development
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container py-12 mx-auto">
          <div class="mx-auto max-w-[64rem] text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Ready to Test the Process?
            </h2>
            <p class="mt-4 text-muted-foreground sm:text-lg">
              Click the Buttons below to explore and test the functionalities of
              the Register and Broadcast processes.
            </p>
            <AOActions />
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}
</style>