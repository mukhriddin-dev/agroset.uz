const app = Vue.createApp({
    data(){
        return {
            tasks:[
                {
                    id:"#12211",
                    user:"Mukhriddin Khodiev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#1233",
                    user:"G'olibjon Narzullayev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#2312",
                    user:"Diyorbek Jo'rayev",
                    comment:"Reja jarayonda",
                    status: 'warning',
                },
                {
                    id:"#433",
                    user:"Temurbek Uralov",
                    comment:"Oylik reja bajarilmadi",
                    status: 'danger',
                },
                {
                    id:"#4133",
                    user:"Saidalixon Sobirov",
                    comment:"Jarayonda",
                    status: 'warning',
                },
                {
                    id:"#6133",
                    user:"Mirkomilxon Sobirov",
                    comment:"bajarildi",
                    status: 'success',
                },
                {
                    id:"#12211",
                    user:"Mukhriddin Khodiev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#1233",
                    user:"G'olibjon Narzullayev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#2312",
                    user:"Diyorbek Jo'rayev",
                    comment:"Reja jarayonda",
                    status: 'warning',
                },
                {
                    id:"#433",
                    user:"Temurbek Uralov",
                    comment:"Oylik reja bajarilmadi",
                    status: 'danger',
                },
                {
                    id:"#4133",
                    user:"Saidalixon Sobirov",
                    comment:"Jarayonda",
                    status: 'warning',
                },
               
            ],
            navs:[
                {
                    nomi: "Aloe vera",
                    turi: "Sukkulent",
                    types: "O'simlik",
                    years: 1930,
                    maxsusliklar: ["dermatitni davolash", "lazza qilish"],
                    rasmiy_veb: "https://www.aloevera.com/",
                    status:'success'
                },
                {
                    nomi: "Orhideya",
                    turi: "Orkideyagiller",
                    types: "O'simlik",
                    years: 1870,
                    maxsusliklar: ["dekorativ o'simlik", "olenlar bog'ida foydalanish"],
                    rasmiy_veb: "https://www.orchidweb.com/",
                    status:'success'
                },
                {
                    nomi: "Yongoq",
                    turi: "Solanaceae",
                    types: "O'simlik",
                    years: 1700,
                    maxsusliklar: ["yengilg'ushlar bog'ida ishlatiladi", "ishlab chiqarishda foydalaniladi"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Tomato",
                    status:'success'
                },
                // Yana 7 ta o'simlikni qo'shing...
                {
                    nomi: "Kaktus",
                    turi: "Sukkulent",
                    types: "O'simlik",
                    years: 1753,
                    maxsusliklar: ["ko'p turdagi shakllari", "issiq va quru iklimda yaxshi o'sadi"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Cactus",
                    status:'warning',
                    
                },
                {
                    nomi: "Palmiyalar",
                    turi: "Arecaceae",
                    types: "Daraxt",
                    years: '80 million yil avval',
                    maxsusliklar: ["quru iklimni yaxshi sog'laydi", "mumkin bo'lgan daraxtli bo'lib oladi"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Palm_tree",
                    status:'success'
                },
                {
                    nomi: "Lavanda",
                    turi: "Lavandula",
                    types: "O'simlik",
                    years: '600 yil avva',
                    maxsusliklar: ["mo'jizaviy nafas ko'rsatkichi", "dorilar qilishda foydalaniladi"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Lavandula",
                    status:'warning'
                },
                {
                    nomi: "O'lcha",
                    turi: "Malus",
                    types: "Daraxt",
                    years: '900 yil avval',
                    maxsusliklar: ["mevalar", "yengilg'ushlar uchun joylashgan"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Apple",
                    status:'danger'
                },
                {
                    nomi: "Qara o'simlik",
                    turi: "Blackflower",
                    types: "O'simlik",
                    years: 2019,
                    maxsusliklar: ["o'zgacha rangi", "sog'liqni yaxshilash uchun foydali"],
                    rasmiy_veb: "https://www.blackflower.org/",
                    status:'danger'
                },
                {
                    nomi: "Buxoro guli",
                    turi: "Rosa",
                    types: "O'simlik",
                    years: '14 million yil avval',
                    maxsusliklar: ["qahramonlik va ishqni ifodalovchi", "shirinbozlik uchun"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Rose",
                    status:'danger'
                },
                {
                    nomi: "Sandal daraxti",
                    turi: "Santalum album",
                    types: "Daraxt",
                    years: '300 yil avval',
                    maxsusliklar: ["bo'ribo'zilikka qarshi ishlatiladi", "nafas olish ko'rsatkichi"],
                    rasmiy_veb: "https://en.wikipedia.org/wiki/Santalum_album",
                    status:'success'
                }
            ]
        
 
           
        }
    }
});


app.mount("#root");