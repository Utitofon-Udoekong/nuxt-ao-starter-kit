<template>
    <div>
        <Button v-if="address" @click="disconnectWallet" variant="outline">
            <Icon name="lucide:wallet" className="mr-2 h-4 w-4" />
            {{truncateAddress(address)}}
        </Button>
        <Button v-else @click="connectWallet" variant="outline">
            <Icon name="lucide:wallet" className="mr-2 h-4 w-4" />
            Connect Wallet
        </Button>
    </div>
</template>

<script lang="ts" setup>
declare global {
    interface Window {
        arweaveWallet: {
            connect: (permissions: string[]) => Promise<void>;
            disconnect: () => Promise<void>;
            getActiveAddress: () => Promise<string>;
        };
    }
}

const isLoading = ref(false);
const setIsLoading = (value: boolean) => isLoading.value = value
const address = ref<string | null>(null);
const setAddress = (value: string | null) => address.value = value

const checkConnection = async () => {
    try {
        const addr = await window.arweaveWallet.getActiveAddress();
        setAddress(addr);
    } catch (error: any) {
        setAddress(null);
        console.log(error);
    }
};

const connectWallet = async () => {
    try {
        setIsLoading(true);
        await window.arweaveWallet.connect([
            "ACCESS_ADDRESS",
            "SIGN_TRANSACTION",
        ]);
        const addr = await window.arweaveWallet.getActiveAddress();
        setAddress(addr);
        // toast({
        //     title: "Wallet Connected",
        //     description: "Successfully connected to ArConnect",
        // });
        setIsLoading(false);
    } catch (error: any) {
        setIsLoading(false);
        // toast({
        //     title: `Connection Failed ${error.message}`,
        //     description: "Please install ArConnect or try again",
        //     variant: "destructive",
        // });
    }
};

const disconnectWallet = async () => {
    try {
        setIsLoading(true);
        await window.arweaveWallet.disconnect();
        setAddress(null);
        // toast({
        //     title: "Wallet Disconnected",
        //     description: "Successfully disconnected from ArConnect",
        // });
        setIsLoading(false);
    } catch (error: any) {
        setIsLoading(false);
        // toast({
        //     title: "Disconnect Failed",
        //     description: "Failed to disconnect wallet",
        //     variant: "destructive",
        // });
        console.log(error);
    }
};

const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

watchEffect(() => {
    checkConnection()
})
</script>

<style></style>