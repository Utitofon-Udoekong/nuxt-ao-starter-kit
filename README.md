# Nuxt 3 + AO Template

A production-ready template for building decentralized applications using Nuxt 3 and AO (Arweave Operating System). This template provides a foundation for creating web applications that interact with AO processes, handle messages, and integrate with the Arweave network.

## Features

- 🚀 Nuxt 3 with TypeScript support
- 🔗 AO integration for decentralized computing
- 🌐 Arweave wallet connection
- 🔄 AO Process management
- 📨 Message handling system
- 🎨 TailwindCSS for styling
- 📱 Responsive design

## Prerequisites

- Node.js 16.x or later
- ArConnect wallet
- Basic understanding of AO concepts and Arweave
- npm, yarn, bun or pnpm

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nuxt-ao-starter-kit
cd nuxt-ao-starter-kit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm dev
```

4. Set up the AO Process
```bash
# Change to the ao directory
cd ao

# Start an AO Process
aos <PROCESS_NAME> 
or
aos

# Load the chatroom.lua file
.load chatroom.lua
```

Visit `http://localhost:3000` to see your application.

You can start editing the page by modifying `app.vue`. The page auto-updates as you edit the file.

This project uses [`nuxt/font`](https://nuxt.com/modules/fonts) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

```
[ao]                            # AO-specific components
    └── chatroom.lua
app.vue                         # Application page
[assets]                        # Nuxt Assets 
    └── [css]
        └── tailwind.css
[components]                    # Nuxt components
    ├── AOActions.vue
    ├── Navbar.vue
    ├── WalletConnect.vue
    └── [ui]
        ├── button.vue
        └── toaster.vue
[composables]                   # Nuxt composables
    └── useToast.ts
[utils]                         # Utility functions
    └── index.ts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Resources

- [AO Documentation](https://cookbook_ao.arweave.dev/)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Arweave Documentation](https://docs.arweave.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please [open an issue](https://github.com/Utitofon-Udoekong/nuxt-ao-starter-kit/issues) or join the [AO Discord community](https://discord.com/invite/qWgGxJKwNJ).