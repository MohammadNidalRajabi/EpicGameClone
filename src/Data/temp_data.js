const TEMP_USERS = [{
    "id": 1,
    "fullName": "Sophia Minillo",
    "gender": "Female",
    "email": "admin@vsn.com",
    "password": "123456",
    "role": "admin",
    "imageURL": null
  }, {
    "id": 2,
    "fullName": "Brennan Wittrington",
    "gender": "Male",
    "email": "user1@vsn.com",
    "password": "123456",
    "role": "user",
    "imageURL": null
  }, {
    "id": 3,
    "fullName": "Johnathon Pashen",
    "gender": "Male",
    "email": "user2@vsn.com",
    "password": "123456",
    "role": "user",
    "imageURL": null
  }
]
const TEMP_GAMES = 
[
    {
        id: 1,
        game_name: "God of War",
        game_description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        game_img: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640",
        game_discount: "-40%",
        game_price: "29.99",
        game_price_after_discount: "$49.99",
        game_categore:"Action" ,
        game_state: "NotFree",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-01-1920x1080-c84d2a96aea3.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-02-1920x1080-f7c6fef5c876.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-g1a-03-1920x1080-65b80475ae32.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 2,
        game_name: "Goat Simulator 3",
        game_description: "Pilgor’s baaack! Gather your herd and venture forth into Goat Simulator 3; an all-new, totally realistic, multiplayer sandbox farmyard experience.",
        game_img: "https://cdn1.epicgames.com/offer/50bbaf85f4454b1c88786efeede5b302/EGS_GoatSimulator3_CoffeeStainNorthAB_S2_1200x1600-99737fa8a749438ca909c776a4cd9b89?h=854&resize=1&w=640",
        game_discount: "-30%",
        game_price: "$23.99",
        game_price_after_discount: "$50.99",
        game_categore:"Adventure" ,
        game_state: "NotFree",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-goatsimulator3-coffeestainnorthab-g1a-02-1920x1080-e0b1ebab60b5.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-goatsimulator3-coffeestainnorthab-g1a-01-1920x1080-889de8217b77.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-goatsimulator3-coffeestainnorthab-g1a-00-1920x1080-079955a0369c.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 3,
        game_name: "FIFA 23",
        game_description: "Experience the excitement of the biggest tournament in football with EA SPORTS™ FIFA 23 and the men’s FIFA World Cup™ update, available on November 9 at no additional cost*.",
        game_img: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-fc5180814a7ade91d41b35798579946a?h=854&resize=1&w=640",
        game_discount: "-10%",
        game_price: "$60.99",
        game_price_after_discount: "$90.99",
        game_categore:"Simulation" ,
        game_state: "NotFree",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-03-1920x1080-d2f64518bc93.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1c-00-1920x1080-beb929bf84c7.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-04-1920x1080-34243940a09b.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 4,
        game_name: "Marvel's Spider-Man Remastered",
        game_description: "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original, action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.",
        game_img: "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S2_1200x1600-76424286902489f4d9639ac9b735c2b2?h=854&resize=1&w=640",
        game_discount: "-30%",
        game_price: "$59.99",
        game_price_after_discount: "$44.99",
        game_categore:"Adventure" ,
        game_state: "NotFree",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-01-1920x1080-89160030c92b.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-05-1920x1080-d101cafea3fe.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 5,
        game_name: "Cyberpunk 2077",
        game_description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
        game_img: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=854&resize=1&w=640",
        game_discount: "-50%",
        game_price: "$59.99",
        game_price_after_discount: "$29.99",
        game_categore:"Open World" ,
        game_state: "NotFree",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-06-02-24-22-1920x1080-b5a2e4e8e86e.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 6,
        game_name: "Red Dead Redemption 2",
        game_description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.",
        game_img: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=854&resize=1&w=640",
        game_discount: "-67%",
        game_price: "$59.99",
        game_price_after_discount: "$19.79",
        game_categore:"Open World",
        game_state: "NotFree",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-goatsimulator3-coffeestainnorthab-g1a-02-1920x1080-e0b1ebab60b5.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-goatsimulator3-coffeestainnorthab-g1a-01-1920x1080-889de8217b77.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-goatsimulator3-coffeestainnorthab-g1a-00-1920x1080-079955a0369c.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 7,
        game_name: "Fall Guys",
        game_description: "Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
        game_img: "https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S2_1200x1600-2e38803ef15ce35fbafd7875b46a0cc9?h=854&resize=1&w=640",
        game_discount: "",
        game_price: "",
        game_price_after_discount: "",
        game_categore:"Party",
        game_state: "Free",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-01-1920x1080-6b63a2096380.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-00-1920x1080-cd00389953e7.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-02-1920x1080-0d0c2371077c.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 8,
        game_name: "Fortnite",
        game_description: "Grab all of your friends and drop into Epic Games' Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos. The result is a completely unpredictable competitive online experience that gets bigger and even wilder with every new season.",
        game_img: "https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S2_1200x1600-2e38803ef15ce35fbafd7875b46a0cc9?h=854&resize=1&w=640",
        game_discount: "",
        game_price: "",
        game_price_after_discount: "",
        game_categore:"Shooter",
        game_state: "Free",
        game_img_group:[
            "https://cdn2.unrealengine.com/en-23br-zerobuild-1p-1920x1080-1920x1080-7bb21824d768.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/01-cinematicstill007-3840x2160-3840x2160-7a8c3ecb0909.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/04-gameplaystill001-3840x2160-3840x2160-e58f693f522e.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 9,
        game_name: "LEGO® Builder's Journey",
        game_description: "LEGO Builder’s Journey is an atmospheric, geometric puzzle game that asks us to sometimes follow the instructions… and sometimes to break the rules.",
        game_img: "https://cdn1.epicgames.com/offer/2579ddfa98e94a18aff45d1525f666d4/EGS_LEGOBrawls_RedGamesCo_S2_1200x1600-403d920a29bdedbe610d23e06dc657f0?h=854&resize=1&w=640",
        game_discount: "",
        game_price: "",
        game_price_after_discount: "",
        game_categore:"Puzzle",
        game_state: "Free",
        game_img_group:[
            "https://cdn2.unrealengine.com/egs-legobuildersjourney-lightbrickstudio-g1a-02-1920x1080-c9915aaabaf4.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-legobuildersjourney-lightbrickstudio-g1a-03-1920x1080-9a62e43bb1c3.jpg?h=270&resize=1&w=480",
            "https://cdn2.unrealengine.com/egs-legobuildersjourney-lightbrickstudio-g1a-05-1920x1080-341c84c684b9.jpg?h=270&resize=1&w=480"

        ],
      },
      {
        id: 10,
        game_name: "Bloons TD 6",
        game_description: "Mega Popular Tower Defense Game",
        game_img: "https://cdn1.epicgames.com/offer/2579ddfa98e94a18aff45d1525f666d4/EGS_LEGOBrawls_RedGamesCo_S2_1200x1600-403d920a29bdedbe610d23e06dc657f0?h=854&resize=1&w=640",
        game_discount: "-50%",
        game_price: "$6.99",
        game_price_after_discount: "$3.49",
        game_categore:"Strategy",
        game_state: "Free",
        game_img_group:[
            "https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-nknoh.png?h=270&resize=1&w=480",
            "https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-1u12g.png?h=270&resize=1&w=480",
            "https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-ivoqn.png?h=270&resize=1&w=480"

        ],
      },
]

  
  export {
    TEMP_USERS,
    TEMP_GAMES
  }