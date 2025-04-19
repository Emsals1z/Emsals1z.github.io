terminal.addCommand("minesweeper3d", async function(args) {
    await terminal.modules.import("game", window)
    await terminal.modules.load("window", terminal)

    let win = terminal.modules.window.make({
        name: "MineSweeper3d",
        fullscreen: args.fullscreen
    })

    // BODY yüklendikten sonra iframe ekle
    setTimeout(() => {
        if (!win.windowContainer) {
            console.error("Pencere BODY yüklenmedi.")
            return
        }

        let iframe = document.createElement("iframe")
        iframe.src = terminal.baseUrl + "addons/mayintarlasi/index.html"
        iframe.style.width = "100%"
        iframe.style.height = "100%"
       iframe.style.border = "none"
        let oldContent = win.windowContainer.querySelector(".terminal-window-content")
        if (oldContent) {
            oldContent.remove()
        }
        win.windowContainer.appendChild(iframe)
    }, 100) // 100ms gecikme genelde yeterli olur
}, {
    description: "Play a game of minesweeper 3D",
    isGame: true,
    args: {
        "?f=fullscreen:b": "Play in fullscreen"
    }
})