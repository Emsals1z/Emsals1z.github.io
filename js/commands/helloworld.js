terminal.addCommand("helloworld", async function() {
    const printLinks = links => {
        for (const {name, url} of links) {
            terminal.printLink(name, url, undefined, false)
            terminal.print(" ")
        }
        terminal.print("                                                              ")
    }

    const welcomeLineFuncs = [
        () => terminal.print("/$$$$$$$$                                   /$$           /$$              "),
        () => terminal.print("| $$_____/                                  | $$          |__/             "),
        () => terminal.print("| $$       /$$$$$$/$$$$   /$$$$$$$  /$$$$$$ | $$  /$$$$$$$ /$$ /$$$$$$$$   "),
        () => terminal.print("| $$$$$   | $$_  $$_  $$ /$$_____/ |____  $$| $$ /$$_____/| $$|____ /$$/   "),
        () => terminal.print("| $$__/   | $$ \\ $$ \\ $$|  $$$$$$   /$$$$$$$| $$|  $$$$$$ | $$   /$$$$/    "),
        () => terminal.print("| $$      | $$ | $$ | $$ \\____  $$ /$$__  $$| $$ \\____  $$| $$  /$$__/     "),
        () => terminal.print("| $$$$$$$$| $$ | $$ | $$ /$$$$$$$/|  $$$$$$$| $$ /$$$$$$$/| $$ /$$$$$$$$   "),
        () => terminal.print("|________/|__/ |__/ |__/|_______/  \\_______/|__/|_______/ |__/|________/   "),        
        () => terminal.print("                                                                           "),
        () => terminal.print("Welcome to my homepage. It's also a very interactive terminal.             "),
        () => terminal.print(`Enter commands to navigate over ${Object.keys(terminal.allCommands).length - 1} unique tools and features.             `),
        () => {
            terminal.print("Start your adventure using the ")
            terminal.printCommand("help", "help", undefined, false)
            terminal.print(" command. Have lots of fun!             ")
        },
        () => terminal.print("                                                                           "),
        () => {
            terminal.print("For about me type or click ")
            terminal.printCommand("cat root/about.txt", "cat root/about.txt", undefined, false)
            terminal.print(".                             ")
        },
        () => terminal.print("                                                                           "),

        () => {
            terminal.print("For my skills type or click ")
            terminal.printCommand("cat root/skills.txt", "cat root/skills.txt", undefined, false)
            terminal.print(".                           ")
        },
        () => terminal.print("                                                                           "),
  
        // --------------------------------------------------------------
        // Instagram GitHub Perli Library AntiCookieBox Stray GUI YouTube
        // Partycolo HR-Codes 3d Turtlo Coville Compli Spion Lettre Presi

        () => printLinks([
                {name: "GitHub", url: "https://github.com/Emsals1z"},
                {name: "Steam", url: "https://steamcommunity.com/id/mremsalsiz"},
        ]),
 
    ]

    let size = {
        x: welcomeLineFuncs.length * 2,
        y: welcomeLineFuncs.length
    }
   
    let threshold = 0.4;  // Başlangıçtaki eşik değeri

let sinFactor = 2;  // Başlangıçtaki değer

    for (let i = 0; i < size.y; i++) {

        welcomeLineFuncs[i]()
        
        for (let j = 1; j < size.x; j++) {
            let x = (j / size.x - 0.5) * 2
            let y = (i / size.y - 0.5) * 2
            let r = Math.sqrt(x*x + y*y)
            let theta = Math.atan2(y, x)
            
            if (Math.abs(Math.sin(sinFactor * theta) - r) > threshold) {
                terminal.print("#", Color.hsl(0 / 360, 0, 10/ 100))
            } else {
                let angle = Math.atan2(y, x) / Math.PI * 180
                let hue = Math.round(angle)
                let lightness = Math.round(90 - (x*x + y*y) * 90)
                terminal.print("#", Color.hsl(0 / 360, 1, lightness / 100))
            }
        }
        terminal.addLineBreak()
    }
}, {
    description: "display the hello-world text",
    rawArgMode: true,
})