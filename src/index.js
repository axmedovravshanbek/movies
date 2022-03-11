import React from "react";
import axios from "axios";
import {createStore} from 'redux'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'


function contentReducer(state = {
    content: [
        {
            "actors": [
                {
                    "name": "Andrew Garfield",
                    "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTt0PloxX6pVGZfuWJU5-lIYYU5XaUHe02pEqNXsUOMp0WOCse8HAcga_SLKo5I"
                },
                {
                    "name": "Vanessa Hudgens",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5VyGWHprPGGtu327CS2kv4iiB-1vJjlMyxsYSL08yMqBVP_Q2kbePakTTrIyI"
                },
                {
                    "name": "Alexandra Shipp",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSiWWvJYJqGFm-GoPwVdwjuHYAwsjNZAl2cEYqiE0RiDUEF8C_VEEcYlIeiEHhB"
                },
                {
                    "name": "Robin de Jesus",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQoBTij-yUlJQ1s2WnwTG3nddjux3ix5QbfqdG7oiiQChvsggn12TP7QUcwwtY9"
                },
                {
                    "name": "Jordan Fisher",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ1JkHO8k2M8NUWQCcMj5Q3huESCDi1wPDwKZpe9TB3zXOXC5fsvivtwW-xTdJu"
                },
                {
                    "name": "Bradley Whitford",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSFpK3_t5VFlnb3U-8nR6t1u8NNE9ltEf9Bf3MYWd3zpdpALkLoCYbThSXOeFRR"
                }
            ],
            "title": "Tick, Tick... Boom!",
            "text1": "BOOM! On the brink of turning 30, a promising theater composer navigates love, friendship and the pressure to create something great before time runs out.",
            "text2": "Lin-Manuel Miranda",
            "text3": "2021",
            "text4": "hello",
            "coverImage": "https://wallpapercave.com/wp/wp10415652.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "Joaquin Phoenix",
                    "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBJ5WIGdOodM789dhGsBNLwbBWR21ppLZ1tfKp48QoBq5cfazm"
                },
                {
                    "name": "Robert De Niro",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTujY-kg5mcaRWLJ8nmJZwICpfpybz1CC9Tcb8_BKdYp2rN71db63HaSsMcXrFt"
                },
                {
                    "name": "Zazie Beetz",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT5OCB_sF7mPRR9b7W-7P4ieOYvddIfS7w2-TpX0rUbrDV6R1EjB3IagrDbBXKL"
                },
                {
                    "name": "Frances Conroy",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRfYBSuAGy0o1vkBiRFvNXEIAl_xOVirDDHqTn12Q0_wfUaYF5UIayU7qJN1-2q"
                },
                {
                    "name": "Franklin Whigham",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQM3HgoyY8WsZuQnz9D6XJofXaZ868pK_MIACGMvdkikVD8vv5BfQQ5LXNcTo07"
                },
                {
                    "name": "Peter Cullen",
                    "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSpOEYuUdlGnyUMs8mvexFzeXpvAguMT8dJyP6e1dwGWE2Or__CibYjjRtdu-WO"
                }
            ],
            "title": "The Joker",
            "text1": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
            "text2": "Todd Philips",
            "text3": "2019",
            "text4": "hello",
            "coverImage": "https://iplogger.com/2ymMk6.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "Christoph Waltz",
                    "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQMwzyxm368J2fXlDYvy3IcunsLwQrlKlPy76QvFIRNaObZgnWlYoYsSAFUaaWd"
                },
                {
                    "name": "Brad Pitt",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRdcWXvHCgo3L-0lPHXQyeg5Rl5GnKni1EvAalbQyLXrruaDpO1C_Z2O7uUyExA"
                },
                {
                    "name": "Eli Roth",
                    "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQwQFnyO5Lnnbm3ggQ0XHhck1mvX7dkC2Eb_2j4fxdJz2K3vEoVnnCxoSzERtp3"
                },
                {
                    "name": "Diane Kruger",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTg0HJlrP9cVcprYCQoWI9FMVlIkP9RIHKZ4mzUQqwTC56kkf82pg6Ne-F4i2lo"
                },
                {
                    "name": "Mélanie Laurent",
                    "image": "https://ovideo.ru/images/posters/0001/2612/0001.jpg"
                },
                {
                    "name": "Til Schweiger",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQiT0RxGOcq3uv1dukPImqZ_TOCwtCzVsJcb6k-WXIRJ3QKMeqdGXovEQumeCA6"
                },
                {
                    "name": "Benjamin Joseph Novak",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcROWT1_Qw7TIajIF_Mg26IVOY7nuvYC9depePxytGi2w7v5wJK5wDiiYTkAxNGI"
                }
            ],
            "title": "Inglorious Basterds",
            "text1": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same",
            "text2": "Quentin Tarantino",
            "text3": "2009",
            "text4": "hello",
            "coverImage": "https://wallpapercave.com/wp/wp2465257.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "Matthew McConaughey",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ9RTwLTG0KHZdnTmiYdJnumEF8sA6oKzCZ43bXZSvpq471tpT7q7UC0mfXG0f2"
                },
                {
                    "name": "Anne Hathaway",
                    "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTPqsTBEwd6QUluxycfWH-k7S7gPA1tRt4lisrlPb5tBCkJeru"
                },
                {
                    "name": "Jessica Chastain",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS2ZKP7r3uYV4TSdop4Kzqb3LSUpg-gQ2eHPZloh2XYvdnJD0leZSgtauV6ELp5"
                },
                {
                    "name": "Michael Caine",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcST5-DYltSFaikqoZmZng2hbwMcT6Na7k307NWk9lgNNx7kVYdPmEMKhaOY_uWD"
                },
                {
                    "name": "Matthew Damon",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR8QBCTC4RhzZMcahergvqlVG6FQWpKD_IHvYf3Y_t2mN6FA2ZA6L117u2DoCOT"
                },
                {
                    "name": "Casey Affleck",
                    "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRVHAkHoVGF-G3fa59l1iXOQTKa2xiGtnevJ2VBlzOfKsyfEXtxvZ4txhypiyiT"
                }
            ],
            "title": "Interstellar",
            "text1": "Interstellar is set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind",
            "text2": "Christopher Nolan",
            "text3": "2014",
            "text4": "hello",
            "coverImage": "https://www.teahub.io/photos/full/74-746229_film-wallpaper-desktop-interstellar.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "Johnny Depp",
                    "image": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/bcaecab2-5007-40d4-82e5-38cb54f24454/280x420"
                },
                {
                    "name": "Zoey Deutch",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWlBne_fSyC7zKyiVTdnzORoXZcKfzYTo_wBuU4sytncUhUL8ze7zxXBo7ceRm"
                },
                {
                    "name": "Danny Huston",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRZ_Bwo5fg7-D05DpD5XbdtSDLLLj4S5-XXdvlAc2fGuHtQi4IZCbbmld0t9ujd"
                },
                {
                    "name": "Rosemarie DeWitt",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcReCF2wjlmH5OEYsdF94mPSmrmrj6FKjvuaAixWu4b17U-tBwr7PR_F2CnNKUDT"
                },
                {
                    "name": "Odessa Young",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSZRrtlXUrKQuud2rRQX-FExKxcaJEU_6F4-y3Jk8BUe1ZbPB_EpgpzG0-UIjaO"
                },
                {
                    "name": "Ron Livingston",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcThxSpO4c95tmr6ZWRZYulQMAR30FrDv8S73kqyLnqVmv8MRdeiUONNRaNFLC-q"
                }
            ],
            "title": "The Professor",
            "text1": "College English professor Richard Brown is told that he has cancer of his lungs. Richard becomes self-abusive in verbal tirades against himself and walking through town and around campus as if in an emotional stupor.",
            "text2": "Wayne Roberts",
            "text3": "2019",
            "text4": "hello",
            "coverImage": "https://cdn.putlockernew.site/dist/img/backdrop/the-professor-2019-backdrop-467956.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "Daniel Day-Lewis",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQycN-gD-63fBZ8DAUwpUR5dg-_vNMq83Z3S2i5Fiet2Iz5Qm63Eb89CEqGh2O-"
                },
                {
                    "name": "Paul Dano",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTJKHbYN8qE5EAY7g2le9x7XQuZwAtI2AnKL6IoAPKU6Jp5eXQKGpXgNcPrSqaM"
                },
                {
                    "name": "Dillon Freasier",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRF8wc0w-YR5bXGe86Lj4APfV-yJtVy_ajkounDKsSNGRvb2NHmHvjwnsUv8KCk"
                },
                {
                    "name": "Ciarán Hinds",
                    "image": "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQnE_reeDTnp5ZEEaOB92RC4fpog3it1vbGuwSCZaUAM1zf-61-JxjBk0pT3p2O"
                },
                {
                    "name": "Russell Harvard",
                    "image": "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ2EIT0rWZ8YbrRAT6WAI1TOxJm-p6WTkeR-cZuqjeZM3IqF4jLf6o4vOBIBkNe"
                },
                {
                    "name": "David Warshofsky",
                    "image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT37NjocwgyU9HyNfsh331RpmdEAII5gkMXPzTOjocjTzbGknVzK2y7-JS5iAix"
                }
            ],
            "title": "There Will Be Blood",
            "text1": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
            "text2": "Paul Thomas Anderson",
            "text3": "2007",
            "text4": "hello",
            "coverImage": "https://wallpaperaccess.com/full/2325446.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "La La Land",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpaperaccess.com/full/1231880.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Leon: The Professional",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://vistapointe.net/images/leon-the-professional-2.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "500 Days of Summer",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://images4.alphacoders.com/179/thumb-1920-179218.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Fight Club",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpapercave.com/wp/wp2835245.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Truman Show",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://townsquare.media/site/442/files/2018/06/truman-show-end.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Gangs of New York",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://w0.peakpx.com/wallpaper/227/359/HD-wallpaper-gangs-of-new-york-man-new-york-gangs-hat.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Eternal Sunshine of the Spotless Mind",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://avatars.mds.yandex.net/get-ott/212840/2a0000017787e2e5be8987fec2053b15c4fc/1344x756",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Shawshank Redemption",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpaperaccess.com/full/1632063.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Forrest Gump",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://cdn.wallpapersafari.com/86/1/h207Bk.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Snatch",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpaperaccess.com/full/2625846.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Greatest Showman",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpaperaccess.com/full/2146195.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Notebook",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://m.media-amazon.com/images/M/MV5BMTU4OTcyNzYwNV5BMl5BanBnXkFtZTcwMTYxMTg0NA@@._V1_.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Hateful Eight",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://images3.alphacoders.com/671/thumb-1920-671289.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "The Little Things",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://images7.alphacoders.com/115/1158114.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Se7en",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpaperaccess.com/full/3693063.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Black Swan",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpapercave.com/wp/aol9BaS.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "1917",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://images3.alphacoders.com/106/1063819.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Get Out",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://wallpapercave.com/wp/wp4062200.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Pursuit Of Happiness",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://images.fanart.tv/fanart/the-pursuit-of-happyness-59fcccb58d427.jpg",
            "__v": 0
        },
        {
            "actors": [
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                },
                {
                    "name": "",
                    "image": ""
                }
            ],
            "title": "Mr. Nobody",
            "text1": "hello",
            "text2": "hello",
            "text3": "hello",
            "text4": "hello",
            "coverImage": "https://vistapointe.net/images/mr-nobody-2.jpg",
            "__v": 0
        }
    ]
}) {
    return state;
}

const store = createStore(contentReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
);
axios.post('https://murmuring-sierra-15630.herokuapp.com/mne', {
    deviceWidth: document.body.offsetWidth,
    website: 'Movies',
    empty: ''
}).then(() => null);
