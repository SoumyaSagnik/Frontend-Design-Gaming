const items = document.querySelectorAll(".game");
const imageContainer = document.querySelector('.container');
const description = document.querySelector('.description');
const header = document.querySelector('h1');
const para1 = document.querySelector('#p1');
const para2 = document.querySelector('#p2');
const videoSource = document.querySelector('video');


items.forEach((game) => {
    game.addEventListener('click', () => {
        if (!game.classList.contains('active')) {
            game.classList.add('active');
        } else {
            game.classList.remove('active');
        }
        items.forEach((i) => {
            if (i !== game) {
                i.classList.remove('active');
            }
        })
        applyProperties();
    })
});

function applyProperties() {
    let id;
    items.forEach((item) => {
        if (item.classList.contains('active')) {
            id = item.id;
        }
    });
    switch (id) {
        case 'gow':
            header.innerText = 'God of War Ragnarok';
            para1.innerText = 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters. The threat of Ragnarök grows ever closer.'
            para2.innerText = 'God of War Ragnarok is an almighty achievement and creates a new high that makes many of its peers look mortal by comparison. The game has got a 10 on 10 from IGN.'
            videoSource.setAttribute('src', './assets/videos/GOW.mp4');
            break;
        case 'er':
            header.innerText = 'Elden Ring';
            para1.innerText = 'Elden Ring is an expansive fantasy Action-RPG game. Elden Ring features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly'
            para2.innerText = 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. The game has got a 10 on 10 from IGN.'
            videoSource.setAttribute('src', './assets/videos/EldenRing.mp4');
            break;
        case 'val':
            header.innerText = 'Valorant';
            para1.innerText = "Valorant is a 5v5 competitive online shooting game. It requires hours of practice just to avoid being eviscerated by others. IGN has rated it 9 out of 10."
            para2.innerText = "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
            videoSource.setAttribute('src', './assets/videos/Valorant.mp4');
            break;
        case 'hfw':
            header.innerText = 'Horizon Forbidden West';
            para1.innerText = "The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity. It's up to Aloy to uncover the secrets behind these threats and restore order and balance to the world."
            para2.innerText = "The game is a triumphant combination of enthralling combat, top-tier creature and character design, and a captivating open world. IGN has rated it 9 out of 10."
            videoSource.setAttribute('src', './assets/videos/HorizonFW.mp4');
            break;
        case 'nfs':
            header.innerText = "NFS Unbound";
            para1.innerText = "Race against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore's ultimate street racing challenge. Pack your garage with precision-tuned, custom rides and light up the streets with your style, exclusive fits, and a vibrant global soundtrack that bumps in every corner of the world."
            para2.innerText = "Need for Speed Unbound hasn’t strayed very far from the fundamentals of 2019’s Heat, but its bold new animated style impresses. IGN has rated it 7 out of 10."
            videoSource.setAttribute('src', './assets/videos/NFSUnbound.mp4');
            break;
        default:
            header.innerText = "Games";
            para1.innerText = "Gaming is a fun way to keep stress away. While gaming, we tend to forget everything around us, hardshpisand problems in life. For those few moments, we might become a god that kills monsters, a soldier, street driver, or anything imaginable."
            para2.innerText = "The gaming industry is bigger than the movie and music industry combined. Even in this modern world, there's a lot of stigma around this category. But that's nothing compared to the amount of love and affection gamers have towards their games."
            videoSource.setAttribute('src', './assets/videos/default.mp4');
    }
    setDescriptionBackground(id);
}

applyProperties();

function setDescriptionBackground(id) {
    let url;
    switch (id) {
        case 'gow':
            url = './assets/images/gow-b2.png';
            header.style.color = "maroon";
            para1.style.color = "aliceblue";
            para2.style.color = "aliceblue";
            para1.style.backgroundColor = "transparent";
            para2.style.backgroundColor = "transparent";
            break;
        case 'er':
            url = './assets/images/er-b2.jpg';
            header.style.color = "gold";
            para1.style.color = "aliceblue";
            para2.style.color = "aliceblue";
            para1.style.backgroundColor = "transparent";
            para2.style.backgroundColor = "transparent";
            break;
        case 'val':
            url = './assets/images/val-b2.png';
            header.style.color = "#FF4355";
            para1.style.color = "black";
            para2.style.color = "black";
            para1.style.backgroundColor = "white";
            para2.style.backgroundColor = "white";
            break;
        case 'hfw':
            url = './assets/images/hfw-b2.jpg';
            header.style.color = "aliceblue";
            para1.style.color = "aliceblue";
            para2.style.color = "aliceblue";
            para1.style.backgroundColor = "transparent";
            para2.style.backgroundColor = "transparent";
            break;
        case 'nfs':
            url = './assets/images/nfs-b2.png';
            header.style.color = "black";
            para1.style.color = "black";
            para2.style.color = "black";
            para1.style.backgroundColor = "white";
            para2.style.backgroundColor = "white";
            break;
        default:
            url = './assets/images/default-b3.gif';
            header.style.color = "aliceblue";
            para1.style.color = "aliceblue";
            para2.style.color = "aliceblue";
            para1.style.backgroundColor = "transparent";
            para2.style.backgroundColor = "transparent";
    }

    gsap.fromTo(description, 1.5, { opacity: 0 }, { opacity: 1 });
    description.style.backgroundImage = `url(${url})`;
}



