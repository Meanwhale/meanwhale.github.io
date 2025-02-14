const articles = [
    {
        "news_id": "bbc_cm213pvdr22o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hamas har meddelat namnen p\u00e5 tre gisslan som ska sl\u00e4ppas p\u00e5 l\u00f6rdag i utbyte mot palestinska f\u00e5ngar i Israel, mitt under oro f\u00f6r vapenvilans framtid. Gisslan \u00e4r Alexander Troufanov, Yair Horn och Sagui Dekel-Chen.",
        "news_epoch": 1739529000.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cm213pvdr22o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Hamas releases names of hostages due for release on Saturday",
        "news_group": 298
    },
    {
        "news_id": "yle_7420143699",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Utredaren Charly Salonius-Pasternak f\u00f6resl\u00e5r att J.D. Vances senaste kommentarer om Ukraina kanske inte \u00e5terspeglar en taktisk strategi utan snarare belyser kaoset inom Trump-administrationen.",
        "news_epoch": 1739528460.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143699",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "USA:n varapresidentti Vancen puheilla Ven\u00e4j\u00e4n painostamisesta ei ole mit\u00e4\u00e4n arvoa, sanoo tutkija",
        "news_group": 292
    },
    {
        "news_id": "bbc_c863zd9zz42o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Orosmoln v\u00e4xer \u00f6ver att Storbritannien kan drabbas av h\u00f6gre amerikanska handelsavgifter efter att president Trump meddelat att han kommer att rikta in sig p\u00e5 moms.",
        "news_epoch": 1739528400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c863zd9zz42o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump tariff VAT threat raises fears of hit to UK",
        "news_group": 295
    },
    {
        "news_id": "bbc_cp8kgr5w22yo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "En afghansk man, Farhad N, har arresterats i M\u00fcnchen f\u00f6r att ha k\u00f6rt in i en folkmassa och skadat 36 personer, inklusive en kritiskt skadad tv\u00e5\u00e5ring. \u00c5klagare h\u00e4vdar att attacken var religi\u00f6st motiverad, eftersom den misst\u00e4nkte ropade &#x27;Allahu Akbar&#x27; under sin arrestering.",
        "news_epoch": 1739528220.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cp8kgr5w22yo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Jihadist motivation in Munich attack, prosecutors say",
        "news_group": 291
    },
    {
        "news_id": "bbc_c4gw1wvdykgo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Konkurrensmyndigheten f\u00f6resl\u00e5r att f\u00f6r\u00e4ldrar ska kunna k\u00f6pa babymj\u00f6lk med lojalitetspo\u00e4ng och kuponger, samtidigt som begr\u00e4nsningar f\u00f6r prisreklam ska kvarst\u00e5 f\u00f6r att uppmuntra amning.",
        "news_epoch": 1739528040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4gw1wvdykgo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Call for parents to be able to use loyalty card points to buy baby milk",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_22c90c413ba8",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "SPTM kan v\u00e4rderas till 83 dollar baserat p\u00e5 j\u00e4mf\u00f6relsen av handelspriserna f\u00f6r dess underliggande innehav mot genomsnittliga analytikers 12-m\u00e5naders m\u00e5lkurs, vilket ger en viktad genomsnittlig implicerad m\u00e5lkurs f\u00f6r ETF:n.",
        "news_epoch": 1739527740.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/sum-parts-sptm-could-be-worth-83",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Sum Up The Parts: SPTM Could Be Worth $83",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_746b19a82e3e",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "En analytiker har gett ett \u00f6verraskande 12-m\u00e5nadersm\u00e5l f\u00f6r JMEE genom att j\u00e4mf\u00f6ra handelspriserna f\u00f6r ETF-innehav med genomsnittliga analytikerm\u00e5l och ber\u00e4kna ett viktat genomsnitt f\u00f6r ETF:n.",
        "news_epoch": 1739527740.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/surprising-analyst-12-month-target-jmee",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Surprising Analyst 12-Month Target For JMEE",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_7b308b23fd99",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Enbridge Inc. rapporterade en minskning av vinsten f\u00f6r det fj\u00e4rde kvartalet j\u00e4mf\u00f6rt med f\u00f6rra \u00e5ret, men resultaten \u00f6vertr\u00e4ffade analytikernas f\u00f6rv\u00e4ntningar.",
        "news_epoch": 1739527680.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/enbridge-inc-q4-profit-decreases-beats-estimates",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Enbridge Inc. Q4 Profit Decreases, But Beats Estimates",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_100840d1593e",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "ESS Techs VD Eric Dresselhuys har avg\u00e5tt och Kelly Goodman har utsetts till tillf\u00f6rordnad VD. F\u00f6retaget planerar att ta sin verksamhet i en ny strategisk riktning.",
        "news_epoch": 1739527620.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ess-tech-ceo-eric-dresselhuys-resigns-names-kelly-goodman-interim-ceo-plans-strategic",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "ESS Tech CEO Eric Dresselhuys Resigns, Names Kelly Goodman Interim CEO; Plans Strategic Directions",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143802",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Byggnadsf\u00f6rbundet deltar i Industrif\u00f6rbundets arbetsnedl\u00e4ggning fr\u00e5n 24-28 februari, som antogs av kommissionen den 13 februari. Byggnadsarbetarf\u00f6rbundets bidrag st\u00f6djer avtalssektorer p\u00e5 tre platser: Borealis Polymers i Borg\u00e5, Neste raffinaderi i Borg\u00e5 och Wipak fabrik i Nastola.",
        "news_epoch": 1739527620.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143802",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Rakennusliitto kertoo tukilakoista",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_722901e6157e",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Live Nation Entertainment Inc:s aktier har \u00f6verstigit det genomsnittliga analytiker 12-m\u00e5naders m\u00e5lpriset p\u00e5 151,83 dollar och handlas nu f\u00f6r 152,58 dollar per aktie.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/live-nation-entertainment-reaches-analyst-target-price-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": true,
        "news_original_title": "Live Nation Entertainment Reaches Analyst Target Price",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_cca54628a0cf",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "CVS Health Corporations aktier har \u00f6verstigit det genomsnittliga analytikerm\u00e5let f\u00f6r 12 m\u00e5nader p\u00e5 64,64 dollar och handlas nu f\u00f6r 66,37 dollar per aktie. Analytiker kan antingen s\u00e4nka sin bed\u00f6mning eller ompr\u00f6va sitt m\u00e5l.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/cvs-crosses-above-average-analyst-target",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "CVS Crosses Above Average Analyst Target",
        "news_group": -1
    },
    {
        "news_id": "bbc_c203rnepzexo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hus\u00e4gare med ol\u00e4mplig isolering st\u00e5r inf\u00f6r allvarliga problem, inklusive fukt och m\u00f6gel, men m\u00e5nga \u00e4r inte ber\u00e4ttigade till statligt st\u00f6d p\u00e5 grund av tidpunkten f\u00f6r sina installationer.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c203rnepzexo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "&#x27;Mould, damp and decay&#x27;: Homes excluded from insulation scandal help",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_db3ab997e4b4",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "DNOW Inc:s aktier har \u00f6verstigit det genomsnittliga analytikerm\u00e5let p\u00e5 15,67 dollar och handlas nu f\u00f6r 16,98 dollar. Analytiker kan reagera genom att s\u00e4nka aktien baserat p\u00e5 v\u00e4rdering.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/dnow-reaches-analyst-target-price-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "DNOW Reaches Analyst Target Price",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_9d1e0c8293e4",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Rollins, Inc. aktier har \u00f6verstigit det genomsnittliga analytikerm\u00e5let p\u00e5 50,50 dollar och handlas nu f\u00f6r 51,92 dollar. Analytiker kan reagera genom att s\u00e4nka aktiens v\u00e4rdering.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/rollins-reaches-analyst-target-price-2",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Rollins Reaches Analyst Target Price",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_290acb3903c0",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Penske Automotive Group Inc (PAG) aktier har \u00f6verstigit det genomsnittliga analytikerm\u00e5let f\u00f6r 12 m\u00e5nader p\u00e5 175,83 dollar och handlas nu f\u00f6r 175,89 dollar per aktie.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/pag-crosses-above-average-analyst-target-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": true,
        "news_original_title": "PAG Crosses Above Average Analyst Target",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_b95e7c58bd81",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "VFVA har en uppsida p\u00e5 16% baserat p\u00e5 en j\u00e4mf\u00f6relse mellan handelspriserna f\u00f6r dess underliggande innehav och de genomsnittliga analytikernas 12-m\u00e5naders m\u00e5lkurs.",
        "news_epoch": 1739527440.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/look-under-hood-vfva-has-16-upside",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Look Under The Hood: VFVA Has 16% Upside",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3a00fb9773da",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "IJH har en potentiell uppsida p\u00e5 15%. Vi analyserade de underliggande innehaven i ETF:er och j\u00e4mf\u00f6rde deras handelspriser med de genomsnittliga analytikerens 12-m\u00e5naders m\u00e5lkurs, och ber\u00e4knade det viktade genomsnittliga implicita m\u00e5let f\u00f6r ETF:n.",
        "news_epoch": 1739527320.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/peek-under-hood-ijh-has-15-upside",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Peek Under The Hood: IJH Has 15% Upside",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_b63f1e2a7130",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Essent Group Ltd. rapporterade en minskning av int\u00e4kterna f\u00f6r fj\u00e4rde kvartalet j\u00e4mf\u00f6rt med f\u00f6rra \u00e5ret och missade analytikernas uppskattningar.",
        "news_epoch": 1739527320.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/essent-group-ltd-reveals-decline-q4-income-misses-estimates",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Essent Group Ltd. Reveals Decline In Q4 Income, Misses Estimates",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_aaccdb5c56cf",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "ARGT:s innehav antyder en potentiell vinst p\u00e5 12%. Vi har analyserat handelspriserna f\u00f6r ETF:ernas underliggande innehav i f\u00f6rh\u00e5llande till den genomsnittliga analytikerns 12-m\u00e5naders m\u00e5lkurs och ber\u00e4knat det viktade genomsnittliga implicerade m\u00e5let f\u00f6r ETF:n.",
        "news_epoch": 1739527320.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/argts-holdings-imply-12-gain-potential",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "ARGT&#x27;s Holdings Imply 12% Gain Potential",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_820e93fe38bd",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Den implicerade analytikerm\u00e5ls\u00e4ttningen f\u00f6r MDYV \u00e4r 96 dollar, baserat p\u00e5 en j\u00e4mf\u00f6relse av handelspriserna f\u00f6r ETF-innehav mot de genomsnittliga 12-m\u00e5naders m\u00e5ls\u00e4ttningarna.",
        "news_epoch": 1739527320.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/implied-mdyv-analyst-target-price-96",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Implied MDYV Analyst Target Price: $96",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_e2018c67b1b5",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Analytiker f\u00f6rutsp\u00e5r en \u00f6kning p\u00e5 14% f\u00f6r FNX-innehav genom att j\u00e4mf\u00f6ra nuvarande handelspriser med genomsnittliga 12-m\u00e5naders m\u00e5lkurs.",
        "news_epoch": 1739527320.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/analysts-forecast-14-gains-ahead-holdings-fnx",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Analysts Forecast 14% Gains Ahead For The Holdings of FNX",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_e9be59e7bc54",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Investeringschefen noterar starka vinster fr\u00e5n amerikanska aktier och uttrycker optimism f\u00f6r de europeiska och finska aktiemarknaderna, trots Finlands d\u00e5liga prestationer inom vissa omr\u00e5den.",
        "news_epoch": 1739527200.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/e3c2684a-fc87-4cb1-9a56-148fc7d2d7c9",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": true,
        "news_original_title": "Varma kiskoi kovat tuotot USA-osakkeista \u2013 Sijoitusjohtaja Euroopan ja Suomen osakemarkkinoista: \u201dOptimismia on\u201d",
        "news_group": -1
    },
    {
        "news_id": "dw_a71596247",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "P\u00e5 torsdagen beordrade president Trump utvecklingen av \u00f6msesidiga tullar p\u00e5 importer till USA, i enlighet med sin &#x27;\u00f6ga f\u00f6r \u00f6ga&#x27;-handelspolitik. Han meddelade att USA kommer att ta ut samma tullar som andra l\u00e4nder p\u00e5 amerikanska varor.",
        "news_epoch": 1739526240.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/what-are-reciprocal-tariffs-trump-s-trade-agenda-explained/a-71596247",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "What are reciprocal tariffs? Trump&#x27;s trade agenda explained",
        "news_group": 294
    },
    {
        "news_id": "yle_7420143517",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Annons\u00f6rer \u00e5terv\u00e4nder till plattformen som de tidigare bojkottade, d\u00e4r Amazon planerar att g\u00f6ra betydande investeringar i X-reklam. Apple har \u00e5terupptagit annonsering p\u00e5 X efter ett \u00e5rs bojkott.",
        "news_epoch": 1739525940.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143517",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Elon Musk aiheutti mainostajien joukkopaon viestipalvelu X:st\u00e4 \u2013 USA:n presidentinvaalit n\u00e4ytt\u00e4\u00e4 k\u00e4\u00e4nt\u00e4neen trendin",
        "news_group": -1
    },
    {
        "news_id": "dw_a71607477",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Nigerianska lagstiftare har godk\u00e4nt ytterligare 200 miljoner dollarer f\u00f6r h\u00e4lsov\u00e5rdssektorn f\u00f6r att kompensera f\u00f6r avst\u00e4ngningen av amerikansk utl\u00e4ndsk hj\u00e4lp, som har varit avg\u00f6rande f\u00f6r att bek\u00e4mpa sjukdomar som malaria och HIV.",
        "news_epoch": 1739525340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/nigeria-approves-200m-to-offset-shortfall-from-us-aid-cuts/a-71607477",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Nigeria approves $200M to offset shortfall from US aid cuts",
        "news_group": -1
    },
    {
        "news_id": "bbc_c5yvn90pl5no",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Tv\u00e5 amerikanska lagstiftare har f\u00f6rd\u00f6mt Storbritanniens beg\u00e4ran om att f\u00e5 tillg\u00e5ng till krypterade data fr\u00e5n Apple-anv\u00e4ndare, och kallat det en farlig hot mot amerikansk integritet och s\u00e4kerhet.",
        "news_epoch": 1739524980.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c5yvn90pl5no",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "US politicians furious at UK demand for encrypted Apple data",
        "news_group": -1
    },
    {
        "news_id": "bbc_cn57vpp5zvxo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Strejkerna av Avanti West Coast t\u00e5gchefer har st\u00e4llts in f\u00f6r att m\u00f6jligg\u00f6ra f\u00f6rhandlingar i en tvist om arbete p\u00e5 vilodagar. RMT-facket hade planerat strejker de kommande tre s\u00f6ndagarna, men efter att en reviderad proposition avvisades, meddelade de nya strejkdatum.",
        "news_epoch": 1739524560.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cn57vpp5zvxo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Avanti West Coast strikes suspended for talks",
        "news_group": -1
    },
    {
        "news_id": "bbc_cwyjvkggdnqo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "En rysk dr\u00f6narattack riktades mot str\u00e5lningsskyddet vid Tjernobyl, vilket orsakade en brand som har sl\u00e4ckts. Ukrainas president Zelensky rapporterade att str\u00e5lningsniv\u00e5erna f\u00f6rblir stabila.",
        "news_epoch": 1739524140.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cwyjvkggdnqo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Chernobyl radiation shield hit by Russian drone, Ukraine says",
        "news_group": -1
    },
    {
        "news_id": "bbc_cqldnp9rxzeo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Pope Francis kommer att l\u00e4ggas in p\u00e5 sjukhus i Rom f\u00f6r behandling och tester relaterade till bronkit. Den 88-\u00e5riga p\u00e5ven har visat symptom i flera dagar och har bett tj\u00e4nstem\u00e4n att l\u00e4sa hans tal vid evenemang.",
        "news_epoch": 1739523840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cqldnp9rxzeo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Pope to be admitted to hospital for bronchitis",
        "news_group": 293
    },
    {
        "news_id": "bbc_cy4m312ll24o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Thames Water har \u00f6verklagat f\u00f6r att f\u00e5 h\u00f6ja avgifterna mer \u00e4n regulatorns tak p\u00e5 35 % under fem \u00e5r, med h\u00e4nvisning till ekonomiska sv\u00e5righeter och behovet av investeringar i infrastrukturen.",
        "news_epoch": 1739523000.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cy4m312ll24o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Thames Water appeals against limit on bill rises",
        "news_group": -1
    },
    {
        "news_id": "dw_a71603432",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Indiens premi\u00e4rminister Narendra Modi och USA:s president Donald Trump delar en \u00f6msesidig f\u00f6rst\u00e5else, f\u00f6rst\u00e4rkt av deras populistiska dragning och stora folkmassor.",
        "news_epoch": 1739522760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/modi-meets-trump-personal-rapport-despite-tariffs/a-71603432",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Modi meets Trump: Personal rapport despite tariffs",
        "news_group": 289
    },
    {
        "news_id": "dw_a71605928",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Indiens premi\u00e4rminister Narendra Modis bes\u00f6k i Frankrike inkluderade ett stopp i Marseille, d\u00e4r president Emmanuel Macron lyfte fram staden som en nyckelpunkt f\u00f6r Indien-Mellan\u00f6stern-Europa Ekonomisk Korridor (IMEC).",
        "news_epoch": 1739522580.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/macron-pitches-france-as-india-s-european-trade-gateway/a-71605928",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Macron pitches France as India&#x27;s European trade gateway",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143773",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Euroomr\u00e5dets ekonomi \u00f6kade med 0,1% i slutet av 2024",
        "news_epoch": 1739522460.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143773",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Euroalueen talous kasvoi 0,1 prosenttia vuoden 2024 lopulla",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143736",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Google har d\u00f6pt om Mexikanska golfen till Amerikas golf p\u00e5 sina kartor, efter en direktiv fr\u00e5n president Donald Trump. F\u00f6retaget har ocks\u00e5 begr\u00e4nsat negativa recensioner f\u00f6r Mexikanska golfen i sina karttj\u00e4nster.",
        "news_epoch": 1739522100.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143736",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Google esti ihmisi\u00e4 antamasta huonoja arvioita Meksikonlahdelle karttapalvelussaan",
        "news_group": 297
    },
    {
        "news_id": "yle_7420143709",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Den ryska rubeln har st\u00e4rkts avsev\u00e4rt tillsammans med en massiv \u00f6kning p\u00e5 Moskvas b\u00f6rs, efter diskussioner om fred mellan USA:s president Trump och Rysslands president Putin ang\u00e5ende Ukraina.",
        "news_epoch": 1739521800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143709",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Ven\u00e4j\u00e4n p\u00f6rssi on valtavassa nousukiidossa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_1fc63993e246",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Entos l\u00f6nsamhet f\u00f6rs\u00e4mrades mot slutet av \u00e5ret, men prognoser f\u00f6r \u00e5terh\u00e4mtning \u00e4r optimistiska. Den finansiella rapporten sl\u00e4pptes p\u00e5 fredag, och utdelningen f\u00f6rblir of\u00f6r\u00e4ndrad.",
        "news_epoch": 1739520960.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/6f100dd3-b89c-48f7-89b6-813fd636e4e6",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Enenton kannattavuus heikkeni loppuvuonna \u2013 Ennakoi paranevaa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143757",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Datacenter st\u00e5r f\u00f6r en stor del av den globala elf\u00f6rbrukningen, som f\u00f6rv\u00e4ntas \u00f6ka. \u00c5bo Akademi samarbetar med RISE f\u00f6r att utveckla energieffektiva och h\u00e5llbara datacenter.",
        "news_epoch": 1739520840.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143757",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Turkulaisyliopisto kehitt\u00e4\u00e4 tulevaisuuden datakeskuksia Ruotsin valtiollisen tutkimuslaitoksen kanssa",
        "news_group": -1
    },
    {
        "news_id": "dw_a71603682",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Andrej Babis, ledare f\u00f6r oppositionen i Tjeckien, siktar p\u00e5 att bli premi\u00e4rminister igen i de kommande valen, d\u00e4r hans parti ANO leder i opinionsm\u00e4tningar. Babis planerar att omstrukturera den offentliga median, g\u00e5 bort fr\u00e5n den nuvarande finansieringsmodellen och sl\u00e5 samman Tjeckisk radio och TV till en statligt finansierad enhet.",
        "news_epoch": 1739520420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/czech-opposition-leader-eyes-state-funding-for-public-media/a-71603682",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Czech opposition leader eyes state funding for public media",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143759",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "EU kommer att svara &quot;beslutsamt och omedelbart&quot; amerikanska importtullar",
        "news_epoch": 1739520360.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143759",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "EU aikoo vastata \u201dp\u00e4\u00e4tt\u00e4v\u00e4isesti ja v\u00e4litt\u00f6m\u00e4sti\u201d USA:n tuontitulleihin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142778",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "FN rapporterar att kriget i Gaza har l\u00e4mnat en generation traumatiserade barn. M\u00e5nga har blivit f\u00f6rdrivna och skadade p\u00e5 grund av konflikten. I Kairo finns en skola f\u00f6r evakuerade barn som erbjuder utbildning och psykologiskt st\u00f6d, men traumat \u00e4r djupt.",
        "news_epoch": 1739520060.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142778",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Gazan sotaa paenneet lapset k\u00e4rsiv\u00e4t traumoista Egyptiss\u00e4: \u201dT\u00e4m\u00e4 kaikki on tuhonnut heid\u00e4n mielenterveytens\u00e4\u201d",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_2007c1057924",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Alphabets v\u00e4rdering \u00e4r rimlig. V\u00e4rderingsbromsen ger investeraren en chans.",
        "news_epoch": 1739520000.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/acb55541-cf47-470e-8b43-90f3860c550b",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Alphabetin arvostus on kohtuullinen",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_04d35766b8d4",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "De europeiska b\u00f6rserna upplevde en nedg\u00e5ng i slutet av veckan, med aktieindex som visade negativa trender p\u00e5 morgonen.",
        "news_epoch": 1739517540.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/06ad5ad2-3f85-4010-92b5-52f4ea9d2004",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Euroopan p\u00f6rssit loivassa laskussa viikon p\u00e4\u00e4tteeksi \u2013 Tullit yh\u00e4 tapetilla",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143698",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Byggandet av nya bost\u00e4der har minskat kraftigt, med endast 21 000 nya bost\u00e4der byggda 2023, det l\u00e4gsta p\u00e5 ett decennium. Trots behovet av tiotusentals nya bost\u00e4der \u00e5rligen finns det ingen tydlig \u00e5terh\u00e4mtning inom byggandet.",
        "news_epoch": 1739517300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143698",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Suomeen tarvitaan hurja m\u00e4\u00e4r\u00e4 uusia asuntoja \u2013 muuten edess\u00e4 on hintaralli, arvioi selvitys",
        "news_group": -1
    },
    {
        "news_id": "dw_a71605032",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "En explosion i sydv\u00e4stra Pakistan d\u00f6dade minst 10 arbetare som reste till en marknad i Harnai n\u00e4r deras fordon tr\u00e4ffades av en improviserad spr\u00e4nganordning. Lokala tj\u00e4nstem\u00e4n rapporterade att m\u00e5nga av de skadade var i kritiskt tillst\u00e5nd.",
        "news_epoch": 1739517240.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/pakistan-at-least-10-workers-killed-in-balochistan-blast/a-71605032",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Pakistan: At least 10 workers killed in Balochistan blast",
        "news_group": 299
    },
    {
        "news_id": "arvopaperi_55343244935a",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Alphabets tidigare framg\u00e5ng har blivit en b\u00f6rda eftersom dess dominerande st\u00e4llning leder till utmaningar. F\u00f6retaget beh\u00f6ver nya tillv\u00e4xtk\u00e4llor.",
        "news_epoch": 1739516040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/c4bf8fd8-4a2e-46e5-8c57-5cc9d62a6fff",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Kuukauden osake: Alphabet onnistui liian hyvin \u2013 M\u00e4\u00e4r\u00e4\u00e4v\u00e4 markkina-asema purkautuu usein murroksissa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_e4389746ccac",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Publicisten Tieevrys aktie sjunker, medan HK och Huhtam\u00e4kis aktier stiger. Fredagen den 13:e kommer f\u00f6retagen p\u00e5 Helsingforsb\u00f6rsen att offentligg\u00f6ra sina resultat.",
        "news_epoch": 1739514900.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/fb14f1b8-cf8c-4239-b724-e14e6279a6a6",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Tulosjulkistaja Tietoevry painuu laskup\u00f6rssiss\u00e4, HK ja Huhtam\u00e4ki nousussa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143720",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Olli Rehn kommer att presenteras f\u00f6r andra mandatperioden f\u00f6r att leda Finlands Bank",
        "news_epoch": 1739514000.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143720",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Olli Rehni\u00e4 esitet\u00e4\u00e4n toiselle kaudelle Suomen Pankin johtoon",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143719",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "IAEA: I Tjernobyl, explosion och eld - str\u00e5lningsniv\u00e5er normala, inga offer",
        "news_epoch": 1739513940.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143719",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "IAEA: T\u0161ernobylissa r\u00e4j\u00e4hdys ja tulipalo \u2013 s\u00e4teilytasot normaalit, ei uhreja",
        "news_group": -1
    },
    {
        "news_id": "bbc_cdd98qedy4vo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "En serie h\u00e4ndelser intr\u00e4ffade, inklusive en LAFD-fordon som trycktes ut i Stilla havet av skr\u00e4p, en storm som orsakade evakueringar i LA och str\u00f6mavbrott i USA och Kanada.",
        "news_epoch": 1739513880.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/cdd98qedy4vo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "LA vehicle swept into ocean as rain hits fire-ravaged area",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143717",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Postoms\u00e4ttningen minskade",
        "news_epoch": 1739513460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143717",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Postin liikevaihto laski",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143715",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "S\u00e4kra investeringar producerade 10,2 procent",
        "news_epoch": 1739513400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143715",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Varman sijoitukset tuottivat 10,2 prosenttia",
        "news_group": -1
    },
    {
        "news_id": "bbc_cr46ydpp3ddo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Den popul\u00e4ra musikern Delphin Katembo Vinywasiki, k\u00e4nd som Delcat Idengo, m\u00f6rdades medan han filmade en musikvideo i Goma. Hans kropp hittades med tecken p\u00e5 v\u00e5ld, och rapporter tyder p\u00e5 att han sk\u00f6ts.",
        "news_epoch": 1739513160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cr46ydpp3ddo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "DR Congo singer killed filming video in conflict city",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143707",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kina mots\u00e4tter sig det amerikanska missilsystemet i Filippinerna",
        "news_epoch": 1739512560.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143707",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Kiina vastustaa yhdysvaltalaista ohjusj\u00e4rjestelm\u00e4\u00e4 Filippiineill\u00e4",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143687",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Sotkamo Silver rapporterade ett positivt \u00e5rligt resultat trots en minskning av silverinneh\u00e5llet i malmen och \u00f6kande kostnader. F\u00f6retaget gjorde en r\u00f6relsevinst p\u00e5 32 miljoner SEK under 2023, vilket \u00e4r en minskning fr\u00e5n 67 miljoner SEK 2022.",
        "news_epoch": 1739512020.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143687",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Suomen ainoa hopeakaivos teki viime vuonna voitollisen tuloksen",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_cdb1522a0784",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Huhtam\u00e4ki har meddelat strategiska f\u00f6r\u00e4ndringar och utsett Sara Engber till direkt\u00f6r.",
        "news_epoch": 1739511300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/ddf6d880-5f2a-4697-9887-4a4ffb5bf180",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Huhtam\u00e4ki jakaa liiketoimintoja ja nimitt\u00e4\u00e4 Sara Engberin johtajaksi",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_524017c3027b",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Produktionsutmaningar p\u00e5verkade Sotkamo Silver under hela \u00e5ret, med en uppskattad produktion p\u00e5 1,2-1,4 uns silver \u00e5r 2025.",
        "news_epoch": 1739511180.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/69ec8f76-df6d-4b04-8dea-2430767e6f0c",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Tuotannon haasteet varjostivat Sotkamo Silverin loppuvuotta",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_504b9dc476bf",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Alisa Banks prestation under andra halvan av \u00e5ret p\u00e5verkades av en svag start, vilket resulterade i en negativ vinst f\u00f6r kalender\u00e5ret.",
        "news_epoch": 1739511120.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/f5c714e8-6040-4cae-8b4a-da62a34cfa41",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Alisa Pankilta tulosk\u00e4\u00e4nne vuoden toisella puoliskolla",
        "news_group": -1
    },
    {
        "news_id": "dw_a71583132",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Mali, Niger och Burkina Faso, trots att de \u00e4r bland Afrikas fattigaste nationer, har betydande mineralresurser, inklusive guld och litium. Efter milit\u00e4rkuppar har dessa l\u00e4nder distanserat sig fr\u00e5n v\u00e4sterl\u00e4ndskt inflytande, l\u00e4mnat ECOWAS och bildat sin egen Allians av Sahelstater.",
        "news_epoch": 1739511120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/lithium-uranium-gold-how-sahel-states-ditched-western-mining-interests/a-71583132",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Lithium, uranium, gold: How Sahel states ditched Western mining interests",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_d09fc03096c7",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Exel Composites best\u00e4llningar \u00f6kade, vilket indikerar en f\u00f6rb\u00e4ttring i resultaten j\u00e4mf\u00f6rt med en l\u00e5ngsam f\u00f6reg\u00e5ende period.",
        "news_epoch": 1739510760.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/0b50447a-374a-40ea-853f-fe0ad07af537",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Exel Compositesin tilaukset kasvoivat, n\u00e4kymiss\u00e4 tulosparannus",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143697",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "VR \u00f6kade tydligt sina int\u00e4kter",
        "news_epoch": 1739510760.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143697",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "VR kasvatti tulostaan selv\u00e4sti",
        "news_group": -1
    },
    {
        "news_id": "bbc_c8d9z68grn3o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hollywood st\u00e5r inf\u00f6r en kris d\u00e5 filmteam i allt h\u00f6gre grad v\u00e4ljer att filma i st\u00e4der som Atlanta och Toronto p\u00e5 grund av billigare arbetskraft och skatteincitament.",
        "news_epoch": 1739510400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c8d9z68grn3o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Too quiet on set? Hollywood pushes for more LA productions post wildfires",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143689",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Svenska skogar bed\u00f6ms vara en starkare kols\u00e4nka \u00e4n de finska. Den svenska parlamentariska kroppen, Milj\u00f6m\u00e5lsberedningen, bed\u00f6mer att Sverige inte uppfyller EU:s klimatm\u00e5l, och vissa medlemmar anser att m\u00e5len \u00e4r orealistiska.",
        "news_epoch": 1739509620.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143689",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Arviointiryhm\u00e4: Ruotsin metsien ilmastotavoitteita mahdoton saavuttaa",
        "news_group": -1
    },
    {
        "news_id": "dw_a71577773",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Indien har nu cirka tre fj\u00e4rdedelar av v\u00e4rldens tigerpopulation, som har mer \u00e4n f\u00f6rdubblats fr\u00e5n 1 706 till n\u00e4stan 3 700 mellan 2010 och 2022 tack vare bevarandeinsatser.",
        "news_epoch": 1739509020.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.dw.com/en/conservation-efforts-double-india-s-tiger-population/a-71577773",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Conservation efforts double India&#x27;s tiger population",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143683",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Vita husets pressrepresentant Levitt s\u00e4ger att Vita huset vill stoppa media fr\u00e5n att sprida falsk information. Nyhetsbyr\u00e5n AP har nekats tillg\u00e5ng till Vita husets presskonferenser tre g\u00e5nger p\u00e5 grund av att de v\u00e4grar att kalla Mexikanska golfen f\u00f6r Amerikanska golfen.",
        "news_epoch": 1739508960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143683",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Uutistoimisto kielt\u00e4ytyi kutsumasta Meksikonlahtea Amerikanlahdeksi, toimittajat eiv\u00e4t p\u00e4\u00e4se Valkoiseen taloon",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143678",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "I Sydkorea evakuerades minst sex d\u00f6da och 100 i en eld",
        "news_epoch": 1739507580.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143678",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Etel\u00e4-Koreassa ainakin kuusi kuollut ja sata evakuoitu tulipalossa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142748",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Under 2010-talet etablerade ryssar ett datacenter och en larmfabrik i Savonlinna, Finland. Trustnet och Argus Spectrum var de huvudsakliga f\u00f6retagen, d\u00e4r Trustnet stod inf\u00f6r konkurs och Argus Spectrum k\u00e4mpade med personal- och \u00e4garproblem.",
        "news_epoch": 1739507460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142748",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Ven\u00e4l\u00e4isten perustama datakeskus hurisee edelleen Savonlinnan konkurssikiinteist\u00f6ss\u00e4 \u2013 kaupunkilaiset yhteydess\u00e4 supoon",
        "news_group": -1
    },
    {
        "news_id": "bbc_cg5yjqv5zv8o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Blue Origin, som \u00e4gs av Jeff Bezos, s\u00e4ger upp cirka 1 400 anst\u00e4llda, eller 10 % av sin arbetsstyrka, som en del av en strategi f\u00f6r att fokusera p\u00e5 att \u00f6ka raketlanceringarna.",
        "news_epoch": 1739507340.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cg5yjqv5zv8o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Jeff Bezos space firm Blue Origin to cut a tenth of jobs",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143676",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Ekonomin v\u00e4xte med 0,7 procent i slutet av f\u00f6rra \u00e5ret",
        "news_epoch": 1739506860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143676",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Talous kasvoi 0,7 prosentin tahtia viime vuoden lopulla",
        "news_group": -1
    },
    {
        "news_id": "bbc_cnvql2m5mz7o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Flygbolag och hotell\u00e4gare kr\u00e4ver en reform av Heathrow&#x27;s finansieringsmodell innan n\u00e5gra investeringar g\u00f6rs i den f\u00f6reslagna tredje landningsbanan. De h\u00e4vdar att den nuvarande modellen g\u00f6r Heathrow till den dyraste flygplatsen i v\u00e4rlden, och utan f\u00f6r\u00e4ndringar kommer den tredje landningsbanan inte att vara genomf\u00f6rbar p\u00e5 grund av h\u00f6ga kostnader.",
        "news_epoch": 1739505780.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cnvql2m5mz7o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Change Heathrow funding or third runway won&#x27;t happen - businesses",
        "news_group": -1
    },
    {
        "news_id": "bbc_c8xqkw4e08vo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Oleksandr Bezhan uttrycker os\u00e4kerhet om framtiden i Malokaterynivka, Ukraina, n\u00e4ra frontlinjen i det p\u00e5g\u00e5ende kriget. Omr\u00e5det har p\u00e5verkats av f\u00f6rst\u00f6relsen av Kakhovka-dammen, vilket har lett till karga landskap.",
        "news_epoch": 1739505480.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c8xqkw4e08vo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump wants peace. Ukrainians fear what that might look like",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143672",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kina anklagar Australien f\u00f6r att ha provocerat det genom att invadera Sydkinesiska havet och h\u00e4vdar att Australien har spridit en falsk ber\u00e4ttelse om de senaste h\u00e4ndelserna.",
        "news_epoch": 1739504640.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143672",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Kiina syytt\u00e4\u00e4 Australiaa provokaatiosta Etel\u00e4-Kiinan merell\u00e4",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143666",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "En unders\u00f6kning fr\u00e5n Danske Bank visar att 33% av kvinnorna k\u00e4nner att de saknar ekonomiska m\u00f6jligheter att s\u00e4ga upp sig fr\u00e5n sina jobb, d\u00e4r finska kvinnor k\u00e4nner sig s\u00e4rskilt begr\u00e4nsade.",
        "news_epoch": 1739502300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143666",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Kysely: Naiset kokevat miehi\u00e4 useammin, ettei heill\u00e4 ole varaa erota",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143501",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Gr\u00f6na investeringar i Finland n\u00e4rmar sig 8,5 miljarder euro i \u00e5r, trots ekonomiska utmaningar. Finlands Industrif\u00f6rbund rapporterar en \u00f6kning av avslutade projekt, med \u00f6ver 900 p\u00e5g\u00e5ende.",
        "news_epoch": 1739502000.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143501",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "T\u00e4llaisia vihre\u00e4n siirtym\u00e4n hankkeita Suomeen valmistuu t\u00e4n\u00e4 vuonna \u2013 tuulivoima j\u00e4\u00e4 datakeskusten jalkoihin",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143664",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Taiwan avser att \u00f6ka importen fr\u00e5n USA",
        "news_epoch": 1739500440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143664",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Taiwan aikoo kasvattaa tuontia Yhdysvalloista",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143660",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kina unders\u00f6ker korruption relaterad till sin st\u00f6rsta tillverkare av aluminium",
        "news_epoch": 1739498760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143660",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Kiina tutkii maan suurimpaan alumiinin valmistajaan liittyv\u00e4\u00e4 korruptiota",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143210",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "M\u00fcnchen s\u00e4kerhetskonferens kommer att diskutera Ukrainas fredssamtal i en sp\u00e4nd atmosf\u00e4r n\u00e4r globala s\u00e4kerhetsledare samlas. USA har st\u00e4llt upp villkor f\u00f6r att st\u00f6dja Ukraina och betonar Europas behov av sj\u00e4lvf\u00f6rsvar.",
        "news_epoch": 1739496000.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143210",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trumpin ykk\u00f6skaarti marssii M\u00fcncheniin sanelemaan ehtoja Euroopalle ja Ukrainalle",
        "news_group": 290
    },
    {
        "news_id": "dw_a71602870",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "TikTok-appen har \u00e5terv\u00e4nt till Apple App Store och Google Play Store i USA efter en f\u00f6rsening av sitt f\u00f6rbud av president Trump. Trump-administrationen f\u00f6rs\u00e4krade appbutikerna att de inte skulle f\u00e5 b\u00f6ter f\u00f6r att uppr\u00e4tth\u00e5lla TikTok.",
        "news_epoch": 1739496000.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/tiktok-returns-to-us-app-stores-weeks-after-trump-delays-ban/a-71602870",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "TikTok returns to US app stores weeks after Trump delays ban",
        "news_group": 296
    },
    {
        "news_id": "bbc_c23vkd57471o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Ett nytt r\u00e5dgivande organ lett av Elon Musk, skapat av president Trump, syftar till att minska amerikanska statliga jobb och utgifter. Trots r\u00e4ttsliga utmaningar och anklagelser om intressekonflikter h\u00e4vdar Musk att initiativet kommer att spara skattebetalarnas pengar och minska den nationella skulden.",
        "news_epoch": 1739494680.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c23vkd57471o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "What is Doge and why is Musk cutting so many jobs?",
        "news_group": -1
    },
    {
        "news_id": "bbc_cm274m25e4ro",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Den h\u00f6gsta \u00e5klagaren i Manhattan, Danielle Sassoon, avgick efter att ha v\u00e4grat att l\u00e4gga ner ett korruptionsfall mot New Yorks borgm\u00e4stare Eric Adams, vilket hon ans\u00e5g skulle skapa ett farligt prejudikat.",
        "news_epoch": 1739493000.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cm274m25e4ro",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Top prosecutor resigns after being told to drop case against NYC mayor Eric Adams",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx2qz8x3j8no",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Antalet utl\u00e4ndska arbetare i Storbritannien som rapporterar om utnyttjande, mobbning, underbetalning och d\u00e5liga levnadsf\u00f6rh\u00e5llanden \u00f6kade betydligt under 2024. N\u00e4stan 700 s\u00e4songsarbetare inom jordbruket klagade till Arbetarst\u00f6dcentrum, upp fr\u00e5n \u00f6ver 400 under 2023.",
        "news_epoch": 1739490840.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2qz8x3j8no",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "More migrant workers claim UK farm exploitation",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143652",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "President Donald Trump sade att frigivningen av f\u00e5ngar \u00e4r ett positivt steg mot att l\u00f6sa kriget i Ukraina. Den ryske Alexander Vinnik \u00e5terv\u00e4nde till Moskva som en del av en f\u00e5ngutv\u00e4xling, efter att ha erk\u00e4nt penningtv\u00e4tt med kryptovaluta.",
        "news_epoch": 1739488560.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143652",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Yhdysvaltain vapauttama ven\u00e4l\u00e4isvanki palasi Moskovaan",
        "news_group": -1
    },
    {
        "news_id": "bbc_cm2l1y73mz1o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "En student vid University of Pennsylvania st\u00f6tte p\u00e5 en ov\u00e4ntad brandalarm n\u00e4r de testade en robot som \u00e4r designad f\u00f6r att se genom r\u00f6k med hj\u00e4lp av radiov\u00e5gor. Denna innovativa teknik syftar till att f\u00f6rb\u00e4ttra robotars syn i utmanande f\u00f6rh\u00e5llanden, vilket potentiellt kan hj\u00e4lpa vid r\u00e4ddningsinsatser.",
        "news_epoch": 1739484480.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cm2l1y73mz1o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Scientists work on &#x27;superhuman&#x27; vision systems for robots",
        "news_group": -1
    },
    {
        "news_id": "pbs_bf57e5d05b1f",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Europeiska allierade kr\u00e4ver st\u00f6d f\u00f6r Ukraina och en plats vid Trump-Putin-f\u00f6rhandlingarna, och mots\u00e4tter sig vad de beskriver som eftergifter fr\u00e5n Trump-administrationen.",
        "news_epoch": 1739483700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/european-allies-demand-support-for-ukraine-and-seat-at-trump-putin-negotiations",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": true,
        "news_original_title": "European allies demand support for Ukraine and seat at Trump-Putin negotiations",
        "news_group": -1
    },
    {
        "news_id": "pbs_415425f98604",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Indiens premi\u00e4rminister Modi bes\u00f6kte Vita huset strax efter att president Trump undertecknat en plan f\u00f6r \u00f6msesidiga tullar mot handelsparter. En federal domare pausade Trumps verkst\u00e4llande order om k\u00f6nsbekr\u00e4ftande v\u00e5rd f\u00f6r transungdomar, och Hamas meddelade att de kommer att frig\u00f6ra tre israeliska gisslan p\u00e5 l\u00f6rdag, vilket uppr\u00e4tth\u00e5ller vapenvilan med Israel.",
        "news_epoch": 1739483400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/news-wrap-indian-pm-modi-visits-white-house",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "News Wrap: Indian PM Modi visits White House",
        "news_group": -1
    },
    {
        "news_id": "pbs_279a42b2f112",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "I ett telefonsamtal med Putin avslutar Trump USA:s anstr\u00e4ngningar att isolera Ryssland, och s\u00e4ger att Ukrainas NATO-medlemskap \u00e4r &#x27;opraktiskt&#x27; och \u00e5terl\u00e4mnandet av ockuperade territorier \u00e4r &#x27;illusion\u00e4rt&#x27;, vilket st\u00f6djer Putins agenda.",
        "news_epoch": 1739482740.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/in-phone-call-with-putin-trump-abruptly-ends-u-s-efforts-to-isolate-russia",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "In phone call with Putin, Trump abruptly ends U.S. efforts to isolate Russia",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143649",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Handelsavtalet mellan Indien och USA n\u00e4rmar sig f\u00e4rdigst\u00e4llande, d\u00e4r president Trump och premi\u00e4rminister Modi diskuterar \u00f6kad vapenhandel och f\u00f6rs\u00e4ljning av F-35-jaktplan.",
        "news_epoch": 1739482440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143649",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump ja Modi keskustelivat kauppasuhteista Washingtonissa \u2013 Yhdysvallat aikoo myyd\u00e4 h\u00e4vitt\u00e4ji\u00e4 Intiaan",
        "news_group": -1
    },
    {
        "news_id": "pbs_cf829d869843",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "En grupp i Senegal har framg\u00e5ngsrikt uppmuntrat tusentals samh\u00e4llen att \u00f6verge praktiken av k\u00f6nsstympning, ett tabu och l\u00e5ngvarigt problem som p\u00e5verkar uppskattningsvis 230 miljoner kvinnor och flickor i Afrika, Mellan\u00f6stern och Asien.",
        "news_epoch": 1739481900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/senegal-group-finds-some-success-in-stopping-genital-mutilation-in-african-communities",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Senegal group finds some success in stopping genital mutilation in African communities",
        "news_group": -1
    },
    {
        "news_id": "pbs_7455fcf7806e",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "President Trump och premi\u00e4rminister Modi h\u00f6ll en gemensam presskonferens i Vita huset, d\u00e4r Modi ber\u00f6mde Trump f\u00f6r att undvika de nya tullar som administrationen inf\u00f6rt.",
        "news_epoch": 1739475960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/politics/watch-live-trump-and-indias-modi-hold-joint-news-conference-at-the-white-house",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "WATCH: Trump and India&amp;rsquo;s Modi hold joint news conference at the White House",
        "news_group": -1
    },
    {
        "news_id": "bbc_c2k5e14vwx4o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "En kajakpaddlare blev kortvarigt f\u00e5ngad i munnen p\u00e5 en kn\u00f6lval utanf\u00f6r Chiles kust, men sl\u00e4pptes oskadd. I Brasilien skadades minst 20 personer i en fabrikbrand som resulterade i tv\u00e5 d\u00f6dsfall.",
        "news_epoch": 1739470080.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c2k5e14vwx4o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Watch moment man is swallowed by humpback whale",
        "news_group": -1
    },
    {
        "news_id": "pbs_627924c699ca",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "En f\u00f6rare k\u00f6rde in i en fackf\u00f6reningsdemonstration i M\u00fcnchen och skadade 30 personer, inklusive barn. Myndigheterna tror att det var en attack.",
        "news_epoch": 1739469600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/driver-plows-into-a-labor-union-demonstration-in-munich-injuring-30",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Driver plows into a labor union demonstration in Munich, injuring 30",
        "news_group": -1
    },
    {
        "news_id": "pbs_ab322f45708f",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Ryska tj\u00e4nstem\u00e4n firar efter att Trump \u00f6vergav tre \u00e5rs amerikansk politik om Ukraina och meddelade en sannolik tr\u00e4ff med Putin f\u00f6r fredsf\u00f6rhandlingar.",
        "news_epoch": 1739466900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/russian-officials-rejoice-after-trump-ditches-3-years-of-u-s-policy-on-ukraine",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Russian officials rejoice after Trump ditches 3 years of U.S. policy on Ukraine",
        "news_group": -1
    },
    {
        "news_id": "sn_f713bf0e8feb",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Trots betydande regn i Kalifornien under 2023 \u00e5terst\u00e4lldes endast 25% av det vatten som f\u00f6rlorades fr\u00e5n akviferer sedan 2006. En studie visade att medan ytvattendammar fick \u00f6ver 90 miljarder gallon vatten, f\u00f6rblev djupare akviferer i stort sett op\u00e5verkade.",
        "news_epoch": 1739466000.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/epic-rainfall-not-refill-socal-aquifers",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Even epic rainfall may not be enough to refill SoCal\u2019s aquifers",
        "news_group": -1
    },
    {
        "news_id": "pbs_5effd0acd340",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Det h\u00f6gerextrema AfD-partiet verkar vara p\u00e5 v\u00e4g mot sitt starkaste resultat i Tysklands val och st\u00e4ller upp sin f\u00f6rsta kandidat f\u00f6r att leda landet.",
        "news_epoch": 1739465880.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/far-right-afd-party-appears-to-be-heading-for-its-strongest-result-in-germanys-election",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Far-right AfD party appears to be heading for its strongest result in Germany&amp;#8217;s election",
        "news_group": -1
    },
    {
        "news_id": "pbs_8e73ea0b1e19",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "NATO-allierade betonar vikten av att inkludera Ukraina och Europa i fredsf\u00f6rhandlingarna, s\u00e4rskilt n\u00e4r Trump planerar att tr\u00e4ffa Putin.",
        "news_epoch": 1739465340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/nato-allies-insist-ukraine-and-europe-must-be-in-peace-negotiations-trump-plans-with-putin",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "NATO allies insist Ukraine and Europe must be in peace negotiations Trump plans with Putin",
        "news_group": -1
    },
    {
        "news_id": "pbs_222d666fe629",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Hamas planerar att frig\u00f6ra tre israeliska gisslan, vilket underl\u00e4ttar en l\u00f6sning p\u00e5 vapenvilan i Gaza.",
        "news_epoch": 1739465040.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/hamas-says-it-will-free-3-hostages-as-planned-paving-the-way-to-settle-ceasefire-dispute",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Hamas says it will free 3 hostages as planned, paving the way to settle ceasefire dispute",
        "news_group": -1
    },
    {
        "news_id": "bbc_c1kmdvynz4wo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Dronbilder visar Europas h\u00f6gsta vulkan, Etna, som eruptar med \u00f6kande lava- och aschemissioner. I andra nyheter st\u00e5r Alexander Lukashenko inf\u00f6r kritik efter en kontroversiell valvinst i Vitryssland, medan tiotusentals samlas i Grekland f\u00f6r att minnas offren f\u00f6r en j\u00e4rnv\u00e4gskatastrof.",
        "news_epoch": 1739464800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c1kmdvynz4wo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Lava and smoke emerge from a snowy Mount Etna",
        "news_group": -1
    },
    {
        "news_id": "bbc_cdxnwnz1ldko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "F\u00f6r\u00e4ldrar till fyra israeliska kvinnliga gisslan som frigivits fr\u00e5n Hamas f\u00e5ngenskap beskrev hur deras d\u00f6ttrar misshandlades, inklusive sv\u00e4lt, hot och tv\u00e5ngsarbete.",
        "news_epoch": 1739464200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cdxnwnz1ldko",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Starved, threatened and abused: Parents of freed Hamas hostages give details of ordeal",
        "news_group": -1
    },
    {
        "news_id": "bbc_c9qjzw9ljjjo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "En brasiliansk kvinna, Deise Moura dos Anjos, misst\u00e4nkt f\u00f6r att ha f\u00f6rgiftat sin mans familj med arsenikfylld julkaka, har hittats d\u00f6d i sin f\u00e4ngelsecell, troligen en sj\u00e4lvmord.",
        "news_epoch": 1739460840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c9qjzw9ljjjo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Suspect in Christmas cake poisoning found dead in jail cell",
        "news_group": -1
    },
    {
        "news_id": "dw_a71588340",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Inv\u00e5narna i Jenin flyktingl\u00e4ger p\u00e5 den ockuperade V\u00e4stbanken bevittnar \u00f6kade israeliska milit\u00e4ra operationer efter en vapenvila i Gaza. M\u00e5nga civila k\u00e4nner sig os\u00e4kra n\u00e4r de israeliska f\u00f6rsvarsstyrkorna (IDF) genomf\u00f6r razzior, vilket resulterar i d\u00f6dsfall, f\u00f6rdrivningar och f\u00f6rst\u00f6relse av infrastruktur.",
        "news_epoch": 1739458680.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/fears-grow-that-west-bank-could-become-second-gaza/a-71588340",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Fears grow that West Bank could become second Gaza",
        "news_group": -1
    },
    {
        "news_id": "sn_819e909ce8b0",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "En ny studie visar att zebror och giraffer bildar en symbiotisk relation, d\u00e4r de reser tillsammans f\u00f6r att \u00f6ka sina \u00f6verlevnadsm\u00f6jligheter mot rovdjur. Genom att anv\u00e4nda videokameror observerade forskarna att zebror ofta tillbringar tid med giraffer, synkroniserar sina r\u00f6relser och f\u00f6dointag.",
        "news_epoch": 1739457000.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/zebras-giraffes-travel-companions",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "In a first, zebra cams reveal herds on the move with giraffes",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143610",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Elpriserna n\u00e5r sin topp p\u00e5 fredag klockan 18:00, \u00f6ver 37 cent per kilowattimme p\u00e5 grund av l\u00e5g vindkraftproduktion. Priserna \u00e4r ocks\u00e5 h\u00f6ga p\u00e5 morgonen, med en \u00f6kning till n\u00e4stan 34 cent klockan 08:00.",
        "news_epoch": 1739455260.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143610",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Saunaa ei kannata l\u00e4mmitt\u00e4\u00e4 perjantaina alkuillasta \u2013 s\u00e4hk\u00f6 on huomenna kallista",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3bf8b69dd173",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "GEO April 4th Options b\u00f6rjar handla",
        "news_epoch": 1739453640.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/geo-april-4th-options-begin-trading",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "GEO April 4th Options Begin Trading",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_dac6821efd21",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "AEO 4 april alternativ b\u00f6rjar handla",
        "news_epoch": 1739453640.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/aeo-april-4th-options-begin-trading",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "AEO April 4th Options Begin Trading",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_954fecc036dc",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Intressant HLI S\u00e4tt och ring alternativ f\u00f6r 19 september",
        "news_epoch": 1739453580.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/interesting-hli-put-and-call-options-september-19th",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Interesting HLI Put And Call Options For September 19th",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_ea98413f1dcd",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Torsdag 2/13 Insider Buying Report: MTH, MAGN",
        "news_epoch": 1739453520.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/thursday-2-13-insider-buying-report-mth-magn",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Thursday 2/13 Insider Buying Report: MTH, MAGN",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a404645da419",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Intressant KNF s\u00e4tter och ringer alternativ f\u00f6r 21 mars",
        "news_epoch": 1739453520.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/interesting-knf-put-and-call-options-march-21st",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Interesting KNF Put And Call Options For March 21st",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_2b0b22ffb248",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Wall Street driver upp i handelssp\u00e4nningar och inflationsstatistik",
        "news_epoch": 1739452500.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/587459de-00f0-46f0-96c8-ee0a6ee2c0f9",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Wall Street punnertaa nousussa kauppaj\u00e4nnitteiden ja inflaatiotilastojen keskell\u00e4",
        "news_group": -1
    },
    {
        "news_id": "bbc_c0e43dqv271o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Tv\u00e5 stora l\u00e5ngivare, Santander och Barclays, har lanserat bol\u00e5neerbjudanden med r\u00e4ntor under 4 %, drivet av \u00f6kad konkurrens och f\u00f6rv\u00e4ntningar p\u00e5 ytterligare s\u00e4nkningar fr\u00e5n Bank of England.",
        "news_epoch": 1739451720.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0e43dqv271o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Some mortgage rates cut below 4% as competition picks up",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143624",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Den finska utbildningsministern tar bort referenser till utrikes- och s\u00e4kerhetspolitik fr\u00e5n lagen om den finska akademin. Detta beslut kommer efter feedback fr\u00e5n det vetenskapliga samfundet, vilket betonar att vetenskapens frihet \u00e4r skyddad av grundlagen.",
        "news_epoch": 1739451480.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20143624",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Ministeri\u00f6 on muokkaamassa pyk\u00e4l\u00e4\u00e4, joka her\u00e4tti akateemikoissa huolta tieteen vapaudesta",
        "news_group": -1
    },
    {
        "news_id": "bbc_c77r05nx11po",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Fr\u00e5gor har uppst\u00e5tt ang\u00e5ende noggrannheten i kansler Rachel Reeves online-CV och hennes utgifter under sin tid p\u00e5 Halifax Bank of Scotland. En utredning avsl\u00f6jade avvikelser i hennes p\u00e5st\u00e5dda anst\u00e4llningstid p\u00e5 Bank of England, d\u00e4r hon h\u00e4vdade att hon arbetade i ett decennium men faktiskt l\u00e4mnade i mars 2006 efter fem och ett halvt \u00e5r.",
        "news_epoch": 1739451360.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c77r05nx11po",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Questions raised over Rachel Reeves&#x27;s CV and expenses",
        "news_group": -1
    },
    {
        "news_id": "dw_a71595277",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Nepal, som rankas 74:a i 2024 \u00e5rs v\u00e4rldspressfrihetsindex, st\u00e5r inf\u00f6r oro \u00f6ver ett nytt lagf\u00f6rslag som syftar till att reglera sociala medier, vilket kritiker menar kan undertrycka yttrandefrihet och politiskt motst\u00e5nd.",
        "news_epoch": 1739450160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/nepal-s-social-media-bill-raises-free-speech-concerns/a-71595277",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Nepal&#x27;s social media bill raises free speech concerns",
        "news_group": -1
    },
    {
        "news_id": "dw_a71595629",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Mindre \u00e4n en m\u00e5nad in i Donald Trumps andra mandatperiod framtr\u00e4der en ny handelskrig mellan USA och Kina med \u00f6msesidiga tullar fr\u00e5n b\u00e5da sidor. USA inf\u00f6rde en 10 % tull p\u00e5 alla kinesiska importer, vilket fick Kina att svara med tullar p\u00e5 amerikansk r\u00e5olja och andra varor.",
        "news_epoch": 1739449860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/can-china-come-out-on-top-in-a-us-trade-war/a-71595629",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Can China come out on top in a US trade war?",
        "news_group": 294
    },
    {
        "news_id": "yle_7420143500",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Nordnet upplevde ett dataintr\u00e5ng som p\u00e5verkade 1 500 kunder i de nordiska l\u00e4nderna, med specifika siffror p\u00e5 500 i Danmark och Finland, 350 i Norge och 200 i Sverige.",
        "news_epoch": 1739449860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143500",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Nordnetin 1 500 asiakkaan tiedot n\u00e4kyiv\u00e4t muille \u2013 suomalaisia joukossa 500",
        "news_group": -1
    },
    {
        "news_id": "sn_27b425ff60ce",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Norovirus \u00e4r mycket smittsam och orsakar kr\u00e4kningar, diarr\u00e9 och illam\u00e5ende, och har sett en betydande \u00f6kning av utbrott i USA denna vinter. Utan n\u00e5gra tillg\u00e4ngliga vacciner eller specifika behandlingar leder det till miljontals sjukdomar och tusentals d\u00f6dsfall \u00e5rligen.",
        "news_epoch": 1739448000.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/norovirus-vomiting-diarrhea-vaccine",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Why a norovirus vaccine isn\u2019t available \u2014 yet",
        "news_group": -1
    },
    {
        "news_id": "bbc_c203r3erp80o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Den brittiska regeringen s\u00f6ker undantag fr\u00e5n de amerikanska tullarna p\u00e5 brittisk st\u00e5l, som president Trump har meddelat som en skatt p\u00e5 25%. N\u00e4ringslivsminister Jonathan Reynolds h\u00e4vdar att Storbritanniens st\u00e5lexport till USA \u00e4r minimal och anv\u00e4nds inom f\u00f6rsvar, vilket ger ett starkt sk\u00e4l f\u00f6r undantag.",
        "news_epoch": 1739447880.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c203r3erp80o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "UK signals it will seek US steel tariff exemption",
        "news_group": 295
    },
    {
        "news_id": "dw_a71590013",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Ghana f\u00f6rblir i stort sett oskadd av jihadistattacker, trots sin n\u00e4rhet till Burkina Faso, som har st\u00e5tt inf\u00f6r betydande terroristhot. Analytiker varnar f\u00f6r att ghananer, s\u00e4rskilt arbetsl\u00f6sa ungdomar, riskerar att rekryteras av jihadistgrupper, ofta genom familjeband \u00f6ver gr\u00e4nsen.",
        "news_epoch": 1739447580.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/why-ghana-faces-a-growing-jihadist-threat/a-71590013",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Why Ghana faces a growing jihadist threat",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_a874811501ef",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "En resultatkontroll skickas till Information Officer - finns det nyheter om att s\u00e4lja aff\u00e4rer?",
        "news_epoch": 1739446860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/4443dc71-62d3-4303-bf56-51d8f4b3a3e4",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Tietoevrylle povataan tuloslaskua \u2013 kuuluuko liiketoiminnan myymisest\u00e4 uutisia?",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_99e6b14f5ccb",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Neste och Qt Group upplevde betydande sv\u00e4ngningar i sina resultat bland de st\u00f6rsta f\u00f6retagen p\u00e5 Helsingforsb\u00f6rsen, som har en aktiv handelsdag.",
        "news_epoch": 1739443860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/31666766-48f6-46fa-b3db-da202111bd84",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Helsingin p\u00f6rssin isoimmista yhti\u00f6ist\u00e4 Neste ja Qt Group kokivat rajuimmat liikkeet tulosruuhkassa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_2f4c7e9973c2",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Merus Power kommer att informera om elf\u00f6rvaringsordern.",
        "news_epoch": 1739442360.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/4a9c9110-d306-489c-b4bb-46be9f56fd10",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_1ab380784267",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Excel Composites f\u00f6rv\u00e4ntas f\u00f6rb\u00e4ttras j\u00e4mf\u00f6rt med en l\u00e5ngsam j\u00e4mf\u00f6relseperiod. F\u00f6retaget kommer att publicera en aff\u00e4rs\u00f6versikt f\u00f6r oktober-december p\u00e5 fredag.",
        "news_epoch": 1739441820.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/5c8ff9ee-8155-4b7a-a6bb-2d9ef64a851d",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Excel Compositesin tuloksen odotetaan kohentuneen vaisusta vertailukaudesta",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_69c637fd4e2d",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Wulff k\u00f6per en majoritet i Convido f\u00f6r mindre \u00e4n en miljon euro, med m\u00e5let att st\u00e4rka sin position p\u00e5 den finska redovisningsmarknaden.",
        "news_epoch": 1739441460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/ba526100-69dc-4689-a92c-fe738d8a7fb3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Wulff ostaa enemmist\u00f6n Convidosta \u2013 Kauppahinta vajaa miljoona euroa",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx2k1321nedo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Fusionsf\u00f6rhandlingarna mellan Honda och Nissan har kollapsat p\u00e5 grund av oenigheter om partnerskapets struktur. Den f\u00f6reslagna fusionen syftade till att skapa en bilgrupp v\u00e4rd 60 miljarder dollar f\u00f6r att konkurrera med rivaler, s\u00e4rskilt i Kina.",
        "news_epoch": 1739441160.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2k1321nedo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Honda-Nissan multi-billion dollar merger collapses",
        "news_group": -1
    },
    {
        "news_id": "dw_a71530790",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Portugal, Italien, Spanien och Grekland, som en g\u00e5ng ans\u00e5gs vara EU:s problembarn, har visat stark tillv\u00e4xt, s\u00e4rskilt inom f\u00f6rnybar energi, medan den \u00f6vergripande eurozonen st\u00e5r stilla, fr\u00e4mst p\u00e5 grund av Tysklands problem.",
        "news_epoch": 1739440980.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/why-europe-s-southern-periphery-props-up-eurozone-growth/a-71530790",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Why Europe&#x27;s southern periphery props up eurozone growth",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_6060f06074c2",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Analytiker f\u00f6rv\u00e4ntar sig l\u00e5ngsamma r\u00f6relser fr\u00e5n ryktet, med en liten nedg\u00e5ng i utdelningen.",
        "news_epoch": 1739439660.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/8ba35bcc-1706-4553-a76a-996a459db11e",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Huhtam\u00e4elt\u00e4 odotetaan hitaita liikkeit\u00e4 kohti parempaa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_82c210c6a8b3",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Heikki Malinens recept i Outokumpu beh\u00f6ver en ny ber\u00e4ttelse n\u00e4r Nestes resultatrapport besvikar investerare. VD Heikki Malinen har mycket att g\u00f6ra, och tidsplanen f\u00f6r omvandlingen av Porvoo-raffinaderiet \u00e4r nu i fara, skriver b\u00f6rsredakt\u00f6r Silva Rehn.",
        "news_epoch": 1739439300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/f0d60cc9-84c9-4f43-ac5c-d295b8c17846",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Neste tarvitsee uuden tarinan \u2013 Heikki Malinen k\u00e4ytti samaa resepti\u00e4 Outokummussa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_a9071e0f84ed",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Den likvida aktien forts\u00e4tter att sjunka, vilket analytikern anser vara den st\u00f6rsta \u00f6verraskningen. Den negativa trenden f\u00f6rv\u00e4ntas best\u00e5, vilket leder till pessimism, men n\u00e5gra f\u00f6r\u00e4ndringar i strategin anses inte n\u00f6dv\u00e4ndiga.",
        "news_epoch": 1739438340.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/99c388de-c130-40e5-a1eb-8d23b4da933e",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Nesteen osake jatkaa p\u00f6rssiluisua \u2013 T\u00e4m\u00e4 oli analyytikon mielest\u00e4 suurin yll\u00e4tys",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143548",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Pensionsbolaget Ilmarinens investeringar gav 8,6 procent",
        "news_epoch": 1739438280.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143548",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "El\u00e4keyhti\u00f6 Ilmarisen sijoitukset tuottivat 8,6 prosenttia",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_6413a4e31bed",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Bostadsportf\u00f6lj lanserar eget aktiek\u00f6psprogram",
        "news_epoch": 1739438220.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/26fd0614-eb69-4a12-83cd-92be1f0bc2b9",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Asuntosalkku k\u00e4ynnist\u00e4\u00e4 omien osakkeiden osto-ohjelman",
        "news_group": -1
    },
    {
        "news_id": "bbc_cqldw5y4y0no",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "TikToks framtid i USA \u00e4r os\u00e4ker, vilket har lett till att m\u00e5nga sidladdar appen p\u00e5 grund av restriktioner fr\u00e5n Apple och Google. Anv\u00e4ndare v\u00e4nder sig till tredjepartswebbplatser och VPN:er f\u00f6r att f\u00e5 tillg\u00e5ng till TikTok, med betydande \u00f6kningar av nedladdningar rapporterade.",
        "news_epoch": 1739436720.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cqldw5y4y0no",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Unofficial TikTok downloads surge in the US",
        "news_group": 296
    },
    {
        "news_id": "dw_a71589236",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Ett forskarteam har uppt\u00e4ckt att den norra delen av Irak, s\u00e4rskilt runt Zagrosbergen, sjunker p\u00e5 grund av en oceanisk platta under jordens yta. Denna geologiska process, som drivs av tektoniska plattor, sker \u00f6ver miljontals \u00e5r och \u00e4r inte omedelbart m\u00e4rkbar.",
        "news_epoch": 1739436300.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.dw.com/en/this-iraq-region-is-sinking-into-the-earth-very-slowly/a-71589236",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "This Iraq region is sinking into the Earth (very slowly)",
        "news_group": -1
    },
    {
        "news_id": "bbc_c1jg4enkr3lo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Den brittiska ekonomin v\u00e4xte med 0,1 % under det sista kvartalet av f\u00f6reg\u00e5ende \u00e5r, drivet av bygg- och tj\u00e4nstesektorerna, trots f\u00f6ruts\u00e4gelser om nedg\u00e5ng. Levnadsstandarden sj\u00f6nk n\u00e5got j\u00e4mf\u00f6rt med 2023.",
        "news_epoch": 1739435700.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c1jg4enkr3lo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Surprise growth in UK economy at end of 2024",
        "news_group": -1
    },
    {
        "news_id": "dw_a71590938",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "En grupp p\u00e5 288 rum\u00e4nska legosoldater, ledda av Horatiu Potra, \u00e5terv\u00e4nde fr\u00e5n konfliktomr\u00e5det i Demokratiska republiken Kongo, d\u00e4r m\u00e5nga f\u00e5ngades av M23-milisen.",
        "news_epoch": 1739434980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/romania-drc-who-is-mercenary-leader-horatiu-potra/a-71590938",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Romania, DRC: Who is mercenary leader Horatiu Potra?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143520",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Keva gjorde en 10,4% avkastning p\u00e5 investeringar",
        "news_epoch": 1739432760.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143520",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Keva teki sijoituksillaan 10,4 prosentin tuoton",
        "news_group": -1
    },
    {
        "news_id": "dw_a71591784",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "En explosion vid Afghanistans ministerium f\u00f6r stadsutveckling och bost\u00e4der d\u00f6dade en och skadade tre. En man f\u00f6rs\u00f6kte utf\u00f6ra en attack men sk\u00f6ts av vakterna innan han n\u00e5dde sitt m\u00e5l.",
        "news_epoch": 1739432160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/afghanistan-apparent-suicide-blast-targets-ministry-complex/a-71591784",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Afghanistan: Apparent suicide blast targets ministry complex",
        "news_group": 299
    },
    {
        "news_id": "yle_7420143495",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Metso&#x27;s oms\u00e4ttning minskade med fem procent, men orderboken \u00f6kade med 13 procent fr\u00e5n oktober till december. Nettof\u00f6rs\u00e4ljningen minskade till 1,27 miljarder euro, och justerad r\u00f6relseresultat sj\u00f6nk fr\u00e5n 225 miljoner euro f\u00f6rra \u00e5ret.",
        "news_epoch": 1739429340.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143495",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Metso paransi tilauskantaansa, mutta liikevaihto laski",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143483",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Kommitt\u00e9ns ordf\u00f6rande skiljer sig fr\u00e5n bolagets styrelse",
        "news_epoch": 1739427600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143483",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Nesteen tarkastus\u00advaliokunnan puheenjohtaja eroaa yhti\u00f6n hallituksesta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143475",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "S-gruppens operativa resultat \u00f6kade brisk",
        "news_epoch": 1739426280.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143475",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "S-ryhm\u00e4n liiketulos kasvoi reippaasti",
        "news_group": -1
    },
    {
        "news_id": "dw_a71579645",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Commerzbank f\u00f6rbereder sig f\u00f6r att sk\u00e4ra ner cirka 3,900 jobb, eller 10% av sin arbetsstyrka, till 2028 i sin str\u00e4van att f\u00f6rbli oberoende mitt under uppvaktningar fr\u00e5n UniCredit.",
        "news_epoch": 1739425800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/commerzbank-plans-job-cuts-new-goals-to-fend-off-unicredit/a-71579645",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Commerzbank plans job cuts, new goals to fend off UniCredit",
        "news_group": -1
    },
    {
        "news_id": "dw_a71590288",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Nordkorea river en anl\u00e4ggning vid Mount Kumgang-resorten som anv\u00e4nds f\u00f6r familjereunions mellan de som separerades efter Koreakriget. Sydkorea f\u00f6rd\u00f6mde denna handling som inhuman och uppmanade till ett omedelbart stopp, och betonade att Nordkorea m\u00e5ste ta ansvar.",
        "news_epoch": 1739420040.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/n-korea-destroys-meeting-place-for-war-separated-families/a-71590288",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "N. Korea destroys meeting place for war-separated families",
        "news_group": -1
    }
];