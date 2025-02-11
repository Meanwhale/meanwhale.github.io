const articles = [
    {
        "news_id": "arvopaperi_3cf8d8664496",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Musti Group reports increased turnover but decreased profits for the last quarter of its extended financial year.",
        "news_epoch": 1739249940.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/1b96f2d7-7108-4b05-844d-fc92de097ff3",
        "news_original_title": "Mustin vuosi p\u00e4\u00e4ttyi mahalaskuun",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_3d0fd579494c",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Stora Enso&#x27;s performance improved in Q4 2024, with turnover of EUR 2,322 million and an adjusted operating result of EUR 121 million. The company plans to pay a dividend of EUR 0.25 per share in 2025.",
        "news_epoch": 1739249460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/df0a1d74-c398-4a0f-a32d-3fbd579e7724",
        "news_original_title": "Stora Enson tulos l\u00e4helle ennusteita \u2013 Osinko nousee",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_f7724f307553",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Kemira reported a turnover increase in Q4, but operating margin decreased due to maintenance stoppages. The Board proposed a dividend of EUR 0.74 per share.",
        "news_epoch": 1739249220.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/30734a6a-bc1c-4a5e-b4c3-c498ea335f60",
        "news_original_title": "Kemiran kannattavuuteen kolhu\u2013 Osinko nousee yli odotusten",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_e544bbc8fd45",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Teleste reported a positive turnaround in Q4 2024 with a 19% increase in telecommunications turnover, reaching EUR 36.5 million, and an adjusted operating result of EUR 0.8 million.",
        "news_epoch": 1739248980.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/b4d481c6-1bbd-4fdf-80b5-7e67bcf4328c",
        "news_original_title": "Telestelt\u00e4 pirte\u00e4t luvut loppuvuodelta \u2013 Yhti\u00f6lt\u00e4 kasvuohjeistus ja osinkoyll\u00e4tys",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_b3985ec1f8b0",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Sanoma reported a seasonal operational loss for Q4 2023, with net sales of EUR 253.4 million and an operating loss of EUR 27.0 million. The company aims for improved profitability through its Solar program.",
        "news_epoch": 1739248680.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/2c859370-8d91-4bb2-84d1-77b27847422b",
        "news_original_title": "Sanoman ohjeistus ylsi analyytikoiden ennusteisiin",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_695a0137e55b",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Wicked Megacorp reported a revised EBita operating result of EUR 0.1 million for Q4, down from EUR 0.4 million the previous year, with a margin of 0.6%. Despite a drop in turnover, the company aims for improved profitability in 2024.",
        "news_epoch": 1739247540.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/fae26dcd-08ab-40d5-839c-8b62ad34a209",
        "news_original_title": "Witted Megacorpin loppuvuoden tulos laski, mutta koko vuonna saatiin kannattavuusk\u00e4\u00e4nne \u2013 Osinkoa luvassa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142870",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Lithuanian Foreign Minister Kestutis Budrys is visiting Finland to discuss bilateral relations and support for Ukraine.",
        "news_epoch": 1739247120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142870",
        "news_original_title": "Liettuan uusi ulkoministeri vierailulla Suomessa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_da9229045689",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Sykli k\u00e4\u00e4ntym\u00e4ss\u00e4? \u2013 Jorma J. Nieminen tankkasi teollisuutta, Nordeaa ulos",
        "news_epoch": 1739246400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/b10f8486-c4ff-406c-9e0d-07034ee4e273",
        "news_original_title": "Sykli k\u00e4\u00e4ntym\u00e4ss\u00e4? \u2013 Jorma J. Nieminen tankkasi teollisuutta, Nordeaa ulos",
        "news_group": 178
    },
    {
        "news_id": "yle_7420142860",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump suggests Ukraine might become Russian in the future.",
        "news_epoch": 1739243640.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142860",
        "news_original_title": "Trump: \u201dUkraina voi olla jonain p\u00e4iv\u00e4n\u00e4 ven\u00e4l\u00e4inen\u201d",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_0a52d8738422",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Oslon p\u00f6rssi on halpa \u2013 T\u00e4ss\u00e4 Pohjoismaiden tuoreet tulosennusteet",
        "news_epoch": 1739242800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/0c628d5e-9158-47b6-97c1-9f9237ef6fcd",
        "news_original_title": "Oslon p\u00f6rssi on halpa \u2013 T\u00e4ss\u00e4 Pohjoismaiden tuoreet tulosennusteet",
        "news_group": 178
    },
    {
        "news_id": "bbc_c4gwjy18v4go",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "A teacher fatally stabbed an eight-year-old girl at a South Korean elementary school, shocking the nation.",
        "news_epoch": 1739240340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4gwjy18v4go",
        "news_original_title": "Teacher fatally stabs eight-year-old in South Korea",
        "news_group": -1
    },
    {
        "news_id": "yle_7420140557",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A Danish study shows that women who have children during their studies earn higher salaries later compared to those who have children after starting work.",
        "news_epoch": 1739239800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20140557",
        "news_original_title": "Tanskalais\u00adtutkijat suosittavat perheen perustamista opiskelijana \u2013 osa \u00e4ideist\u00e4 sai nelikymppisen\u00e4 parempaa palkkaa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142853",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Fort Liberty military base is to be renamed back to Fort Bragg by Secretary of Defense Pete Hegseth.",
        "news_epoch": 1739239380.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142853",
        "news_original_title": "USA:n puolustusministeri palautti Fort Braggin sotilastukikohdan nimen entiselleen",
        "news_group": -1
    },
    {
        "news_id": "yle_7420139888",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finland faces challenges in ensuring sanctions against Russian fertilizer companies are upheld, as record profits flow to the Kremlin.",
        "news_epoch": 1739238900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20139888",
        "news_original_title": "Suomeen virtaa lannoitteita Ven\u00e4j\u00e4lt\u00e4, koska mik\u00e4\u00e4n ei sit\u00e4 est\u00e4 \u2013 kaiken keski\u00f6ss\u00e4 on Kotka",
        "news_group": -1
    },
    {
        "news_id": "bbc_c360dz384n5o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "President Trump has imposed a 25% import tax on steel and aluminum to boost domestic production, despite potential retaliation from Canada and concerns from US businesses.",
        "news_epoch": 1739238600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c360dz384n5o",
        "news_original_title": "Trump announces 25% tariffs on all steel and aluminium imports",
        "news_group": 186
    },
    {
        "news_id": "yle_7420142849",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Russia has not informed Finland about the transfer of the Kola oil tanker, which must be moved within three months.",
        "news_epoch": 1739237880.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142849",
        "news_original_title": "Ven\u00e4l\u00e4ismediat: Koala-\u00f6ljytankkerin varustamolla kolme kuukautta aikaa siirt\u00e4\u00e4 alus",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx25m165y44o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The US justice department has instructed prosecutors to drop the corruption case against NYC Mayor Eric Adams, citing potential impacts on the upcoming election.",
        "news_epoch": 1739235420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx25m165y44o",
        "news_original_title": "Prosecutors told to drop NYC mayor corruption case",
        "news_group": -1
    },
    {
        "news_id": "bbc_cpdx3wj9dp2o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Three Ghanaians shared their experiences fighting alongside insurgents in Burkina Faso, describing violence and personal motivations tied to family and ethnic ties rather than religion.",
        "news_epoch": 1739232900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cpdx3wj9dp2o",
        "news_original_title": "Why some Ghanaians are fighting in insurgency-hit Burkina Faso",
        "news_group": -1
    },
    {
        "news_id": "bbc_cd649p8yq16o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hamas has delayed the release of hostages, citing a need for mediators to pressure Israel. The group raises complaints about humanitarian issues and fears of Palestinian expulsion, exacerbated by Trump&#x27;s comments.",
        "news_epoch": 1739232120.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cd649p8yq16o",
        "news_original_title": "Paul Adams: Why the Gaza ceasefire is under growing strain",
        "news_group": 194
    },
    {
        "news_id": "bbc_c2k574ydyyqo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Trump signs order reversing Biden&#x27;s plastic straw replacement initiative, citing paper straws&#x27; ineffectiveness.",
        "news_epoch": 1739231520.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c2k574ydyyqo",
        "news_original_title": "Trump signs order shifting US back toward plastic straws",
        "news_group": -1
    },
    {
        "news_id": "bbc_czepx5n3581o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Eden Knight, a Saudi trans woman, took her life after being persuaded to return to Saudi Arabia by a lawyer linked to her family, despite seeking asylum in the US.",
        "news_epoch": 1739230500.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/czepx5n3581o",
        "news_original_title": "Lawyer in Saudi trans student&#x27;s suicide note had embassy links, BBC finds",
        "news_group": -1
    },
    {
        "news_id": "bbc_cn0yn7yyrd2o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Monticello Dam&#x27;s spillway activated for the first time since 2019 due to high water levels; several incidents including a plane crash and a military helicopter collision reported.",
        "news_epoch": 1739229240.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/cn0yn7yyrd2o",
        "news_original_title": "Plughole-like dam creates mesmerising water display",
        "news_group": -1
    },
    {
        "news_id": "dw_a71566523",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Two private jets collided at Scottsdale Airport in Arizona, resulting in at least one death and several injuries.",
        "news_epoch": 1739229180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/us-private-jet-collision-in-scottsdale-arizona-kills-1/a-71566523",
        "news_original_title": "US: Private jet collision in Scottsdale, Arizona, kills 1",
        "news_group": -1
    },
    {
        "news_id": "bbc_clyzp7j84yro",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "President Trump&#x27;s tariffs aim to protect American industries and raise revenue, but may lead to higher consumer prices and economic burdens on low-income individuals.",
        "news_epoch": 1739228700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/clyzp7j84yro",
        "news_original_title": "The Debate: Do Trump&#x27;s tariffs mean the end of the post-war free trade world?",
        "news_group": 186
    },
    {
        "news_id": "bbc_c5ye69ey4pyo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hamas postpones the release of Israeli hostages, citing Israeli ceasefire violations, as tensions rise between the two sides.",
        "news_epoch": 1739227860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c5ye69ey4pyo",
        "news_original_title": "Hamas says it will postpone hostage release, blaming Israel",
        "news_group": -1
    },
    {
        "news_id": "bbc_c5yv98r4d4eo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Doctors advise caution with menstrual cups after a user experienced kidney issues due to misalignment.",
        "news_epoch": 1739226900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c5yv98r4d4eo",
        "news_original_title": "Beware ill-fitting menstrual cups, warn doctors",
        "news_group": -1
    },
    {
        "news_id": "bbc_c23v3kxknrno",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Samuel Weidenhofer, who faced mental health struggles, turned to social media to spread kindness, gaining millions of followers. Kindness content creators are popular but face criticism for their methods.",
        "news_epoch": 1739226660.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c23v3kxknrno",
        "news_original_title": "Why do kindness influencers get criticised?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142846",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump has signed an executive order for 25% tariffs on steel and aluminum, considering additional tariffs on cars, medicines, and computer chips.",
        "news_epoch": 1739225280.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142846",
        "news_original_title": "Trump allekirjoitti m\u00e4\u00e4r\u00e4yksen tuontitulleista ter\u00e4kselle ja alumiinille",
        "news_group": 186
    },
    {
        "news_id": "yle_7420142845",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A federal judge has halted Trump&#x27;s administration&#x27;s plan to encourage federal workers to resign with severance pay.",
        "news_epoch": 1739224920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142845",
        "news_original_title": "Tuomari j\u00e4\u00e4dytti Trumpin hallinnon pyrkimykset houkutella liittovaltion ty\u00f6ntekij\u00e4t irtisanoutumaan",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142844",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump warns of ending ceasefire if hostages are not released.",
        "news_epoch": 1739223300.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142844",
        "news_original_title": "Trump: Aselevon pit\u00e4isi p\u00e4\u00e4tty\u00e4 lauantaina, jos kaikkia Gazassa olevia panttivankeja ei vapauteta",
        "news_group": -1
    },
    {
        "news_id": "bbc_cpdx75zgg88o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Elon Musk&#x27;s consortium offered $97.4bn to acquire OpenAI, amid tensions with CEO Sam Altman over the company&#x27;s direction.",
        "news_epoch": 1739222040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cpdx75zgg88o",
        "news_original_title": "Musk-led group makes $97.4bn bid for ChatGPT maker OpenAI",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142843",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump threatens to suspend aid to Egypt and Jordan over Palestinian acceptance.",
        "news_epoch": 1739221020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142843",
        "news_original_title": "Egypti toisti puolustavansa palestiinalaisten oikeutta j\u00e4\u00e4d\u00e4 Gazan kaistalle",
        "news_group": -1
    },
    {
        "news_id": "bbc_cy485dz15qyo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Santorini experienced a 5.3 magnitude earthquake, the strongest in recent seismic activity, prompting alerts and safety measures.",
        "news_epoch": 1739219880.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cy485dz15qyo",
        "news_original_title": "Tremors hitting Santorini reach new strength",
        "news_group": -1
    },
    {
        "news_id": "bbc_cwypjx53n4go",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Austrian police issued an arrest warrant for a woman posing as a shaman to defraud victims of over 10 million euros.",
        "news_epoch": 1739219340.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cwypjx53n4go",
        "news_original_title": "Austrian police search for &#x27;shaman fraudster&#x27; suspect",
        "news_group": -1
    },
    {
        "news_id": "bbc_c8xq70lw8kvo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Neha and Akshay, Indian engineers in the US, face uncertainty about their child&#x27;s citizenship due to a potential change in US law regarding birthright citizenship for children of temporary foreign workers.",
        "news_epoch": 1739218020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c8xq70lw8kvo",
        "news_original_title": "Trump&#x27;s citizenship order leaves expecting Indian immigrant parents in limbo",
        "news_group": -1
    },
    {
        "news_id": "bbc_cn4mnznmwlvo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Ecuador&#x27;s presidential election will go to a second round after a tight first round, with incumbent Daniel Noboa and challenger Luisa Gonz\u00e1lez nearly tied in votes.",
        "news_epoch": 1739217840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cn4mnznmwlvo",
        "news_original_title": "Ecuador election ends in a &#x27;tie&#x27; prompting run-off",
        "news_group": 189
    },
    {
        "news_id": "yle_7420142839",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Venezuela is receiving air-borne immigrants from the U.S. as part of a project to transfer thousands back, with some allegedly linked to illegal activities.",
        "news_epoch": 1739211420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142839",
        "news_original_title": "Karkotukset Yhdysvalloista Venezuelaan alkoivat \u2013 kaksi lentokoneellista siirtolaisia matkalla",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142041",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Antti Ronkainen suggests that Europe&#x27;s dependence on the US is increasing, with three options to respond to US tariffs: impose countertariffs, avoid the trade war, or yield to the US demands.",
        "news_epoch": 1739210820.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142041",
        "news_original_title": "Eurooppa vastaa Trumpin tulleihin k\u00e4ytt\u00e4ytym\u00e4ll\u00e4 kuin alamainen, arvioi politiikan tutkija",
        "news_group": -1
    },
    {
        "news_id": "dw_a71565597",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "French President Macron announced a new European AI strategy at an AI summit in Paris, emphasizing France&#x27;s commitment to AI development and investment.",
        "news_epoch": 1739209860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/macron-says-france-will-apply-notre-dame-strategy-on-ai/a-71565597",
        "news_original_title": "Macron says France will apply &#x27;Notre Dame strategy&#x27; on AI",
        "news_group": -1
    },
    {
        "news_id": "bbc_c0k5mezn62po",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Salma al-Shehab, a Saudi PhD student, has been released from prison after her sentence for social media activity was reduced from 34 years to four years.",
        "news_epoch": 1739207940.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0k5mezn62po",
        "news_original_title": "Saudi PhD student freed after being jailed over posts, activists say",
        "news_group": -1
    },
    {
        "news_id": "dw_a71564349",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Trump&#x27;s comments on Gaza focus on its real estate potential, sparking controversy and highlighting his family&#x27;s business interests in the region.",
        "news_epoch": 1739207640.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/gaza-the-trump-family-s-middle-east-business-interests/a-71564349",
        "news_original_title": "Gaza: The Trump family&#x27;s Middle East business interests",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142678",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finnish households saw minimal returns on their investments in local shares, while foreign investments performed better. The overall value of household investments increased slightly, but the Helsinki Stock Exchange&#x27;s weak performance impacted returns.",
        "news_epoch": 1739204280.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142678",
        "news_original_title": "Sijoititko suomalaisiin p\u00f6rssiyhti\u00f6ihin? Osakkeiden tuotto oli viime vuonna py\u00f6re\u00e4t nolla",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142814",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The Nord Stream pipelines face challenges, with discussions on using them for hydrogen transport amid geopolitical tensions.",
        "news_epoch": 1739204040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142814",
        "news_original_title": "Saksassa virisi yll\u00e4tt\u00e4v\u00e4 idea: Nord Stream -putkeen vety\u00e4 Suomesta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142829",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The EU aims to regulate AI in a way that encourages innovation and investment while reducing bureaucracy.",
        "news_epoch": 1739203140.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142829",
        "news_original_title": "Digikomissaari Virkkunen: EU:ssa on liikaa p\u00e4\u00e4llekk\u00e4ist\u00e4 digis\u00e4\u00e4ntely\u00e4",
        "news_group": -1
    },
    {
        "news_id": "bbc_czx8qkdvqjwo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Ten endangered flamingos were rescued from smugglers in Tunisia and returned to their habitat.",
        "news_epoch": 1739201100.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/czx8qkdvqjwo",
        "news_original_title": "Pink flamingos &#x27;seized from smugglers&#x27; in Tunisia",
        "news_group": -1
    },
    {
        "news_id": "dw_a71564691",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "A bus accident in Guatemala City resulted in at least 51 deaths after the vehicle fell off a bridge into a ravine.",
        "news_epoch": 1739198640.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/guatemala-bus-plunges-into-ravine-killing-at-least-50/a-71564691",
        "news_original_title": "Guatemala: Bus plunges into ravine, killing at least 50",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_f2a40b595d15",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "The Helsinki Stock Exchange rose by 0.44%, with Nokia&#x27;s shares increasing by 0.7%. CEO Pekka Lundmark will leave, and Justin Hotard will take over in 2025. Other companies like Machine and Fortum also saw gains, while Sampo and Stora Enso fell. Oma Savings Bank reported stronger results but faced investigations.",
        "news_epoch": 1739198520.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/96110f4e-d330-42c5-b916-be973bf389ef",
        "news_original_title": "Helsingin p\u00f6rssiss\u00e4 nousup\u00e4iv\u00e4 \u2013 Nokian osake p\u00e4iv\u00e4n vaihdetuin",
        "news_group": 185
    },
    {
        "news_id": "bbc_c9qj9yrn5lyo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Senamile Masango, South Africa&#x27;s first black female nuclear scientist, has died at 37, leaving behind a legacy of inspiring young women in science.",
        "news_epoch": 1739198160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c9qj9yrn5lyo",
        "news_original_title": "South Africa mourns pioneering female nuclear scientist",
        "news_group": -1
    },
    {
        "news_id": "yle_7420140603",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Experts debate the causes of doctor shortages in Finland, with suggestions for increasing training places and addressing inequalities in healthcare access.",
        "news_epoch": 1739198040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20140603",
        "news_original_title": "Onko \u201dl\u00e4\u00e4k\u00e4ripula\u201d totta vai myytti, jonka takana sote-kriisi myllert\u00e4\u00e4? Asiantuntijat kerovat, mist\u00e4 on kyse",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142817",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finnair has not cancelled flights to Brussels yet, but the airport has cancelled all flights due to a national strike affecting both departures and arrivals.",
        "news_epoch": 1739197680.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142817",
        "news_original_title": "Brysselin lentoasema perui kaikki torstaina l\u00e4htev\u00e4t lennot",
        "news_group": -1
    },
    {
        "news_id": "bbc_c4gx37ky3gyo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Scientists suggest Earth&#x27;s inner core may have changed shape over the past 20 years, potentially affecting the planet&#x27;s magnetic field.",
        "news_epoch": 1739196660.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4gx37ky3gyo",
        "news_original_title": "Earth&#x27;s inner core may have changed shape, say scientists",
        "news_group": -1
    },
    {
        "news_id": "bbc_c3w805xjg1xo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Romania&#x27;s President Klaus Iohannis resigned before an impeachment vote related to the annulment of last year&#x27;s presidential election, amid widespread protests.",
        "news_epoch": 1739196660.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c3w805xjg1xo",
        "news_original_title": "Romania president resigns after impeachment pressure over cancelled vote",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142812",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Hamas delays hostage return, blaming Israel for treaty violations.",
        "news_epoch": 1739196660.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142812",
        "news_original_title": "Hamas: Ensi lauantaina ei vapauteta panttivankeja",
        "news_group": 194
    },
    {
        "news_id": "sn_6184486f40e6",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "A newly discovered fungus, Gibellula attenboroughii, transforms cave spiders into zombies, influencing their behavior to aid in spore dispersal.",
        "news_epoch": 1739196000.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/fungus-attenborough-zombie-cave-spiders",
        "news_original_title": "A fungus named after Sir David Attenborough zombifies cave spiders",
        "news_group": -1
    },
    {
        "news_id": "bbc_cp3w6dkwkq9o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The trial of Hadi Matar, accused of stabbing author Salman Rushdie, began in New York. Rushdie was attacked in 2022, leaving him with severe injuries.",
        "news_epoch": 1739195100.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cp3w6dkwkq9o",
        "news_original_title": "What to know about the Salman Rushdie stabbing trial",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c6652d3bbccd",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Merck &amp; Co Inc&#x27;s Director bought $1.3 million worth of shares, indicating confidence in the company&#x27;s future.",
        "news_epoch": 1739194020.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/grab-bargain-even-cheaper-director-baker-jr-did",
        "news_original_title": "Grab This Bargain Even Cheaper Than Director Baker Jr. Did",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142637",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The EU may avoid customs duties through negotiations with the US, according to an expert. Trump&#x27;s new import duties on steel and aluminum primarily affect Canada, Mexico, and China, with limited direct impact on Finland&#x27;s exports.",
        "news_epoch": 1739194020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142637",
        "news_original_title": "Trump asettaa kovat tullit kaikelle ter\u00e4kselle ja alumiinille \u2013 t\u00e4m\u00e4 voi hy\u00f6dytt\u00e4\u00e4 Suomen suurinta ter\u00e4svalmistajaa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142746",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Russia reports no oil damage in Laukaanu despite claims about the Koala tanker.",
        "news_epoch": 1739193960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142746",
        "news_original_title": "Ven\u00e4j\u00e4: Laukaansuun satamassa ei \u00f6ljyonnettomuutta \u2013 huhumylly miinoista ja r\u00e4j\u00e4hteist\u00e4 ei hiljenny",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a0550c433463",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Three companies will trade ex-dividend on 2/12/25, with United Rentals Inc, Tetra Tech Inc, and Willis Lease Finance Corp. declaring their upcoming dividends.",
        "news_epoch": 1739193480.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ex-dividend-reminder-united-rentals-tetra-tech-and-willis-lease-finance",
        "news_original_title": "Ex-Dividend Reminder: United Rentals, Tetra Tech and Willis Lease Finance",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_4b4444e41269",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Kenvue Inc, Nexstar Media Group Inc, and Winmark Corp will trade ex-dividend on 2/12/25, with dividends paid on 2/26/25 and 3/3/25.",
        "news_epoch": 1739193480.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ex-dividend-reminder-kenvue-nexstar-media-group-and-winmark",
        "news_original_title": "Ex-Dividend Reminder: Kenvue, Nexstar Media Group and Winmark",
        "news_group": -1
    },
    {
        "news_id": "bbc_c0rq2g0kz1lo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Sinead and her son Aziyah struggle with severe mould issues in their rented flat, which have led to health problems for Aziyah. Despite complaints to the landlord and local authorities, the situation remains unresolved, highlighting a broader issue of unsafe living conditions in rented homes across England.",
        "news_epoch": 1739193300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0rq2g0kz1lo",
        "news_original_title": "&#x27;Billionaires own my mouldy rental property&#x27;",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_68d54d4e909d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Nisun International expects a profit of $16M to $20M and revenue of $420M to $510M for FY 2025.",
        "news_epoch": 1739193240.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/nisun-intl-enterprise-announces-fy25-outlook",
        "news_original_title": "Nisun Intl Enterprise Announces FY25 Outlook",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a5676877f0a3",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "PACCAR Inc., Sensata Technologies, and Levi Strauss will trade ex-dividend soon, with specific dividend payouts and expected price changes.",
        "news_epoch": 1739193180.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ex-dividend-reminder-paccar-sensata-technologies-holding-and-levi-strauss",
        "news_original_title": "Ex-Dividend Reminder: PACCAR, Sensata Technologies Holding and Levi Strauss",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_d46243d68b56",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Target Corp, Home BancShares Inc, and BOK Financial Corp will trade ex-dividend on 2/12/25, with respective dividends of $1.12, $0.195, and $0.57.",
        "news_epoch": 1739193120.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ex-dividend-reminder-target-home-bancshares-and-bok-financial",
        "news_original_title": "Ex-Dividend Reminder: Target, Home BancShares and BOK Financial",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c6a4fff8c414",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "AROC&#x27;s dividend history suggests a potential continuation of its current yield of 2.72%.",
        "news_epoch": 1739193120.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ex-div-reminder-archrock-aroc",
        "news_original_title": "Ex-Div Reminder for Archrock (AROC)",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_79ae0414c9f5",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "JPMorgan Chase &amp; Co was held by 13 hedge funds in the latest 13F filings, indicating a potential bullish sentiment.",
        "news_epoch": 1739193060.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/see-which-latest-13f-filers-holds-jpmorgan-chase-4",
        "news_original_title": "See Which Of The Latest 13F Filers Holds JPMorgan Chase",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f8104a9ae6e6",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Varonis Systems announces a $100 million share repurchase program.",
        "news_epoch": 1739192880.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/varonis-systems-repurchase-100-mln-shares",
        "news_original_title": "Varonis Systems To Repurchase $100 MLn Shares",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_4936d01c58b7",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "OncoCyte Corp. announced a $29.1 million funding round led by major shareholders, including Bio-Rad, to support its diagnostic technology.",
        "news_epoch": 1739192640.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/oncocyte-secures-291mln-funding-led-bio-rad-advance-transplant-diagnostics-stock-down",
        "news_original_title": "Oncocyte Secures $29.1Mln Funding Led By Bio-Rad To Advance Transplant Diagnostics, Stock Down",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_1d2a197115c0",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Sandy Spring Bancorp, OneMain Holdings, and WisdomTree will trade ex-dividend on 2/12/25, with respective dividends announced.",
        "news_epoch": 1739192580.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/ex-dividend-reminder-sandy-spring-bancorp-onemain-holdings-and-wisdomtree",
        "news_original_title": "Ex-Dividend Reminder: Sandy Spring Bancorp, OneMain Holdings and WisdomTree",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142798",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Trump claims Palestinians won&#x27;t return to Gaza as he plans to own the region and relocate Gazans.",
        "news_epoch": 1739192520.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142798",
        "news_original_title": "Trump Foxille: \u201dOmistaisin Gazan\u201d \u2013 palestiinalaisilla ei olisi oikeutta palata",
        "news_group": -1
    },
    {
        "news_id": "sn_827a7bd7a14d",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Jon Nelson, a father and husband, volunteers for an experimental deep brain stimulation treatment for severe depression after years of suffering.",
        "news_epoch": 1739192400.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/brain-implants-depression",
        "news_original_title": "A man volunteered to get brain implants for depression. Hear his story",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_0add2763cdef",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "JD.COM INC (ADR) scores highest in Validea&#x27;s Price/Sales Investor model, indicating strong fundamentals and valuation.",
        "news_epoch": 1739192400.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/validea-detailed-fundamental-analysis-jd-31",
        "news_original_title": "Validea Detailed Fundamental Analysis - JD",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_9bfb85a98980",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Cheniere Energy Inc (LNG) is highly rated by Validea&#x27;s Twin Momentum Investor model, scoring 94% based on its fundamentals and valuation.",
        "news_epoch": 1739192400.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/validea-detailed-fundamental-analysis-lng-0",
        "news_original_title": "Validea Detailed Fundamental Analysis - LNG",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_5b85b7c6ffca",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "AstraZeneca PLC (ADR) (AZN) has received an 87% rating using the P/E/Growth Investor model based on Peter Lynch&#x27;s strategy, indicating strong interest due to its solid fundamentals and valuation. This model evaluates stocks based on their price relative to earnings growth and balance sheet strength.",
        "news_epoch": 1739192400.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/peter-lynch-detailed-fundamental-analysis-azn-18",
        "news_original_title": "Peter Lynch Detailed Fundamental Analysis - AZN",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f99c44056d74",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "CHTR is rated highest by Validea&#x27;s Multi-Factor Investor model, indicating strong fundamentals and valuation.",
        "news_epoch": 1739192400.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/validea-detailed-fundamental-analysis-chtr-50",
        "news_original_title": "Validea Detailed Fundamental Analysis - CHTR",
        "news_group": -1
    },
    {
        "news_id": "dw_a71535413",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "African leaders called for a ceasefire in the DRC amid ongoing conflict involving Rwandan troops and the M23 rebel group, with international responses being criticized as insufficient.",
        "news_epoch": 1739192400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/war-in-eastern-congo-escalates-amid-international-hesitancy/a-71535413",
        "news_original_title": "War in eastern Congo escalates amid international hesitancy",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_e7058c7d9514",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "OP:n Henri Parkkinen alkavasta tulosviikosta: \u201dNesteen ja Kempowerin osalta paljon liikkuvia osia\u201d",
        "news_epoch": 1739191740.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/30c0f931-281f-4bcc-8b08-84c22158b4a5",
        "news_original_title": "OP:n Henri Parkkinen alkavasta tulosviikosta: \u201dNesteen ja Kempowerin osalta paljon liikkuvia osia\u201d",
        "news_group": 178
    },
    {
        "news_id": "arvopaperi_6c6dfabdf834",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "US stock markets rose on Monday following Trump&#x27;s announcement of new import duties on aluminium and steel.",
        "news_epoch": 1739191320.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/93798483-44d3-40dc-a6e7-7af900c2d35e",
        "news_original_title": "Ter\u00e4syhti\u00f6t nousussa Yhdysvaltain p\u00f6rsseiss\u00e4",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_f77e38ba42e3",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "McDonald&#x27;s reported a slight revenue decline and stable EPS for Q4 2024.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mcdonalds-mcd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, McDonald&#x27;s (MCD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 182
    },
    {
        "news_id": "nasdaq_45ceaa69aa4c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Wall Street analysts&#x27; recommendations influence stock decisions, but their reliability is questionable, especially for Energy Fuels (UUUU), which has a current average brokerage recommendation of 1.75.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/brokers-suggest-investing-energy-fuels-uuuu-read-placing-bet-0",
        "news_original_title": "Brokers Suggest Investing in Energy Fuels (UUUU): Read This Before Placing a Bet",
        "news_group": 183
    },
    {
        "news_id": "nasdaq_c36cc0ee8b12",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Wall Street analysts recommend Celsius Holdings Inc. (CELH) as a Strong Buy, but investors should be cautious as brokerage recommendations may not always reflect true stock potential.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/wall-street-bulls-look-optimistic-about-celsius-celh-should-you-buy-0",
        "news_original_title": "Wall Street Bulls Look Optimistic About Celsius (CELH): Should You Buy?",
        "news_group": 183
    },
    {
        "news_id": "nasdaq_7d7de6008af4",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Investors often rely on analyst recommendations, but their reliability is questionable. CVS Health has a favorable average brokerage recommendation, yet caution is advised due to potential biases.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/cvs-health-cvs-considered-good-investment-brokers-true-0",
        "news_original_title": "CVS Health (CVS) Is Considered a Good Investment by Brokers: Is That True?",
        "news_group": 183
    },
    {
        "news_id": "nasdaq_aa6dd822bc9b",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Incyte reported a 16.3% revenue increase to $1.18 billion for Q4 2024, with an EPS of $1.43.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/incyte-incy-reports-q4-earnings-what-key-metrics-have-say",
        "news_original_title": "Incyte (INCY) Reports Q4 Earnings: What Key Metrics Have to Say",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_e6b1ae7372ac",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Analyst recommendations can influence stock prices, but their reliability is questionable. Novo Nordisk has a strong buy recommendation, yet caution is advised due to potential biases in brokerage ratings.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/it-worth-investing-novo-nordisk-nvo-based-wall-streets-bullish-views-1",
        "news_original_title": "Is It Worth Investing in Novo Nordisk (NVO) Based on Wall Street&#x27;s Bullish Views?",
        "news_group": 183
    },
    {
        "news_id": "yle_7420142783",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "An installation error at the Naantali power plant led to the incorrect channeling of waste water into the toilet drain, affecting both domestic and industrial waste for nine years.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142783",
        "news_original_title": "Voimalaitos johdatti j\u00e4tevesi\u00e4 hulevesiviem\u00e4riin 9 vuotta Naantalissa \u2013 asennusvirhe paljastui nyt",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a4282c6f65ed",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "ON Semiconductor Corp. reported a 14.7% decline in revenue for Q4 2024, with EPS at $0.95, missing estimates.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-semiconductor-corp-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, ON Semiconductor Corp. (ON) Q4 Earnings: A Look at Key Metrics",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_145e8d5beacb",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Wall Street analysts recommend Netflix as a strong buy, but investors should be cautious and validate their own research.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/wall-street-analysts-see-netflix-nflx-buy-should-you-invest",
        "news_original_title": "Wall Street Analysts See Netflix (NFLX) as a Buy: Should You Invest?",
        "news_group": 183
    },
    {
        "news_id": "nasdaq_5a767361c9ee",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Wall Street analysts&#x27; recommendations impact stock prices, but their reliability is questionable. Disney has a strong average brokerage recommendation, yet investors should not rely solely on it.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/it-worth-investing-disney-dis-based-wall-streets-bullish-views-0",
        "news_original_title": "Is It Worth Investing in Disney (DIS) Based on Wall Street&#x27;s Bullish Views?",
        "news_group": 183
    },
    {
        "news_id": "nasdaq_d7cdd8c63164",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Investors often rely on analyst recommendations, but their reliability is questionable. Wells Fargo has a strong average brokerage recommendation, yet investors should validate this with other tools like Zacks Rank.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/wells-fargo-wfc-buy-wall-street-analysts-look-optimistic",
        "news_original_title": "Is Wells Fargo (WFC) a Buy as Wall Street Analysts Look Optimistic?",
        "news_group": 183
    },
    {
        "news_id": "nasdaq_5e21857001e8",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Wall Street analysts recommend Walmart as a strong buy, but investors should be cautious and validate these recommendations with other tools like Zacks Rank.",
        "news_epoch": 1739190600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/brokers-suggest-investing-walmart-wmt-read-placing-bet-0",
        "news_original_title": "Brokers Suggest Investing in Walmart (WMT): Read This Before Placing a Bet",
        "news_group": 183
    },
    {
        "news_id": "yle_7420142784",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Senate Democrats have launched a portal for reporting irregularities and abuse of power.",
        "news_epoch": 1739189760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142784",
        "news_original_title": "Yhdysvalloissa demokraatit avasivat ilmiantokanavan hallinnon ty\u00f6ntekij\u00f6ille",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_8df91e75515c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Alkermes is expected to report a 66.7% increase in quarterly earnings to $0.80 per share, with revenues forecasted at $379.12 million, a 0.4% increase year-over-year.",
        "news_epoch": 1739189760.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/what-analyst-projections-key-metrics-reveal-about-alkermes-alks-q4-earnings",
        "news_original_title": "What Analyst Projections for Key Metrics Reveal About Alkermes (ALKS) Q4 Earnings",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_a3141244a6db",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "GE HealthCare is expected to report a 6.8% increase in quarterly earnings, with revenues projected at $5.33 billion.",
        "news_epoch": 1739189760.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/what-analyst-projections-key-metrics-reveal-about-ge-healthcare-gehc-q4-earnings",
        "news_original_title": "What Analyst Projections for Key Metrics Reveal About GE HealthCare (GEHC) Q4 Earnings",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3e742be59142",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Red Rock Resorts is expected to report a significant earnings decline but a slight revenue increase in its upcoming quarterly report.",
        "news_epoch": 1739189760.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/red-rock-resorts-rrr-q4-earnings-preview-what-you-should-know-beyond-headline-estimates",
        "news_original_title": "Red Rock Resorts (RRR) Q4 Earnings Preview: What You Should Know Beyond the Headline Estimates",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_c6b4d2e10470",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Taylor Morrison Home is expected to report a 17.1% increase in quarterly earnings, with revenues projected at $2.13 billion.",
        "news_epoch": 1739189760.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/what-analyst-projections-key-metrics-reveal-about-taylor-morrison-tmhc-q4-earnings",
        "news_original_title": "What Analyst Projections for Key Metrics Reveal About Taylor Morrison (TMHC) Q4 Earnings",
        "news_group": -1
    },
    {
        "news_id": "dw_a57062033",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "The article discusses the complexities of sex and gender, challenging the binary view of male and female, and highlighting scientific evidence for a spectrum of sex characteristics.",
        "news_epoch": 1739189220.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.dw.com/en/even-the-science-agrees-there-are-more-than-two-genders/a-57062033",
        "news_original_title": "Even &#x27;the science&#x27; agrees there are more than two genders",
        "news_group": -1
    },
    {
        "news_id": "sn_60d76d08021b",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "A fast radio burst has been traced to an ancient, dead galaxy, suggesting multiple origins for such phenomena.",
        "news_epoch": 1739188800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/fast-radio-burst-dead-galaxy-astronomer",
        "news_original_title": "A fast radio burst from a dead galaxy puzzles astronomers",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_b10fa8e1a7b6",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Fortumin tuloksen odotetaan painuneen vahvasta vertailukaudesta",
        "news_epoch": 1739188500.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/9619b8b9-887e-4f98-a2c6-859ffaa94055",
        "news_original_title": "Fortumin tuloksen odotetaan painuneen vahvasta vertailukaudesta",
        "news_group": 178
    },
    {
        "news_id": "yle_7420142766",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "NRC will cease activities in nearly 20 countries due to the end of US subsidies, risking vital humanitarian programs.",
        "news_epoch": 1739187060.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142766",
        "news_original_title": "Norjalainen avustusj\u00e4rjest\u00f6 keskeytt\u00e4\u00e4 toimintansa l\u00e4hes 20 maassa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420141172",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finland exports significantly more to the USA than it imports, leading to a trade surplus. President Trump has criticized Europe for not buying enough American products, but Finland&#x27;s surplus is seen as beneficial for its economy.",
        "news_epoch": 1739186700.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20141172",
        "news_original_title": "Trump syytti Eurooppaa jenkki\u00adautojen nolla\u00adostoista \u2013 Suomen autoala vastaa: \u201dBensa\u00adsy\u00f6p\u00f6t eiv\u00e4t mahdu parkkiruutuun\u201d",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_9659cc48f39b",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Investoivatko teknoj\u00e4tit teko\u00e4lyyn kuitenkin liikaa? \u2013 T\u00e4ss\u00e4 ovat yhdysvaltalaisten p\u00f6rssiyhti\u00f6iden tuoreet tulosennusteet",
        "news_epoch": 1739185200.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/4dd4965e-a049-45c1-910d-a37f9589dbd4",
        "news_original_title": "Investoivatko teknoj\u00e4tit teko\u00e4lyyn kuitenkin liikaa? \u2013 T\u00e4ss\u00e4 ovat yhdysvaltalaisten p\u00f6rssiyhti\u00f6iden tuoreet tulosennusteet",
        "news_group": 178
    },
    {
        "news_id": "bbc_c98yv3e1yyqo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "President Trump plans to impose a 25% import tax on steel and aluminum, affecting Canada significantly, and hinted at reciprocal tariffs on other countries.",
        "news_epoch": 1739184300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c98yv3e1yyqo",
        "news_original_title": "Trump says tariffs coming on steel and aluminium",
        "news_group": 195
    },
    {
        "news_id": "yle_7420142718",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A study at the University of Turku developed phage biosensors to detect cancer from urine samples.",
        "news_epoch": 1739183820.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20142718",
        "news_original_title": "Uudella menetelm\u00e4ll\u00e4 sy\u00f6p\u00e4 voidaan havaita virtsa\u00adn\u00e4ytteest\u00e4 \u2013 tutkimuksessa tunnistettiin tappava eturauhassy\u00f6p\u00e4",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_65f0f73a6ec2",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Market rates showed slight movements with gold prices hitting a record high. Trump announced new tariffs on aluminium and steel, raising inflation concerns.",
        "news_epoch": 1739183580.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/d84b56f1-d39c-474a-bba0-70dcbd032ac8",
        "news_original_title": "Valtionlainojen koroissa pieni\u00e4 liikkeit\u00e4 \u2013 Kullan hinta kohosi j\u00e4lleen enn\u00e4tyslukemiin",
        "news_group": -1
    },
    {
        "news_id": "dw_a71561020",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Japan is experiencing a surge in tourist arrivals, leading to discontent among locals due to overcrowding and disrespectful behavior by some visitors.",
        "news_epoch": 1739183520.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/can-japan-solve-its-growing-overtourism-crisis/a-71561020",
        "news_original_title": "Can Japan solve its growing overtourism crisis?",
        "news_group": -1
    },
    {
        "news_id": "dw_a71543331",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "The AI Action Summit in Paris aims to establish a sustainable AI framework with participation from nearly 100 countries and key leaders, focusing on governance, safety, and innovation.",
        "news_epoch": 1739183040.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/the-eu-s-ai-future-can-the-bloc-compete-with-china-us/a-71543331",
        "news_original_title": "The EU&#x27;s AI future: Can the bloc compete with China, US?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142737",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Romanian President Klaus Johannis announced his resignation ahead of the end of his term on December 21, following the annulment of the November elections due to alleged Russian electoral influence. New presidential elections are scheduled for May.",
        "news_epoch": 1739183040.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20142737",
        "news_original_title": "Romanian presidentti Klaus Johannis eroaa virastaan",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_f832fa06c140",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Nokia CEO Pekka Lundmark will be replaced by Justin Hotard by the end of March.",
        "news_epoch": 1739182800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/553a3d87-ce90-42ca-a670-f920e06a3ddc",
        "news_original_title": "Nokia viestii sijoittajille uutta suuntaa \u2013 Kuka on Justin Hotard, miten nimitys otettiin vastaan, ja mit\u00e4 se Nokialle tarkoittaa?",
        "news_group": -1
    },
    {
        "news_id": "bbc_cj6531p1gxko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Lidl announces pay rise for 28,000 workers ahead of minimum wage increase in April.",
        "news_epoch": 1739182800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cj6531p1gxko",
        "news_original_title": "Lidl lifts pay ahead of minimum wage rise",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_018eb87b4550",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Teslan arvostus ei en\u00e4\u00e4 heijastele s\u00e4hk\u00f6autojen myynti\u00e4 vaan tulevaisuuden odotuksia \u2013 Osake voi olla arvioijasta riippuen r\u00e4ike\u00e4sti yli- tai alihinnoiteltu",
        "news_epoch": 1739180940.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/80055ae8-f1c2-4ad5-af82-f3b0c65ed81b",
        "news_original_title": "Teslan arvostus ei en\u00e4\u00e4 heijastele s\u00e4hk\u00f6autojen myynti\u00e4 vaan tulevaisuuden odotuksia \u2013 Osake voi olla arvioijasta riippuen r\u00e4ike\u00e4sti yli- tai alihinnoiteltu",
        "news_group": 178
    },
    {
        "news_id": "arvopaperi_5095b4f22c39",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "The Helsinki Stock Exchange saw a rise on Monday, with Nokia announcing a new CEO. Investors House reported improved performance, while Oma Savings Bank faced investigations. Metso is expanding its business in China, and BBS-Bioactive is seeking additional funding.",
        "news_epoch": 1739179980.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/eff5edee-93d4-4ffd-9133-4abcc19978de",
        "news_original_title": "Nokia vet\u00e4\u00e4 nousua Helsingin p\u00f6rssiss\u00e4",
        "news_group": 185
    },
    {
        "news_id": "arvopaperi_ce45806f1edc",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Wetter&#x27;s subsidiary Wetteri Auto acquires Hed&#x27;s Automotive Kia and Mitsubishi business in Lahti for \u20ac150,000.",
        "news_epoch": 1739178720.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/c0302191-08bf-405e-bc48-ebad46dd13ab",
        "news_original_title": "Wetteri ostaa Hedin Automotiven bisneksi\u00e4 Lahdessa",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_9ffdbbf18bd8",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Company to publish interim report; typically a loss in Q4.",
        "news_epoch": 1739178660.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/26f8bff7-a51a-4016-b7da-a0125265fd68",
        "news_original_title": "Sanoman katsauksessa huomio kiinnittyy ohjeistukseen, jossa piilee analyysitalon mukaan riski",
        "news_group": -1
    },
    {
        "news_id": "yle_7420141383",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Cryptocurrency trading surged at the end of last year, attracting new investors amid risks. Experts predict continued liberalization under Trump&#x27;s presidency, but caution is advised due to volatility and potential scams.",
        "news_epoch": 1739177700.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20141383",
        "news_original_title": "Kryptovaluuttakuume nousi \u2013 uudet sijoittajat rynt\u00e4siv\u00e4t markkinoille, ja v\u00e4litt\u00e4jien palvelut meniv\u00e4t tukkoon",
        "news_group": -1
    },
    {
        "news_id": "bbc_c4g7x3ze4qno",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "US President Trump has ordered the cessation of penny minting to cut costs.",
        "news_epoch": 1739177220.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4g7x3ze4qno",
        "news_original_title": "No more minting &#x27;wasteful&#x27; pennies, Trump tells Treasury",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142639",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Pekka Lundmark&#x27;s departure as CEO of Nokia marks a significant shift, with Justin Hotard taking over. Investors are optimistic about Nokia&#x27;s new direction, particularly in AI-driven machinery, despite past challenges in the mobile network sector.",
        "news_epoch": 1739174700.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142639",
        "news_original_title": "Analyysi: Nokia-uutinen vahvistaa, ett\u00e4 yhti\u00f6 on siirtym\u00e4ss\u00e4 matkapuhelin\u00adverkoista konesaleihin",
        "news_group": 192
    },
    {
        "news_id": "yle_7420142669",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Retail sales are expected to grow this year, despite a decline in sales volume in early months.",
        "news_epoch": 1739173440.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142669",
        "news_original_title": "Kaupan liitto ennustaa v\u00e4hitt\u00e4iskaupan myynnin k\u00e4\u00e4ntyv\u00e4n kasvuun",
        "news_group": -1
    },
    {
        "news_id": "dw_a71524279",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Kenya is facing a digital crackdown as the government targets AI-generated content and social media activism, leading to abductions of critics and a rise in online dissent.",
        "news_epoch": 1739173200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/why-kenya-is-cracking-down-on-viral-ai-generated-content/a-71524279",
        "news_original_title": "Why Kenya is cracking down on viral AI-generated content",
        "news_group": -1
    },
    {
        "news_id": "dw_a71552595",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Ecuador will hold a presidential runoff in April after no candidate secured a majority in the first round. Incumbent President Noboa and challenger Gonzalez are the top contenders amid rising violence and economic struggles.",
        "news_epoch": 1739172420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/ecuador-s-presidential-race-set-for-runoff/a-71552595",
        "news_original_title": "Ecuador&#x27;s presidential race set for runoff",
        "news_group": 189
    },
    {
        "news_id": "bbc_cwyplj7dkw2o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The UK government has reached a new funding deal with Drax power station to reduce subsidies and emissions, while ensuring wood pellets are sustainably sourced.",
        "news_epoch": 1739170140.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cwyplj7dkw2o",
        "news_original_title": "Subsidies halved for controversial Drax power station",
        "news_group": 188
    },
    {
        "news_id": "yle_7420142625",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Pekka Lundmark is leaving Nokia after almost five years as CEO, seeking a new phase in his career. Analysts assess his tenure positively, particularly in mobile network development, but note limited shareholder value growth.",
        "news_epoch": 1739168400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142625",
        "news_original_title": "Potkut vai oma l\u00e4ht\u00f6? N\u00e4in arvioi analyytikko Nokian toimitusjohtajan vaihtumista",
        "news_group": 192
    },
    {
        "news_id": "dw_a71558448",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Colombian President Gustavo Petro requested resignations from several Cabinet members after criticizing their performance on national television.",
        "news_epoch": 1739166060.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/colombia-s-petro-calls-for-cabinet-ministers-to-resign/a-71558448",
        "news_original_title": "Colombia&#x27;s Petro calls for Cabinet ministers to resign",
        "news_group": -1
    },
    {
        "news_id": "dw_a71493993",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "After Trump&#x27;s return, several US allies, including Mexico and Canada, have agreed to concessions to avoid tariffs, but the long-term effectiveness of his coercive trade strategy remains uncertain.",
        "news_epoch": 1739165220.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/will-donald-trump-s-tariff-gamble-pay-off/a-71493993",
        "news_original_title": "Will Donald Trump&#x27;s tariff gamble pay off?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142615",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Justin Hotard becomes the new CEO of Nokia, bringing over 25 years of experience in international technology management.",
        "news_epoch": 1739162460.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142615",
        "news_original_title": "T\u00e4llainen on Nokian uusi toimitusjohtaja Justin Hotard: oli edellisess\u00e4 ty\u00f6ss\u00e4\u00e4n reilun vuoden",
        "news_group": 193
    },
    {
        "news_id": "yle_7420142611",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Justin Hotard will become Nokia&#x27;s new CEO in April, succeeding Pekka Lundmark, who is stepping down after leading the company since 2020.",
        "news_epoch": 1739160120.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142611",
        "news_original_title": "Nokia kertoo, miksi toimitus\u00adjohtaja vaihtuu \u2013 uusi johtaja Justin Hotard vauhdittaa muutosta teko\u00e4lyaikaan",
        "news_group": 193
    },
    {
        "news_id": "bbc_cvg8zg7ll09o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "China&#x27;s new import taxes on American goods escalate the trade war, as Trump threatens more tariffs.",
        "news_epoch": 1739160000.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cvg8zg7ll09o",
        "news_original_title": "China&#x27;s tit-for-tat tariffs on US take effect",
        "news_group": 195
    },
    {
        "news_id": "dw_a71551813",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Kosovo Prime Minister Albin Kurti&#x27;s party, Vetevendosje, is projected to win the most seats in the elections but will need a coalition to govern.",
        "news_epoch": 1739145540.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/kosovo-ruling-party-set-to-come-first-in-election/a-71551813",
        "news_original_title": "Kosovo ruling party set to come first in election",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142547",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "No agreement was reached in the technology industry work dispute, with economic experts discussing its implications.",
        "news_epoch": 1739121300.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142547",
        "news_original_title": "\u201dEi tullut isona yll\u00e4tyksen\u00e4\u201d \u2013 asiantuntijat kommentoivat teknologiateollisuuden tilannetta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142065",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Avian influenza cases have been reported in migratory birds arriving in Finland, raising concerns about the virus&#x27;s spread among waterfowl and potential risks to poultry and humans.",
        "news_epoch": 1739120160.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20142065",
        "news_original_title": "Muuttolinnut saapuvat \u2013 ja se huolestuttaa lintuinfluenssaa seuraavia asiantuntijoita",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142196",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "New data reveals detailed information about Finnish citizens in the Soviet Union during the 1920s, including those who fled after the Civil War and their fates.",
        "news_epoch": 1739111820.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20142196",
        "news_original_title": "Tuhansia Neuvostoliittoon paenneita ja loikanneita suomalaisia on l\u00f6ydetty vanhasta arkistosta",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142524",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The Industry Union rejected a wage increase proposal, leading to planned strikes. Negotiations have been ongoing for five months without resolution.",
        "news_epoch": 1739106420.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142524",
        "news_original_title": "Teknologiateollisuuden ty\u00f6riitaan ei saatu sopua \u2013 Teollisuusliiton lakot alkavat maanantaina",
        "news_group": 190
    },
    {
        "news_id": "yle_7420142496",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Whale cubs learn their species&#x27; songs similarly to how human children learn language, with changing melodies and structures reflecting cultural interaction.",
        "news_epoch": 1739105820.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://yle.fi/a/74-20142496",
        "news_original_title": "Tutkijat \u00e4\u00e4nittiv\u00e4t ryh\u00e4valaiden laulua kahdeksan vuoden ajan \u2013 tulokset paljastivat yll\u00e4tt\u00e4v\u00e4n yhteyden ihmiskieliin",
        "news_group": -1
    },
    {
        "news_id": "bbc_cgly37ynedko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Marks &amp; Spencer&#x27;s CEO criticizes rising taxes on UK retailers, calling for government changes to ease financial burdens.",
        "news_epoch": 1739101620.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cgly37ynedko",
        "news_original_title": "M&amp;S boss says retailers &#x27;raided like a piggy bank&#x27;",
        "news_group": -1
    },
    {
        "news_id": "dw_a71531476",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Trump has set new conditions for US aid to Ukraine, seeking access to its mineral resources in exchange for military support.",
        "news_epoch": 1739098200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/ukraine-s-metals-the-us-eu-and-russia-want-access-to/a-71531476",
        "news_original_title": "Ukraine&#x27;s metals the US, EU and Russia want access to",
        "news_group": -1
    },
    {
        "news_id": "bbc_cdxnpzzjed1o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Drax Power Station has repeatedly failed to report burning wood from primary forests, despite receiving billions in subsidies and a previous penalty for misreporting.",
        "news_epoch": 1739095440.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cdxnpzzjed1o",
        "news_original_title": "Key power station didn&#x27;t properly disclose burning forest wood",
        "news_group": 188
    },
    {
        "news_id": "bbc_c9d528g755qo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Deputy Prime Minister Angela Rayner emphasizes the need to build 1.5 million new homes as promised by Labour, despite challenges in the housing sector.",
        "news_epoch": 1739094540.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c9d528g755qo",
        "news_original_title": "No excuses not to build 1.5m new homes, Rayner says",
        "news_group": -1
    },
    {
        "news_id": "dw_a71552090",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Samuel Nujoma was a key figure in Namibia&#x27;s liberation from South African rule and served as its first president after independence.",
        "news_epoch": 1739091360.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/sam-nujoma-battled-south-africa-and-led-a-freed-namibia/a-71552090",
        "news_original_title": "Sam Nujoma battled South Africa and led a freed Namibia",
        "news_group": 181
    },
    {
        "news_id": "bbc_c5yezew49k4o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The PlayStation Network is back online after a multi-hour outage that affected various games and services.",
        "news_epoch": 1739084220.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c5yezew49k4o",
        "news_original_title": "PlayStation Network back online, firm says",
        "news_group": -1
    },
    {
        "news_id": "yle_7420135436",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Airlines will soon use synthetic aviation fuel made from CO2 from factories, with a significant transition expected by 2030.",
        "news_epoch": 1739075400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20135436",
        "news_original_title": "Hiilidioksidista tehd\u00e4\u00e4n pian lentokoneiden polttoainetta \u2013 Suomi voi nousta t\u00e4rke\u00e4ksi tuottajaksi",
        "news_group": -1
    },
    {
        "news_id": "yle_7420141181",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Yle reports on the working conditions in an Indian iPhone factory, highlighting both improvements for some workers and ongoing exploitation issues.",
        "news_epoch": 1739070600.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20141181",
        "news_original_title": "Upporikkaat teknologiafirmat riist\u00e4v\u00e4t naisia Intiassa \u2013 Shanbagavallin ura on poikkeus",
        "news_group": -1
    },
    {
        "news_id": "dw_a71551547",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Sam Nujoma, Namibia&#x27;s first elected president and activist, died at 95.",
        "news_epoch": 1739068200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/namibia-s-founding-father-sam-nujoma-dies-at-95/a-71551547",
        "news_original_title": "Namibia&#x27;s &#x27;founding father&#x27; Sam Nujoma dies at 95",
        "news_group": 181
    },
    {
        "news_id": "bbc_c4g34x51en8o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Amanda Hope has spent over \u00a33,000 on Jellycat toys, reflecting a growing trend of adults buying toys for themselves, which has positive mental health benefits.",
        "news_epoch": 1739058780.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c4g34x51en8o",
        "news_original_title": "&#x27;I&#x27;ve spent more than \u00a33,000 on Jellycats&#x27;",
        "news_group": -1
    },
    {
        "news_id": "dw_a71530393",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Far-right leaders attended Trump&#x27;s inauguration, highlighting a global alliance of anti-globalists united by nationalism and anti-migration sentiments.",
        "news_epoch": 1739039160.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/how-the-far-right-is-expanding-its-international-network/a-71530393",
        "news_original_title": "How the far right is expanding its international network",
        "news_group": -1
    },
    {
        "news_id": "dw_a71549712",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Ukraine&#x27;s presidential election has been postponed due to the ongoing war with Russia, with President Zelenskyy stating elections will occur after martial law is lifted. Discussions about elections have increased, especially following comments from US envoy Keith Kellogg, who advocates for elections potentially this year if a truce is reached.",
        "news_epoch": 1739034960.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/should-ukraine-hold-a-presidential-election-in-2025/a-71549712",
        "news_original_title": "Should Ukraine hold a presidential election in 2025?",
        "news_group": -1
    },
    {
        "news_id": "yle_7420142458",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A compromise proposal has been made in a work dispute in the technology industry, with responses due on Sunday. If accepted, strikes will be canceled.",
        "news_epoch": 1739027520.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142458",
        "news_original_title": "Valtakunnansovittelija antoi sovintoehdotuksen teknologiateollisuuden ty\u00f6riitaan",
        "news_group": 190
    },
    {
        "news_id": "dw_a71547399",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Tanzanian President Samia Suluhu Hassan warns African leaders about the consequences of failing to resolve the conflict in eastern DRC, emphasizing the humanitarian crisis and the need for diplomatic solutions.",
        "news_epoch": 1739026380.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/leaders-across-africa-call-for-end-to-dr-congo-conflict/a-71547399",
        "news_original_title": "Leaders across Africa call for end to DR Congo conflict",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_4694fcbe57fb",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Chipotle&#x27;s stock has dipped despite strong earnings, raising questions about future growth amid cautious guidance and external economic concerns.",
        "news_epoch": 1739010600.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/chipotles-slip-short-term-dip-or-long-term-opportunity",
        "news_original_title": "Chipotle\u2019s Slip: A Short-Term Dip or Long-Term Opportunity?",
        "news_group": -1
    },
    {
        "news_id": "bbc_c75z9925lelo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The UK government has decided to lift tariffs on Chinese e-bikes, raising concerns among British manufacturers about competition and market impact.",
        "news_epoch": 1739010420.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/c75z9925lelo",
        "news_original_title": "Cheaper China e-bikes &#x27;kick in teeth&#x27; for UK firms",
        "news_group": -1
    },
    {
        "news_id": "sn_readersunsungscientistmutantchonkus",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Readers discuss an unsung scientist, a mutant bacterium named Chonkus, Science News\u2019 new look",
        "news_epoch": 1739008800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/readers-unsung-scientist-mutant-chonkus",
        "news_original_title": "Readers discuss an unsung scientist, a mutant bacterium named Chonkus, Science News\u2019 new look",
        "news_group": 187
    },
    {
        "news_id": "sn_825e003faac8",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "Margaret S. Collins, the first Black female entomologist in the U.S., overcame challenges to become a termite expert. A cyanobacterium named &#x27;Chonkus&#x27; shows promise for carbon sequestration in oceans, but ocean iron fertilization poses risks.",
        "news_epoch": 1739008800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/readers-unsung-scientist-mutant-chonkus",
        "news_original_title": "Readers discuss an unsung scientist, a mutant bacterium named Chonkus, Science News\u2019 new look",
        "news_group": 187
    },
    {
        "news_id": "yle_7420140150",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finland&#x27;s economy faced significant challenges after losing trade relations with Russia, leading to a shift in energy imports and tourism, while also seeing a rise in exports to the US and other countries.",
        "news_epoch": 1739008800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20140150",
        "news_original_title": "Katso 6 kuvaa: n\u00e4in rajusti Ven\u00e4j\u00e4n sota iski Suomen talouteen \u2013 mutta miksi selvisimme rys\u00e4yksest\u00e4?",
        "news_group": -1
    },
    {
        "news_id": "arvopaperi_026fa5166fe8489f93baa78b5d1279b4",
        "news_source": "arvopaperi",
        "news_source_lang": "fi",
        "news_header": "Nightingale pyrkii Yhdysvaltain OTC-markkinalle \u2013 Mik\u00e4 se on?",
        "news_epoch": 1739008800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.arvopaperi.fi/uutiset/ap/026fa516-6fe8-489f-93ba-a78b5d1279b4",
        "news_original_title": "Nightingale pyrkii Yhdysvaltain OTC-markkinalle \u2013 Mik\u00e4 se on?",
        "news_group": -1
    },
    {
        "news_id": "sn_b5b889654e16",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "The article discusses King Canute&#x27;s legendary act of trying to command the tide, linking it to current climate challenges and rising sea levels threatening coastal cities.",
        "news_epoch": 1739008800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/holding-back-the-sea-science-news",
        "news_original_title": "A daring plan to hold back the sea",
        "news_group": 196
    },
    {
        "news_id": "sn_holdingbacktheseasciencenews",
        "news_source": "sn",
        "news_source_lang": "en",
        "news_header": "A daring plan to hold back the sea",
        "news_epoch": 1739008800.0,
        "news_categories": [
            "science"
        ],
        "news_url": "https://www.sciencenews.org/article/holding-back-the-sea-science-news",
        "news_original_title": "A daring plan to hold back the sea",
        "news_group": 196
    },
    {
        "news_id": "nasdaq_c36cb2c38c6e",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "This Top Quantum Computing Stock Nears $1 Billion in Signings",
        "news_epoch": 1739007600.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/top-quantum-computing-stock-nears-1-billion-signings",
        "news_original_title": "This Top Quantum Computing Stock Nears $1 Billion in Signings",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_463206a1dad1",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Disney Stock Analysis: Buy, Hold, or Sell?",
        "news_epoch": 1739007480.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/disney-stock-analysis-buy-hold-or-sell",
        "news_original_title": "Disney Stock Analysis: Buy, Hold, or Sell?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_4377c5507923",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Palantir Stock Investors Have Reason to Cheer as It Said It Is Experiencing &amp;quot;Unrelenting Demand&amp;quot;",
        "news_epoch": 1739007240.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/palantir-stock-investors-have-reason-cheer-it-said-it-experiencing-unrelenting-demand",
        "news_original_title": "Palantir Stock Investors Have Reason to Cheer as It Said It Is Experiencing &amp;quot;Unrelenting Demand&amp;quot;",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_110370a507a5",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Better Cybersecurity Stock: Palo Alto Networks or CrowdStrike?",
        "news_epoch": 1739007000.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/better-cybersecurity-stock-palo-alto-networks-or-crowdstrike",
        "news_original_title": "Better Cybersecurity Stock: Palo Alto Networks or CrowdStrike?",
        "news_group": -1
    },
    {
        "news_id": "dw_a71544528",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Serbia and domestic issues top voter concerns in Kosovo",
        "news_epoch": 1739006640.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/serbia-and-domestic-issues-top-voter-concerns-in-kosovo/a-71544528",
        "news_original_title": "Serbia and domestic issues top voter concerns in Kosovo",
        "news_group": -1
    },
    {
        "news_id": "yle_7420141982",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Analyysi: Suomi halutaan nyt Moldovan, Romanian ja Serbian kanssa samaan veroleiriin \u2013 yritysjohtajilla on laput silmill\u00e4",
        "news_epoch": 1739005740.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20141982",
        "news_original_title": "Analyysi: Suomi halutaan nyt Moldovan, Romanian ja Serbian kanssa samaan veroleiriin \u2013 yritysjohtajilla on laput silmill\u00e4",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_90af5cf90411",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Should I Buy Palo Alto Networks Stock?",
        "news_epoch": 1739005500.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/should-i-buy-palo-alto-networks-stock",
        "news_original_title": "Should I Buy Palo Alto Networks Stock?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_2e85a0b87d2c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Costco Is a Growth Stock. January Sales Prove It.",
        "news_epoch": 1739005380.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/costco-growth-stock-january-sales-prove-it",
        "news_original_title": "Costco Is a Growth Stock. January Sales Prove It.",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_804aca8664ae",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Is Novo Nordisk Stock a Buy Now?",
        "news_epoch": 1739005260.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/novo-nordisk-stock-buy-now",
        "news_original_title": "Is Novo Nordisk Stock a Buy Now?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_162c369b890c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Want a Stable Income Stream? This Ultra-High-Yielding Dividend Is Very Safe and Secure.",
        "news_epoch": 1739005200.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/want-stable-income-stream-ultra-high-yielding-dividend-very-safe-and-secure",
        "news_original_title": "Want a Stable Income Stream? This Ultra-High-Yielding Dividend Is Very Safe and Secure.",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_3e9beea6473d",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Validea Warren Buffett Strategy Daily Upgrade Report - 2/8/2025",
        "news_epoch": 1739004960.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/validea-warren-buffett-strategy-daily-upgrade-report-2-8-2025",
        "news_original_title": "Validea Warren Buffett Strategy Daily Upgrade Report - 2/8/2025",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_12c9bad71df4",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Validea James P. O&#x27;Shaughnessy Strategy Daily Upgrade Report - 2/8/2025",
        "news_epoch": 1739004960.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/validea-james-p-oshaughnessy-strategy-daily-upgrade-report-2-8-2025",
        "news_original_title": "Validea James P. O&#x27;Shaughnessy Strategy Daily Upgrade Report - 2/8/2025",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_8491bf20ef4c",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Validea Motley Fool Strategy Daily Upgrade Report - 2/8/2025",
        "news_epoch": 1739004960.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/validea-motley-fool-strategy-daily-upgrade-report-2-8-2025",
        "news_original_title": "Validea Motley Fool Strategy Daily Upgrade Report - 2/8/2025",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_dd3d57ca8e33",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "The &amp;quot;Dean of Valuation&amp;quot; Says Nvidia Stock Could Plunge by 31%. Here&#x27;s My Contrarian Take on Why DeepSeek Could Fuel It to New Highs, Instead.",
        "news_epoch": 1739004900.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/dean-valuation-says-nvidia-stock-could-plunge-31-heres-my-contrarian-take-why-deepseek",
        "news_original_title": "The &amp;quot;Dean of Valuation&amp;quot; Says Nvidia Stock Could Plunge by 31%. Here&#x27;s My Contrarian Take on Why DeepSeek Could Fuel It to New Highs, Instead.",
        "news_group": -1
    },
    {
        "news_id": "dw_a71546541",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Sri Lanka investigates deaths of British and German tourists",
        "news_epoch": 1739001720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/sri-lanka-investigates-deaths-of-british-and-german-tourists/a-71546541",
        "news_original_title": "Sri Lanka investigates deaths of British and German tourists",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_395356234146",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Mettler-Toledo reported strong quarterly results with significant revenue growth and EPS increase, amid a growing demand for nuclear energy.",
        "news_epoch": 1738969200.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mettler-toledo-mtd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 179
    },
    {
        "news_id": "nasdaq_077fa66119d3",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_epoch": 1738969200.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mettler-toledo-mtd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 179
    },
    {
        "news_id": "nasdaq_601230223286",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_epoch": 1738969200.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mettler-toledo-mtd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 179
    },
    {
        "news_id": "nasdaq_197526430214",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_epoch": 1738969200.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mettler-toledo-mtd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 179
    },
    {
        "news_id": "nasdaq_657684563391",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Mettler-Toledo reported strong quarterly earnings with significant revenue growth and EPS increase, while the demand for nuclear energy is rising.",
        "news_epoch": 1738969200.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mettler-toledo-mtd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 179
    },
    {
        "news_id": "nasdaq_168708134784",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Mettler-Toledo reported a revenue increase of 11.8% for Q4 2024, with EPS of $12.41, surpassing expectations.",
        "news_epoch": 1738969200.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/compared-estimates-mettler-toledo-mtd-q4-earnings-look-key-metrics",
        "news_original_title": "Compared to Estimates, Mettler-Toledo (MTD) Q4 Earnings: A Look at Key Metrics",
        "news_group": 179
    },
    {
        "news_id": "nasdaq_130675952912",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Plains All American Pipeline reported a revenue of $12.4 billion for Q4 2024, down 2.3% from last year, with an EPS of $0.42. The company is also exploring opportunities in nuclear energy as demand for electricity grows.",
        "news_epoch": 1738965600.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/plains-all-american-paa-q4-earnings-taking-look-key-metrics-versus-estimates",
        "news_original_title": "Plains All American (PAA) Q4 Earnings: Taking a Look at Key Metrics Versus Estimates",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_241271330840",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "The 2024 Q4 earnings cycle is positive, with major AI companies Vertiv and Super Micro Computer set to report soon. Expectations for Vertiv show significant EPS growth, while Super Micro&#x27;s estimates have decreased. There&#x27;s a growing demand for nuclear energy as countries aim to triple its capacity, presenting investment opportunities.",
        "news_epoch": 1738964640.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/2-ai-stocks-investors-must-watch-week",
        "news_original_title": "2 AI Stocks Investors Must Watch This Week",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_800136878530",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Disney and Qualcomm exceeded earnings expectations in their fiscal Q1, showing strong growth and profitability.",
        "news_epoch": 1738963920.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/buy-disney-or-qualcomm-stock-after-crushing-eps-expectations",
        "news_original_title": "Buy Disney or Qualcomm Stock After Crushing EPS Expectations?",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_d0b9650ba245",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "This article reviews the top-performing Canadian mining stocks and discusses recent economic developments in Canada and the US, including job growth and trade agreements.",
        "news_epoch": 1738958400.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/top-5-canadian-mining-stocks-week-orosur-jumps-92-percent-assays",
        "news_original_title": "Top 5 Canadian Mining Stocks This Week: Orosur Jumps 92 Percent on Assays",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_187059094489",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Zacks Research Daily highlights key research reports on major stocks including Uber, Comcast, Gilead, and Onfolio, focusing on their performance and market outlook.",
        "news_epoch": 1738957020.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/top-analyst-reports-uber-comcast-gilead",
        "news_original_title": "Top Analyst Reports for Uber, Comcast &amp; Gilead",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_476279880633",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "These 5 Charts Explain the Current Earnings Outlook",
        "news_epoch": 1738956240.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/these-5-charts-explain-current-earnings-outlook",
        "news_original_title": "These 5 Charts Explain the Current Earnings Outlook",
        "news_group": 184
    },
    {
        "news_id": "nasdaq_760660352735",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "These 5 Charts Explain the Current Earnings Outlook",
        "news_epoch": 1738956240.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/these-5-charts-explain-current-earnings-outlook",
        "news_original_title": "These 5 Charts Explain the Current Earnings Outlook",
        "news_group": 184
    },
    {
        "news_id": "nasdaq_733714890746",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "The earnings season for Q4 is ongoing, with mixed results from major tech companies. Despite some disappointing earnings, overall corporate profitability remains strong, with expectations for significant growth in 2025. The nuclear energy sector is also positioned for growth as global leaders commit to increasing nuclear capacity.",
        "news_epoch": 1738956240.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/these-5-charts-explain-current-earnings-outlook",
        "news_original_title": "These 5 Charts Explain the Current Earnings Outlook",
        "news_group": 184
    },
    {
        "news_id": "nasdaq_526646913090",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "These 5 Charts Explain the Current Earnings Outlook",
        "news_epoch": 1738956240.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/these-5-charts-explain-current-earnings-outlook",
        "news_original_title": "These 5 Charts Explain the Current Earnings Outlook",
        "news_group": 184
    },
    {
        "news_id": "nasdaq_410032276177",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "These 5 Charts Explain the Current Earnings Outlook",
        "news_epoch": 1738956240.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/these-5-charts-explain-current-earnings-outlook",
        "news_original_title": "These 5 Charts Explain the Current Earnings Outlook",
        "news_group": 184
    },
    {
        "news_id": "nasdaq_46aa5942bb6f",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "The Q4 earnings season shows strong overall corporate profitability, with expectations for significant growth in 2025 despite some negative revisions in the Energy sector.",
        "news_epoch": 1738956240.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/these-5-charts-explain-current-earnings-outlook",
        "news_original_title": "These 5 Charts Explain the Current Earnings Outlook",
        "news_group": 184
    },
    {
        "news_id": "nasdaq_456585176713",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "The demand for electricity is increasing, prompting a shift from fossil fuels to nuclear energy, with leaders committing to triple nuclear capacities.",
        "news_epoch": 1738956180.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/zacks-february-view-equity-markets",
        "news_original_title": "Zacks February View on Equity Markets",
        "news_group": 191
    },
    {
        "news_id": "nasdaq_510846549734",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "The demand for electricity is rising, and nuclear energy is seen as a key alternative to fossil fuels. Leaders from the US and 21 countries aim to triple nuclear energy capacities, presenting investment opportunities.",
        "news_epoch": 1738956000.0,
        "news_categories": [
            "business",
            "tech"
        ],
        "news_url": "https://www.nasdaq.com/articles/zrs-chart-month-4",
        "news_original_title": "ZRS Chart of the Month",
        "news_group": 191
    },
    {
        "news_id": "nasdaq_868376404184",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Notable Two Hundred Day Moving Average Cross - X",
        "news_epoch": 1738955340.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/notable-two-hundred-day-moving-average-cross-x",
        "news_original_title": "Notable Two Hundred Day Moving Average Cross - X",
        "news_group": 180
    },
    {
        "news_id": "nasdaq_732341803629",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "X&#x27;s stock has a 52-week low of $26.915 and a high of $48.125, with the last trade at $37.25.",
        "news_epoch": 1738955340.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/notable-two-hundred-day-moving-average-cross-x",
        "news_original_title": "Notable Two Hundred Day Moving Average Cross - X",
        "news_group": 180
    },
    {
        "news_id": "nasdaq_4f656ec573a1",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "X&#x27;s stock has a 52-week low of $26.915 and a high of $48.125, with the last trade at $37.25.",
        "news_epoch": 1738955340.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/notable-two-hundred-day-moving-average-cross-x",
        "news_original_title": "Notable Two Hundred Day Moving Average Cross - X",
        "news_group": 180
    },
    {
        "news_id": "nasdaq_343010077382",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Notable Two Hundred Day Moving Average Cross - X",
        "news_epoch": 1738955340.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/notable-two-hundred-day-moving-average-cross-x",
        "news_original_title": "Notable Two Hundred Day Moving Average Cross - X",
        "news_group": 180
    },
    {
        "news_id": "nasdaq_111924067433",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Notable Two Hundred Day Moving Average Cross - X",
        "news_epoch": 1738955340.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/notable-two-hundred-day-moving-average-cross-x",
        "news_original_title": "Notable Two Hundred Day Moving Average Cross - X",
        "news_group": 180
    },
    {
        "news_id": "nasdaq_733739919376",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "X&#x27;s stock has a 52-week low of $26.915 and a high of $48.125, with the last trade at $37.25.",
        "news_epoch": 1738955340.0,
        "news_categories": [
            "business",
            "commodities"
        ],
        "news_url": "https://www.nasdaq.com/articles/notable-two-hundred-day-moving-average-cross-x",
        "news_original_title": "Notable Two Hundred Day Moving Average Cross - X",
        "news_group": 180
    },
    {
        "news_id": "nasdaq_337402812220",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "Pre-Market Earnings Report for February 10, 2025 :  MCD, ROK, ON, INCY, CNA, MNDY, ROIV, TSEM, NSP, EPC, ALX, AIOT",
        "news_epoch": 1738954800.0,
        "news_categories": [
            "business",
            "earnings"
        ],
        "news_url": "https://www.nasdaq.com/articles/pre-market-earnings-report-february-10-2025-mcd-rok-incy-cna-mndy-roiv-tsem-nsp-epc-alx",
        "news_original_title": "Pre-Market Earnings Report for February 10, 2025 :  MCD, ROK, ON, INCY, CNA, MNDY, ROIV, TSEM, NSP, EPC, ALX, AIOT",
        "news_group": 182
    }
];