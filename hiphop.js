var ap1 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#0000ff',
    preload: 'metadata',
    music: [
        {
            title: 'Matrix Slave Ship',
            author: 'Azizi Gibson',
            url: 'hiphop/matrix.mp3',
            pic: 'img/azizi.jpg'
        },
        {
            title: 'Skin',
            author: 'Bladee',
            url: 'hiphop/skin.mp3',
            pic: 'img/bladee.jpg'
        },
        {
            title: 'Bourbon (ft. Von Pea & Malkovich)',
            author: 'Dillon & Paten Locke',
            url: 'hiphop/bourbon.mp3',
            pic: 'img/foodchain.jpg'
        },
         {
            title: 'SOS',
            author: 'Lorde Fred33',
            url: 'hiphop/sos.mp3',
            pic: 'img/lordfred33.jpg'
        },
          {
            title: 'Asked About You',
            author: 'Oddisee',
            url: 'hiphop/askedaboutyou.mp3',
            pic: 'img/oddissee.jpg'
        },


    ]
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});

ap1.init(); 



var ap2 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#0000ff',
    preload: 'metadata',
    music: [
        {
            title: 'tnew song',
            author: '七森中☆ごらく部',
            url: 'http://devtest.qiniudn.com/あっちゅ～ま青春!.mp3',
            pic: 'http://devtest.qiniudn.com/あっちゅ～ま青春!.jpg'
        },
        {
            title: 'secret base~君がくれたもの~',
            author: '茅野愛衣',
            url: 'http://devtest.qiniudn.com/secret base~.mp3',
            pic: 'http://devtest.qiniudn.com/secret base~.jpg'
        },
        {
            title: '回レ！雪月花',
            author: '小倉唯',
            url: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
            pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg'
        }
    ]
});
ap2.on('play', function () {
    console.log('play');
});
ap2.on('play', function () {
    console.log('play play');
});
ap2.on('pause', function () {
    console.log('pause');
});
ap2.on('canplay', function () {
    console.log('canplay');
});
ap2.on('playing', function () {
    console.log('playing');
});
ap2.on('ended', function () {
    console.log('ended');
});
ap2.on('error', function () {
    console.log('error');
});

ap1.init();

