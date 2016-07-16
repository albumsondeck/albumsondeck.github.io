var ap1 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#0000ff',
    preload: 'metadata',
    music: [
        {
            title: 'Butterflies',
            author: 'Andy Stott',
            url: 'electronic/butterflies.mp3',
            pic: 'img/andystott.jpg'
        },
        {
            title: 'Innocent Love',
            author: 'Oliver Coates',
            url: 'electronic/innocentlove.mp3',
            pic: 'img/olivercoates.jpg'
        },
      
        {
            title: 'GO (with Tirzah)',
            author: 'Micachu',
            url: 'electronic/go.mp3',
            pic: 'img/michachu.jpg'
        },
        {
            title: 'Annul',
            author: 'Ed Harrison',
            url: 'electronic/annul.mp3',
            pic: 'img/edharrison.jpg'
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

