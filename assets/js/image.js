
window.onload=function(){
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    toggleSwitch.addEventListener('change', switchTheme, false);
    document.getElementById('downloadBtn').addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
           
           
            $(".resimler").append(`<img src="https://assets.nopixel.net/dev/images/clothing/Jacket/mp_f_freemode_01/${i}.webp" class="resim" alt="">`)

            $(".resim").click();
        }
    });

    function downloadImage(url, i) {
        let downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.download = `image_${i}.webp`;
        downloadLink.target = '_blank'; // Yeni sekmede açmak için target özelliğini kullanıyoruz
        downloadLink.click();
    }
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}
console.log("JAVASCRİPT YÜKLENDİ")
}


