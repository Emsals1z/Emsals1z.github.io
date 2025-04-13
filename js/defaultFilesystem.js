const about_txt_content = `<emsalsiz>

 Hi! I am Kayra, I have been interested in software development and computers for many years. 
 I have been trying to improve myself in this field for about 4 years.
 I like to keep my word and I don't have ego and push things I can't do.

</emsalsiz>`

const skills_txt = `<skills>

C#         : ██████████████████████---------------------------- 45%
C++        : ████████████████████------------------------------ 40%
Java       : █████████----------------------------------------- 20%
JavaScript : ████████████████████████████████████████████████-- 80%
Lua        : ██████████████████████████████████████------------ 65%
Python     : █████████████████████------------------------------ 35%

</skills>`

const contact_txt = `E-Mail: emsalsiz@outlook.com`

let passwords_json = `{
    "google.com": "FAKE_PASSWORD",
    "github.com": "FAKE_PASSWORD",
    "instagram.com": "FAKE_PASSWORD",
    "steam": "FAKE_PASSWORD"
}`


const projects_readme_content = `Welcome to my projects Page!

In this folder, there are some projects of mine. Most of
them are websites. You can open a project using the 'run'
command or by simply executing the .url file inside the 
projects directory: './<project_name>.url'

I also have a Github. You can open it by executing the
'github.url' file inside this directory.
`

const panellibot_readme = `Açıklama

Yeni başlayanlara yardımcı olması için uzun süreler uğraştığım web panelli discord botumu paylaşıyorum. Umarım yeni başlayanlara yardımcı olur. Sadece sizden istediğim botumun içindeki kodları para karşılığı satmamanız. Satmanız durumunda gerekli işlemleri başlatacağım.

Botun web panelinin önizlemesi: https://f-bot.cf/
Kurulum

- ayarlar.json içindeki bilgileri doldurunuz.

- Eğer web panelini kullanmak isterseniz config.js yi de doldurunuz.

- Konsola npm i yazın ve gerekli dosyaların inmesini bekleyin.
`

while (passwords_json.match(/FAKE_PASSWORD/)) {
    passwords_json = passwords_json.replace(/FAKE_PASSWORD/, function() {
        let chars = "zyxwvutsrqponmlkjihgfedcbaABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@+-#"
        let tempPw = ""
        let len = Math.random() * 8 + 8
        for (let i = 0; i < len; i++) {
            tempPw += chars[Math.floor(Math.random() * chars.length)]
        }
        return tempPw
    }())
}
const imageList = [
    "233.png",
    "black.jpg",
    "calculator.png",
    "camera.png",
    "comment.png",
    "comment2.png",
    "customization.png",
    "discordicon.png",
    "email.png",
    "envelope.png",
    "evo.png",
    "garage.png",
    "group.png",
    "grup6.png",
    "icon.jpg",
    "icongif.gif",
    "im.png",
    "image-galery.png",
    "info.png",
    "letter-w.png",
    "notebook-of-contacts.png",
    "phone-call.png",
    "Privacy.png",
    "profile-icon.png",
    "refund.png",
    "row.png",
    "rowlogo.png",
    "search.png",
    "settings.png",
    "silvia.png",
    "teker.png",
    "teker2.png",
    "turk2-pp.png",
    "turkbacground.png",
    "turkbacground2.png",
    "turkbacground3.png",
    "turkbacground4.png",
    "turk-png.png",
    "turkpp2.gif",
    "tw.png",
    "vector.png",
    "white.jpg",
    "youtubeicon.png"
  ];
  
  
  const folder = './assets/img/';

const imageFiles = imageList.map(filename =>
    new DataURLFile(folder + filename).setName(filename)
  );
terminal.fileSystem.root = new DirectoryFile([
    
    new PlainTextFile(about_txt_content).setName("about.txt"),
    new PlainTextFile(skills_txt).setName("skills.txt"),
    new DirectoryFile([
        new DirectoryFile([
            new PlainTextFile(panellibot_readme).setName("README.txt"),
            new PlainTextFile("https://github.com/Emsals1z/Panelli-Discord-Bot").setName("discordbot_github.url"),
        ]).setName("discordbot"),
        new PlainTextFile(projects_readme_content).setName("README.txt"),
        new PlainTextFile("https://github.com/emsals1z").setName("github.url"),
    ]).setName("projects"),
    new DirectoryFile(imageFiles).setName("assets"),


    new DirectoryFile([
        new DirectoryFile([
            new PlainTextFile(passwords_json).setName("passwords.json")
        ]).setName("secret"),
        new PlainTextFile(contact_txt).setName("email.txt"),
        new PlainTextFile(skills_txt).setName("skills.txt"),
    ]).setName("emsalsiz"),
    new PlainTextFile("https://github.com/emsals1z").setName("github.url"),
])