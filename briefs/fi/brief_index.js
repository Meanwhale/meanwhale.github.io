const articles = [
    {
        "news_id": "yle_7420143618",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Israel uhkaa lopettaa aselevon, jollei Hamas luovuta kolmea elossa olevaa panttivankia",
        "news_epoch": 1739450400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143618",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Israel uhkaa lopettaa aselevon, jollei Hamas luovuta kolmea elossa olevaa panttivankia",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143500",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Nordnet koki tietomurron, joka vaikutti 1 500 asiakkaaseen Pohjoismaissa, joista 500 oli Tanskassa ja Suomessa, 350 Norjassa ja 200 Ruotsissa. Asiakkaat pystyiv\u00e4t n\u00e4kem\u00e4\u00e4n ja jopa myym\u00e4\u00e4n muiden sijoitustietoja.",
        "news_epoch": 1739449860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143500",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Nordnetin 1 500 asiakkaan tiedot n\u00e4kyiv\u00e4t muille \u2013 suomalaisia joukossa 500",
        "news_group": 268
    },
    {
        "news_id": "nasdaq_a3a70e993715",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Steve Madden hankkia Kurt Geiger varten 289 Mln k\u00e4teisell\u00e4",
        "news_epoch": 1739449860.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/steve-madden-acquire-kurt-geiger-gbp-289-mln-cash",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Steve Madden To Acquire Kurt Geiger For GBP 289 Mln In Cash",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_8e2f1bf75e97",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Deere Q1 Voitto Halves, Misses Arviot",
        "news_epoch": 1739449800.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/deere-q1-profit-halves-misses-estimates",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Deere Q1 Profit Halves, Misses Estimates",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f41a2f60249c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Osakemarkkinat Turmoil on tulossa. Harkitse N\u00e4m\u00e4 &quot; piilotettu&quot; 12,5% tuottoja",
        "news_epoch": 1739449800.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/stock-market-turmoil-coming-consider-these-hidden-125-yields",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Stock Market Turmoil Is Coming. Consider These &amp;quot;Hidden&amp;quot; 12.5% Yields",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_6c6960a236a2",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Can Solana Merkki Oletko miljon\u00e4\u00e4ri vuonna 2025?",
        "news_epoch": 1739449260.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/can-solana-make-you-millionaire-2025",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Can Solana Make You a Millionaire in 2025?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c9c1eeba4225",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Ennuste: Brookfield Corporation soi yli seuraavat 5 vuotta. T\u00e4ss\u00e4 on yksi syy miksi.",
        "news_epoch": 1739449260.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/prediction-brookfield-corporation-will-soar-over-next-5-years-heres-1-reason-why",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Prediction: Brookfield Corporation Will Soar Over the Next 5 Years. Here&#x27;s 1 Reason Why.",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_76ae53ef378d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Siemens Q1 Nettovoitto Surges, Tilaukset alas; Backs FY25 N\u00e4yt\u00e4; Varastoi",
        "news_epoch": 1739449200.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/siemens-q1-net-profit-surges-orders-down-backs-fy25-view-stock",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Siemens Q1 Net Profit Surges, Orders Down; Backs FY25 View; Stock Up",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_dbc50a47d96e",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Datadog: 2025 Ohjaus Huolet Sijoittajat",
        "news_epoch": 1739449200.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/datadog-2025-guidance-worries-investors",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Datadog: 2025 Guidance Worries Investors",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3b7ab6df6c5e",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Deere &amp; Co. Pudota 50% Q1 2025",
        "news_epoch": 1739448960.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/deere-co-earnings-drop-50-q1-2025",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Deere &amp; Co. Earnings Drop 50% in Q1 2025",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_7e86b191fbe1",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "US Foods Q4 Earnings Slide",
        "news_epoch": 1739448900.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/us-foods-q4-earnings-slide",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "US Foods Q4 Earnings Slide",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_ef9330d20ed8",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Rigetti Computing vs. Archer Aviation: A Head-to-Head Growth Stock Showdown",
        "news_epoch": 1739448900.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/rigetti-computing-vs-archer-aviation-head-head-growth-stock-showdown",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Rigetti Computing vs. Archer Aviation: A Head-to-Head Growth Stock Showdown",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f392e896a3b0",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Pari Kaupank\u00e4ynti: H\u00e4m\u00e4t\u00e4 Palantir ja ostaa T\u00e4m\u00e4 Fantastic teko\u00e4ly Stock Trading at Alennuksella",
        "news_epoch": 1739448300.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/pair-trade-fade-palantir-and-buy-fantastic-ai-stock-trading-discount",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Pair Trade: Fade Palantir and Buy This Fantastic AI Stock Trading at a Discount",
        "news_group": -1
    },
    {
        "news_id": "bbc_crlky380wd7o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Google Maps on est\u00e4nyt arvostelut Meksikonlahdelle sen j\u00e4lkeen, kun se nimettiin &#x27;Amerikanlahdeksi&#x27; Yhdysvaltojen k\u00e4ytt\u00e4jille presidentti Trumpin m\u00e4\u00e4r\u00e4yksest\u00e4. Yritys on poistanut negatiivisia arvosteluja ja puolustanut toimiaan sanomalla, ett\u00e4 se suojaa paikkoja odotettujen ep\u00e4olennaisten kontribuutioiden aikana.",
        "news_epoch": 1739448240.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/crlky380wd7o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Google Maps blocks Gulf of America reviews after rename criticism",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_07a250bcfcfe",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "MSA Safety Inc. pit\u00e4\u00e4 konferenssipuhelun 13. helmikuuta 2025 klo 10:00 ET keskustellakseen Q4 24 tuloksista.",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/msa-safety-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "MSA Safety Q4 24 Earnings Conference Call At 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_fd3d31991dba",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Hyatt Hotels Corp. pit\u00e4\u00e4 konferenssipuhelun 13. helmikuuta 2025 klo 10:00 ET keskustellakseen Q4 2024 tuloksista.",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/hyatt-hotels-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Hyatt Hotels Q4 24 Earnings Conference Call At 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_1cba6d4ef17d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Ventas Inc. pit\u00e4\u00e4 konferenssipuhelun 13. helmikuuta 2025 klo 10:00 ET keskustellakseen Q4 24 tuloksista.",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ventas-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Ventas Q4 24 Earnings Conference Call At 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_9c9aea9f2096",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Howmet Aerospace Inc. j\u00e4rjest\u00e4\u00e4 konferenssipuhelun 13. helmikuuta 2025 klo 10:00 ET keskustellakseen Q4 24 tuloksista.",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/howmet-aerospace-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Howmet Aerospace Q4 24 Earnings Conference Call At 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_9cd564aeabdf",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Manitowoc Company Inc. j\u00e4rjest\u00e4\u00e4 konferenssipuhelun 13. helmikuuta 2025 klo 10:00 ET keskustellakseen Q4 24 tuloksista.",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/manitowoc-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Manitowoc Q4 24 Earnings Conference Call AT 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c28cd585b5a2",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Tyler Technologies Inc. pit\u00e4\u00e4 konferenssipuhelun 13. helmikuuta 2025 klo 10:00 ET keskustellakseen Q4 24 tuloksista.",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/tyler-technologies-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Tyler Technologies Q4 24 Earnings Conference Call At 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_cc2a5604f6e3",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Sun Life Financial Q4 24 Earnings Conference Call klo 10:00 ET",
        "news_epoch": 1739448060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/sun-life-financial-q4-24-earnings-conference-call-10-00-am-et",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Sun Life Financial Q4 24 Earnings Conference Call At 10:00 AM ET",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_83c0ef00b59f",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Teknologiayrityksiin sijoittaminen on t\u00e4rke\u00e4\u00e4 pitk\u00e4aikaisille voitoille, sill\u00e4 n\u00e4m\u00e4 yritykset vaikuttavat merkitt\u00e4v\u00e4sti talouteen.",
        "news_epoch": 1739448000.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/got-5000-2-tech-stocks-buy-and-hold-long-term-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Got $5,000? 2 Tech Stocks to Buy and Hold for the Long Term",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3be8e34fba36",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Valedian guru-perusteinen raportti Johnson &amp; Johnsonista (JNJ) osoittaa, ett\u00e4 se saa korkeimmat arvosanat 22 guru-strategian joukossa k\u00e4ytt\u00e4en osakkeenomistajatuotto-investorimallia, joka perustuu Meb Faberiin strategiaan, joka keskittyy yrityksiin, jotka palauttavat rahaa osakkeenomistajille.",
        "news_epoch": 1739448000.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/guru-fundamental-report-jnj-67",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Guru Fundamental Report for JNJ",
        "news_group": -1
    },
    {
        "news_id": "sn_27b425ff60ce",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Norovirus on eritt\u00e4in tarttuva ja sen puhkeamiset ovat lis\u00e4\u00e4ntyneet merkitt\u00e4v\u00e4sti Yhdysvalloissa t\u00e4n\u00e4 talvena, oireina oksentelu, ripuli ja pahoinvointi. Se vaikuttaa erityisesti nuoriin, vanhuksiin ja immuunipuutteisiin, aiheuttaen miljoonia sairastumisia ja tuhansia kuolemia vuosittain.",
        "news_epoch": 1739448000.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/norovirus-vomiting-diarrhea-vaccine",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Why a norovirus vaccine isn\u2019t available \u2014 yet",
        "news_group": -1
    },
    {
        "news_id": "bbc_c203r3erp80o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Britannian hallitus hakee poikkeuksia Yhdysvaltojen ter\u00e4kselle asettamista tulleista, jotka presidentti Trump ilmoitti olevan 25 % vero. Liikenne- ja teollisuusministeri Jonathan Reynolds v\u00e4itt\u00e4\u00e4, ett\u00e4 Britannian ter\u00e4ksenviennit Yhdysvaltoihin ovat v\u00e4h\u00e4isi\u00e4 ja k\u00e4ytet\u00e4\u00e4n puolustuksessa, mik\u00e4 tekee poikkeukselle vahvan perusteen.",
        "news_epoch": 1739447880.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c203r3erp80o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "UK signals it will seek US steel tariff exemption",
        "news_group": 262
    },
    {
        "news_id": "dw_a71590013",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Ghana on suurelta osin s\u00e4\u00e4stynyt jihadistihy\u00f6kk\u00e4yksilt\u00e4, vaikka se sijaitsee l\u00e4hell\u00e4 Burkina Fasoa, joka k\u00e4rsii terroristiryhmist\u00e4. Analyytikot varoittavat, ett\u00e4 ghanalaiset, erityisesti ty\u00f6tt\u00f6m\u00e4t nuoret, ovat vaarassa rekrytoitua n\u00e4ihin ryhmiin usein perhesiteiden kautta rajan yli.",
        "news_epoch": 1739447580.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/why-ghana-faces-a-growing-jihadist-threat/a-71590013",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Why Ghana faces a growing jihadist threat",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143503",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhdysvaltojen hallituksen kanta Ukrainan sodan p\u00e4\u00e4ttymiseen viittaa merkitt\u00e4viin pettymyksiin maalle, sill\u00e4 se ei ehk\u00e4 saa kaikkia alueitaan takaisin nykyisen johtamismallin alla.",
        "news_epoch": 1739447400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143503",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "N\u00e4in raaka on Trumpin rauha: alueluovutuksia, ei Nato-joukkoja, ei taetta pysyv\u00e4st\u00e4 rauhasta",
        "news_group": 261
    },
    {
        "news_id": "arvopaperi_a874811501ef",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Tietoevrylle povataan tuloslaskua \u2013 kuuluuko liiketoiminnan myymisest\u00e4 uutisia?",
        "news_epoch": 1739446860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/4443dc71-62d3-4303-bf56-51d8f4b3a3e4",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Tietoevrylle povataan tuloslaskua \u2013 kuuluuko liiketoiminnan myymisest\u00e4 uutisia?",
        "news_group": -1
    },
    {
        "news_id": "bbc_c3vpqr6511yo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hamas on sitoutunut Gazan tulitaukosopimukseen Israelin kanssa ja jatkaa panttivankien vapauttamista aikataulun mukaisesti. Egyptin ja Qatari v\u00e4limiehet ty\u00f6skentelev\u00e4t esteiden poistamiseksi, kun taas Israel on varoittanut, ett\u00e4 tulitauko p\u00e4\u00e4ttyy, jos panttivankeja ei palauteta lauantaihin menness\u00e4.",
        "news_epoch": 1739445180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c3vpqr6511yo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Hamas says it will continue releasing Israeli hostages under Gaza deal",
        "news_group": 264
    },
    {
        "news_id": "nasdaq_9e9c1ad745d8",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Allegiant Travel Company ja A-Mark Precious Metals&#x27; on korostettu Zacks Bull ja Bear of the Day",
        "news_epoch": 1739445000.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/allegiant-travel-company-and-mark-precious-metals-box-have-been-highlighted-zacks-bull-and",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Allegiant Travel Company and A-Mark Precious Metals&#x27; in the Box have been highlighted as Zacks Bull and Bear of the Day",
        "news_group": -1
    },
    {
        "news_id": "bbc_c77r05nx11po",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Rachel Reevesin LinkedIn-profiili v\u00e4itti virheellisesti, ett\u00e4 h\u00e4n ty\u00f6skenteli Englannin pankissa vuosikymmenen, vaikka h\u00e4n oikeasti vietti siell\u00e4 viisi ja puoli vuotta, j\u00e4tt\u00e4en pankin maaliskuussa 2006.",
        "news_epoch": 1739444400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c77r05nx11po",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Reeves&#x27;s CV exaggerated time at Bank of England",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_97e4922c8ff8",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "N\u00e4iden kolmen huipputason, parhaiten menestyv\u00e4n ja hyvin hallinnoidun sijoitusrahaston lis\u00e4\u00e4minen el\u00e4kesalkkuusi voi maksimoida tuottoasi.",
        "news_epoch": 1739444400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/make-most-your-retirement-these-top-ranked-mutual-funds-68",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Make the Most of Your Retirement with These Top-Ranked Mutual Funds",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3cd1a7853f37",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "ETF-strategiat voivat auttaa hallitsemaan korkeaa inflaatiota tammikuussa.",
        "news_epoch": 1739444400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/etf-strategies-play-hot-january-inflation",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "ETF Strategies to Play Hot January Inflation",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_db318866ff14",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "N\u00e4m\u00e4 kolme parhaiten sijoittunutta, hyvin hoidettua rahastoa voivat auttaa sinua maksimoimaan el\u00e4kesijoitustesi tuottoa.",
        "news_epoch": 1739444400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-you-add-these-3-top-performing-mutual-funds-your-portfolio-79",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should You Add These 3 Top-Performing Mutual Funds to Your Portfolio?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3d11d4de3c53",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Harkitse n\u00e4iden kolmen huipputason sijoitusrahaston lis\u00e4\u00e4mist\u00e4 el\u00e4kesijoituksesi tuottojen parantamiseksi.",
        "news_epoch": 1739444400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-you-add-these-3-top-performing-mutual-funds-your-portfolio-80",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should You Add These 3 Top-Performing Mutual Funds to Your Portfolio?",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_99e6b14f5ccb",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Neste ja Qt Group kokivat merkitt\u00e4vi\u00e4 vaihteluita tuloksissaan Helsingin p\u00f6rssin suurimpien yritysten joukossa, joka on aktiivisella kaupank\u00e4yntip\u00e4iv\u00e4ll\u00e4.",
        "news_epoch": 1739443860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/31666766-48f6-46fa-b3db-da202111bd84",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Helsingin p\u00f6rssin isoimmista yhti\u00f6ist\u00e4 Neste ja Qt Group kokivat rajuimmat liikkeet tulosruuhkassa",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_4a4eaef72fcd",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "T\u00e4ll\u00e4 S&amp;P Metals &amp; Mining Index -komponentilla on 1,8% tuottoa ja myy v\u00e4hemm\u00e4n kuin kirja",
        "news_epoch": 1739443800.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/sp-metals-mining-index-component-has-18-yield-and-sells-less-book",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "This S&amp;P Metals &amp; Mining Index Component Has A 1.8% Yield And Sells For Less Than Book",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_2f4c7e9973c2",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Merus Power ilmoittaa s\u00e4hk\u00f6varastotilauksesta.",
        "news_epoch": 1739442360.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/4a9c9110-d306-489c-b4bb-46be9f56fd10",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_1ab380784267",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Excel Compositesin odotetaan parantuvan verrattuna hitaaseen vertailukauteen. Yritys julkaisee liiketoimintakatsauksen lokakuusta joulukuuhun perjantaina.",
        "news_epoch": 1739441820.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/5c8ff9ee-8155-4b7a-a6bb-2d9ef64a851d",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Excel Compositesin tuloksen odotetaan kohentuneen vaisusta vertailukaudesta",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_69c637fd4e2d",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Wulff ostaa enemmist\u00f6n Convidosta alle miljoonalla eurolla, tavoitteena vahvistaa asemaansa Suomen kirjanpitomarkkinoilla.",
        "news_epoch": 1739441460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/ba526100-69dc-4689-a92c-fe738d8a7fb3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Wulff ostaa enemmist\u00f6n Convidosta \u2013 Kauppahinta vajaa miljoona euroa",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx2k1321nedo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Honda ja Nissanin fuusiosuunnitelmat ovat kaatuneet erimielisyyksien vuoksi kumppanuuden rakenteesta. Ehdotettu fuusio pyrki luomaan 60 miljardin dollarin arvoisen autoryhm\u00e4n kilpailemaan kilpailijoiden, erityisesti Kiinan, kanssa.",
        "news_epoch": 1739441160.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2k1321nedo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Honda-Nissan multi-billion dollar merger collapses",
        "news_group": -1
    },
    {
        "news_id": "dw_a71530790",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Portugali, Italia, Espanja ja Kreikka ovat siirtyneet EU:n ongelmalapsista mahdollisiksi ratkaisujen tarjoajiksi, erityisesti uusiutuvassa energiassa. Kuitenkin euroalueen talous on pys\u00e4htynyt, p\u00e4\u00e4asiassa Saksan vaikeuksien vuoksi.",
        "news_epoch": 1739440980.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/why-europe-s-southern-periphery-props-up-eurozone-growth/a-71530790",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Why Europe&#x27;s southern periphery props up eurozone growth",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_b3a06450dedd",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Raportti arvioi, onko T. Rowe Price New Horizons (PRNHX) t\u00e4ll\u00e4 hetkell\u00e4 vahva sijoitusrahasto, tarkastellen sen suorituskyky\u00e4 ja potentiaalia.",
        "news_epoch": 1739440800.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/t-rowe-price-new-horizons-prnhx-strong-mutual-fund-pick-right-now-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is T. Rowe Price New Horizons (PRNHX) a Strong Mutual Fund Pick Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_6ef149ff78a9",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Matthews China Investor (MCHFX) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 vahvaksi sijoitusrahastoksi, joka keskittyy sijoitusmahdollisuuksiin Kiinassa.",
        "news_epoch": 1739440800.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/matthews-china-investor-mchfx-strong-mutual-fund-pick-right-now-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Matthews China Investor (MCHFX) a Strong Mutual Fund Pick Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a6eab35d89ee",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Vanguard Wellington Admiral (VWENX) on t\u00e4ll\u00e4 hetkell\u00e4 vahva sijoitusrahasto, koska sen suorituskyky ja hallinta ovat hyvi\u00e4.",
        "news_epoch": 1739440800.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/vanguard-wellington-admiral-vwenx-strong-mutual-fund-pick-right-now-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Vanguard Wellington Admiral (VWENX) a Strong Mutual Fund Pick Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_52e82934e1b2",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Fidelity Select Health Care (FSPHX) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 vahvaksi sijoitusrahastoksi sen suorituskyvyn ja markkinaolosuhteiden perusteella.",
        "news_epoch": 1739440800.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/fidelity-select-health-care-fsphx-strong-mutual-fund-pick-right-now-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Fidelity Select Health Care (FSPHX) a Strong Mutual Fund Pick Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_8b24280fd5bf",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Vanguard Energy Investor (VGENX) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 potentiaaliseksi vahvaksi sijoituskohteeksi yhteissijoitusrahastoissa. Raportti analysoi sen suorituskyky\u00e4, hallintoa ja markkinaolosuhteita sijoittajien soveltuvuuden m\u00e4\u00e4ritt\u00e4miseksi.",
        "news_epoch": 1739440800.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/vanguard-energy-investor-vgenx-strong-mutual-fund-pick-right-now-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Vanguard Energy Investor (VGENX) a Strong Mutual Fund Pick Right Now?",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_6060f06074c2",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Analyytikot odottavat huhuista hitaampia liikkeit\u00e4, ja osingon hieman laskevan.",
        "news_epoch": 1739439660.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/8ba35bcc-1706-4553-a76a-996a459db11e",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Huhtam\u00e4elt\u00e4 odotetaan hitaita liikkeit\u00e4 kohti parempaa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143552",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Egyptin media: Gazan tulitauko\u00adsopimuksen toteuttaminen jatkuu",
        "news_epoch": 1739439480.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143552",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Egyptin media: Gazan tulitauko\u00adsopimuksen toteuttaminen jatkuu",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_82c210c6a8b3",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Heikki Malisen resepti Outokummussa tarvitsee uuden tarinan, kun Nesteen tulosraportti pettyy sijoittajille. Toimitusjohtaja Heikki Malisella on paljon tekemist\u00e4, ja Porvoon jalostamon muutosaikataulu on nyt uhattuna, kirjoittaa p\u00f6rssieditori Silva Rehn.",
        "news_epoch": 1739439300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/f0d60cc9-84c9-4f43-ac5c-d295b8c17846",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Neste tarvitsee uuden tarinan \u2013 Heikki Malinen k\u00e4ytti samaa resepti\u00e4 Outokummussa",
        "news_group": -1
    },
    {
        "news_id": "bbc_c0e43dqv271o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kaksi suurta lainanantajaa on tuonut markkinoille alle 4 %:n korkoisia asuntolainatarjouksia, mik\u00e4 johtuu kilpailusta ja mahdollisista korkoleikkauksista Englannin pankilta.",
        "news_epoch": 1739438820.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0e43dqv271o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Some mortgage rates cut below 4% as competition picks up",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3def4b3d7708",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Invesco S&amp;P SmallCap 600 Pure Value ETF (RZV) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 vahvaksi sijoitusvaihtoehdoksi Smart Beta ETF -raportin perusteella.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/invesco-sp-smallcap-600-pure-value-etf-rzv-strong-etf-right-now-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Invesco S&amp;P SmallCap 600 Pure Value ETF (RZV) a Strong ETF Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f0421983cae6",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "WisdomTree U.S. MidCap ETF (EZM) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 vahvaksi ETF:ksi sen suorituskyvyn ja \u00e4lykk\u00e4\u00e4n beta-strategian perusteella.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/wisdomtree-us-midcap-etf-ezm-strong-etf-right-now-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is WisdomTree U.S. MidCap ETF (EZM) a Strong ETF Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f9ed84f6e51d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "iShares Morningstar Small-Cap Value ETF (ISCV) on rahasto, joka keskittyy pienyhti\u00f6iden arvo-osakkeisiin. Sijoittajien tulisi harkita sen suorituskyky\u00e4, kuluja ja seurattavaa indeksi\u00e4 p\u00e4\u00e4tt\u00e4ess\u00e4\u00e4n sijoittaa.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-ishares-morningstar-small-cap-value-etf-iscv-be-your-investing-radar-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should iShares Morningstar Small-Cap Value ETF (ISCV) Be on Your Investing Radar?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_e4361bce9a5d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "SPDR Russell 1000 Yield Focus ETF (ONEY) on rahoitustuote, joka keskittyy Russell 1000 -indeksin korkeatuottoisiin osakkeisiin. Sijoittajien tulisi harkita sen suorituskyky\u00e4, kulusuhteita ja tulonmuodostuspotentiaalia arvioidessaan sit\u00e4 salkuissaan.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-spdr-russell-1000-yield-focus-etf-oney-be-your-investing-radar-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should SPDR Russell 1000 Yield Focus ETF (ONEY) Be on Your Investing Radar?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c5514b4a2e05",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Invesco Large Cap Growth ETF (PWB) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 sijoitusvaihtoehtona. Smart Beta ETF -raportti tarjoaa tietoa sen suorituskyvyst\u00e4 ja potentiaalista.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/invesco-large-cap-growth-etf-pwb-strong-etf-right-now-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Invesco Large Cap Growth ETF (PWB) a Strong ETF Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c127f497a6b2",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Schwab Fundamental U.S. Small Company ETF (FNDA) on huomionarvoinen sijoitusvaihtoehto, jota sijoittajien tulisi harkita. Se keskittyy pieniin yrityksiin, joilla on vahvat perusteet, mik\u00e4 voi tarjota kasvumahdollisuuksia markkinoilla.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-schwab-fundamental-us-small-company-etf-fnda-be-your-investing-radar-2",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should Schwab Fundamental U.S. Small Company ETF (FNDA) Be on Your Investing Radar?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_2b9d148cb009",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Invesco FTSE RAFI Kehittyneet Markkinat ilman Yhdysvaltoja ETF (PXF) arvioidaan t\u00e4ll\u00e4 hetkell\u00e4 vahvaksi sijoitusvaihtoehdoksi Smart Beta ETF -kategorian sis\u00e4ll\u00e4.",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/invesco-ftse-rafi-developed-markets-ex-us-etf-pxf-strong-etf-right-now-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is Invesco FTSE RAFI Developed Markets ex-U.S. ETF (PXF) a Strong ETF Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_2348fd58ccda",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Pit\u00e4isi Vanguard Russell 1000 kasvu ETF (VONG) Oletko Investoivassa tutkassa?",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-vanguard-russell-1000-growth-etf-vong-be-your-investing-radar-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should Vanguard Russell 1000 Growth ETF (VONG) Be on Your Investing Radar?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_d7fdfa3c07b4",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Onko iShares USA Small-Cap Equity Factor ETF (SMF) vahva ETF juuri nyt?",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/ishares-us-small-cap-equity-factor-etf-smlf-strong-etf-right-now-2",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Is iShares U.S. Small-Cap Equity Factor ETF (SMLF) a Strong ETF Right Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a44291e4f9dc",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Pit\u00e4isik\u00f6 Schwab Fundamental Yhdysvaltain suuri yritys ETF (FNDX) olla Investing Tutka?",
        "news_epoch": 1739438400.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-schwab-fundamental-us-large-company-etf-fndx-be-your-investing-radar-2",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Should Schwab Fundamental U.S. Large Company ETF (FNDX) Be on Your Investing Radar?",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_a9071e0f84ed",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Likviditeetti osakkeet laskevat, mik\u00e4 analyytikon mukaan on suurin yll\u00e4tys. Negatiivinen suuntaus odotetaan jatkuvan, mik\u00e4 johtaa pessimistisyyteen, mutta strategian muutoksia ei katsota tarpeellisiksi.",
        "news_epoch": 1739438340.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/99c388de-c130-40e5-a1eb-8d23b4da933e",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Nesteen osake jatkaa p\u00f6rssiluisua \u2013 T\u00e4m\u00e4 oli analyytikon mielest\u00e4 suurin yll\u00e4tys",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143548",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "El\u00e4keyhti\u00f6 Ilmarisen sijoitukset tuottivat 8,6 prosenttia",
        "news_epoch": 1739438280.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143548",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "El\u00e4keyhti\u00f6 Ilmarisen sijoitukset tuottivat 8,6 prosenttia",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_6413a4e31bed",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Asuntosalkku k\u00e4ynnist\u00e4\u00e4 omien osakkeiden osto-ohjelman",
        "news_epoch": 1739438220.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/26fd0614-eb69-4a12-83cd-92be1f0bc2b9",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Asuntosalkku k\u00e4ynnist\u00e4\u00e4 omien osakkeiden osto-ohjelman",
        "news_group": -1
    },
    {
        "news_id": "bbc_cqldw5y4y0no",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "TikTokin tulevaisuus Yhdysvalloissa on ep\u00e4varma, mik\u00e4 on johtanut monien lataamaan sovellusta sivulatauksen kautta Apple- ja Google-rajoitusten vuoksi. K\u00e4ytt\u00e4j\u00e4t k\u00e4\u00e4ntyv\u00e4t kolmansien osapuolten sivustojen ja VPN:ien puoleen p\u00e4\u00e4st\u00e4\u00e4kseen TikTokiin, ja latausten m\u00e4\u00e4r\u00e4 on merkitt\u00e4v\u00e4sti kasvanut.",
        "news_epoch": 1739436720.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cqldw5y4y0no",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Unofficial TikTok downloads surge in the US",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_37b8bb227b83",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Wicked Megacorpin nettomyynti v\u00e4heni tammikuussa, kun taas Witter Megacorp, joka raportoi kuukausittaisia myyntilukuja, ilmoittaa j\u00e4tt\u00e4neens\u00e4 hyvi\u00e4 positioita vuodeksi.",
        "news_epoch": 1739436600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/103d0dfd-e195-4f4d-b1ec-1941458a9c53",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Witted Megacorpin liikevaihto laski tammikuussa",
        "news_group": -1
    },
    {
        "news_id": "dw_a71589236",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Tutkimus paljastaa, ett\u00e4 Irakin pohjoisosa, erityisesti Zagros-vuorten ymp\u00e4rill\u00e4, uppoaa maapallon pinnan alla olevan valtameren laatan vuoksi. T\u00e4m\u00e4 geologinen prosessi on \u00e4\u00e4rimm\u00e4isen hidasta, ja se kest\u00e4\u00e4 miljoonia vuosia, ja se liittyy mannerlaattojen liikkeeseen.",
        "news_epoch": 1739436300.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.dw.com/en/this-iraq-region-is-sinking-into-the-earth-very-slowly/a-71589236",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "This Iraq region is sinking into the Earth (very slowly)",
        "news_group": -1
    },
    {
        "news_id": "bbc_c20g37rrjy1o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kaksitoista ihmist\u00e4 loukkaantui kranaatti-iskussa baarissa Grenoblessa, Ranskassa, ja kaksi heist\u00e4 on kriittisess\u00e4 tilassa. Motivi on ep\u00e4selv\u00e4, mutta se saattaa liitty\u00e4 kostotoimiin.",
        "news_epoch": 1739436120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c20g37rrjy1o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Grenade attack in French bar injures 12",
        "news_group": 266
    },
    {
        "news_id": "bbc_c1jg4enkr3lo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Yhdistyneen kuningaskunnan talous kasvoi 0,1 % edellisen vuoden viimeisell\u00e4 nelj\u00e4nneksell\u00e4, rakennus- ja palvelusektorien vet\u00e4m\u00e4n\u00e4, huolimatta supistumisen ennusteista.",
        "news_epoch": 1739435700.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c1jg4enkr3lo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Surprise growth in UK economy at end of 2024",
        "news_group": -1
    },
    {
        "news_id": "dw_a71590938",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Kaksi sataa kahdeksankymment\u00e4 kahdeksan romanialaista palkkasoturia, joita johti Horatiu Potra, palasi konfliktialueelta Kongon demokraattisessa tasavallassa, miss\u00e4 monet heist\u00e4 vangittiin M23-militian toimesta.",
        "news_epoch": 1739434980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/romania-drc-who-is-mercenary-leader-horatiu-potra/a-71590938",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Romania, DRC: Who is mercenary leader Horatiu Potra?",
        "news_group": -1
    },
    {
        "news_id": "bbc_cdry741vgzno",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kaksi miest\u00e4 on pid\u00e4tetty, kun Kildaren maakunnassa takavarikoitiin 5 miljoonan euron arvoista kokaiinia. Garda\u00ed l\u00f6ysi noin 72 kg kokaiinia ajoneuvon ja asuinpaikan tarkastuksessa.",
        "news_epoch": 1739433840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cdry741vgzno",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "\u20ac5m worth of cocaine seized in Kildare",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143523",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Autonkuljettaja ajoi M\u00fcncheniss\u00e4 v\u00e4kijoukkoon, aiheuttaen v\u00e4hint\u00e4\u00e4n 28 henkil\u00f6n loukkaantumisen, joista kaksi on vakavasti loukkaantunut. Kuljettaja, 24-vuotias afganistanilainen turvapaikanhakija, on pid\u00e4tetty.",
        "news_epoch": 1739433480.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143523",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Ainakin 28 on loukkaantunut M\u00fcnchenin autoiskussa \u2013 Scholz: ep\u00e4illyn l\u00e4hdett\u00e4v\u00e4 maasta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143520",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Keva teki sijoituksillaan 10,4 prosentin tuoton",
        "news_epoch": 1739432760.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143520",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Keva teki sijoituksillaan 10,4 prosentin tuoton",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143461",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Eurooppa syytt\u00e4\u00e4 Yhdysvaltoja Ven\u00e4j\u00e4lle alistumisesta kesken Ukrainan sodan loppumista k\u00e4sittelevien neuvottelujen. Presidentti Trump keskusteli sek\u00e4 Ven\u00e4j\u00e4n ett\u00e4 Ukrainan johtajien kanssa, ilmaisten halua rauhaan, mutta huolia Ukrainan syrj\u00e4ytt\u00e4misest\u00e4 neuvotteluista.",
        "news_epoch": 1739432460.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143461",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "T\u00e4m\u00e4n tied\u00e4mme Ukrainan rauhanneuvotteluiden alkamisesta \u2013 Trumpille tarjolla sek\u00e4 sankarin ett\u00e4 petturin rooli",
        "news_group": 261
    },
    {
        "news_id": "dw_a71591784",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Pommi-isku Afganistanin kaupunkikehitys- ja asuntoministeri\u00f6n alueella tappoi yhden ja haavoitti kolmea. Mies yritti hy\u00f6k\u00e4t\u00e4, mutta vartijat ampuivat h\u00e4net ennen kuin h\u00e4n p\u00e4\u00e4si tavoitteeseensa.",
        "news_epoch": 1739432160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/afghanistan-apparent-suicide-blast-targets-ministry-complex/a-71591784",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Afghanistan: Apparent suicide blast targets ministry complex",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143354",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Viron ulkoministeri Kestutis Budrys varoitti vierailullaan Suomessa, ett\u00e4 Ven\u00e4j\u00e4 voisi aloittaa uuden aggressiivisen vaiheen vuosikymmenen loppuun menness\u00e4. H\u00e4n huomautti, ett\u00e4 vaikka Naton vaatimus puolustusmenojen nostamisesta 5 %:iin BKT:sta ei ole saanut hyv\u00e4\u00e4 vastaanottoa Euroopassa, Liettua aikoo k\u00e4ytt\u00e4\u00e4 5-6 % BKT:st\u00e4\u00e4n puolustukseen vuosina 2026-2030.",
        "news_epoch": 1739429580.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143354",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Liettuan ulkoministeri: Maa nostaa asemenonsa Trumpin vaatimalle tasolle",
        "news_group": 261
    },
    {
        "news_id": "yle_7420143495",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Metson liikevaihto laski viisi prosenttia, mutta tilauskanta kasvoi 13 prosenttia lokakuusta joulukuuhun. Liikevaihto laski 1,27 miljardiin euroon, ja oikaistu liiketulos laski 225 miljoonasta eurosta viime vuonna.",
        "news_epoch": 1739429340.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143495",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Metso paransi tilauskantaansa, mutta liikevaihto laski",
        "news_group": -1
    },
    {
        "news_id": "yle_7420141509",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhdysvallat etsii vahvaa suhdetta Intiaan vastatakseen Kiinan vaikutukseen, mik\u00e4 korostuu presidentti Trumpin ja p\u00e4\u00e4ministeri Modin tulevassa kokouksessa. Kauppasuhteet ovat keskeinen aihe, Trump kehotti Intiaa tasapainottamaan kauppaa ja ostamaan enemm\u00e4n amerikkalaista sotilaskalustoa.",
        "news_epoch": 1739429220.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20141509",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Analyysi: Modi lepyttelee Trumpia my\u00f6nnytyksill\u00e4, jottei Intia joutuisi kauppasodan kohteeksi",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_f1d55d14d5cd",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Siemens ja Nestle odotetaan nousevan tulosten julkistamisen j\u00e4lkeen, mik\u00e4 johtaa Euroopan osakemarkkinoiden nousuun. Euroopan osakemarkkinat avautuivat laajasti yl\u00f6s torstaina.",
        "news_epoch": 1739428680.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/6eb4511c-abce-48d9-873b-bfe5511b6511",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Siemens ja Nestle nousevat tulosjulkistusten j\u00e4lkeen \u2013 Euroopan p\u00f6rsseiss\u00e4 nousuavaus",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_2986f7ef500e",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Partnerin nettomyynti ja tulos ovat laskeneet, ja niit\u00e4 hallinnoi p\u00e4\u00e4asiassa Foamit Group. Suorituskykyraportti saatiin torstaina.",
        "news_epoch": 1739428680.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/955ceea7-60df-48b9-8930-0f32a81e3cf6",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Partneran liikevaihto ja tulos laskussa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_5610a909bf7c",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Neste, Qt, Finnair ja Mandatum kiihtyv\u00e4t suorituskauden superp\u00e4iv\u00e4n\u00e4. Yli 30 Helsingin p\u00f6rssiyhti\u00f6t\u00e4 julkaisee tulosraporttinsa torstaina.",
        "news_epoch": 1739428680.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/5f352ae6-0460-433a-9b07-794cac30ebff",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Neste luisuu, Qt, Finnair ja Mandatum kiit\u00e4v\u00e4t tuloskauden superp\u00e4iv\u00e4n nousuavauksessa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143483",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Nesteen tarkastus\u00advaliokunnan puheenjohtaja eroaa yhti\u00f6n hallituksesta",
        "news_epoch": 1739427600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143483",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Nesteen tarkastus\u00advaliokunnan puheenjohtaja eroaa yhti\u00f6n hallituksesta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143476",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Neuvottelul\u00e4hteet: Gazan aselepo saattaa sittenkin pit\u00e4\u00e4, neuvotteluissa edistyst\u00e4",
        "news_epoch": 1739426940.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143476",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Neuvottelul\u00e4hteet: Gazan aselepo saattaa sittenkin pit\u00e4\u00e4, neuvotteluissa edistyst\u00e4",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_599948bab550",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Endominesin tulos ponnisti voitolle \u2013 Kullantuotanto kasvamassa t\u00e4n\u00e4 vuonna",
        "news_epoch": 1739426940.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/b290947e-d9be-4adb-8703-72d0dbb63fee",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Endominesin tulos ponnisti voitolle \u2013 Kullantuotanto kasvamassa t\u00e4n\u00e4 vuonna",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_2d590e898b44",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Nesteen hallituksessa muutoksia",
        "news_epoch": 1739426880.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/5174be17-a9a9-42ea-8f9a-9d50cfe8d482",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Nesteen hallituksessa muutoksia",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143475",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "S-ryhm\u00e4n liiketulos kasvoi reippaasti",
        "news_epoch": 1739426280.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143475",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "S-ryhm\u00e4n liiketulos kasvoi reippaasti",
        "news_group": -1
    },
    {
        "news_id": "dw_a71579645",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Commerzbank valmistautuu leikkaamaan noin 3,900 ty\u00f6paikkaa, eli 10% henkil\u00f6st\u00f6st\u00e4\u00e4n, vuoteen 2028 menness\u00e4 pyrkiess\u00e4\u00e4n pysym\u00e4\u00e4n itsen\u00e4isen\u00e4 UniCreditin yritysostovaiheiden keskell\u00e4.",
        "news_epoch": 1739425800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/commerzbank-plans-job-cuts-new-goals-to-fend-off-unicredit/a-71579645",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Commerzbank plans job cuts, new goals to fend off UniCredit",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143465",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Viime vuosi oli Outokummulle haastava, sill\u00e4 oikaistu EBITDA oli Q4:ll\u00e4 3 miljoonan euron tappio, kun se edellisen\u00e4 vuonna oli 72 miljoonan euron voitto. Ruostumattoman ter\u00e4ksen toimitukset v\u00e4heniv\u00e4t 6 % 422 000 tonniin.",
        "news_epoch": 1739425200.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143465",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Outokummun liikevaihto laski",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143463",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finnair paransi suoritustaan, ja vertailukelpoinen liiketulos nousi 47,9 miljoonaan euroon. Neste aloittaa muutosneuvottelut, jotka voivat johtaa 600 ty\u00f6paikan v\u00e4hent\u00e4miseen.",
        "news_epoch": 1739424780.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143463",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Yle seuraa tulosp\u00e4iv\u00e4\u00e4: Outokummun liikevaihto laski, S-ryhm\u00e4n tulos kasvoi",
        "news_group": 265
    },
    {
        "news_id": "arvopaperi_70bf4e261c33",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "United Bankers ohjeistaa selv\u00e4\u00e4 liikevoiton laskua \u2013 Osinkoon muhkea korotus",
        "news_epoch": 1739424720.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/1a33db2a-b533-4702-b811-c75d7d440ad7",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "United Bankers ohjeistaa selv\u00e4\u00e4 liikevoiton laskua \u2013 Osinkoon muhkea korotus",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_ef780163d446",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Relaisilla odotettua vahvempi nelj\u00e4nnes: Liikevaihto ja tulos kasvoivat ennusteita enemm\u00e4n",
        "news_epoch": 1739424660.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/86f35a7e-f249-4b6c-9ec3-c1c145302043",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Relaisilla odotettua vahvempi nelj\u00e4nnes: Liikevaihto ja tulos kasvoivat ennusteita enemm\u00e4n",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_409a4738d06c",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Optomedin saama iso tilaus kasvatti loppuvuoden liikevaihtoa \u2013\u2009ohjelmistojen myynniss\u00e4 haasteita",
        "news_epoch": 1739424600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/cd3d7335-c898-4d5a-8b0e-89ddaeface72",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Optomedin saama iso tilaus kasvatti loppuvuoden liikevaihtoa \u2013\u2009ohjelmistojen myynniss\u00e4 haasteita",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_168db2700cff",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Harvian tulos niiasi, mutta osinko nousee",
        "news_epoch": 1739424300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/f1a886fc-859a-48fc-9ba9-c6ea64da8048",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Harvian tulos niiasi, mutta osinko nousee",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_4043de2d66c0",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Finnairin osinkoehdotus ylitti odotukset",
        "news_epoch": 1739424300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/70705bf5-e64c-4d30-a285-3c3baf1cfa6e",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Finnairin osinkoehdotus ylitti odotukset",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143452",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ty\u00f6taistelu heikensi Finnairin liiketulosta viidell\u00e4 miljoonalla eurolla vuoden loppupuolella. Lokakuusta joulukuuhun Finnairin suorituskyky parani merkitt\u00e4v\u00e4sti edellisvuoteen verrattuna, ja vertailukelpoinen liiketulos oli 47,9 miljoonaa euroa.",
        "news_epoch": 1739423460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143452",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Finnair: Ty\u00f6markkinatilanne aiheuttaa ep\u00e4varmuutta",
        "news_group": 265
    },
    {
        "news_id": "yle_7420143448",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhti\u00f6 tavoittelee noin 65 miljoonan euron s\u00e4\u00e4st\u00f6j\u00e4 huonojen taloudellisten tulosten vuoksi, mik\u00e4 on johtanut osakekurssin laskuun. Se aikoo v\u00e4hent\u00e4\u00e4 noin 600 ty\u00f6paikkaa, joista 450 Suomessa.",
        "news_epoch": 1739422740.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143448",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Neste on entist\u00e4 pahemmassa kriisiss\u00e4: Sadoille tulossa potkut, osakekurssi sy\u00f6ksyss\u00e4",
        "news_group": 265
    },
    {
        "news_id": "yle_7420143438",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yrityssaneeraushakemukset olivat korkeimmillaan palveluissa, rakentamisessa ja kaupassa, ja tammikuussa 2025 aloitettiin 381 menettely\u00e4, mik\u00e4 on 83 enemm\u00e4n kuin edellisen\u00e4 vuonna.",
        "news_epoch": 1739420460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143438",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Konkurssien m\u00e4\u00e4r\u00e4 nousi 2000-luvun enn\u00e4tykseen \u2013 edellisen kerran kuukausitasolla niit\u00e4 oli n\u00e4in paljon syksyll\u00e4 1997",
        "news_group": -1
    },
    {
        "news_id": "dw_a71590288",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Pohjois-Korea purkaa Mount Kumgangin lomakeskuksessa sijaitsevan tilan, jota k\u00e4ytet\u00e4\u00e4n Korean sodan j\u00e4lkeen eristyksiss\u00e4 olevien perheiden tapaamisiin. Etel\u00e4-Korea tuomitsi t\u00e4m\u00e4n teon ep\u00e4inhimilliseksi ja vaati v\u00e4lit\u00f6nt\u00e4 lopettamista, korostaen, ett\u00e4 Pohjois-Korean on otettava vastuu.",
        "news_epoch": 1739420040.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/n-korea-destroys-meeting-place-for-war-separated-families/a-71590288",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "N. Korea destroys meeting place for war-separated families",
        "news_group": 267
    },
    {
        "news_id": "yle_7420141363",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Vuonna 2024 Iranin presidentti kuoli dramaattisesti, mik\u00e4 johti merkitt\u00e4viin muutoksiin maassa. Iranin hallitus lievent\u00e4\u00e4 rajoituksia, vapauttaa toimittajia ja poliittisia vankeja pel\u00e4ten vallankumousta ja kamppaillen heikon talouden kanssa.",
        "news_epoch": 1739419200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20141363",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Uudet tuulet puhaltavat nyt Iranissa \u2013 asiantuntija kertoo, mist\u00e4 on kyse",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143433",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Taiwanilaisessa ostoskeskuksessa r\u00e4j\u00e4hdys \u2013 ainakin viisi kuollut",
        "news_epoch": 1739418960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143433",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Taiwanilaisessa ostoskeskuksessa r\u00e4j\u00e4hdys \u2013 ainakin viisi kuollut",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143428",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Jos perustuslakituomioistuin hyv\u00e4ksyy Etel\u00e4-Korean presidentti Yoon Suk-yeolin virkasyytteen, h\u00e4net keskeytet\u00e4\u00e4n ja uusia vaaleja pidet\u00e4\u00e4n 60 p\u00e4iv\u00e4n kuluessa. Yoon osallistui torstaina mahdollisesti viimeiseen kuulemiseensa, johon sis\u00e4ltyi neuvotteluja tiedustelu- ja turvallisuusviranomaisten kanssa.",
        "news_epoch": 1739417460.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143428",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Etel\u00e4-Korean Yoon mahdollisesti virkasyytek\u00e4sittelyns\u00e4 viimeisess\u00e4 kuulemisessa",
        "news_group": -1
    },
    {
        "news_id": "bbc_cj91d3jkpvlo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Intian p\u00e4\u00e4ministeri Narendra Modin vierailu Washingtonissa presidentti Donald Trumpin tapaamiseen sis\u00e4lt\u00e4\u00e4 l\u00e4mpimi\u00e4 vuorovaikutuksia ja keskusteluja Yhdysvaltojen ja Intian strategisesta kumppanuudesta.",
        "news_epoch": 1739416800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cj91d3jkpvlo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Trade, tariffs and visas to dominate Trump-Modi talks",
        "news_group": -1
    },
    {
        "news_id": "bbc_c8d93dd63v2o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Utah Transit Authorityn julkaisema video n\u00e4ytt\u00e4\u00e4 kuljettajan kapean pelastumisen junakolarista, kun h\u00e4net ty\u00f6nnettiin raiteille. Kuljettaja poistui autosta juuri ennen iskua, eik\u00e4 vammoja raportoitu.",
        "news_epoch": 1739414760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c8d93dd63v2o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Moment SUV driver narrowly escapes train collision",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143424",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump haastoi Twitterin, kun h\u00e4nen tilins\u00e4 j\u00e4\u00e4dytettiin Kapitolir\u00e4hin\u00f6iden j\u00e4lkeen vuonna 2021. Nykyisin X-niminen yritys on suostunut maksamaan h\u00e4nelle noin 10 miljoonaa dollaria korvauksena.",
        "news_epoch": 1739414760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143424",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Elon Muskin X maksaa korvaukset Trumpille \u2013 osapuolet sopuun Trumpin nostamassa oikeusjutussa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143276",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Siltam\u00e4ki v\u00e4itt\u00e4\u00e4, ett\u00e4 osaamisvajeeseen Suomessa ei voida puuttua koulutustason laskemisella. Hallitus on k\u00e4ynnist\u00e4nyt ohjelman uusien l\u00e4\u00e4k\u00e4rien kouluttamiseksi, mutta huolia her\u00e4tt\u00e4\u00e4 koulutuksen laadun heikkeneminen ja valmistumisen vaatimusten laskeminen.",
        "news_epoch": 1739414700.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20143276",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Tuija Siltam\u00e4en kolumni: Rimaa ei voi en\u00e4\u00e4 laskea \u2013 korkeakoulutettujen pit\u00e4isi oikeastikin osata jotain",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143320",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Suomen parlamentti k\u00e4sittelee Suomen Akatemian lakia, joka ehdottaa, ett\u00e4 tieteellisen tutkimuksen rahoituksen tulisi olla linjassa ulko- ja turvallisuuspolitiikan kanssa.",
        "news_epoch": 1739414160.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20143320",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Akateemikko uudesta lakihankkeesta: Olisi erikoista, ett\u00e4 demokratiassa lakiin kirjattaisiin, mit\u00e4 tutkimuksen pit\u00e4\u00e4 olla",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143267",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yhdysvallat on asettanut pakotteet l\u00e4hes 200 ven\u00e4l\u00e4iselle \u00f6ljy- ja kaasukuljetusalukselle, ja EU:n j\u00e4senet vaativat tiukempia toimia ven\u00e4l\u00e4isen \u00f6ljykuljetuksen pys\u00e4ytt\u00e4miseksi It\u00e4merell\u00e4.",
        "news_epoch": 1739412600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143267",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Animaatio n\u00e4ytt\u00e4\u00e4 pakotetankkerien rallin It\u00e4merell\u00e4 \u2013 seuraava askel sen kuriinsaamiseksi voi olla EU:lle vaikea",
        "news_group": 263
    },
    {
        "news_id": "bbc_cvgmygm2n80o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Nelj\u00e4 veteraania Pennsylvaniassa keskustelee yst\u00e4vyydest\u00e4\u00e4n ja Elon Muskin vaikutuksesta presidentti Trumpin hallinnossa. Vaikka vain yksi heist\u00e4 \u00e4\u00e4nesti Trumpin puolesta, huolia her\u00e4tt\u00e4\u00e4 Muskin merkitt\u00e4v\u00e4 rooli hallituksen tehokkuudessa ja mahdollisissa eturistiriidoissa.",
        "news_epoch": 1739412420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cvgmygm2n80o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "&#x27;On a power trip&#x27; or &#x27;obviously brilliant&#x27;? Americans weigh Musk&#x27;s influence",
        "news_group": -1
    },
    {
        "news_id": "bbc_c3d57zm9m0po",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Yhdysvaltojen inflaatio nousi tammikuussa 3 prosenttiin, mik\u00e4 ylitti odotetun 2,9 prosentin tason, johtuen kananmunien ja energian hintojen noususta. T\u00e4m\u00e4 tuo haasteita presidentti Trumpille, joka keskittyi aiemmin inflaation hallintaan kampanjassaan.",
        "news_epoch": 1739409480.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c3d57zm9m0po",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "US inflation in surprise increase",
        "news_group": -1
    },
    {
        "news_id": "dw_a71590176",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Yli 10 ihmist\u00e4 haavoittui, osa vakavasti, kun granaatti heitettiin baariin Grenoblessa, Ranskassa. Kaupunginjohtaja tuomitsi v\u00e4kivallan ja kiitti h\u00e4t\u00e4poliisia. Tutkijat tutkivat mahdollisia yhteyksi\u00e4 huumekauppaan, ja ep\u00e4ilty saattoi olla aseistettu Kalashnikovilla.",
        "news_epoch": 1739408460.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/france-grenade-thrown-into-grenoble-bar-injures-several/a-71590176",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "France: Grenade thrown into Grenoble bar injures several",
        "news_group": 266
    },
    {
        "news_id": "bbc_c07kljvv5mko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Video esittelee Kansainv\u00e4liselt\u00e4 avaruusasemalta (ISS) otettuja kuvia revontulista Kanadan yll\u00e4. Revontulet, jotka ovat n\u00e4kyviss\u00e4 sek\u00e4 maasta ett\u00e4 avaruudesta, syntyv\u00e4t, kun aurinkotuuli h\u00e4iritsee Maan magneettikentt\u00e4\u00e4.",
        "news_epoch": 1739406840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/weather/videos/c07kljvv5mko",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "WATCH: Astronaut&#x27;s view of Northern Lights from International Space Station",
        "news_group": -1
    },
    {
        "news_id": "bbc_cm27g2jzd78o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Etel\u00e4-Afrikan ja Yhdysvaltojen v\u00e4linen suhde on heikentynyt presidentti Trumpin p\u00e4\u00e4t\u00f6ksen my\u00f6t\u00e4 leikata taloudellista apua, syyn\u00e4 huoli maanhallinnasta ja v\u00e4itetyst\u00e4 ep\u00e4oikeudenmukaisuudesta afrikaneriyhteis\u00f6\u00e4 kohtaan.",
        "news_epoch": 1739403300.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cm27g2jzd78o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Is it checkmate for South Africa after Trump aid freeze?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143412",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ainakin kaksitoista ihmist\u00e4 haavoittui Grenoblessa, Ranskassa, kun granaatti r\u00e4j\u00e4hti baarissa keskiviikkoiltana. Kaksi henkil\u00f6\u00e4 on kriittisess\u00e4 tilassa. Tuntematon hy\u00f6kk\u00e4\u00e4j\u00e4 heitti granaatin ja pakeni paikalta, kun paikalla oli paljon asiakkaita.",
        "news_epoch": 1739403060.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143412",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Ranskan Grenoblessa baariin heitetty kranaatti r\u00e4j\u00e4hti \u2013 toistakymment\u00e4 haavoittui",
        "news_group": 266
    },
    {
        "news_id": "yle_7420143411",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Liittovaltion ty\u00f6ntekij\u00f6iden p\u00e4\u00e4liitto totesi, ett\u00e4 tuore oikeuden p\u00e4\u00e4t\u00f6s ei k\u00e4sitellyt presidentti Trumpin liittovaltion ty\u00f6voiman v\u00e4hent\u00e4missuunnitelman laillisuutta.",
        "news_epoch": 1739400720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143411",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Aiemmin j\u00e4\u00e4dytetty Trumpin hallinnon suunnitelma ty\u00f6voiman v\u00e4hent\u00e4misest\u00e4 saa jatkua",
        "news_group": -1
    },
    {
        "news_id": "bbc_cednp178dwdo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kolumbian kongressissa ehdotetaan lakia, joka kielt\u00e4\u00e4 Pablo Escobarin juhlivan tavaran myynnin, mik\u00e4 her\u00e4tt\u00e4\u00e4 jakautuneita mielipiteit\u00e4. Lakiehdotus pyrkii kielt\u00e4m\u00e4\u00e4n rikollisten, mukaan lukien Escobarin, mainostavien tuotteiden myynnin, jotta voitaisiin torjua h\u00e4nen perint\u00f6ns\u00e4 ylist\u00e4mist\u00e4, joka liittyy tuhansiin kuolemiin.",
        "news_epoch": 1739397720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cednp178dwdo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Erasing Escobar: Will Colombia ban the sale of memorabilia of the drug lord?",
        "news_group": -1
    },
    {
        "news_id": "bbc_cd7d9p0j5qeo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Gazan tulitaukosopimus Israelin ja Hamasin v\u00e4lill\u00e4, joka alkoi 19. tammikuuta, kohtaa merkitt\u00e4vi\u00e4 haasteita. Egypti ja Qatar tiivist\u00e4v\u00e4t diplomaattisia ponnistelujaan sopimuksen pelastamiseksi, kun taas Hamas on l\u00e4hett\u00e4nyt delegaation Kairoon neuvotteluihin.",
        "news_epoch": 1739397420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cd7d9p0j5qeo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Confusion clouds efforts to save Gaza ceasefire",
        "news_group": 264
    },
    {
        "news_id": "nasdaq_ac111c7ba8ac",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Nykyinen tulos murtuu",
        "news_epoch": 1739397360.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/breaking-down-current-earnings-outlook-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Breaking Down the Current Earnings Outlook",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_ccb0c0f3e401",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Nykyinen tulosn\u00e4kym\u00e4 on positiivinen, vahvalla raportointijaksolla ja yritysten ylitt\u00e4ess\u00e4 odotukset. Tulevat jaksot ovat kuitenkin ep\u00e4varmoja.",
        "news_epoch": 1739397060.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/breaking-down-current-earnings-outlook",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Breaking Down the Current Earnings Outlook",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143409",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Veroprosentit Suomessa vaihtelevat kunnittain, ja Helsingiss\u00e4 on t\u00e4n\u00e4 vuonna alhaisin verotus keskituloisille. Verotuksen vertailun teki Veronmaksajain Keskusliitto, ja se nosti esiin, ett\u00e4 Etel\u00e4-Savon Mikkeli on eniten verotettu.",
        "news_epoch": 1739394360.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143409",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Maakuntakeskuksista Helsinki verottaa keskituloisia kaikkein kevyimmin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143408",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Saksa, Ranska, Britannia, Puola, Italia, Espanja ja Euroopan komissio ilmensiv\u00e4t valmiuttaan tukea Ukrainaa ja korostivat, ett\u00e4 Euroopan on oltava mukana neuvotteluissa, jotka koskevat Ukrainan tulevaisuutta.",
        "news_epoch": 1739392800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143408",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Euroopan mailta lupaus yhteisty\u00f6st\u00e4 Yhdysvaltojen kanssa Ukrainan tulevaisuudesta \u2013 \u201dEurooppa osaksi neuvotteluja\u201d",
        "news_group": 261
    },
    {
        "news_id": "bbc_cp3j0e79q52o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Smitha, delhil\u00e4inen kotity\u00f6ntekij\u00e4, kohtasi ty\u00f6nantajansa julkista hyv\u00e4ksik\u00e4ytt\u00f6\u00e4 syytettyn\u00e4 varkaudesta. Huolimatta kuukauden ty\u00f6skentelyst\u00e4 h\u00e4n sai vain pienen palkkion ja h\u00e4net kiellettiin p\u00e4\u00e4sem\u00e4st\u00e4 yhteis\u00f6\u00f6n.",
        "news_epoch": 1739391480.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cp3j0e79q52o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Why India fails to protect its domestic workers despite decades of abuse",
        "news_group": -1
    },
    {
        "news_id": "bbc_cy7g45g2nxno",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Guangzhoussa asuva 28-vuotias Holly Wang k\u00e4ytt\u00e4\u00e4 kiinalaista AI-sovellusta DeepSeek emotionaalisen tuen saamiseksi, erityisesti iso\u00e4itins\u00e4 kuoleman j\u00e4lkeen. H\u00e4n pit\u00e4\u00e4 sit\u00e4 tehokkaampana kuin perinteiset neuvontapalvelut.",
        "news_epoch": 1739390700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cy7g45g2nxno",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "&#x27;DeepSeek moved me to tears&#x27;: How young Chinese find therapy in AI",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_99d55fc88ad2",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "13. helmikuuta 2025 odotetaan yritysten, kuten DE, MCO, DUK, BN, ZTS, AEP, HWM, DDOG, CBRE, GEHC, ALNY ja PCG, raportoivan tuloksensa ennen markkinoiden avautumista.",
        "news_epoch": 1739386800.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/pre-market-earnings-report-february-13-2025-de-mco-duk-bn-zts-aep-hwm-ddog-cbre-gehc-alny",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Pre-Market Earnings Report for February 13, 2025 :  DE, MCO, DUK, BN, ZTS, AEP, HWM, DDOG, CBRE, GEHC, ALNY, PCG",
        "news_group": -1
    },
    {
        "news_id": "bbc_c78x3klx4rjo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "It\u00e4vallan \u00e4\u00e4rioikeistolainen Vapauspuolue on lopettanut koalitiosopimukset konservatiivisen Kansanpuolueen kanssa neuvottelujen j\u00e4lkeen, mik\u00e4 merkitsee toista ep\u00e4onnistumista syyskuun vaalien j\u00e4lkeen.",
        "news_epoch": 1739385720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c78x3klx4rjo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Austria&#x27;s political crisis deepens as far right fails to form government",
        "news_group": -1
    },
    {
        "news_id": "bbc_cy8pzw3we2xo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Israel pyrkii pident\u00e4m\u00e4\u00e4n m\u00e4\u00e4r\u00e4aikaa joukkojensa vet\u00e4miselle Etel\u00e4-Libanosta, mik\u00e4 her\u00e4tt\u00e4\u00e4 huolta maassa, jolla on historia Israelin miehityksest\u00e4. Tulitaukosopimus, jonka Yhdysvallat ja Ranska ovat v\u00e4litt\u00e4neet, vaatii Israelin joukkojen vet\u00e4ytymist\u00e4 ja Hezbollah-taistelijoiden poistamista.",
        "news_epoch": 1739384700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cy8pzw3we2xo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Israel seeks another extension for Lebanon withdrawal, source says",
        "news_group": -1
    },
    {
        "news_id": "bbc_cg5y9ggqpqdo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Evertonin jalkapalloseuran paidan etuosan sponsori, Stake, luopuu lisenssist\u00e4\u00e4n Isossa-Britanniassa pornon\u00e4yttelij\u00e4 Bonnie Bluen mainoksen tutkinnan j\u00e4lkeen. Peliviranomainen varoittaa seuroja vastuistaan koskien lisensoimattomia uhkapelisivustoja.",
        "news_epoch": 1739381280.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cg5y9ggqpqdo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Everton sponsor leaves UK after porn ad probe",
        "news_group": -1
    },
    {
        "news_id": "bbc_c1wex4qq792o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Antimafia-poliisi kohdisti iskunsa Sisilian mafiaan est\u00e4\u00e4kseen heid\u00e4n uudelleenj\u00e4rjest\u00e4ytymisens\u00e4. Tutkimukset paljastavat modernisoituneen j\u00e4rjest\u00e4ytyneen rikollisuuden, joka sopeutuu uusiin todellisuuksiin samalla kun kaipaa menneit\u00e4 aikoja.",
        "news_epoch": 1739381040.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c1wex4qq792o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Sicily&#x27;s gangsters complain they can&#x27;t get the staff",
        "news_group": -1
    },
    {
        "news_id": "bbc_c334kyl37jmo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Euroopan maiden on kehotettu ottamaan johtoasema Ukrainan rahoituksessa, kun Yhdysvallat muuttaa kantaansa sotaan. Muita uutisia ovat nopeusrajoitusten alentaminen Irlannissa, kysymyksi\u00e4 Valko-Ven\u00e4j\u00e4n vaaleista, holokaustin selviytyjien muistaminen ja myrskyn \u00c9owyn j\u00e4lkiseuraukset.",
        "news_epoch": 1739380440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c334kyl37jmo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "&#x27;It&#x27;s a new reality&#x27; - US stance on Ukraine a bitter blow to Zelensky",
        "news_group": 261
    },
    {
        "news_id": "bbc_cpvme8jw9dro",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Helmikuu merkitsee ep\u00e4virallista turistikautta Santorinilla, Kreikassa, mutta \u00e4skett\u00e4iset maanj\u00e4ristykset ovat her\u00e4tt\u00e4neet huolia turismista ja henkil\u00f6st\u00f6st\u00e4. Varausten m\u00e4\u00e4r\u00e4 on laskenut, ja jotkut ty\u00f6ntekij\u00e4t miettiv\u00e4t vaihtoehtojaan.",
        "news_epoch": 1739379840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cpvme8jw9dro",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Santorini fears for summer tourist season as earthquakes hit island",
        "news_group": -1
    },
    {
        "news_id": "sn_d2dce4224b39",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Uusi veritesti nimelt\u00e4 PAC-MANN voi havaita haimasy\u00f6v\u00e4n varhaisessa vaiheessa tunnistamalla erityisi\u00e4 proteiineja veress\u00e4. T\u00e4m\u00e4 testi voisi parantaa varhaista diagnoosia ja hoitotuloksia, sill\u00e4 haimasy\u00f6p\u00e4 diagnosoidaan usein my\u00f6h\u00e4\u00e4n ilmeisten oireiden puutteen vuoksi.",
        "news_epoch": 1739379600.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/pancreatic-cancer-pac-mann-blood-test",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "A pancreatic cancer blood test called PAC-MANN could spot the disease early",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_85acacaec4df",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "12. helmikuuta 2025 odotetaan yhti\u00f6iden, kuten CSCO, APP, EQIX, WMB, TTD, WCN, HOOD, HUBS, SLF, TYL, VTR ja ROL, raportoivan tuloksensa ty\u00f6ajan j\u00e4lkeen. Cisco Systems, Inc.",
        "news_epoch": 1739379600.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/after-hours-earnings-report-february-12-2025-csco-app-eqix-wmb-ttd-wcn-hood-hubs-slf-tyl",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "After-Hours Earnings Report for February 12, 2025 :  CSCO, APP, EQIX, WMB, TTD, WCN, HOOD, HUBS, SLF, TYL, VTR, ROL",
        "news_group": -1
    },
    {
        "news_id": "sn_4e51034af7cb",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Tutkijat ovat l\u00f6yt\u00e4neet, ett\u00e4 bakteerikuitu voi toimia kasvien laastarina, mik\u00e4 parantaa merkitt\u00e4v\u00e4sti kasvien parantumista ja uusiutumista. Kokeissa bakteerikuitup\u00e4\u00e4llysteill\u00e4 hoidetut haavat parantuivat nopeammin ja t\u00e4ydellisemmin kuin hoitamattomat haavat.",
        "news_epoch": 1739379600.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/bacteria-band-aid-plants-heal-wounds",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "A bacteria-based Band-Aid helps plants heal their wounds",
        "news_group": -1
    },
    {
        "news_id": "bbc_czj3z290ngyo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "WHO on raportoinut, ett\u00e4 HIV:n, polion, mpoxin ja lintuinfluenssan ohjelmat ovat k\u00e4rsineet vakavasti Yhdysvaltojen hallituksen ulkomaisen avun j\u00e4\u00e4dytt\u00e4misest\u00e4, joka on kymmeni\u00e4 miljardeja dollareita.",
        "news_epoch": 1739377980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/czj3z290ngyo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Fifty countries affected by USAID freeze, says WHO",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx2jdnv0ywyo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Arkeologit ovat l\u00f6yt\u00e4neet merkitt\u00e4v\u00e4n osan Lontoon ensimm\u00e4isest\u00e4 basilikasta, 2 000 vuotta vanhasta roomalaisesta julkisesta rakennuksesta, toimistorakennuksen alta, joka on m\u00e4\u00e4r\u00e4 purkaa.",
        "news_epoch": 1739376000.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2jdnv0ywyo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Beginnings of Roman London discovered in office basement",
        "news_group": -1
    },
    {
        "news_id": "dw_a71587345",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "YK:n ihmisoikeuskomissaari Volker Turk raportoi, ett\u00e4 Bangladeshin entinen hallitus rikkoi j\u00e4rjestelm\u00e4llisesti ihmisoikeuksia tukahduttaakseen mielenosoituksia, jotka johtivat Sheikh Hasinan eroamiseen.",
        "news_epoch": 1739373060.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/un-up-to-1-400-killed-in-bangladesh-protests-crackdown/a-71587345",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "UN: Up to 1,400 killed in Bangladesh protests crackdown",
        "news_group": -1
    },
    {
        "news_id": "yle_7420141051",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Sosiaalinen media edist\u00e4\u00e4 usein ajatusta, ett\u00e4 voi ansaita tuhansia euroja kuukaudessa passiivisen tulon avulla, mik\u00e4 voi vaikuttaa huijaukselta. Vaikka se lupaa taloudellista vapautta ilman perinteisi\u00e4 ty\u00f6paikkoja, todellisuus on monimutkaisempaa.",
        "news_epoch": 1739372400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20141051",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Nopea rikastuminen ja passiiviset tulot ovat nyt kaikkien huulilla \u2013 selvitimme, voiko nukkuessaan tienata oikeasti",
        "news_group": -1
    },
    {
        "news_id": "dw_a71587733",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Afrikan unionin valmistautuessa valitsemaan seuraavaa komission puheenjohtajaa, kolme p\u00e4\u00e4ehdokasta on keski\u00f6ss\u00e4: Mahamoud Ali Youssouf Djiboutista, Richard Randriamandrato Madagaskarilta ja Raila Odinga Keniasta.",
        "news_epoch": 1739372220.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/african-union-leadership-who-can-best-fix-africa-s-problems/a-71587733",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "African Union leadership: Who can best fix Africa&#x27;s problems?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143237",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Viime syksyn\u00e4 Nordea kohtasi hakkerihy\u00f6kk\u00e4yksi\u00e4, jotka vahingoittivat luottamusta, mutta kenenk\u00e4\u00e4n tilej\u00e4 ei vaarannettu. Talousreportteri huomautti, ett\u00e4 Nordnetin palvelussa asiakkaat p\u00e4\u00e4siv\u00e4t k\u00e4siksi toistensa salkkuihin, mik\u00e4 johti yritykseen k\u00e4yd\u00e4 kauppaa suomalaisen asiakkaan tilill\u00e4.",
        "news_epoch": 1739371620.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143237",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Analyysi: T\u00e4m\u00e4 moka voi maksaa Nordnetille miljoonia",
        "news_group": 268
    },
    {
        "news_id": "yle_7420141669",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "CSE Entertainment, kajaanilainen vientiyritys, valmistautuu mahdollisiin Yhdysvaltojen tullimaksuihin lis\u00e4\u00e4m\u00e4ll\u00e4 varastoaan Yhdysvaltojen tyt\u00e4ryhti\u00f6ss\u00e4\u00e4n. Yhdysvaltojen myynnin osuus on 60-70% liikevaihdosta, ja yritys on ollut aktiivinen jo ennen Yhdysvaltojen presidentinvaaleja. Jos Trumpin ehdottama 10% tulli EU:lle toteutuu, se voi nostaa kustannuksia Yhdysvaltojen asiakkaille. Kuitenkin CSE keskittyy kilpailukyvyn yll\u00e4pit\u00e4miseen ja on n\u00e4hnyt kasvua yli 65 maassa, odottaen 30-40% kasvua Euroopan liikevaihdossa t\u00e4n\u00e4 vuonna. Yritys on optimistinen huolimatta mahdollisista kauppasodista.",
        "news_epoch": 1739370960.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20141669",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Peliyritys vei tuotteitaan riskill\u00e4 Kajaanista Yhdysvaltoihin jo ennen Trumpin voittoa \u2013 n\u00e4in tullimaksuja ennakoidaan",
        "news_group": -1
    },
    {
        "news_id": "dw_a71587157",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Klaus Iohannis erosi Romanian presidenttin\u00e4 kahden kauden j\u00e4lkeen, mik\u00e4 merkitsee h\u00e4pe\u00e4llist\u00e4 loppua h\u00e4nen presidenttikaudelleen. H\u00e4net n\u00e4htiin aikanaan reformihenkil\u00f6n\u00e4, mutta h\u00e4n j\u00e4tt\u00e4\u00e4 viran post-kommunistisessa Romaniassa kaikkein ep\u00e4suosituimpana presidenttin\u00e4.",
        "news_epoch": 1739370540.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/romania-at-the-end-of-klaus-iohannis-two-term-presidency/a-71587157",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Romania at the end of Klaus Iohannis&#x27; two-term presidency",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_2e31a075405c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "GOLD ylitt\u00e4\u00e4 keskeisen liikkuvan keskitason",
        "news_epoch": 1739369760.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/gold-crosses-above-key-moving-average-level-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "GOLD Crosses Above Key Moving Average Level",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143381",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Oulussa asuntomarkkinoiden kehitys poikkeaa muista suurista kaupungeista, ja hinnat nousevat merkitt\u00e4v\u00e4sti. Kaupungissa on rakennettu v\u00e4hemm\u00e4n uusia asuntoja, mik\u00e4 est\u00e4\u00e4 ylitarjontaa. Asuntokauppojen volyymit vaikuttavat hintareaktioihin, ja Oulussa reaktio on hitaampi verrattuna esimerkiksi Helsinkiin. Huolimatta heikommasta taloussyklist\u00e4, v\u00e4est\u00f6nkasvu Oulussa voi auttaa hintojen vakauttamisessa, jotka ovat pysyneet vakaana 2010-luvulta l\u00e4htien.",
        "news_epoch": 1739369520.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143381",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Asuntojen hinnat ja vuokrat nousevat erityisesti Oulussa \u2013 ekonomisti n\u00e4kee siihen kolme syyt\u00e4",
        "news_group": -1
    },
    {
        "news_id": "sn_ce8f2ec505ad",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "\u00c4skett\u00e4in V\u00e4limeress\u00e4 havaittu kosminen neutriino omaa energiatason 220 petaelektronivolttia, mik\u00e4 tekee siit\u00e4 t\u00e4h\u00e4n menness\u00e4 havaituista energisimm\u00e4n neutriinon.",
        "news_epoch": 1739368800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/cosmic-neutrino-unknown-energy-records",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "A cosmic neutrino of unknown origins smashes energy records",
        "news_group": -1
    },
    {
        "news_id": "sn_2ec1a061461f",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Pieni kliininen tutkimus viittaa siihen, ett\u00e4 semaglutidi, painonpudotukseen ja diabetekseen k\u00e4ytetty l\u00e4\u00e4ke, voi v\u00e4hent\u00e4\u00e4 alkoholin himoa alkoholink\u00e4ytt\u00f6h\u00e4iri\u00f6st\u00e4 k\u00e4rsivill\u00e4.",
        "news_epoch": 1739368800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/ozempic-reduce-drink-alcohol",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Ozempic\u2019s key ingredient may reduce the desire to drink alcohol",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143378",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "BBS-Bioactive Solutions on ilmoittanut konkurssistaan ep\u00e4onnistuneiden lainaneuvottelujen j\u00e4lkeen. Yritys, joka on kehitt\u00e4nyt luuimplantin, totesi, ettei se voi jatkaa toimintaansa. Hallitus on p\u00e4\u00e4tt\u00e4nyt j\u00e4tt\u00e4\u00e4 konkurssihakemuksen Oulun k\u00e4r\u00e4j\u00e4oikeuteen. He neuvottelevat my\u00f6s lis\u00e4rahoituksesta valittujen osakkeenomistajien kanssa ja harkitsevat liiketoiminnan tai osakkeiden myymist\u00e4.",
        "news_epoch": 1739366820.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143378",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Luuimplanttia kehitt\u00e4nyt BBS-Bioactive Solutions hakeutuu konkurssiin",
        "news_group": -1
    },
    {
        "news_id": "dw_a71578095",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Donald Trump pyrkii radikaaleihin muutoksiin Yhdysvalloissa, eik\u00e4 h\u00e4n juurikaan huomioi poliittisia vastustajiaan. Toisen kauden alusta l\u00e4htien h\u00e4n on toteuttanut jyrkki\u00e4 toimenpiteit\u00e4 maahanmuutossa ja hallinnossa, muistuttaen Franklin D. Rooseveltin Uuden diilin aikakauden muutoksia, jotka muovasivat liittovaltion roolia Suuren laman aikana. Vaikka Roosevelt kohtasi oikeudellista vastustusta, Trump hy\u00f6tyy tukevasta oikeusistuimesta. H\u00e4nen l\u00e4hestymistapansa, joka perustuu toimeenpanom\u00e4\u00e4r\u00e4yksiin, pyrkii heikent\u00e4m\u00e4\u00e4n demokraattisia kontrollimekanismeja ja luomaan autoritaarisia rakenteita, mik\u00e4 her\u00e4tt\u00e4\u00e4 huolta Yhdysvaltojen demokratian tulevaisuudesta. H\u00e4nen strategiansa tehokkuus riippuu poliittisista dynamiikoista ja mahdollisista vastareaktioista \u00e4\u00e4nest\u00e4jilt\u00e4.",
        "news_epoch": 1739365620.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/donald-trump-chaos-strategy-with-historical-precedents/a-71578095",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Donald Trump: Chaos strategy with historical precedents",
        "news_group": -1
    },
    {
        "news_id": "dw_a71583737",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Jordanian kuningas Abdullah II:n ja Yhdysvaltain presidentti Donald Trumpin v\u00e4linen tapaaminen oli herkk\u00e4 tasapainottelu. Abdullah ehdotti 2 000 sairauden vuoksi k\u00e4rsiv\u00e4n palestiinalaislapsen ottamista Gazasta, mik\u00e4 sai Trumpilta kiitosta. Huolimatta aiemmista uhkauksista leikata apua, Trump vahvisti Yhdysvaltojen tuen Jordaniaa kohtaan. Tilanne on monimutkainen, koska Jordania on historiallisen haluton ottamaan lis\u00e4\u00e4 palestiinalaisia, sill\u00e4 siell\u00e4 on jo yli 2 miljoonaa pakolaista. Gazassa jatkuva konflikti ja humanitaarinen kriisi sek\u00e4 Trumpin kiistanalaiset ehdotukset uudelleensijoittamisesta lis\u00e4\u00e4v\u00e4t j\u00e4nnitteit\u00e4. Tarkkailijat huomauttavat, ett\u00e4 palestiinalaisten pakottaminen voisi heikent\u00e4\u00e4 Jordanian vakautta ja kahden valtion ratkaisua. Tapaaminen osui my\u00f6s Israelin ja Hamasin v\u00e4lisen hauraan tulitauon aikaan, ja huolenaiheita on edelleen panttivangeista ja humanitaarisista oloista Gazassa.",
        "news_epoch": 1739364960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/us-and-jordan-walk-tightrope-over-gaza-relocation-proposal/a-71583737",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "US and Jordan walk tightrope over Gaza relocation proposal",
        "news_group": -1
    },
    {
        "news_id": "bbc_c391mpmr81xo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "L\u00e4hes 1,8 miljoonaa viljelty\u00e4 ja vangittua lintua on teurastettu Yhdistyneess\u00e4 kuningaskunnassa lintuinfluenssan puhkeamisen vuoksi, ja tapauksia on raportoitu 33.",
        "news_epoch": 1739364960.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.bbc.com/news/articles/c391mpmr81xo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Avian flu spread sees 1.8 million farmed birds culled",
        "news_group": -1
    },
    {
        "news_id": "dw_a71585386",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Sukupuolitaudit (STI) lis\u00e4\u00e4ntyv\u00e4t Euroopassa, ja gonorrhean tapauksia raportoitiin enn\u00e4tykselliset l\u00e4hes 100 000 vuonna 2023, mik\u00e4 on nousua 74 000:sta vuonna 2022.",
        "news_epoch": 1739363280.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.dw.com/en/stis-in-europe-gonorrhea-and-syphilis-hit-record-highs/a-71585386",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "STIs in Europe: Gonorrhea and syphilis hit record highs",
        "news_group": -1
    },
    {
        "news_id": "sn_fa419052d88a",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Valashait k\u00e4ytt\u00e4v\u00e4t \u00f6ljy- ja kaasulaitoksia pys\u00e4hdyspaikkoina vaelluksillaan, houkuteltuina n\u00e4iden rakenteiden ymp\u00e4rill\u00e4 el\u00e4v\u00e4st\u00e4 planktonista. Vaikka n\u00e4m\u00e4 laitokset tarjoavat ruokaa haille, ne my\u00f6s aiheuttavat riskej\u00e4, kuten alusten t\u00f6rm\u00e4yksi\u00e4 ja saastumista. Tutkijat ovat seuranneet valashaita ymm\u00e4rt\u00e4\u00e4kseen, kuinka n\u00e4m\u00e4 ihmisen tekem\u00e4t rakenteet vaikuttavat niiden liikkeisiin, korostaen tietoisuuden lis\u00e4\u00e4misen tarvetta merensuojelussa.",
        "news_epoch": 1739361600.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/whale-shark-pit-stop-oil-gas-rig",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Migrating whale sharks make pit stops at oil and gas rigs",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143332",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Piippo oyj on neuvotteluissa, jotka voivat johtaa jopa 53 irtisanomiseen. Yritys on allekirjoittanut a niittokoneiden ja langan myynti\u00e4 koskevan aiesopimuksen Cotesille Portugalissa noin 6 miljoonalla eurolla, mik\u00e4 johtaa tuotannon lopettamiseen Outokummussa vuoden loppuun menness\u00e4. Vaikka Piippo-tavaramerkki myyd\u00e4\u00e4n, itse yritys pysyy listattuna muiden omaisuuserien kanssa. T\u00e4m\u00e4 siirto pyrkii parantamaan Piipon taloudellista tilannetta, joka on k\u00e4rsinyt heikosta hintakilpailusta ja ylitarjonnasta. Yleiskokous p\u00e4\u00e4tt\u00e4\u00e4 aiesopimuksesta maaliskuun loppuun menness\u00e4, ja uusi strategia kehitet\u00e4\u00e4n sopimuksen j\u00e4lkeen.",
        "news_epoch": 1739360400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143332",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Paalausverkkoja ja -lankaa valmistava Piippo aikoo myyd\u00e4 koneita Portugaliin \u2013 tuotanto Outokummussa loppuu",
        "news_group": -1
    },
    {
        "news_id": "dw_a71585088",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Kolme viikkoa palattuaan Valkoiseen taloon Donald Trump allekirjoitti toimeenpanom\u00e4\u00e4r\u00e4yksi\u00e4, jotka kohdistuivat transsukupuolisten oikeuksiin, mik\u00e4 aiheutti ahdistusta transsukupuolisille aasialaisamerikkalaisille. Alexandria Holder, transsukupuolinen sotilas, ilmaisi huolensa identiteetist\u00e4\u00e4n ja Trumpin politiikan vaikutuksista. M\u00e4\u00e4r\u00e4ykset rajoittavat sukupuolta vahvistavaa hoitoa ja transsukupuolisten urheilijoiden oikeuksia. Albert, transsukupuolinen mies, korosti pelkojaan rodullisesta syrjinn\u00e4st\u00e4 Kiinan geopoliittisten j\u00e4nnitteiden keskell\u00e4. Puolustusryhm\u00e4t korostavat transsukupuolisten kysymysten poliittista hyv\u00e4ksik\u00e4ytt\u00f6\u00e4, kun taas monet transsukupuoliset haluavat el\u00e4\u00e4 el\u00e4m\u00e4\u00e4ns\u00e4 ilman poliittista h\u00e4irint\u00e4\u00e4.",
        "news_epoch": 1739360160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/transgender-asian-americans-face-double-discrimination/a-71585088",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Transgender Asian Americans face double discrimination",
        "news_group": -1
    },
    {
        "news_id": "dw_a71583753",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Bangladesh on tarjonnut ruokaa ja suojaa Myanmarin Rakhinen osavaltiosta paenneille rohingyo-muslimeille vuodesta 2017. Tilanne paheni Myanmarin sotilasvallankaappauksen j\u00e4lkeen vuonna 2021, mik\u00e4 johti lis\u00e4\u00e4ntyv\u00e4\u00e4n taisteluun ja rohingyojen v\u00e4rv\u00e4\u00e4miseen sek\u00e4 armeijan ett\u00e4 Arakan armeijan (AA) toimesta. Monet rohingyat ovat k\u00e4rsineet v\u00e4kivallasta, mukaan lukien kidnappauksista ja seksuaalisesta v\u00e4kivallasta, ja he kohtaavat vaikeita olosuhteita Myanmarissa. Palauttamispyrkimykset ovat ep\u00e4onnistuneet turvallisuuden vuoksi, ja asiantuntijat varoittavat paluusta ilman turvallisuus- ja oikeustakuita.",
        "news_epoch": 1739359920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/myanmar-renewed-conflict-dims-rohingya-repatriation-hopes/a-71583753",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Myanmar: Renewed conflict dims Rohingya repatriation hopes",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_abdd8440d750",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Los Angelesin mets\u00e4palot ovat aiheuttaneet merkitt\u00e4v\u00e4\u00e4 omaisuusvahinkoa, jonka arvioidaan olevan 95\u2013164 miljardia dollaria, vakuutettujen vahinkojen ollessa 75 miljardia dollaria.",
        "news_epoch": 1739359800.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/rebuilding-stronger-3-stocks-driving-infrastructure-recovery",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Rebuilding Stronger: 3 Stocks Driving Infrastructure Recovery",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f8b58ad3f4e5",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Broadcom Inc.:n (NASDAQ: AVGO) osakkeet ovat nousseet 130 % vuonna 2024, ja ne saavuttivat kaikkien aikojen korkeimman tason joulukuussa, mutta nousu pys\u00e4htyi yll\u00e4tt\u00e4en viime kuussa.",
        "news_epoch": 1739357100.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/broadcom-stock-why-upside-too-good-ignore",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Broadcom Stock: Why the Upside Is Too Good to Ignore",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143306",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Estlink 2 -s\u00e4hk\u00f6nsiirtokaapelin remontin, joka vaurioitui joulup\u00e4iv\u00e4n\u00e4, odotetaan kest\u00e4v\u00e4n nelj\u00e4st\u00e4 kuuteen viikkoon. Ennen varsinaisia korjauksia tehd\u00e4\u00e4n valmistelut\u00f6it\u00e4 vauriokohdan ymp\u00e4rill\u00e4. Fingridin mukaan valmistelut kest\u00e4v\u00e4t seuraavat viikot, jonka j\u00e4lkeen varsinaiset korjaukset alkavat. Korjausten aloitusaikaa ei ole viel\u00e4 ilmoitettu, mutta jos ty\u00f6t onnistuvat valmistelun j\u00e4lkeen, kaapeli voisi olla k\u00e4ytt\u00f6valmis huhtikuussa. Seuraavien viikkojen aikana vaurioitunut kaapeliosuus kaivetaan yl\u00f6s merest\u00e4, katkaistaan ja nostetaan tutkimusta varten. Korjauksen arvioidaan maksavan kymmeni\u00e4 miljoonia.",
        "news_epoch": 1739356620.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143306",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Estlink-s\u00e4hk\u00f6kaapelin korjaus kest\u00e4\u00e4 v\u00e4hint\u00e4\u00e4n kuukauden",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c0452966c34b",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Citigroupin analyytikot ovat optimistisia kolmen tietyn osakkeen suhteen, ja he ehdottavat, ett\u00e4 yksityissijoittajat voisivat hy\u00f6ty\u00e4 viimeaikaisista Wall Streetin kehityksist\u00e4, erityisesti markkinoiden ep\u00e4vakauden aikana, jonka presidentti Trumpin kauppatullit ovat aiheuttaneet.",
        "news_epoch": 1739356200.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/citigroup-analysts-are-betting-big-these-3-stocks-should-you",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Citigroup Analysts Are Betting Big on These 3 Stocks\u2014Should You?",
        "news_group": -1
    },
    {
        "news_id": "dw_a71583220",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "DW Africa tekee viikon mittaisen kiertueen Saksassa 11. helmikuuta 2025 alkaen kattamaan liittovaltion vaalit 23. helmikuuta, jolloin 60 miljoonaa saksalaista \u00e4\u00e4nest\u00e4\u00e4. Keskeisi\u00e4 kysymyksi\u00e4 ovat talouden hidastuminen, maahanmuuttolait ja \u00e4\u00e4rioikeistolaisen AfD-puolueen nousu. Nykyinen liittokansleri Olaf Scholz kohtaa alhaiset hyv\u00e4ksynt\u00e4luvut, kun taas CDU:n Friedrich Merz on k\u00e4rjess\u00e4. Vaalit ovat merkitt\u00e4vi\u00e4 Saksan tulevaisuudelle ja sen suhteille Afrikkaan, ja DW African tiimi raportoi erilaisista n\u00e4k\u00f6kulmista.",
        "news_epoch": 1739355840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/dw-africa-tour-germany-ahead-of-the-2025-elections/a-71583220",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "DW Africa tour Germany ahead of the 2025 elections",
        "news_group": -1
    },
    {
        "news_id": "bbc_c87dv8rvjgxo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Heathrow&#x27;n lentokentt\u00e4 suunnittelee miljardiluokan investointeja kahden terminaalin laajentamiseen ja kolmannen kiitotien ehdottamista hallitukselle. Toimitusjohtaja Thomas Woldbye tavoittelee uuden kiitotien k\u00e4ytt\u00f6\u00f6nottoa ennen seuraavan parlamentin p\u00e4\u00e4ttymist\u00e4. Laajennus, jota tukee varainministeri Rachel Reeves, kohtaa vastustusta ymp\u00e4rist\u00f6nsuojelijoilta. Projekti sis\u00e4lt\u00e4\u00e4 brittil\u00e4isen ter\u00e4ksen k\u00e4yt\u00f6n ja terminaalien kapasiteetin parantamisen. Kritiikki v\u00e4itt\u00e4\u00e4, ett\u00e4 se on ristiriidassa ilmastositoumusten kanssa. Suunnitteluprosessi voi kest\u00e4\u00e4 vuosia, mutta laajennusta pidet\u00e4\u00e4n t\u00e4rke\u00e4n\u00e4 talouskasvun ja ty\u00f6paikkojen luomisen kannalta.",
        "news_epoch": 1739355360.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c87dv8rvjgxo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Heathrow expects third runway take offs in 10 years",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143275",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Useat kansainv\u00e4liset yritykset, mukaan lukien Accenture, Meta ja Amazon, ovat lopettaneet monimuotoisuus-, tasa-arvo- ja osallisuusohjelmansa. Uutistoimisto etsii henkil\u00f6kohtaisia kokemuksia vastaavista muutoksista ty\u00f6paikoilla tarinaa varten, varmistaen, ett\u00e4 henkil\u00f6tietoja k\u00e4sitell\u00e4\u00e4n vastuullisesti.",
        "news_epoch": 1739352180.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143275",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Onko teid\u00e4n yrityksess\u00e4nne karsittu monimuotoisuus\u00adohjelmia? Kerro Ylelle, teemme juttua",
        "news_group": -1
    },
    {
        "news_id": "bbc_c3rw01qr5v1o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Muotimerkki Nextin mainos kiellettiin, koska mallin asento ja kamerakulma antoivat vaikutelman, ett\u00e4 h\u00e4n oli &#x27;ep\u00e4terveellisen laiha&#x27;. Mainontaviranomainen (ASA) piti mallin hoikkuuden korostamista vastuuttomana, vaikka Next kuvasi mallia terveeksi. ASA totesi, ett\u00e4 mainos rikkoi sosiaalisen vastuun s\u00e4\u00e4nt\u00f6j\u00e4 ja sit\u00e4 ei saa k\u00e4ytt\u00e4\u00e4 uudelleen nykyisess\u00e4 muodossaan.",
        "news_epoch": 1739347740.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c3rw01qr5v1o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Next ad banned as pose made model look too thin",
        "news_group": -1
    },
    {
        "news_id": "sn_0d813f3db160",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Tutkijat ovat tutkineet 500 vuotta vanhoja asiakirjoja 1500-luvun Transylvaniasta ymm\u00e4rt\u00e4\u00e4kseen Pienen j\u00e4\u00e4kauden vaikutuksia alueella. Analysoimalla p\u00e4iv\u00e4kirjoja ja asiakirjoja eri kielill\u00e4 he l\u00f6ysiv\u00e4t todisteita ilmasto-olosuhteista, jotka sis\u00e4lsiv\u00e4t l\u00e4mp\u00f6\u00e4, kuivuuksia ja my\u00f6hempi\u00e4 voimakkaita sateita. Tulokset viittaavat siihen, ett\u00e4 Pieni j\u00e4\u00e4kausi saattoi olla viiv\u00e4stynyt Transylvaniassa verrattuna L\u00e4nsi-Eurooppaan, ja ne korostavat, kuinka ilmasto-olosuhteet vaikuttivat ihmisten k\u00e4rsimykseen, mukaan lukien n\u00e4l\u00e4nh\u00e4t\u00e4 ja taudit. T\u00e4m\u00e4 tutkimus on t\u00e4rke\u00e4 tulevien ilmastonmuutoksen vaikutusten ymm\u00e4rt\u00e4miseksi.",
        "news_epoch": 1739329200.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/records-people-little-ice-age-weather",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Historical writings reveal how people weathered the Little Ice Age",
        "news_group": -1
    },
    {
        "news_id": "bbc_c0qwvppk0zzo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Asiantuntijat etsiv\u00e4t harvinaisia brittil\u00e4isi\u00e4 narsisseja, jotka saattavat piileskell\u00e4 puutarhoissa ja puistoissa. He ovat laatineet listan kadonneista lajikkeista, mukaan lukien &#x27;bonfire yellow&#x27; narsissi Sussexista. N\u00e4m\u00e4 kukat, jotka ovat t\u00e4rkeit\u00e4 kauneutensa ja mahdollisten l\u00e4\u00e4ketieteellisten k\u00e4ytt\u00f6tarkoitustensa vuoksi, ovat vaarassa kadota.",
        "news_epoch": 1739317140.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0qwvppk0zzo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Hunt for rare daffodils that are feared lost",
        "news_group": -1
    },
    {
        "news_id": "bbc_cglyjn7le2ko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Kansainv\u00e4linen asianajotoimisto Hill Dickinson on rajoittanut p\u00e4\u00e4sy\u00e4 teko\u00e4lyty\u00f6kaluihin havaittuaan merkitt\u00e4v\u00e4n k\u00e4yt\u00f6n lis\u00e4\u00e4ntymisen henkil\u00f6st\u00f6n keskuudessa. Toimisto ilmoitti, ett\u00e4 suuri osa t\u00e4st\u00e4 k\u00e4yt\u00f6st\u00e4 ei ollut sen teko\u00e4lypolitiikan mukaista. Tulevaisuudessa p\u00e4\u00e4sy teko\u00e4lyty\u00f6kaluihin my\u00f6nnet\u00e4\u00e4n vain hakemusprosessin kautta.",
        "news_epoch": 1739311440.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cglyjn7le2ko",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Law firm restricts AI after &#x27;significant&#x27; staff use",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_90c0f1ea3e31",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Asiantuntijat korostavat kiireellist\u00e4 tarvetta Yhdysvaltojen kriittisten mineraalien ja hopean tuotannon lis\u00e4\u00e4miselle, korostaen s\u00e4\u00e4ntelytuen ja verokannustimien merkityst\u00e4.",
        "news_epoch": 1739304000.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/perfect-timing-experts-urge-investors-get-serious-critical-minerals-and-silver",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Perfect Timing? Experts Urge Investors to Get Serious on Critical Minerals and Silver",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_2e83c942e53b",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Kymmenen parasta grafiittia tuottavaa maata ovat Kiina, Madagaskar, Mosambik, Brasilia, Intia, Tansania, Kanada, Ven\u00e4j\u00e4, Etel\u00e4-Korea ja Pohjois-Korea. Kiina johtaa 1,27 miljoonalla tonnilla tuotantoa vuonna 2024, mik\u00e4 kattaa 78 % maailman tarjonnasta.",
        "news_epoch": 1739303700.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/top-10-graphite-producing-countries",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Top 10 Graphite-producing Countries",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c3304aaf4a34",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "5 Canadian Potash Stocks",
        "news_epoch": 1739303400.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/5-canadian-potash-stocks",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "5 Canadian Potash Stocks",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_9820bc8b1915",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "12. helmikuuta 2025 useat yritykset, mukaan lukien CME, CVS, VRT, D, EXC, WAB, KHC, MLM, GOLD, WAT, BAM ja QSR, odotetaan raportoivan tuloksensa ennen markkinoiden avautumista.",
        "news_epoch": 1739300400.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/pre-market-earnings-report-february-12-2025-cme-cvs-vrt-d-exc-wab-khc-mlm-gold-wat-bam-qsr",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Pre-Market Earnings Report for February 12, 2025 :  CME, CVS, VRT, D, EXC, WAB, KHC, MLM, GOLD, WAT, BAM, QSR",
        "news_group": -1
    },
    {
        "news_id": "dw_a71577508",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Aseistetut militantit It\u00e4-Kongossa tappoivat yli 50 siviili\u00e4 hy\u00f6kk\u00e4yksiss\u00e4, joissa CODECO-militantit olivat vastuussa. He sytyttiv\u00e4t taloja tuleen ja hy\u00f6kk\u00e4siv\u00e4t aseilla ja miekkoilla, mik\u00e4 johti moniin vammoihin ja kuolemiin. Kuolonuhrien m\u00e4\u00e4r\u00e4n odotetaan nousevan, ja aiempia hy\u00f6kk\u00e4yksi\u00e4 sis\u00e4isesti siirtyneiden leireihin raportoitiin my\u00f6s.",
        "news_epoch": 1739298240.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/dr-congo-militia-kill-dozens-of-villagers-in-ituri-province/a-71577508",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "DR Congo: Militia kill dozens of villagers in Ituri province",
        "news_group": -1
    },
    {
        "news_id": "sn_f9399d53dee1",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Vuosisadan puoliv\u00e4liin menness\u00e4 monet alueet voivat kohdata \u00e4\u00e4rimm\u00e4isi\u00e4 l\u00e4mp\u00f6tapahtumia, jotka ovat vaarallisia ihmisten terveydelle, jos globaalit l\u00e4mp\u00f6tilat nousevat 2 astetta celsiusasteita esiteollisiin tasoihin verrattuna. T\u00e4m\u00e4 voi vaikuttaa laajoihin alueisiin, erityisesti Etel\u00e4-Aasiassa, Etel\u00e4-Amerikassa ja Yhdysvaltojen kaakkoisosissa, tehden olosuhteista hengenvaarallisia, erityisesti vanhemmille aikuisille.",
        "news_epoch": 1739296800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/global-warming-temperature-extreme-heat",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Just a small rise in global temperatures could be deadly",
        "news_group": -1
    },
    {
        "news_id": "dw_a71577121",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Viimeisen kahden vuosikymmenen aikana on syntynyt globaali trendi, jossa Yhdysvallat innovoi teknologiassa, Kiina vie sit\u00e4 eteenp\u00e4in ja Eurooppa keskittyy s\u00e4\u00e4ntelyyn. EU on ottanut k\u00e4ytt\u00f6\u00f6n merkitt\u00e4vi\u00e4 s\u00e4\u00e4nt\u00f6j\u00e4 hallitakseen suurten teknologiyritysten vaikutusta, mukaan lukien lait haitallisesta verkkosis\u00e4ll\u00f6st\u00e4 ja teko\u00e4lylains\u00e4\u00e4d\u00e4nt\u00f6.",
        "news_epoch": 1739296320.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/eu-vows-to-cut-red-tape-as-us-slams-bloc-s-tech-rules/a-71577121",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "EU vows to &#x27;cut red tape&#x27; as US slams bloc&#x27;s tech rules",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_0caad3de843d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "11. helmikuuta 2025 useat yritykset, mukaan lukien Gilead Sciences (GILD), Welltower (WELL) ja Dash (DASH), odotetaan raportoivan tuloksensa ty\u00f6ajan j\u00e4lkeen. Gilead Sciences raportoi nelj\u00e4nnekselt\u00e4, joka p\u00e4\u00e4ttyy 31.",
        "news_epoch": 1739293200.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/after-hours-earnings-report-february-11-2025-gild-well-dash-et-aig-ew-smci-es-z-wpc-aiz",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "After-Hours Earnings Report for February 11, 2025 :  GILD, WELL, DASH, ET, AIG, EW, SMCI, ES, Z, WPC, AIZ, EXEL",
        "news_group": -1
    },
    {
        "news_id": "dw_a71574415",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Maanomistus on edelleen kiistanalainen kysymys Etel\u00e4-Afrikassa, jossa suurin osa maatalousmaasta on yh\u00e4 valkoisten omistuksessa vuosikymmeni\u00e4 apartheidin p\u00e4\u00e4ttymisen j\u00e4lkeen. Demokraattinen liitto on k\u00e4ynnist\u00e4nyt oikeusjutun uusia maanuudistuksia vastaan, v\u00e4itt\u00e4en niiden rikkovan perustuslakia. J\u00e4nnitteet Yhdysvaltojen kanssa ovat lis\u00e4\u00e4ntyneet, kun presidentti Trump j\u00e4\u00e4dytti avustukset Etel\u00e4-Afrikalle n\u00e4iden tapahtumien vuoksi, Elon Muskin kommenttien vaikuttaessa.",
        "news_epoch": 1739291820.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/listicle-the-aftermath-of-south-africa-s-land-reforms/a-71574415",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Listicle: The aftermath of South Africa&#x27;s land reforms",
        "news_group": -1
    },
    {
        "news_id": "dw_a71575417",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Naton puolustusministerit kokoontuvat, ja Euroopan liittolaiset kohtaavat ensimm\u00e4ist\u00e4 kertaa uuden Yhdysvaltojen puolustusministerin Pete Hegsethinin. Vaikka on olemassa yhteisymm\u00e4rrys puolustusmenojen lis\u00e4\u00e4misest\u00e4 yli 2%, tarkkoja prosentteja k\u00e4sitell\u00e4\u00e4n Naton huippukokouksessa kes\u00e4kuussa. Hegsethinin skeptisyys Natoa kohtaan tuo haasteita, sill\u00e4 h\u00e4n on aiemmin ehdottanut, ett\u00e4 liitto on vanhentunut.",
        "news_epoch": 1739291400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/how-will-europe-deal-with-us-defense-secretary-pete-hegseth/a-71575417",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "How will Europe deal with US Defense Secretary Pete Hegseth?",
        "news_group": 261
    },
    {
        "news_id": "dw_a71574068",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Viimeaikaiset keskustelut Gazan palestiinalaisten tulevaisuudesta ovat kiihtyneet Trumpin ja Netanyahun tapaamisen j\u00e4lkeen. Trump ehdotti palestiinalaisten siirt\u00e4mist\u00e4 naapurimaihin, kuten Egyptiin ja Jordaniaan, mik\u00e4 asiantuntijoiden mukaan rikkoo kansainv\u00e4list\u00e4 lakia. Saudi-Arabia, yhdess\u00e4 Egyptin ja Jordanian kanssa, on hyl\u00e4nnyt ajatuksen palestiinalaisten hyv\u00e4ksymisest\u00e4, korostaen heid\u00e4n oikeuttaan maahansa.",
        "news_epoch": 1739290380.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/saudi-arabia-israel-are-trump-s-mideast-ideas-derailing-normalization-plans/a-71574068",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Saudi Arabia-Israel: Are Trump&#x27;s Mideast ideas derailing normalization plans?",
        "news_group": -1
    },
    {
        "news_id": "sn_7080d1f0f664",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Tuore tutkimus paljastaa, ett\u00e4 pienet korvalihakset, joita ihmiset voivat liikuttaa, aktivoituvat yritt\u00e4ess\u00e4\u00e4n kuulla vaikeissa olosuhteissa. Vaikka n\u00e4m\u00e4 lihakset eiv\u00e4t ehk\u00e4 paranna kuuloa, niiden aktiivisuus voi viitata henkil\u00f6n kuunteluponnisteluihin, mik\u00e4 voisi auttaa kuulolaitteiden teknologiaa. Tutkimus korostaa korvalihasten koon vaihtelua ja yksil\u00f6iden ainutlaatuisia kykyj\u00e4 hallita korvansa liikkeit\u00e4.",
        "news_epoch": 1739289600.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/wiggling-ears-hearing",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Wiggling ears may have once helped us hear",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_604e1ac0f073",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Kolme liiketoimintapalveluyrityst\u00e4, Block (XYZ), Coinbase (COIN) ja V2X (VVX), odotetaan ylitt\u00e4v\u00e4n tulosennusteet nelj\u00e4nnell\u00e4 nelj\u00e4nneksell\u00e4.",
        "news_epoch": 1739287320.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/3-service-firms-poised-beat-estimates-q4-earnings",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "3 Service Firms Poised to Beat Estimates in Q4 Earnings",
        "news_group": -1
    },
    {
        "news_id": "bbc_cpdx75zgg88o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "OpenAI:n toimitusjohtaja Sam Altman ilmoitti, ett\u00e4 yritys ei ole &#x27;myynniss\u00e4&#x27; Elon Muskin johtaman konsortion esitetty\u00e4 97,4 miljardin dollarin ostotarjouksen. Altman korosti OpenAI:n teht\u00e4v\u00e4\u00e4 kehitt\u00e4\u00e4 AGI:ta ihmiskunnan hyv\u00e4ksi. Muskin asianajaja vahvisti tarjouksen, kun taas Altman ilmaisi ep\u00e4ilyksens\u00e4 Muskin motiiveista, viitaten kilpailuun heid\u00e4n yritystens\u00e4 v\u00e4lill\u00e4.",
        "news_epoch": 1739286780.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cpdx75zgg88o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "&#x27;We are not for sale,&#x27; ChatGPT boss says after Musk bid",
        "news_group": -1
    },
    {
        "news_id": "bbc_c391ml9x878o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Yhdysvaltain presidentti Donald Trump on keskeytt\u00e4nyt korruptionvastaisen lain t\u00e4yt\u00e4nt\u00f6\u00f6npanon, joka mahdollistaa amerikkalaisten syytt\u00e4misen ulkomaisten viranomaisten lahjomisesta.",
        "news_epoch": 1739286120.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c391ml9x878o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Trump halts prosecution of firms accused of bribery abroad",
        "news_group": -1
    },
    {
        "news_id": "bbc_cqx97xynejzo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Britannian hallitus on p\u00e4\u00e4tt\u00e4nyt olla vastaamatta v\u00e4litt\u00f6m\u00e4sti Yhdysvaltojen ter\u00e4s- ja alumiinitullien uusimiseen, valiten harkitun reaktion. Kauppaministeri Douglas Alexander korosti rauhallisen l\u00e4hestymistavan tarvetta, huolimatta teollisuuden vaatimuksista voimakkaammasta toiminnasta. Tullit, jotka tulevat voimaan 12.",
        "news_epoch": 1739284980.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cqx97xynejzo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "UK not planning to hit back at US on steel tariffs",
        "news_group": 262
    },
    {
        "news_id": "dw_a71577038",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Pitk\u00e4n matkan junan ja puoli-rekan v\u00e4linen onnettomuus Hampurin esikaupungissa aiheutti yli 12 vamman, joista yksi henkil\u00f6 kuoli my\u00f6hemmin vakavista vammoista. Junassa oli yli 250 matkustajaa, jotka kaikki olivat vahingoittumattomia. Onnettomuuden syy ei ole viel\u00e4 selvill\u00e4.",
        "news_epoch": 1739284980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/germany-train-collides-with-truck-in-hamburg-killing-1/a-71577038",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Germany: Train collides with truck in Hamburg, killing 1",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_ee2179773a7c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Presidentti Trump on j\u00e4lleen nostanut esiin ajatuksen Kanadan muuttamisesta 51. osavaltioksi, yhdist\u00e4en sen Kanadan luonnonvaroihin. H\u00e4n ilmoitti 25 %:n tullimaksuista ter\u00e4ksen ja alumiinin tuonnille, mukaan lukien Kanadasta, vedoten sotilaspuolustuksen kustannuksiin.",
        "news_epoch": 1739284200.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/trump-doubles-down-51st-state-talk-enacts-tariffs-steel-and-aluminum",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Trump Doubles Down on &amp;quot;51st State&amp;quot; Talk, Enacts Tariffs on Steel and Aluminum",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_4fb1013a3bce",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "BC:n hallitus nopeuttaa 18 kaivosprojektia, joiden arvo on 20 miljardia Kanadan dollaria, v\u00e4hent\u00e4\u00e4kseen riippuvuutta Yhdysvaltojen kaupasta kasvavien j\u00e4nnitteiden keskell\u00e4.",
        "news_epoch": 1739283900.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/bc-moves-expedite-18-mining-projects-us-trade-tensions-rise",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "BC Moves to Expedite 18 Mining Projects as US Trade Tensions Rise",
        "news_group": -1
    },
    {
        "news_id": "bbc_c0m17d8827ko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "BBC:n tutkimus paljasti, ett\u00e4 nelj\u00e4 suurta teko\u00e4lychatbottia, mukaan lukien OpenAI:n ChatGPT ja Googlen Gemini, tiivistiv\u00e4t uutistarinoita virheellisesti, ja niiss\u00e4 oli merkitt\u00e4vi\u00e4 ep\u00e4tarkkuuksia ja faktavirheit\u00e4. BBC:n Deborah Turness korosti teko\u00e4lyn v\u00e4\u00e4ristymien mahdollisia todellisia vahinkoja ja kehotti teknologiayrityksi\u00e4 yhteisty\u00f6h\u00f6n julkaisijoiden kanssa tarkkuuden parantamiseksi.",
        "news_epoch": 1739283600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0m17d8827ko",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "AI chatbots unable to accurately summarise news, BBC finds",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_31b1c0e08376",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Horizon Minerals ja Poseidon Nickel ovat saaneet lopullisen tuomioistuimen hyv\u00e4ksynn\u00e4n fuusiolleen, joka on nyt laillisesti voimassa. Fuusio ilmoitettiin lokakuussa 2024, ja Horizonin osakkeenomistajat omistavat 69,8 % uudesta yhti\u00f6st\u00e4.",
        "news_epoch": 1739283600.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/horizon-minerals-poseidon-get-final-court-approval-merger",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "Horizon Minerals, Poseidon Get Final Court Approval for Merger",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_768f691b6dd8",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Kolme siruvarastoa kaupank\u00e4ynniss\u00e4 on t\u00e4ll\u00e4 hetkell\u00e4 v\u00e4hint\u00e4\u00e4n 50 % alle 52 viikon huippujensa, mik\u00e4 korostaa puolijohdeteollisuuden kasvavaa merkityst\u00e4 erityisesti teko\u00e4lyn nousun my\u00f6t\u00e4.",
        "news_epoch": 1739283180.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/3-chip-stocks-still-trading-50-below-their-52-week-highs",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_original_title": "3 Chip Stocks Still Trading 50% Below Their 52-Week Highs",
        "news_group": -1
    },
    {
        "news_id": "sn_4535c226502f",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Uudet mielenterapiat keskittyv\u00e4t toistuvan negatiivisen ajattelun k\u00e4sittelyyn, joka on yleist\u00e4 erilaisissa mielenterveysh\u00e4iri\u00f6iss\u00e4. Terapeutteja kannustetaan kohdistamaan huomio n\u00e4ihin ajatusmalleihin ilman virallisia diagnooseja. Tutkimukset viittaavat siihen, ett\u00e4 n\u00e4iden ajatusmallien hoitaminen voi auttaa est\u00e4m\u00e4\u00e4n vakavampia mielenterveysongelmia.",
        "news_epoch": 1739282400.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/negative-thoughts-anxiety-depression",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_original_title": "Breaking negative thought\u00a0patterns\u00a0could ward off anxiety, depression",
        "news_group": -1
    }
];