terminal.addCommand("helloworld", async function() {
    const printLinks = links => {
        for (const {name, url} of links) {
            terminal.printLink(name, url, undefined, false)
            terminal.print(" ")
        }
        terminal.print("                                                              ")
    }

    const welcomeLineFuncs = [
        () => terminal.print("/$$$$$$$$                                   /$$           /$$              ", Color.hsl(0, 1, 68 / 100)),
        () => terminal.print("| $$_____/                                  | $$          |__/             ", Color.hsl(0, 1, 64 / 100)),
        () => terminal.print("| $$       /$$$$$$/$$$$   /$$$$$$$  /$$$$$$ | $$  /$$$$$$$ /$$ /$$$$$$$$   ", Color.hsl(0, 1, 60 / 100)),
        () => terminal.print("| $$$$$   | $$_  $$_  $$ /$$_____/ |____  $$| $$ /$$_____/| $$|____ /$$/   ", Color.hsl(0, 1, 56 / 100)),
        () => terminal.print("| $$__/   | $$ \\ $$ \\ $$|  $$$$$$   /$$$$$$$| $$|  $$$$$$ | $$   /$$$$/    ", Color.hsl(0, 1, 52 / 100)),
        () => terminal.print("| $$      | $$ | $$ | $$ \\____  $$ /$$__  $$| $$ \\____  $$| $$  /$$__/     ", Color.hsl(0, 1, 48 / 100)),
        () => terminal.print("| $$$$$$$$| $$ | $$ | $$ /$$$$$$$/|  $$$$$$$| $$ /$$$$$$$/| $$ /$$$$$$$$   ", Color.hsl(0, 1, 44 / 100)),
        () => terminal.print("|________/|__/ |__/ |__/|_______/  \\_______/|__/|_______/ |__/|________/   ", Color.hsl(0, 1, 40 / 100)),       
        () => terminal.print("                                                                           ", Color.hsl(0, 1, 80 / 100)),
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
        x: welcomeLineFuncs.length * 3,
        y: welcomeLineFuncs.length
    }
    const asciiArt = `                                      
((((((((((((((((((((((((((((((((((((((((((((((((((
(////****///////////////////////(/////////////////
(///     ../#///(///////////////(///////////////(/
(///,  #&@@@@@&&#-,,,&*,%&&&&@*-//////////////////
(///##%%&&@@@@@@@&%.,*-*.  ;@@@#*****----///////(/
(///;    .;%&&&&&&&&#* ,  @@; %#....******////////
(///(#.;,%  ..#%&&&&%#@@@@@@@@@...*******&&&&-..,,
(////#*.%%  ;   ..#%%%&&@@@@@@@@&...***,*;;-;%&&#;
(///;;-;*,,        .%%&&&&&&&&&&&..*****,#%&&&#,,*
(//////;/////.      .%&&&&&&&&&&&&.*#****,-#%%####
(/////////////,      .&&&&&&&&&&&-%&-&&**,..*.....
(////////////// ,***,.%%&%%%%%%%#&%-##%&&%.-......
(///////(//////;;;;,.,%%%%%%%%%%--&&&....---*,,,,,
(/////;///;//#;#;,,.%%#########--#--#&&&%#-#%%****
(/////#(/-;##*. ,..#######-%%%##--**,*--%%%#-*&***
(//////. -***...;##----------,,###%&&&.*.##;%%,***
(/(/(/(/     ;#;;--*********,,*,,,,,*;#...;*#-**-*
(////////*////*,;-...,**---*.%#%%#.-.*-.-..-.,*,..
(///////////////(//(,,,**##; #%%%.;%#.;--..,*-*,.*
(////////////////////##%#-;%&;-&&#-#&%&&%###&%;;;;
`.trim().split("\n");
    
    for (let i = 0; i < asciiArt.length; i++) {
        if (welcomeLineFuncs[i]) welcomeLineFuncs[i]();
    
        if (i < asciiArt.length) {
            let line = asciiArt[i];
            if (!welcomeLineFuncs[i]) {
                line = "                                                                           " + asciiArt[i];
            }
    
            let center = line.length / 2;
    
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
           
                // Ortadan uzaklığa göre lightness hesapla
                let distanceFromCenter = Math.abs(j - center);
                if (!welcomeLineFuncs[i]) {
                    center = (line.length-75) / 2;
                    distanceFromCenter = Math.abs(j - center-75);
                }
                const maxDistance = center;
                const normalized = distanceFromCenter / maxDistance;
    
                // Lightness kenarda 30, ortada 90 olacak şekilde ayarlanır
                const lightness = 90 - normalized * 60;
    
                if (char === '(' || char === '/') {
                    terminal.print(char, Color.hsl(0, 0, 40 / 100));
                } else {
                    terminal.print(char, Color.hsl(0, 1, lightness / 100));
                }
            }
        }
    
        terminal.addLineBreak();
    }
    
}, {
    description: "display the hello-world text",
    rawArgMode: true,
})