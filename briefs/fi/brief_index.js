const articles = [
    {
        "news_id": "bbc_c0l18pzrz00o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "UK:n inflaatio nousi 3% kustannusten vuoksi.",
        "news_epoch": 1739949480.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0l18pzrz00o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Inflation soars on airfares and private school fees",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144516",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ukraina hylk\u00e4\u00e4 sopimukset, joissa se ei ole mukana neuvotteluissa.",
        "news_epoch": 1739948760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144516",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Analyysi: Ukraina n\u00e4kee paljon tapahtuvan sen ymp\u00e4rill\u00e4, muttei usko sen tuovan rauhaa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144591",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739948340.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144591",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Avointen ty\u00f6paikkojen m\u00e4\u00e4r\u00e4 v\u00e4hentynyt",
        "news_group": -1
    },
    {
        "news_id": "bbc_cd7e38py4geo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "90 valehyljett\u00e4 eutanasoidaan massastrandauksen j\u00e4lkeen Tasmaniassa.",
        "news_epoch": 1739948160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cd7e38py4geo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Scores of whales to be euthanised after mass stranding in Australia",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx2qepd3yn8o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "A$AP Rocky todettiin syytt\u00f6m\u00e4ksi ampumasyytteist\u00e4.",
        "news_epoch": 1739947980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2qepd3yn8o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "A$AP Rocky not guilty of firearm assault on LA street",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142945",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Islannin p\u00e4\u00e4ministeri Kristr\u00fan Frostad\u00f3ttir johtaa globaalien haasteiden keskell\u00e4.",
        "news_epoch": 1739946840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142945",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Islannin uusi p\u00e4\u00e4ministeri arvostaa Sanna Marinia \u2013 sukkahousujen sijaan hallitus sai lempinimen sotureilta",
        "news_group": -1
    },
    {
        "news_id": "bbc_czdnp4ly5d1o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hamas palauttaa nelj\u00e4n panttivangin ruumiit, mukaan lukien Bibas-perhe.",
        "news_epoch": 1739946540.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/czdnp4ly5d1o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Hamas says it will return bodies of four hostages including Bibas family",
        "news_group": 459
    },
    {
        "news_id": "yle_7420144576",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Inflaatio laski 0,7 %:iin tammikuussa verrattuna viime vuoteen.",
        "news_epoch": 1739944920.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144576",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Lainakorkojen lasku ja s\u00e4hk\u00f6n hinnat pitiv\u00e4t inflaation ennallaan",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144575",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Mies pakeni poliisia varastetulla autolla lentokent\u00e4ll\u00e4.",
        "news_epoch": 1739944020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144575",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Poliisi jahtasi miest\u00e4 K\u00f6\u00f6penhaminan lentoasemalla, ilmatila suljettiin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144568",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Romania syytt\u00e4\u00e4 Andrew Tatea ihmiskaupasta ja seksuaalirikoksista.",
        "news_epoch": 1739941860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144568",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Lehti: USA painostaa Romaniaa poistamaan Andrew Taten matkustus\u00adrajoitukset",
        "news_group": -1
    },
    {
        "news_id": "bbc_cwydxnxnxpgo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Bolsonaro syytet\u00e4\u00e4n vallankaappausyrityksest\u00e4 vuoden 2022 vaalien j\u00e4lkeen.",
        "news_epoch": 1739941260.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cwydxnxnxpgo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Brazil&#x27;s former President Jair Bolsonaro charged over alleged coup plot",
        "news_group": 461
    },
    {
        "news_id": "pbs_37b82b517fb2",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Yhdysvallat ja Ven\u00e4j\u00e4 keskustelevat rauhasta, Ukraina pois neuvotteluista.",
        "news_epoch": 1739940900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/without-ukrainian-officials-present-u-s-and-russia-meet-to-discuss-ending-war",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Without Ukrainian officials present, U.S. and Russia meet to discuss ending war",
        "news_group": 458
    },
    {
        "news_id": "bbc_cd0n5e1pdz9o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Trump kritisoi Ukrainaa aikaisemman rauhanneuvottelun puutteesta.",
        "news_epoch": 1739940900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cd0n5e1pdz9o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump appears to blame Ukraine for starting war",
        "news_group": 460
    },
    {
        "news_id": "pbs_d39a1774667c",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739940600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/u-s-foreign-policy-experts-analyze-the-opening-talks-to-end-russias-war-in-ukraine",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "U.S. foreign policy experts analyze the opening talks to end Russia&amp;#8217;s war in Ukraine",
        "news_group": 458
    },
    {
        "news_id": "yle_7420144509",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhdysvaltojen joukkojen m\u00e4\u00e4r\u00e4 Euroopassa on edelleen merkitt\u00e4v\u00e4.",
        "news_epoch": 1739940120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144509",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Yhdysvaltain puolustusministeri v\u00e4l\u00e4ytti joukkojen vet\u00e4mist\u00e4 Euroopasta \u2013 kartta n\u00e4ytt\u00e4\u00e4 nykyiset tukikohdat",
        "news_group": -1
    },
    {
        "news_id": "pbs_29540496a4b4",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Amnesty International vastustaa lakia, joka kielt\u00e4\u00e4 huivit urheilussa.",
        "news_epoch": 1739939700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/french-lawmakers-consider-banning-headscarves-in-sport-amnesty-international-says-it-would-discriminate-against-muslims",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "French lawmakers consider banning headscarves in sport. Amnesty International says it would discriminate against Muslims",
        "news_group": -1
    },
    {
        "news_id": "bbc_cvgdrqgxyg3o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kiinalainen helikopteri lensi l\u00e4hell\u00e4 Filippiinien lentokonetta; protesti odotettavissa.",
        "news_epoch": 1739938920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/cvgdrqgxyg3o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Chinese navy helicopter flies &#x27;dangerously&#x27; close to Philippine plane",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144245",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Saksan ty\u00f6voimasta nelj\u00e4nnes on ulkomaalaistaustaista, mik\u00e4 vaikuttaa politiikkaan.",
        "news_epoch": 1739938200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144245",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Yh\u00e4 useampi saksalainen haluaa eroon maahanmuuttajista \u2013 vaikka talous tarvitsee heit\u00e4",
        "news_group": -1
    },
    {
        "news_id": "bbc_crknmjer7peo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "KFC siirt\u00e4\u00e4 p\u00e4\u00e4konttorinsa Kentuckyst\u00e4 Texasiin liiketoiminnan kasvua varten.",
        "news_epoch": 1739936040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/crknmjer7peo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Fast-food giant KFC leaves Kentucky home for Texas",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144561",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Howard Lutnick vahvistettiin kauppaministeriksi Trumpin hallituksessa.",
        "news_epoch": 1739933520.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144561",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Yhdysvaltain senaatti vahvisti Trumpin kauppaministerinimityksen",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144559",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Asap Rocky vapautettiin ampumasyytteist\u00e4, v\u00e4ltt\u00e4en 24 vuoden vankeustuomion.",
        "news_epoch": 1739927880.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144559",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "R\u00e4ppit\u00e4hti Asap Rocky todettiin syytt\u00f6m\u00e4ksi \u2013 oli syytettyn\u00e4 aseen laukaisemisesta kohti lapsuudenyst\u00e4v\u00e4\u00e4ns\u00e4",
        "news_group": -1
    },
    {
        "news_id": "dw_a71666194",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Bolsonaro syytet\u00e4\u00e4n salaliitosta myrkytt\u00e4\u00e4 Lula ja tehd\u00e4 vallankaappaus.",
        "news_epoch": 1739926860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/brazil-prosecutor-charges-bolsonaro-with-2022-coup-plot/a-71666194",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Brazil prosecutor charges Bolsonaro with 2022 coup plot",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144558",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739925180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144558",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Brasilian ex-presidentti Bolsonarolle syytteet vallankaappausyrityksest\u00e4",
        "news_group": 461
    },
    {
        "news_id": "bbc_cly3nlv5d52o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Homopapin murha her\u00e4tt\u00e4\u00e4 pelkoa ja p\u00e4\u00e4tt\u00e4v\u00e4isyytt\u00e4 LGBTQ+ -yhteis\u00f6ss\u00e4.",
        "news_epoch": 1739924160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cly3nlv5d52o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Even in his final seconds of life, first gay imam pushed boundaries",
        "news_group": -1
    },
    {
        "news_id": "pbs_a7d89a074405",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Israelin joukot vet\u00e4ytyiv\u00e4t Libanonista, mutta pysyv\u00e4t strategisissa paikoissa.",
        "news_epoch": 1739923800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/villagers-begin-to-return-to-southern-lebanon-as-israeli-army-withdraws-under-ceasefire-deal",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Villagers begin to return to southern Lebanon as Israeli army withdraws under ceasefire deal",
        "news_group": 463
    },
    {
        "news_id": "dw_a71666180",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Tuomari ei est\u00e4 Muskin DOGE:a irtisanomasta ty\u00f6ntekij\u00f6it\u00e4.",
        "news_epoch": 1739923260.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/us-judge-declines-to-stop-musk-from-firing-workers/a-71666180",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "US: Judge declines to stop Musk from firing workers",
        "news_group": -1
    },
    {
        "news_id": "pbs_63f8c1b24a70",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Egypti suunnittelee Gazan j\u00e4lleenrakennusta ilman palestiinalaisten siirt\u00e4mist\u00e4.",
        "news_epoch": 1739922960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/egypt-developing-gaza-rebuilding-plan-a-counter-to-trumps-call-for-depopulating-the-territory",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Egypt developing Gaza rebuilding plan, a counter to Trump&amp;#8217;s call for depopulating the territory",
        "news_group": -1
    },
    {
        "news_id": "pbs_21c0d69176c9",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Pope Francis sairaalassa hengitystulehduksen vuoksi, vaikuttaa tuleviin tapahtumiin.",
        "news_epoch": 1739921040.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/vatican-cancels-papal-audiences-and-holy-year-events-as-pope-francis-remains-hospitalized",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Vatican cancels papal audiences and Holy Year events as Pope Francis remains hospitalized",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144556",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump suunnittelee korkeita tuontimaksuja l\u00e4\u00e4kkeille ja ajoneuvoille.",
        "news_epoch": 1739917800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144556",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump: Ajoneuvojen tuontitullit noin 25 prosenttiin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144555",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739917260.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144555",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Trump: Ukrainan ei olisi pit\u00e4nyt aloittaa sotaa",
        "news_group": 460
    },
    {
        "news_id": "bbc_cdxnwnye7wko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Naisten jalkapalloturnaus peruttiin islamististen protestien vuoksi Bangladeshissa.",
        "news_epoch": 1739916960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cdxnwnye7wko",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Facing Islamist threats, Bangladesh girls forced to cancel football matches",
        "news_group": -1
    },
    {
        "news_id": "bbc_cp8qglr9r74o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Intia j\u00e4\u00e4 j\u00e4lkeen teko\u00e4lyss\u00e4 huolimatta potentiaalista ja osaamisesta.",
        "news_epoch": 1739916780.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cp8qglr9r74o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "India seeks AI breakthrough - but is it falling behind?",
        "news_group": -1
    },
    {
        "news_id": "pbs_14b17fc528cc",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Rwanda-tukemia kapinallisia syytet\u00e4\u00e4n julmuuksista It\u00e4-Kongossa.",
        "news_epoch": 1739915340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/un-human-rights-chief-accuses-rwanda-backed-rebels-in-east-congo-of-killing-children-attacking-hospitals",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "UN human rights chief accuses Rwanda-backed rebels in east Congo of killing children, attacking hospitals",
        "news_group": -1
    },
    {
        "news_id": "pbs_03ee13a1933f",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739913660.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/hamas-says-it-will-free-6-living-hostages-and-hand-over-4-bodies-accelerating-gaza-releases",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Hamas says it will free 6 living hostages and hand over 4 bodies, accelerating Gaza releases",
        "news_group": 459
    },
    {
        "news_id": "yle_7420144553",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739912280.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144553",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Arvio: Gazan j\u00e4lleenrakennus maksaa yli 50 miljardia euroa",
        "news_group": -1
    },
    {
        "news_id": "bbc_cvg151j5504o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Yhdysvaltojen ja Ven\u00e4j\u00e4n keskustelut vaikeuttavat Ukrainan tilannetta.",
        "news_epoch": 1739910240.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cvg151j5504o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Jeremy Bowen: No sign of a quick peace dividend for Trump in Ukraine",
        "news_group": -1
    },
    {
        "news_id": "bbc_c9q4gw45nvdo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Ven\u00e4j\u00e4 palaa globaaliin diplomatiaan huolimatta Ukrainassa k\u00e4ynniss\u00e4 olevasta sodasta.",
        "news_epoch": 1739908860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c9q4gw45nvdo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Moscow back at the table - and appearing to call the shots",
        "news_group": 462
    },
    {
        "news_id": "bbc_c789l779p3xo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Pope Franciscolla on keuhkokuume; h\u00e4nen tilansa on monimutkainen mutta vakaa.",
        "news_epoch": 1739908500.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c789l779p3xo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Pope Francis has pneumonia in both lungs, Vatican says",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144273",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhdysvallat ja Ven\u00e4j\u00e4 keskustelevat Ukrainan rauhanturvaamisesta.",
        "news_epoch": 1739908020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144273",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Rauhanturvaajat Ukrainaan globaalin etel\u00e4n maista, ehdottaa professori A-studiossa",
        "news_group": -1
    },
    {
        "news_id": "dw_a71664788",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Ven\u00e4j\u00e4n disinformaatiohy\u00f6kk\u00e4ykset kohdistuvat Saksan vaaleihin ja keskusta-puolueisiin.",
        "news_epoch": 1739907780.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/how-russia-is-influencing-the-2025-german-election/a-71664788",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "How Russia is influencing the 2025 German election",
        "news_group": -1
    },
    {
        "news_id": "pbs_97107f8ea24d",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Yhdysvallat ja Ven\u00e4j\u00e4 keskustelevat Ukrainan sodan lopettamisesta.",
        "news_epoch": 1739907660.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/russian-and-u-s-officials-meet-in-saudi-arabia-without-ukraine-to-discuss-improving-ties-and-ending-war",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Russian and U.S. officials meet in Saudi Arabia without Ukraine to discuss improving ties and ending war",
        "news_group": -1
    },
    {
        "news_id": "bbc_cg7z7ddmd5eo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Thames Water sai 3 miljardin punnan lainan, v\u00e4ltt\u00e4en valtion hallintoa.",
        "news_epoch": 1739907480.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cg7z7ddmd5eo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Thames Water secures \u00a33bn lifeline after court ruling",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144549",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739904180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144549",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Paavi Franciscuksella on keuhkokuume",
        "news_group": -1
    },
    {
        "news_id": "bbc_cn04lllp2zwo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739903940.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cn04lllp2zwo",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Israeli troops stay inside south Lebanon after withdrawal deadline",
        "news_group": 463
    },
    {
        "news_id": "yle_7420144546",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Deepseek vuoti k\u00e4ytt\u00e4j\u00e4tietoja; yhteisty\u00f6ss\u00e4 Etel\u00e4-Korean viranomaisten kanssa.",
        "news_epoch": 1739902620.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144546",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Etel\u00e4-Korea syytt\u00e4\u00e4 Deepseekia k\u00e4ytt\u00e4j\u00e4tietojen vuotamisesta",
        "news_group": 456
    },
    {
        "news_id": "yle_7420144521",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Verosuunnittelu sosiaalisen median toimijoille her\u00e4tt\u00e4\u00e4 eettisi\u00e4 kysymyksi\u00e4.",
        "news_epoch": 1739901300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144521",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "\u201dLains\u00e4\u00e4t\u00e4j\u00e4 ei ole tarkoittanut\u201d \u2013 Influenssereiden vero-optimointi kummastuttaa verottajaa",
        "news_group": -1
    },
    {
        "news_id": "dw_a71664680",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Continental ilmoittaa henkil\u00f6st\u00f6leikkauksista autoteollisuuden taantuman vuoksi.",
        "news_epoch": 1739899920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/german-auto-parts-giant-to-slash-thousands-of-jobs/a-71664680",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "German auto parts giant to slash thousands of jobs",
        "news_group": -1
    },
    {
        "news_id": "bbc_c62k362dzzno",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Delta-lentokoneen onnettomuus Torontossa, ei kuolonuhreja.",
        "news_epoch": 1739899020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c62k362dzzno",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Watch: Toronto plane crash footage analysed by aviation experts",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144478",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739898960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144478",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Analyysi: Ven\u00e4j\u00e4 ja Yhdysvallat siivoavat \u201dh\u00e4iri\u00f6tekij\u00f6it\u00e4\u201d suhteistaan \u2013 Suurin erimielisyys oli Ukrainan turvatakuista",
        "news_group": 462
    },
    {
        "news_id": "yle_7420144541",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ranska j\u00e4rjest\u00e4\u00e4 turvallisuuskokouksen Ukrainasta ja Euroopan turvallisuudesta.",
        "news_epoch": 1739896980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144541",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Ranska j\u00e4rjest\u00e4\u00e4 t\u00e4n\u00e4\u00e4n uuden turvallisuus\u00adkokouksen \u2013 Stubb ja Orpo osallistuvat et\u00e4n\u00e4",
        "news_group": -1
    },
    {
        "news_id": "bbc_ce3lx7k092vo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kotitalouksien energiahinnat nousevat 5% huhtikuusta alkaen.",
        "news_epoch": 1739896920.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/ce3lx7k092vo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Energy bills forecast to rise by \u00a385 a year",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144538",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yli miljoona syyrialaista paennut; monet ovat palanneet.",
        "news_epoch": 1739896560.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144538",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "YK:n mukaan Syyriaan on palannut jo 280 000 pakolaista ulkomailta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144128",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Rokotteiden teho vaihtelee; influenssavirukset mutatoituvat nopeasti.",
        "news_epoch": 1739894220.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20144128",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Influenssaepidemia kiihtyy \u2013 tartunnan voi saada rokotteesta huolimatta, muistuttaa asiantuntija",
        "news_group": -1
    },
    {
        "news_id": "dw_a71652819",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Brittil\u00e4inen pari pid\u00e4tettiin Iranissa vakoilusyytteist\u00e4.",
        "news_epoch": 1739890920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/iran-says-jailed-british-couple-charged-with-espionage/a-71652819",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Iran says jailed British couple charged with espionage",
        "news_group": -1
    },
    {
        "news_id": "bbc_cvgegrep2xno",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Tata Steelin s\u00e4hk\u00f6uunihanke hyv\u00e4ksyttiin Port Talbotissa.",
        "news_epoch": 1739890620.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cvgegrep2xno",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Tata Steel \u00a31.25bn electric furnace approved by planners",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144520",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739889540.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144520",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Yhdysvaltoihin uusi laittomia maahanmuuttajia varoittava kampanja",
        "news_group": -1
    },
    {
        "news_id": "dw_a71643202",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Egyptin sotilaallinen kerrytys Siinailta her\u00e4tt\u00e4\u00e4 huolta Gazan konfliktin keskell\u00e4.",
        "news_epoch": 1739889300.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/making-sense-of-egypt-s-alleged-military-buildup-near-israel/a-71643202",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Making sense of Egypt&#x27;s alleged military buildup near Israel",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144519",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Tanska priorisoi puolustusta poliittisten keskustelujen sijaan.",
        "news_epoch": 1739889120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144519",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Tanskan p\u00e4\u00e4ministeri: Varustaudumme massiivisesti, p\u00e4\u00e4t\u00f6svaltaa puolustusvoimien komentajalle",
        "news_group": -1
    },
    {
        "news_id": "dw_a71649332",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Trumpin toinen presidenttikausi keskittyy ulkomaisiin kauppoihin ja Serbian suhteisiin.",
        "news_epoch": 1739888280.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/trump-s-trio-for-the-balkans/a-71649332",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump&#x27;s trio for the Balkans",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144386",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Nokian panimo suunnittelee osakeantia laajentumista varten.",
        "news_epoch": 1739887140.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144386",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Pienpanimo haluaa isoksi: Nokian Panimo tavoittelee listautumista p\u00f6rssiin ja 20 miljoonan euron liikevaihtoa",
        "news_group": -1
    },
    {
        "news_id": "dw_a71645999",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Eurooppalaiset etsiv\u00e4t turvallisuustakuita Ukrainalle Yhdysvaltojen tuen ep\u00e4varmuuden keskell\u00e4.",
        "news_epoch": 1739886060.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/mooted-eu-deployment-in-ukraine-is-fraught-with-challenges/a-71645999",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Mooted EU deployment in Ukraine is fraught with challenges",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144490",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739884800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144490",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Hamas luovuttaa nelj\u00e4n panttivangin ruumiit torstaina ja vapauttaa kuusi panttivankia lauantaina",
        "news_group": 459
    },
    {
        "news_id": "dw_a71644884",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Tshisekedi syytt\u00e4\u00e4 Ruandaa aggressiosta M\u00fcnchenin turvallisuuskokouksessa.",
        "news_epoch": 1739883780.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/calls-grow-for-congo-to-resolve-conflict-through-dialogue/a-71644884",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Calls grow for Congo to resolve conflict through dialogue",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144387",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Monet ruokakaupat pysyv\u00e4t auki lakon aikana.",
        "news_epoch": 1739883600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144387",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "N\u00e4in lakko vaikuttaa t\u00e4n\u00e4\u00e4n ruokakauppojen aukioloon",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144376",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Lakot vaikuttavat logistiikkaan ja kauppatoimintaan Suomessa.",
        "news_epoch": 1739882100.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144376",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Maitohyllyt tyhjeniv\u00e4t, mutta olutta on \u2013 t\u00e4lt\u00e4 n\u00e4ytt\u00e4\u00e4 kauppojen hyllyill\u00e4 nyt eri puolilla Suomea",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144475",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739881560.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144475",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Iranissa brittipariskunta sai syytteet vakoilusta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144469",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739880180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144469",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Paavin y\u00f6 meni hyvin \u2013 on yh\u00e4 sairaalassa",
        "news_group": -1
    },
    {
        "news_id": "bbc_c1w07nq8qqqo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Argentiinan presidentti Javier Milei on kiist\u00e4nyt edist\u00e4neens\u00e4 kryptovaluuttaa $Libra, joka romahti pian maininnan j\u00e4lkeen. Tuomari p\u00e4\u00e4tt\u00e4\u00e4, kohtaako h\u00e4n petossyytteit\u00e4.",
        "news_epoch": 1739879280.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c1w07nq8qqqo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Argentina&#x27;s President Milei denies crypto fraud allegations",
        "news_group": -1
    },
    {
        "news_id": "bbc_c4gex0x87g4o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Etel\u00e4-Korea on syytt\u00e4nyt kiinalaista AI-startuppia DeepSeekia k\u00e4ytt\u00e4j\u00e4tietojen jakamisesta TikTokin omistajan ByteDancen kanssa. Etel\u00e4-Korean tietosuojaviranomainen vahvisti DeepSeekin ja ByteDancen v\u00e4lisen viestinn\u00e4n, mik\u00e4 johti DeepSeekin poistamiseen sovelluskaupoista tietosuojahuolien vuoksi.",
        "news_epoch": 1739878800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4gex0x87g4o",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "DeepSeek &#x27;shared user data&#x27; with TikTok owner ByteDance",
        "news_group": 456
    },
    {
        "news_id": "bbc_c5yeyy3y1ejo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Japani siirt\u00e4\u00e4 energiapolitiikkaansa lis\u00e4t\u00e4kseen ydinenergian k\u00e4ytt\u00f6\u00e4 vastatakseen kasvavaan kysynt\u00e4\u00e4n, erityisesti teko\u00e4lyn ja puolijohteiden aloilla. Uuden energiasuunnitelman mukaan ydinenergian osuus s\u00e4hk\u00f6verkosta pit\u00e4isi olla 20 % vuoteen 2040 menness\u00e4, kun se oli 8,5 % vuonna 2023.",
        "news_epoch": 1739878680.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c5yeyy3y1ejo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Japan raises nuclear power goal in post-Fukushima shift",
        "news_group": -1
    },
    {
        "news_id": "bbc_c203018pr2jo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Alya, syyrialainen pakolainen, pohtii viime viikon M\u00fcnchenin hy\u00f6kk\u00e4yst\u00e4, joka tappoi \u00e4idin ja lapsen, ja ilmaisee h\u00e4mmennyst\u00e4\u00e4n ja suruaan t\u00e4llaisesta v\u00e4kivallasta.",
        "news_epoch": 1739877780.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c203018pr2jo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Germany&#x27;s tensions over immigration laid bare ahead of election",
        "news_group": -1
    },
    {
        "news_id": "bbc_c20g02djlv7o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kaikki 80 lentomatkustajaa Delta Air Linesin lennolla, joka sy\u00f6ksyi maahan Torontossa, selvisiv\u00e4t. Lentokone kaatui, ja vaikka 18 loukkaantui, vain muutama on vakavasti vahingoittunut.",
        "news_epoch": 1739875020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c20g02djlv7o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "All passengers survive crash landing as plane flips at Toronto airport",
        "news_group": 465
    },
    {
        "news_id": "yle_7420144429",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Israeli on valmis neuvottelemaan Gazan tulitauon toisesta vaiheesta, keskittyen pysyv\u00e4\u00e4n tulitaukoon, israelilaisten panttivankien vapauttamiseen palestiinalaisista vangeista ja israelilaisten joukkojen vet\u00e4ytymiseen Gazasta.",
        "news_epoch": 1739874720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144429",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Ministeri:  Israel valmis aloittamaan Gazan aselevon toisen vaiheen neuvottelut",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144210",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kansallisen sovittelijan toimisto raportoi edistyst\u00e4 kauppakiistassa, mutta sopimusta ei ole saavutettu. Kauppalakko logistiikassa alkoi maanantaina ja laajenee ruokakauppoihin keskiviikkona.",
        "news_epoch": 1739872680.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144210",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Kaupan alan ty\u00f6riitaan ei sopua, ruokakauppojen lakko alkaa keskiviikkona",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143750",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kauneushoitoja Suomessa tehd\u00e4\u00e4n yh\u00e4 enemm\u00e4n yksityisasunnoissa kyseenalaisilla laitteilla, mik\u00e4 johtaa noin 80 potilaan hoitoon vuosittain HUS:ssa komplikaatioiden vuoksi.",
        "news_epoch": 1739871960.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143750",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Asiantuntijat huolissaan Kiinasta tilatuista kauneudenhoitolaitteista \u2013 halpavekotin ylitt\u00e4\u00e4 laillisen s\u00e4teilyrajan jopa satakertaisesti",
        "news_group": -1
    },
    {
        "news_id": "bbc_ce8j88gym3ro",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Uuden-Seelannin uusi matkailuslogan &#x27;Kaikkien on ment\u00e4v\u00e4!&#x27; on her\u00e4tt\u00e4nyt kiistaa, ja sit\u00e4 on tulkittu sek\u00e4 turistien houkuttelemiseksi ett\u00e4 paikallisten uhkaksi kasvavan maastamuuton ja ty\u00f6tt\u00f6myyden keskell\u00e4.",
        "news_epoch": 1739871660.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/ce8j88gym3ro",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "&#x27;Everyone must go&#x27;: New Zealand&#x27;s tourism drive draws ire",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144408",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ymp\u00e4rist\u00f6j\u00e4rjest\u00f6t v\u00e4itt\u00e4v\u00e4t, ett\u00e4 Japanin uudet p\u00e4\u00e4st\u00f6v\u00e4hennystavoitteet ovat riitt\u00e4m\u00e4tt\u00f6mi\u00e4. Hallitus aikoo v\u00e4hent\u00e4\u00e4 ilmastop\u00e4\u00e4st\u00f6j\u00e4 60 % vuoden 2013 tasosta, mutta kriitikot sanovat, ett\u00e4 t\u00e4m\u00e4 ei riit\u00e4 Pariisin sopimuksen vaatimuksiin.",
        "news_epoch": 1739871300.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144408",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Japani asetti uudet tavoitteet ilmastop\u00e4\u00e4st\u00f6jen v\u00e4hent\u00e4miselle",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx2k2ly8j75o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Pohjois-It\u00e4-Pakistanissa on pid\u00e4tetty pari, joka ep\u00e4ill\u00e4\u00e4n 13-vuotiaan tyt\u00f6n, Iqran, murhasta, joka ty\u00f6skenteli heid\u00e4n palvelijanaan ja jota syytettiin suklaiden varastamisesta.",
        "news_epoch": 1739869320.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2k2ly8j75o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "&#x27;Died for stealing chocolate&#x27;: Pakistan anger over death of child maid",
        "news_group": -1
    },
    {
        "news_id": "bbc_c8636e7xq5eo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kansleri Rachel Reevesin puuttuminen merkitt\u00e4v\u00e4\u00e4n tapaukseen, joka koskee kiistanalaisia autolainoja, on estetty Yhdistyneen kuningaskunnan korkeimmassa oikeudessa.",
        "news_epoch": 1739868720.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c8636e7xq5eo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Reeves&#x27; intervention in car loans case rejected",
        "news_group": -1
    },
    {
        "news_id": "bbc_c4gwgpjgl5zo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Keskim\u00e4\u00e4r\u00e4iset palkat Yhdistyneess\u00e4 kuningaskunnassa nousevat nopeammin kuin inflaatio, ja palkat ovat nousseet 3,4 % lokakuusta joulukuuhun verrattuna edelliseen vuoteen.",
        "news_epoch": 1739868540.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4gwgpjgl5zo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "UK wages continue to outpace inflation",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144361",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhdysvaltojen ja Ven\u00e4j\u00e4n ulkoministerien kokous Saudi-Arabiassa pyrkii helpottamaan mahdollisia rauhanneuvotteluja Ukrainan suhteen, johon ei ole edustusta kokouksessa.",
        "news_epoch": 1739867700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144361",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Merkitt\u00e4vin kohtaaminen l\u00e4hes kolmeen vuoteen \u2013 t\u00e4st\u00e4 Yhdysvaltain ja Ven\u00e4j\u00e4n tapaamisessa on kyse",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144379",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Asuntorakentaminen v\u00e4heni viime vuoden lopussa, ja asuinrakennuksille my\u00f6nnetyt rakennusluvat laskivat 12 % vuodesta. Valmiiden asuntojen m\u00e4\u00e4r\u00e4 laski viel\u00e4 enemm\u00e4n, vain 5 100 asuntoa valmistui lokakuusta joulukuuhun, mik\u00e4 on 47 % v\u00e4hemm\u00e4n kuin edellisen\u00e4 vuonna.",
        "news_epoch": 1739866920.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144379",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Asuntorakentamisen uudistuotanto vaisuinta sitten 90-luvun laman",
        "news_group": -1
    },
    {
        "news_id": "bbc_cdryr8m1k2eo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739866200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cdryr8m1k2eo",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "&#x27;I was just in a plane crash. Oh my God&#x27;: Witnesses recount escape in Toronto",
        "news_group": 465
    },
    {
        "news_id": "yle_7420144252",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "S\u00e4hkoverkkoyhti\u00f6 Caruna uskoo toimineensa verolain mukaisesti, vaikka Finnwatch kritisoi sen verok\u00e4yt\u00e4nt\u00f6j\u00e4. Finnwatchin mukaan viimeaikaiset muutokset korkojen v\u00e4hennysrajoituksissa ovat johtaneet Carunan v\u00e4itettyyn veronkiertoon, jota aiemmin mahdollisti tasevapaus.",
        "news_epoch": 1739865600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144252",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Finnwatch: Lainmuutos laittoi Carunan korkokikkailun kuriin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144348",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Israeli ei ole t\u00e4ysin luottanut Libanonin armeijaan huolimatta tulitauko-sopimuksesta, joka johti israelilaisten joukkojen vet\u00e4ytymiseen Etel\u00e4-Libanosta. Israel pit\u00e4\u00e4 alueella viitt\u00e4 tukikohtaa, perustellen niit\u00e4 Libanonin armeijan kyvytt\u00f6myydell\u00e4 est\u00e4\u00e4 Hezbollahin toimintaa.",
        "news_epoch": 1739862420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144348",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Israel vet\u00e4ytyi Etel\u00e4-Libanonista, lukuun ottamatta viitt\u00e4 tukikohtaa",
        "news_group": 463
    },
    {
        "news_id": "yle_7420144347",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Nokia Panimo suunnittelee listautumista Helsingin p\u00f6rssin First North -markkinoille. Se on Suomen toiseksi suurin panimo, jonka nettomyynti oli viime vuonna 12 miljoonaa euroa ja liiketulos 1,7 miljoonaa euroa.",
        "news_epoch": 1739862300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144347",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Nokian Panimo aikoo listautua p\u00f6rssiin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144334",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Huolimatta Homsin tuhosta, paluumuuttajat ovat iloisia p\u00e4\u00e4stess\u00e4\u00e4n takaisin naapurustoonsa Syyrian vallankumouksen my\u00f6t\u00e4 marraskuussa. Monet perheet ovat palanneet l\u00e4hes vuosikymmenen j\u00e4lkeen, vaikka heid\u00e4n kotinsa ovat raunioina.",
        "news_epoch": 1739858340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144334",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Syyrian pakolaiset alkavat palailla vallankumouksen syntypaikkaan, Homsiin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144330",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739857560.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144330",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Yhdysvallat ja Ven\u00e4j\u00e4 pohjustavat rauhanneuvotteluja Ukrainan p\u00e4\u00e4n yli Saudi-Arabiassa \u2013 osapuolilla eroja odotuksissa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144329",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739856480.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144329",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Elon Muskin yhti\u00f6 julkaisi uuden teko\u00e4lybotin",
        "news_group": -1
    },
    {
        "news_id": "bbc_cn4z4w3v5y8o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Sir Keir Starmer korosti Yhdysvaltojen takausta mink\u00e4 tahansa Ukrainan rauhansopimuksen yhteydess\u00e4 est\u00e4\u00e4kseen Ven\u00e4j\u00e4\u00e4 hy\u00f6kk\u00e4\u00e4m\u00e4st\u00e4 uudelleen. Euroopan johtajien kokouksen j\u00e4lkeen h\u00e4n mainitsi mahdollisuuden l\u00e4hett\u00e4\u00e4 brittil\u00e4isi\u00e4 joukkoja, jos kest\u00e4v\u00e4 rauhansopimus saavutetaan.",
        "news_epoch": 1739856420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cn4z4w3v5y8o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Starmer says US &#x27;backstop&#x27; needed for Ukraine deal",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144327",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Tanskan hallitus aikoo perustaa 50 miljardin Tanskan kruunun rahaston aseostoksia varten aseiden toimitusketjun rajallisten tuotantokapasiteettien vuoksi. He korostavat EU-maiden tarvetta lis\u00e4t\u00e4 asevoimiaan nopeasti ja v\u00e4ltt\u00e4\u00e4 poliittisten ongelmien tai s\u00e4\u00e4d\u00f6sten aiheuttamia viiv\u00e4styksi\u00e4.",
        "news_epoch": 1739855760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144327",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Tanska perustaa 50 miljardin kruunun aserahaston",
        "news_group": -1
    },
    {
        "news_id": "pbs_97111c139ca7",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Delta-lennon onnettomuus, vakavat myrskyt, paavi sairaalassa, Washingtonin artefakti myynniss\u00e4.",
        "news_epoch": 1739854200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/news-wrap-delta-flight-crashes-in-toronto-injuring-at-least-8-people",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "News Wrap: Delta flight crashes in Toronto, injuring at least 8 people",
        "news_group": -1
    },
    {
        "news_id": "pbs_d2064cfc5fb8",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Euroopan johtajat kokoontuivat Ranskassa keskustelemaan rauhanneuvotteluista Ukrainan sodan suhteen, ja huoli Yhdysvaltojen luotettavuudesta kumppanina kasvaa. Ukrainan presidentti Zelenskyy kritisoi neuvotteluja, joihin Ukraina ei osallistu, kun taas entinen Liettuan ulkoministeri Landsbergis ilmaisi ep\u00e4ilyksi\u00e4 Yhdysvaltojen sitoutumisesta Euroopan turvallisuuteen.",
        "news_epoch": 1739853600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/european-leaders-are-left-scrambling-as-u-s-nears-talks-with-russia-on-ukraine",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "European leaders are left scrambling as U.S. nears talks with Russia on Ukraine",
        "news_group": -1
    },
    {
        "news_id": "bbc_cd7d7llvz28o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Yli 30 ihmist\u00e4 on kuollut bussionnettomuudessa Boliviassa, jossa kuljettaja todenn\u00e4k\u00f6isesti menetti hallinnan, mik\u00e4 johti bussin putoamiseen l\u00e4hes 800 metri\u00e4. Nelj\u00e4toista muuta loukkaantui, mukaan lukien nelj\u00e4 lasta.",
        "news_epoch": 1739852160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cd7d7llvz28o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Bus crash in Bolivia kills at least 30 people",
        "news_group": 464
    },
    {
        "news_id": "yle_7420144323",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739852100.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144323",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Kelan etuuksien v\u00e4\u00e4rink\u00e4ytt\u00f6 jatkoi viime vuonna laskuaan",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144146",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Presidentti Donald Trump on aloittanut merkitt\u00e4vi\u00e4 leikkauksia hallituksen toiminnassa, mik\u00e4 aiheuttaa pelkoa liittovaltion ty\u00f6ntekij\u00f6iden keskuudessa. Monet ty\u00f6ntekij\u00e4t, kuten Jennifer ja Kathrine, ilmaisevat ahdistuksensa ty\u00f6paikan turvasta ja avustushankkeiden, erityisesti terveydenhuollon ja AIDS-hoitojen, vaikutuksesta.",
        "news_epoch": 1739851800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144146",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Jennifer sai kolme p\u00e4iv\u00e4\u00e4 aikaa muuttaa kotiin ulkomailta \u2013 n\u00e4in Trumpin leikkaukset romuttivat virkamiesten el\u00e4m\u00e4n",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144161",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kysely osoittaa, ett\u00e4 54% suomalaisista tukee perint\u00f6veron poistamista ja sen korvaamista varainsiirtoverolla, eniten kannatusta saa Perussuomalaisten (69%) keskuudessa.",
        "news_epoch": 1739851260.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144161",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "EVA: Hieman yli puolet suomalaisista korvaisi perint\u00f6veron luovutusvoittoverolla",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144317",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Nelj\u00e4 kaupungin varapormestaria New Yorkissa on ilmoittanut aikovansa erota, kun kaupungin pormestari Eric Adamsia on vaadittu eroamaan v\u00e4itteiden vuoksi, jotka liittyv\u00e4t kampanjarahoitukseen Turkin hallitukselta ja painostukseen Turkin konsulaatin suhteen.",
        "news_epoch": 1739845920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144317",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "New Yorkin hallinto kaaoksen partaalla \u2013 kaupunginvaltuusto vaati pormestaria eroamaan",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144316",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ven\u00e4j\u00e4n hallitus vapautti amerikkalaisen miehen, joka oli pid\u00e4tetty moskovalaisessa lentokent\u00e4ss\u00e4 kannettaessa marihuunamarmeladia. Vapautus tapahtui juuri ennen Ven\u00e4j\u00e4n ja Yhdysvaltojen tapaamista Saudi-Arabiassa, jonka tavoitteena on suhteiden palauttaminen.",
        "news_epoch": 1739845440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144316",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Ven\u00e4j\u00e4 vapautti pid\u00e4tetyn amerikkalaisen Ukraina-neuvottelujen aattona",
        "news_group": -1
    },
    {
        "news_id": "pbs_f3a5bd200343",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Delta Airlinesin lentokone k\u00e4\u00e4ntyi Toronton lentokent\u00e4ll\u00e4, 19 loukkaantui.",
        "news_epoch": 1739844960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/delta-airlines-plane-flips-while-landing-at-torontos-pearson-airport-8-people-injured",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Delta Airlines plane flips while landing at Toronto&amp;#8217;s Pearson Airport, 19 people injured",
        "news_group": 457
    },
    {
        "news_id": "dw_a71645160",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739844960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/canada-plane-crash-injures-18-at-toronto-airport/a-71645160",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Canada: Plane crash injures 18 at Toronto airport",
        "news_group": 465
    },
    {
        "news_id": "pbs_58cf75f9bbaf",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Asiantuntijat palaavat Syyrian kulttuuriperint\u00f6kohteisiin, kuten Palmyraan ja Crac des Chevaliersiin, tavoitteena on palauttaa ne ja elvytt\u00e4\u00e4 turismi talouden tukemiseksi sodan j\u00e4lkeen.",
        "news_epoch": 1739842320.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/experts-return-to-syrias-war-torn-heritage-sites-including-roman-ruins-at-palmyra",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Experts return to Syria&amp;#8217;s war-torn heritage sites, including Roman ruins at Palmyra",
        "news_group": -1
    },
    {
        "news_id": "pbs_8e828688873c",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "DeepSeek, kiinalainen teko\u00e4ly-startup, on keskeytt\u00e4nyt chatbot-sovellustensa lataukset Etel\u00e4-Koreassa yksityisyysongelmien vuoksi. Sovellukset poistettiin paikallisista sovelluskaupoista, ja yritys tekee yhteisty\u00f6t\u00e4 etel\u00e4korjalaisten viranomaisten kanssa yksityisyydensuojan parantamiseksi.",
        "news_epoch": 1739841900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/south-korea-pauses-downloads-of-deepseeks-ai-apps-due-to-privacy-concerns",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "South Korea pauses downloads of DeepSeek&amp;#8217;s AI apps due to privacy concerns",
        "news_group": 456
    },
    {
        "news_id": "yle_7420144315",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739841720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144315",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Rio de Janeirossa hikoillaan 44 asteen kuumuudessa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144314",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739840820.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144314",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Libanonilaisl\u00e4hde: Israel alkoi vet\u00e4yty\u00e4 osista Etel\u00e4-Libanonia",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144313",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739835780.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144313",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Bussi sy\u00f6ksyi rotkoon Boliviassa, ainakin 30 kuoli",
        "news_group": 464
    },
    {
        "news_id": "pbs_d63adbd54cba",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Pope Francisilla on diagnosoitu monimutkainen hengitystieinfektio, johon liittyy useita organismeja. 88-vuotiaan terveydentila her\u00e4tt\u00e4\u00e4 huolta, ja h\u00e4n tarvitsee kohdennettua l\u00e4\u00e4kehoitoa.",
        "news_epoch": 1739835120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/health/vatican-says-the-pope-has-a-polymicrobial-respiratory-tract-infection-what-is-that",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Vatican says the pope has a &amp;#8216;polymicrobial respiratory tract infection.&amp;#8217; What is that?",
        "news_group": -1
    },
    {
        "news_id": "pbs_f9c835c33bff",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Meksiko odottaa Googlen vastausta pyynt\u00f6\u00f6ns\u00e4 palauttaa nimi &#x27;Meksikonlahti&#x27; Google Maps -palvelussa, kun nimi muutettiin &#x27;Amerikanlahdeksi&#x27; entisen Yhdysvaltain presidentin Trumpin julistuksen j\u00e4lkeen.",
        "news_epoch": 1739834580.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/politics/mexico-says-it-will-wait-for-new-response-from-google-on-gulf-of-mexico-name-dispute-before-filing-lawsuit",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Mexico says it will wait for new response from Google on Gulf of Mexico name dispute before filing lawsuit",
        "news_group": -1
    },
    {
        "news_id": "bbc_cy8p8e022j0o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739834340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/cy8p8e022j0o",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Watch: Why European leaders held emergency Ukraine summit",
        "news_group": -1
    },
    {
        "news_id": "bbc_c74e4wgg71wo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "V\u00e4hint\u00e4\u00e4n 13 ihmist\u00e4 on kuollut voimakkaan myrskyn aiheuttamien \u00e4killisten tulvien ja kaatuneiden puiden vuoksi Yhdysvaltojen kaakkoisosassa. Kentuckyss\u00e4 raportoitiin 11 kuolemaa, Georgiassa yksi ja L\u00e4nsi-Virginiassa toinen.",
        "news_epoch": 1739832660.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c74e4wgg71wo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Watch: Deadly storm hits south-eastern US and Canada",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144311",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yuri Ushakov ilmoitti Riyadhissa, ett\u00e4 neuvotteluissa ei ole kolmatta osapuolta, vaan mukana ovat vain Ven\u00e4j\u00e4n delegaatio ja Yhdysvaltojen edustajat. Ven\u00e4j\u00e4n ulkoministeri Sergei Lavrov osallistuu Ushakovin ohella, kun taas Yhdysvaltojen delegaatioon kuuluvat ulkoministeri Marco Rubio sek\u00e4 neuvonantajat Mike Waltz ja Steve Witkoff.",
        "news_epoch": 1739832480.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144311",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Putinin neuvonantajaja Saudi-Arabiassa: Neuvottelemme vain USA:n kanssa",
        "news_group": -1
    }
];