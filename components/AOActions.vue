
<script lang="ts" setup>
import { message, result, createDataItemSigner } from '@permaweb/aoconnect';

const { toast } = useToast();
const isLoading = ref(false)
const setIsLoading = (value: boolean) => isLoading.value = value

const register = async () => {
    try {
        setIsLoading(true);
        const messageId = await message({
            process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM",
            tags: [
                { name: "Action", value: "Register" }
            ],
            signer: createDataItemSigner(window.arweaveWallet),
        });

        const _result = await result({
            message: messageId,
            process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM"
        });

        toast({
            title: "Registration Successful",
            description: "You have been registered with AO",
        });
        console.log("result:", _result);
    } catch (error: any) {
        toast({
            title: "Registration Failed",
            description: error.message,
            variant: "destructive",
        });
    } finally {
        setIsLoading(false);
    }
}

const broadcast = async () => {
    try {
        setIsLoading(true);
        const messageId = await message({
            process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM",
            tags: [
                { name: "Action", value: "Broadcast" }
            ],
            signer: createDataItemSigner(window.arweaveWallet),
        });

        const _result = await result({
            message: messageId,
            process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM"
        });

        toast({
            title: "Broadcast Successful",
            description: "Your message has been broadcast",
        });
        console.log("result:", _result);
    } catch (error: any) {
        toast({
            title: "Broadcast Failed",
            description: error.message,
            variant: "destructive",
        });
    } finally {
        setIsLoading(false);
    }
}
</script>

<template>
    <div class="flex flex-wrap justify-center gap-4 mt-5">
      <UiButton size="lg" @click="register" :disabled="isLoading">
        <Icon name="lucide:user-plus" class="mr-2 h-4 w-4" />
        Register to chatroom
      </UiButton>
      <UiButton size="lg" variant="outline" @click="broadcast" :disabled="isLoading">
        <Icon name="lucide:send" class="mr-2 h-4 w-4" />
        Broadcast Message
      </UiButton>
    </div>
</template>