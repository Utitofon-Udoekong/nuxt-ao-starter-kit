<template>
    <div>

    </div>
</template>

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

        toast("Registration Successful");
        console.log("result:", _result);
    } catch (error: any) {
        toast("Registration Failed",{
            
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

<style></style>