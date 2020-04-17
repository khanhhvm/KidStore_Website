var cate_list = [1,2,3,4,5,21,22,23];
var data = [
    {   
        type: "New",
        category: "figures",
        list: 1,
        id: 111,
        title: 'Super Mario Action Figure',
        description: 'Enjoy the World of Nintendo with these 4-Inch Action Figures! Characters from your favorite Nintendo games are here to join your collection! Each character comes with a bonus accessory and multiple points of articulation.',
        url: 'images/111.jpg',
        small: 'images/111-small.jpg',
        price: 33.99
    },
    {
        type: "Sale",
        category: "figures",
        list: 2,
        id: 112,
        title: 'Jakks & StarFox Action Figure',
        description: 'Collect all your favorite characters from Nintendo\'s classic video games in action figure form! Each character stands approximately 4 inches tall and features multiple points of articulation for recreating your favorite game scenes. Officially licensed Nintendo product. Collect them all!',
        url: 'images/112.jpg',
        small: 'images/112-small.jpg',
        price: 99.99
    },
    {
        type: "Sale",
        category: "figures",
        list: 3,
        id: 113,
        title: 'Zelda - The Wind Waker',
        description: 'This expertly crafted 10" figure is the perfect companion to the hot new Nintendo game. Exacting in all details, on a beautifully decorated base, Warrior link delivers love straight into any gamer\'s heart. The beautiful package design is a collector\'s item in itself!',
        url: 'images/113.jpg',
        small: 'images/113-small.jpg',
        price: 49.99
    },
    {
        type: "Sale",
        category: "figures",
        list: 1,
        id: 114,
        title: 'Waluigi And Wario Action Figure',
        description: 'Collect all your favorite characters from Nintendo\'s classic video games in action figure form! These characters stand approximately 4 inches tall and features multiple points of articulation. Relive all of your greatest Super Mario Bros. Nintendo moments with the Waluigui & Wario Figure. Collect them all!',
        url: 'images/114.jpg',
        small: 'images/114-small.png',
        price: 64.99
    },  
    {
        type: "New",
        category: "figures",
        list: 1,
        id: 115,
        title: 'Captain Toad & Ghost Action Figure',
        description: 'Just like its name: Captain Toad & Ghost <3 <3 <3',
        url: 'images/115.jpg',
        small: 'images/115-small.jpg',
        price: 89.99
    },  
    {
        type: "Sale",
        category: "figures",
        list: 3,
        id: 116,
        title: 'Princess Zelda Action Figure',
        description: 'From Good Smile. From the popular game The Legend of Zelda: Twilight Princess comes a figma of Zelda! Using the smooth yet posable joints of figma, you can act out a variety of different scenes. She comes with two face plates including a dignified and a gentle smiling expression. Her sword and the Bow of Light are both included along with an articulated figma stand so you can pose her however you like!',
        url: 'images/116.jpg',
        small: 'images/116-small.jpg',
        price: 29.99
    },  
    {
        type: "Sale",
        category: "figures",
        list: 4,
        id: 117,
        title: 'Cloud - FINAL FANTASY VII',
        description: 'Cloud, the hero of FINAL FANTASY VII REMAKE, makes his appearance to the Play Arts KAI line! FINAL FANTASY VII REMAKE reimagines one of the most popular titles in the FINAL FANTASY series.',
        url: 'images/117.jpg',
        small: 'images/117-small.jpg',
        price: 55.99
    },  
    {
        type: "Sale",
        category: "figures",
        list: 1,
        id: 118,
        title: 'King Koopa - Mario World',
        description: 'Bowser is the king of the Koopas and Mario\'s eternal rival. He breathes fire, hurls hammers, and uses all sorts of weapons in hopes of taking out Mario. As his size suggests, he\'s immensely powerful. His plans aren’t always the best, and sometimes he even finds himself on Mario’s side.',
        url: 'images/118.jpg',
        small: 'images/118-small.jpg',
        price: 25.99
    },  
    {
        type: "Sale",
        category: "figures",
        list: 1,
        id: 119,
        title: 'Wedding Dress - Mario World',
        description: 'This amiibo figure shows Mario, Bowser, and Princess decked out in their wedding outfit from the Super Mario Odyssey™ game.',
        url: 'images/119.jpg',
        small: 'images/119-small.jpg',
        price: 99.99
    },  
    {
        type: "Sale",
        category: "figures",
        list: 5,
        id: 120,
        title: 'Ryu & Ken - Street Fighter',
        description: 'Storm Collectibles is honored to work with Capcom to produce a high-quality 1:12 scale action figure for the popular combat game, Street Fighter V. The upcoming characters from SFV series are Ryu and Ken!',
        url: 'images/120.jpg',
        small: 'images/120-small.png',
        price: 88.99
    },  
    {
        type: "Sale",
        category: "figures",
        list: 1,
        id: 121,
        title: 'Waluigi Action Figure',
        description: 'Collect all your favorite characters from Nintendo\'s classic video games in action figure form! This Waluigui character stands approximately 4 inches tall and features multiple points of articulation. Relive all of your greatest Super Mario Bros. Nintendo moments with the Waluigui Figure. Collect them all!',
        url: 'images/121.jpg',
        small: 'images/121-small.jpg',
        price: 28.99
    },
    {
        type: "Sale",
        category: "console",
        list: 21,
        id: 211,
        title: 'Nintendo Gameboy Color Console',
        description: 'The Nintendo Game Boy handheld system gives you the power to take the action everywhere. With a sleek design, this classic handheld system allows you to play thousands of games and use add-on peripherals for a heightened experience. It is equipped with an 8-bit CPU that provides enough processing power to handle your games efficiently.',
        url: 'images/211.jpg',
        small: 'images/211-small.jpg',
        price: 61.99
    },
    {
        type: "Sale",
        category: "console",
        list: 22,
        id: 212,
        title: 'Microsoft Xbox 360 Wireless Controller',
        description: 'Discover greater precision, comfort, and control. The Wireless Xbox 360 Controller for Windows delivers a consistent and universal gaming experience across both of Microsoft\'s gaming systems. Experience the ultimate gaming experience on Windows and Xbox 360.',
        url: 'images/212.jpg',
        small: 'images/212-small.jpg',
        price: 11.99
    }, 
    {
        type: "Sale",
        category: "console",
        list: 21,
        id: 213,
        title: 'Original Nintendo Super Famicom Controller',
        description: 'Region:NTSC (US, Canada) - Platform:SNES - Product:Controller',
        url: 'images/213.jpg',
        small: 'images/213-small.jpg',
        price: 8.99
    }, 
    {
        type: "Sale",
        category: "console",
        list: 23,
        id: 214,
        title: 'Sony PSOne Launch Edition White Console',
        description: 'Enhance your gaming experience with the Sony PSOne video game console that easily fits in even in cramped spots. Powered by a 32-bit 34 MHz RISC processor, this Sony game console delivers an efficient and speedy performance. Enjoy a stunning visual output, thanks to the GFX processor unit of the Sony PSOne game console. The Dual Shock controller of this video game console provides vibration feedback, based on the on-screen action of the game. Moreover, you can listen to your favorite tracks on this Sony game console that can also play audio CDs.',
        url: 'images/214.jpg',
        small: 'images/214-small.png',
        price: 39.99
    }, 
    {
        type: "New",
        category: "console",
        list: 21,
        id: 215,
        title: 'Nintendo Switch 32GB with Neon BLue & Red',
        description: 'Introducing Nintendo Switch the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime anywhere.',
        url: 'images/215.jpg',
        small: 'images/215-small.jpg',
        price: 390.99
    }
];
