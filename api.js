
const names = {
    1: 'IU',
    2: 'yuna',
    3: 'yuqi',
    4: 'hee jin',
    5: 'mi yeon',
    6: 'kha han',
    7: 'phuong ngan',
    8: 'thuy linh',
    9: 'vu thi khanh huyen',
}

const categorys = {
    1: 'Beautiful girl',
    2: 'idol k-pop',
    3: 'game',
    4: 'poster',
    5: 'film',
    6: 'actor',

}

const dataImg = [
    {
        id: 1,
        name: names[1],
        category: [categorys[1], categorys[2], categorys[6]],
        src: 'https://i.pinimg.com/564x/d6/4a/86/d64a86c25d26a18cdfad916ddaa16e43.jpg'
    },
    {
        id: 2,
        name: names[1],
        category: [categorys[1], categorys[2], categorys[6]],
        src: 'https://f18-zpg.zdn.vn/2736332357556461257/000e79d78bf87ca625e9.jpg'
    },
    {
        id: 3,
        name: names[1],
        category:[categorys[1], categorys[2], categorys[6]],
        src: 'https://f41-zpg.zdn.vn/3166378426295995546/d36f7f8e8da17aff23b0.jpg'
    },
    {
        id: 4,
        name: names[1],
        category: [categorys[1], categorys[2], categorys[6]],
        src: 'https://i.pinimg.com/564x/d6/22/0d/d6220d80f2ebf1655225186d1d4bc9d5.jpg'
    },
    {
        id: 5,
        name: names[4],
        category:[categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/b2/3c/ef/b23cefecccfe85909320714f10ce5ec8.jpg'
    },
    {
        id: 6,
        name: names[4],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/55/c9/7b/55c97b3eda7b88fe39a548b461b0a151.jpg'
    },
    {
        id: 7,
        name: names[5],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/db/8e/ec/db8eec1b3a5c53f065d29752cd10168c.jpg'
    },
    {
        id: 8,
        name: names[2],
        category:[categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/6f/70/77/6f7077fb96b0a481bbc704efd307f865.jpg'
    },
    {
        id: 9,
        name: 'Doctor strange',
        category:[categorys[4],categorys[5]],
        src: 'https://i.pinimg.com/564x/fc/fb/b8/fcfbb8e32f779d3e39e33825b87c8175.jpg'
    },
    {
        id: 10,
        name: 'Kha han',
        category: [categorys[1]],
        src: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/166241985_2855738538025699_3341946107539893583_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=PyCIFBu1xLgAX-FDX2Y&_nc_ht=scontent-xsp1-3.xx&oh=f54b9712e93388ef7adbf489a89e9ff9&oe=612C8E01'
    },
    {
        id: 11,
        name: names[2],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/00/83/d4/0083d40d87a455ede9954bd262020a5a.jpg'
    },
    {
        id: 12,
        name: names[1],
        category:[categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/c7/94/0b/c7940bac0670687aed71495a9803c4a1.jpg'
    },
    {
        id: 13,
        name: names[2],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/20/b4/c4/20b4c4f11ad3b22ca5ba5d9f1f6136aa.jpg'
    },
    {
        id: 14,
        name: names[3],
        category:[categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/4e/28/71/4e28715334e4202b8198c9ea8df8261f.jpg'
    },
    {
        id: 15,
        name: names[3],
        category:[categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/1b/08/6c/1b086c4233b4621c2d62e5d1fdc79de3.jpg'
    },
    {
        id: 16,
        name: names[2],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/a6/1e/22/a61e22ac7895944c36aa0a2bb27b2489.jpg'
    },
    {
        id: 17,
        name: names[4],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/a2/bd/5a/a2bd5acd2d19b14577efc58df47c7cf0.jpg'
    },
    {
        id: 18,
        name: 'phuong ngan',
        category: [categorys[1]],
        src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/102730183_1361084950759535_3304245744427977181_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=N2shy5v6ybAAX-0sRso&tn=iwpLnBEHADVMhIWN&_nc_ht=scontent-hkt1-1.xx&oh=640142293617fd27f60900b54679f722&oe=612B3A5A'
    },
    {
        id: 19,
        name: names[2],
        category: [categorys[1]],
        src: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/119663234_330101524721023_2273985977509110839_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=To2yO-WxgpwAX8YpVMg&_nc_ht=scontent.fsgn5-6.fna&oh=95a1d1cc579dcb88d19fdbb06acc022a&oe=612B5A3F'
    },
    {
        id: 20,
        name: names[8],
        category: [categorys[1]],
        src: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/159844830_1424399811233617_4679297703946795463_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z9m_pLoIJ_UAX8FrldD&_nc_ht=scontent.fsgn8-1.fna&oh=6469f4ca85ff81ad7c6e3dd0c2f8f0b0&oe=612C5455'
    },
    {
        id: 21,
        name: names[9],
        category: [categorys[1]],
        src: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/228132283_351471873332526_2083963259859167035_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=825194&_nc_ohc=w3MkWV1jMEEAX8CgNoY&_nc_ht=scontent.fsgn3-1.fna&oh=f9179fc27bf124ffe836541a1e72b138&oe=612D7C69'
    },
    {
        id: 22,
        name: names[8],
        category: [categorys[1]],
        src: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/124848785_1335960793410853_193957594087227736_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=M-r3nfAPpKcAX9xItYd&_nc_ht=scontent.fsgn8-1.fna&oh=c2a4a54c2e98bdd1422ca5971cb063e7&oe=612CC13E'
    },
    {
        id: 23,
        name: names[3],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/58/dd/ab/58ddab98bd23d5b3d2ac7841afa8512e.jpg'
    },
    {
        id: 24,
        name:names[2],
        category: [categorys[1], categorys[2]],
        src: 'https://i.pinimg.com/564x/c1/58/fc/c158fcb48928fd7f6e1dfac2b09a3c67.jpg'
    },
]

const colors = ['blue','green','yellow','orange','pink']
