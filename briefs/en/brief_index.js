const articles = [
    {
        "news_id": "yle_7420144239",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739798520.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144239",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Paavin terveydentila \u201dmonimutkainen\u201d",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144224",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739797200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144224",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Starmer ja Trump tapaavat ensi viikolla",
        "news_group": -1
    },
    {
        "news_id": "bbc_cre8expj2leo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Ireland&#x27;s goods exports to the US increased by 34% to \u20ac72.6bn in 2025, while imports fell to \u20ac22.5bn, resulting in a trade surplus of over \u20ac50bn. This trade dynamic has political implications, especially with Donald Trump in office, as he views large trade surpluses unfavorably.",
        "news_epoch": 1739796780.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cre8expj2leo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Irish goods exports to US surge by 34%",
        "news_group": -1
    },
    {
        "news_id": "bbc_c1kmk09xxdko",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Pope Francis, 88, is hospitalized due to a complex clinical situation involving a polymicrobial infection of his respiratory tract, requiring a change in treatment.",
        "news_epoch": 1739795220.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c1kmk09xxdko",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Pope&#x27;s health a &#x27;complex clinical situation&#x27;, Vatican says",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144207",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Israel has killed the commander of Hamas in southern Lebanon, who was reportedly planning attacks on Israel with Iranian support. The Lebanese security authorities have not confirmed the victim&#x27;s identity.",
        "news_epoch": 1739794860.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144207",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Israel sanoo tappaneensa Hamasin johtajan Libanonissa",
        "news_group": 366
    },
    {
        "news_id": "bbc_ckg7gewqevqo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Companies in the UK are planning to cut jobs or hire fewer workers due to rising National Insurance payments and wages, according to a survey. Many businesses intend to raise prices to cover increased employment costs.",
        "news_epoch": 1739794560.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/ckg7gewqevqo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Firms plan job cuts as employment costs rise",
        "news_group": -1
    },
    {
        "news_id": "bbc_cvgpgeve76qo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "President Trump has appealed to the US Supreme Court to fire the head of an independent ethics agency that protects whistleblowers. This case is significant as it is the first related to Trump&#x27;s executive actions to reach the Supreme Court.",
        "news_epoch": 1739792940.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cvgpgeve76qo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump appeals to Supreme Court over firing of US agency boss",
        "news_group": -1
    },
    {
        "news_id": "bbc_cp9x97yvjp4o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The Trump administration&#x27;s choice of Saudi Arabia for key talks on Ukraine highlights the Kingdom&#x27;s diplomatic recovery since the Khashoggi murder. Despite ongoing human rights concerns, Saudi Arabia has invested heavily in entertainment and sports to enhance its global presence.",
        "news_epoch": 1739791920.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cp9x97yvjp4o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Why Saudi Arabia is the venue of choice for Trump talks on Ukraine",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144185",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The tax office rejects the idea of another agency having unrestricted access to personal data of millions. The US Administrative Efficiency Agency (DOGE), led by Elon Musk, seeks unlimited access to tax office files to address waste in civil service.",
        "news_epoch": 1739791800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144185",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Muskin DOGE-virasto haluaa p\u00e4\u00e4syn verotiedostoihin",
        "news_group": -1
    },
    {
        "news_id": "bbc_c1wewj551q0o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "At least 10 people have died due to severe flooding in the southeastern US, particularly in Kentucky and Georgia. Kentucky Governor Andy Beshear reported nine fatalities in his state, with many people rescued from floodwaters.",
        "news_epoch": 1739791260.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c1wewj551q0o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "At least 10 dead in US floods and heavy rain",
        "news_group": 361
    },
    {
        "news_id": "bbc_clyzym0vn8go",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "South Korea has banned new downloads of China&#x27;s DeepSeek AI chatbot due to personal data protection concerns. The app became popular quickly, reaching over a million weekly users, but faced scrutiny from various countries.",
        "news_epoch": 1739787960.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/clyzym0vn8go",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "S Korea removes Deepseek from app stores over privacy concerns",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144151",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "On Monday morning, Nordea experienced significant disruptions with its online banking services, affecting customer logins. The issues were resolved by early afternoon, with the bank confirming that some customers had trouble accessing their mobile and online accounts.",
        "news_epoch": 1739786160.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144151",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Nordean verkkopankkih\u00e4iri\u00f6 on ohi",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144076",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The British Prime Minister is open to sending peacekeepers to Ukraine after a peace agreement. Researcher Joel Linnainm\u00e4ki highlights challenges, including the need for troops capable of combat, and notes that the U.S.",
        "news_epoch": 1739785500.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144076",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Britannia harkitsee rauhanturvaajien l\u00e4hett\u00e4mist\u00e4 Ukrainaan \u2013 joukkojen pit\u00e4isi olla taistelukelpoisia, sanoo tutkija",
        "news_group": 362
    },
    {
        "news_id": "dw_a71610611",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "A study suggests that online satire targeting Taylor Swift may have contributed to her being booed at the Super Bowl. While her boyfriend&#x27;s involvement in the game and her political affiliations could explain the negative reactions, the research indicates that satire can harm reputations more than direct criticism by dehumanizing individuals.",
        "news_epoch": 1739785440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/could-satire-lead-to-swift-reputational-damage/a-71610611",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Could satire lead to Swift reputational damage?",
        "news_group": -1
    },
    {
        "news_id": "bbc_clyzy300vlzo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The US State Department removed a statement from its website asserting that Washington does not support Taiwan&#x27;s independence, causing anger in China. China criticized the revision as a wrong signal to separatist forces and urged the US to correct its mistakes.",
        "news_epoch": 1739783940.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/clyzy300vlzo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "China anger as US amends wording on Taiwan independence",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144129",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "US Secretary of State Marco Rubio has arrived in Saudi Arabia to meet Russian representatives in Riyadh, preparing for negotiations to end Russia&#x27;s war in Ukraine.",
        "news_epoch": 1739783100.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144129",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Yhdysvaltain ulkoministeri saapui Saudi-Arabiaan",
        "news_group": 364
    },
    {
        "news_id": "yle_7420144081",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The business conference in Beijing highlights a shift in the relationship between China&#x27;s leadership and the private sector. President Xi Jinping held a meeting with key business figures, including Alibaba&#x27;s Jack Ma, who has re-emerged after a period of absence due to past criticisms of the private sector.",
        "news_epoch": 1739782080.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144081",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Jopa Alibaban Jack Ma p\u00e4\u00e4si pannasta, kun Kiinan Xi tarvitsee kipe\u00e4sti yksityist\u00e4 sektoria vauhdittamaan kasvua",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144094",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The historic city of Palmyra has suffered due to ISIS terrorism, with archaeological experts now returning to assess the damage to cultural treasures. Once a major tourist destination, Palmyra faced destruction of its temples and graves by ISIS.",
        "news_epoch": 1739775900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144094",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Syyrian kulttuuriaarteiden kunnostusty\u00f6 p\u00e4\u00e4sem\u00e4ss\u00e4 alkuun",
        "news_group": -1
    },
    {
        "news_id": "dw_a71586872",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Korean families have been living in Ukraine for decades, primarily in the Mykolaiv region, where they work as farmers. Despite facing challenges due to the Russian invasion, many, like Olena and Oleh Pak, continue to uphold their cultural traditions while contributing to their community.",
        "news_epoch": 1739769720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/despite-war-ethnic-koreans-feel-at-home-in-ukraine/a-71586872",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Despite war, ethnic Koreans &#x27;feel at home&#x27; in Ukraine",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144049",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739769360.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144049",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Zelenskyi yll\u00e4tt\u00e4en Arabiemiraatteihin \u2013 Euroopan johtajia kokoontuu Ukraina-h\u00e4t\u00e4kokoukseen Pariisiin",
        "news_group": 360
    },
    {
        "news_id": "yle_7420143222",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "The repair industry is facing a crisis despite a growing interest in repairs among consumers. Many people prefer to buy new appliances rather than repair old ones due to high costs and the design of products that make repairs difficult.",
        "news_epoch": 1739768400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143222",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Tavaroiden korjaaminen on v\u00e4hentynyt jo kauan \u2013 kahdella alalla on kuitenkin onnistuttu k\u00e4\u00e4nt\u00e4m\u00e4\u00e4n tilanne",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144069",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Egypt has reportedly pressured Hamas into conceding control of the Gaza Strip to the Palestinian Authority, which is led by the more moderate Fatah party. Hamas is willing to merge its employees with the Palestinian Authority and allow for retirements if pensions are guaranteed.",
        "news_epoch": 1739766840.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144069",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "L\u00e4hde: Hamas valmis luovuttamaan Gazan palestiinalaishallinnolle",
        "news_group": -1
    },
    {
        "news_id": "pbs_daec5f0f3a67",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739764200.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/former-u-s-envoy-on-why-trump-is-engaging-with-russia-over-ukraine-talks",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Former U.S. envoy on why Trump is engaging with Russia over Ukraine talks",
        "news_group": 360
    },
    {
        "news_id": "bbc_ce8yl47p4k3o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "OpenAI&#x27;s board has rejected Elon Musk&#x27;s $97.4 billion offer for the company, which may complicate CEO Sam Altman&#x27;s plans to shift OpenAI to a for-profit model. Experts suggest Musk&#x27;s bid aims to inflate the value of OpenAI&#x27;s non-profit assets, making it harder for Altman to proceed with his plans.",
        "news_epoch": 1739764200.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/ce8yl47p4k3o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Could Musk damage OpenAI despite his failed bid?",
        "news_group": 365
    },
    {
        "news_id": "pbs_d0292c6050e5",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739763900.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/we-will-never-be-a-colony-canadian-foreign-minister-says-to-trumps-51st-state-remarks",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "&amp;lsquo;We will never be a colony,&amp;rsquo; Canadian foreign minister says to Trump&amp;rsquo;s 51st state remarks",
        "news_group": 360
    },
    {
        "news_id": "pbs_978085f365f3",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739763600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/news-wrap-rubio-reaffirms-trumps-gaza-takeover-plan-on-trip-to-israel",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "News Wrap: Rubio reaffirms Trump&amp;rsquo;s Gaza takeover plan on trip to Israel",
        "news_group": 364
    },
    {
        "news_id": "pbs_55b993b5fac6",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739763300.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/show/on-the-ground-with-u-n-forces-in-lebanon-as-israeli-withdrawal-deadline-looms",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "On the ground with U.N. forces in Lebanon as Israeli withdrawal deadline looms",
        "news_group": 366
    },
    {
        "news_id": "yle_7420143054",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Germany is facing intense pressure ahead of an election, primarily due to rising concerns about immigration following a tragic knife attack by an asylum seeker that resulted in the death of a child.",
        "news_epoch": 1739762400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143054",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Saksa siirtyy nyt vauhdilla oikealle, ja t\u00e4m\u00e4 lihakauppias tiet\u00e4\u00e4 syyn",
        "news_group": -1
    },
    {
        "news_id": "bbc_ce85709xdk4o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The 2023 UN climate summit in the UAE called for a transition away from fossil fuels, but a year later, global commitment seems to be waning as fossil fuel consumption rises.",
        "news_epoch": 1739761440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/ce85709xdk4o",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "How Trump&#x27;s &#x27;drill, baby, drill&#x27; pledge is affecting other countries",
        "news_group": -1
    },
    {
        "news_id": "bbc_clye46n565xo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "The Tehran Museum of Contemporary Art houses one of the world&#x27;s rarest art collections, featuring masterpieces by artists like Picasso, Van Gogh, and Warhol, valued at around $3 billion.",
        "news_epoch": 1739759700.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/clye46n565xo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "A glimpse at Picasso and Pollock masterpieces kept in Tehran vault",
        "news_group": -1
    },
    {
        "news_id": "bbc_c8r56vr40jvo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Donald Trump has prioritized the mass deportation of undocumented immigrants, with around 18,000 Indian nationals identified as having entered the US illegally. India has agreed to take back its nationals, and a study reveals conflicting estimates of undocumented Indians in the US, ranging from 220,000 to 700,000.",
        "news_epoch": 1739758020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c8r56vr40jvo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Illegal and unseen: Nine surprising facts about Indians in the US",
        "news_group": -1
    },
    {
        "news_id": "pbs_ba332e63f32e",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Rwanda-backed M23 rebels have occupied Bukavu, a major city in eastern Congo, with little resistance from government forces. The rebels, who claim to defend ethnic Tutsis, are supported by Rwandan troops and have caused a humanitarian crisis, displacing over 6 million people.",
        "news_epoch": 1739757600.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/congo-says-m23-rebels-backed-by-rwanda-have-taken-a-2nd-major-eastern-city",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Congo says M23 rebels backed by Rwanda have taken a 2nd major eastern city",
        "news_group": 363
    },
    {
        "news_id": "pbs_11861ec411c6",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Israeli Prime Minister Benjamin Netanyahu is advancing U.S. President Trump&#x27;s proposal to transfer the Palestinian population out of Gaza, which he calls the only viable plan for the region&#x27;s future.",
        "news_epoch": 1739756640.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/israels-netanyahu-signals-hes-moving-ahead-with-trumps-plan-to-move-palestinians-from-gaza",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Israel&amp;#8217;s Netanyahu signals he&amp;#8217;s moving ahead with Trump&amp;#8217;s plan to move Palestinians from Gaza",
        "news_group": 358
    },
    {
        "news_id": "bbc_cz9eddnnq4go",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739752140.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cz9eddnnq4go",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Netanyahu praises Trump&#x27;s &#x27;bold vision&#x27; for Gaza at Rubio meeting",
        "news_group": 358
    },
    {
        "news_id": "bbc_cglywyjg0kwo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "A man described how he was nearly scammed by criminals posing as bailiffs, who claimed he owed a fictitious debt and threatened to seize his possessions. The scammers used convincing tactics, including fake court documents and phone calls, to create panic and pressure him into paying.",
        "news_epoch": 1739750520.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cglywyjg0kwo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "&#x27;Fake bailiffs said they&#x27;d take my furniture&#x27;",
        "news_group": -1
    },
    {
        "news_id": "bbc_cx242lw21jwo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739749980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx242lw21jwo",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Five takeaways from the Munich Security Conference",
        "news_group": 360
    },
    {
        "news_id": "yle_7420144065",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739748720.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144065",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Britannian p\u00e4\u00e4ministeri valmis l\u00e4hett\u00e4m\u00e4\u00e4n joukkoja rauhanturvateht\u00e4viin Ukrainaan \u2013 armeijan johto n\u00e4kee vaikeana",
        "news_group": 362
    },
    {
        "news_id": "yle_7420144064",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739748000.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144064",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Ainakin kahdeksan kuollut tulvissa Kentuckyssa Yhdysvalloissa",
        "news_group": 361
    },
    {
        "news_id": "pbs_3d23a7513f32",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "Ukrainian President Volodymyr Zelenskyy has instructed his ministers not to sign a proposed agreement granting the U.S. access to Ukraine&#x27;s rare earth minerals, citing that it primarily serves U.S.",
        "news_epoch": 1739746800.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/the-u-s-presented-ukraine-with-proposal-to-access-its-minerals-offering-no-guarantees-in-return",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "The U.S. presented Ukraine with proposal to access its minerals, offering no guarantees in return",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144062",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739743620.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144062",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Ukrainan osallistumisesta USA:n ja Ven\u00e4j\u00e4n neuvotteluihin Saudi-Arabiassa liikkuu ristiriitaisia tietoja",
        "news_group": 360
    },
    {
        "news_id": "pbs_78311ae3cb66",
        "news_source": "pbs",
        "news_source_lang": "en",
        "news_header": "A stampede at a railway station in New Delhi resulted in the deaths of at least 18 people, including 14 women, many of whom were Hindu pilgrims heading to the Maha Kumbh festival.",
        "news_epoch": 1739743320.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.pbs.org/newshour/world/stampede-at-new-delhi-railway-station-in-india-leaves-at-least-18-people-dead",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Stampede at New Delhi railway station in India leaves at least 18 people dead",
        "news_group": -1
    },
    {
        "news_id": "bbc_c39190ev9pxo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "President Trump participated in the Nascar season opener at Daytona, while a rainstorm caused damage in LA County. The film &#x27;Conclave&#x27; leads BAFTA nominations, and a dog named Monty won a top prize in New York.",
        "news_epoch": 1739742180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c39190ev9pxo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Watch: Trump&#x27;s motorcade drives lap of Daytona 500 racetrack",
        "news_group": -1
    },
    {
        "news_id": "bbc_cgly1yrd9j3o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739737020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cgly1yrd9j3o",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "What&#x27;s the fighting in DR Congo all about?",
        "news_group": 363
    },
    {
        "news_id": "yle_7420144051",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Some products may be scarce due to upcoming strikes, but overall purchasing behavior remains unchanged, according to the head of S-Group&#x27;s grocery store. Customers are buying more food in preparation for the strikes, while some believe stores will remain well-stocked.",
        "news_epoch": 1739733120.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144051",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Kaupan lakko sai osan suomalaisista varautumaan, ja hyllyj\u00e4kin tyhjeni \u2013 \u201dOstin kyll\u00e4 hieman enemm\u00e4n\u201d",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144045",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A year after the death of opposition leader Alexei Navalny, supporters gathered at Borisovo cemetery, expressing mixed emotions of pride and sadness. Many paid their respects with flowers, reflecting on the political climate in Russia and the lack of a prominent opposition figure.",
        "news_epoch": 1739732400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144045",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Ven\u00e4j\u00e4ll\u00e4 muistettiin Aleksei Navalnyia \u2013 oppositiojohtajan haudalle kulki p\u00e4iv\u00e4ll\u00e4 pitk\u00e4 jono Moskovassa",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144058",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A study shows that communication is decreasing in word count, with women using up to 3,000 more words daily than men. This trend has been observed for at least 40 years.",
        "news_epoch": 1739730420.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144058",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Tutkimus: Naiset k\u00e4ytt\u00e4v\u00e4t enemm\u00e4n sanoja kuin miehet",
        "news_group": -1
    },
    {
        "news_id": "dw_a71631516",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739727540.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/at-msc-panel-us-special-envoy-to-ukraine-had-no-clear-answers-for-ukrainians/a-71631516",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "At MSC panel, US Special Envoy to Ukraine had no clear answers for Ukrainians",
        "news_group": 360
    },
    {
        "news_id": "bbc_c0rqr8q5v52o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739727360.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c0rqr8q5v52o",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Second DR Congo city falls to Rwanda-backed rebels",
        "news_group": 363
    },
    {
        "news_id": "yle_7420143558",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Finnish companies distribute a limited amount of their profits to owners, unlike in the U.S. where profits are reinvested. Small investors, like Jaakko Vettenniemi, benefit from dividends, especially during a profitable spring for shareholders on the Helsinki Stock Exchange.",
        "news_epoch": 1739725860.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143558",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "N\u00e4in kymmenen suosittua kansanosaketta jakaa muhkeita osinkoja \u2013 osa tilitt\u00e4\u00e4 vuoden voittonsa kokonaan omistajilleen",
        "news_group": -1
    },
    {
        "news_id": "yle_7420144054",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Muhsin Hendricks, the world&#x27;s first openly homosexual imam, was shot in South Africa while on his way to a wedding. The motive for the attack is unknown, and the perpetrators escaped.",
        "news_epoch": 1739725020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144054",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Maailman ensimm\u00e4inen avoimesti homoseksuaali-imaami on murhattu",
        "news_group": 367
    },
    {
        "news_id": "yle_7420144052",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739723460.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144052",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Trumpin L\u00e4hi-id\u00e4n l\u00e4hettil\u00e4s matkustaa Saudi-Arabiaan t\u00e4n\u00e4 iltana \u2013 neuvottelee Ven\u00e4j\u00e4n ja Ukraina kanssa l\u00e4hip\u00e4ivin\u00e4",
        "news_group": 360
    },
    {
        "news_id": "yle_7420144025",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739723400.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20144025",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Analyysi: Yhdysvallat n\u00e4ytti Euroopalle kaapin paikan",
        "news_group": 360
    },
    {
        "news_id": "bbc_cx2483zrz0zo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Imposing US tariffs on UK steel would negatively impact both countries, according to UK Business Secretary Jonathan Reynolds. He emphasized the need for negotiations to exempt the UK from a proposed 25% import tax by President Trump.",
        "news_epoch": 1739721780.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.bbc.com/news/articles/cx2483zrz0zo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Trump steel tariffs negative for UK and US, says Reynolds",
        "news_group": -1
    },
    {
        "news_id": "bbc_c87d9z4g5ywo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "More than 40 people, mostly women, died when an illegal gold mine collapsed in Mali&#x27;s Kayes region. The victims were searching for gold scraps in open-pit areas left by industrial miners.",
        "news_epoch": 1739721000.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c87d9z4g5ywo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Dozens killed in Mali illegal gold mine collapse",
        "news_group": -1
    },
    {
        "news_id": "bbc_c4g7gd0vx5go",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hong Kong&#x27;s Ocean Park has introduced twin panda cubs, drawing large crowds for their debut. The cubs, temporarily named &#x27;Elder Sister&#x27; and &#x27;Little Brother&#x27;, are part of a naming competition.",
        "news_epoch": 1739720820.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/videos/c4g7gd0vx5go",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Panda-stic! Twin cubs attract hundreds of visitors on debut",
        "news_group": -1
    },
    {
        "news_id": "dw_a71593167",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "The European Union has announced a \u20ac200 billion funding program for artificial intelligence (AI) to keep pace with the US and China, which are advancing their own AI projects.",
        "news_epoch": 1739719200.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://www.dw.com/en/german-ai-on-the-cutting-edge-but-commercially-at-a-loss/a-71593167",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "German AI on the cutting edge, but commercially at a loss",
        "news_group": -1
    },
    {
        "news_id": "bbc_c626p25egddo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "South Korean actress Kim Sae-ron has been found dead at her home in Seoul at the age of 24. Police reported no signs of foul play and are investigating the cause of death.",
        "news_epoch": 1739719020.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c626p25egddo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "South Korean actress Kim Sae-ron, 24, found dead",
        "news_group": -1
    },
    {
        "news_id": "bbc_cg5ynv58y8yo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "German voters will decide on February 23 who will lead their next government, with Friedrich Merz&#x27;s conservative Christian Democrats favored to become the largest party.",
        "news_epoch": 1739713980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cg5ynv58y8yo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Who&#x27;s who in German elections and why this vote is important",
        "news_group": -1
    },
    {
        "news_id": "bbc_cjw4jj0p5jdo",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "A stabbing in Villach, Austria, resulted in the death of a 14-year-old boy and injuries to five others, identified as an Islamist attack linked to the Islamic State.",
        "news_epoch": 1739713620.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/cjw4jj0p5jdo",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Austria attack that killed teen linked to IS, officials say",
        "news_group": 357
    },
    {
        "news_id": "bbc_c05l33j7rq7o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739708760.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.bbc.com/news/articles/c05l33j7rq7o",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "World&#x27;s &#x27;first openly gay imam&#x27; shot dead in South Africa",
        "news_group": 367
    },
    {
        "news_id": "dw_a71629831",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "",
        "news_epoch": 1739704440.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/austria-stabbing-islamist-attack-interior-minister-says/a-71629831",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Austria stabbing &#x27;Islamist attack,&#x27; interior minister says",
        "news_group": 357
    },
    {
        "news_id": "yle_7420144007",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A trade strike began in logistics on Monday and will extend to stores on Wednesday, involving around 70,000 employees across 3,000 locations. The strike is set to last until Thursday morning for logistics and Saturday morning for stores.",
        "news_epoch": 1739700060.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144007",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Kaupan alan lakot alkoivat maanantaina \u2013 \u201dRuoka ei tule loppumaan Suomesta\u201d, sanoo Kaupan liiton johtaja",
        "news_group": 359
    },
    {
        "news_id": "yle_7420144001",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739698800.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20144001",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Elon Musk julkaisee tiistaina kilpailijan Chat GPT:lle",
        "news_group": 365
    },
    {
        "news_id": "dw_a71628048",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "On the anniversary of Alexei Navalny&#x27;s death, German Chancellor Olaf Scholz stated that Navalny died for democracy and freedom in Russia. Navalny passed away in a Russian penal colony under unclear circumstances, with supporters blaming the Kremlin.",
        "news_epoch": 1739696520.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/navalny-death-anniversary-scholz-hails-activist-s-courage/a-71628048",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Navalny death anniversary: Scholz hails activist&#x27;s &#x27;courage&#x27;",
        "news_group": -1
    },
    {
        "news_id": "dw_a71626685",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "Turkey is the second-largest honey supplier globally, producing 115,000 tons annually. The honey sector is valued at \u20ac270 million, with Germany and the U.S. as major importers.",
        "news_epoch": 1739695980.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/turkish-fake-honey-production-on-the-rise/a-71626685",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Turkish fake honey production on the rise",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143991",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "",
        "news_epoch": 1739691960.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20143991",
        "news_status": "hide",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Kaupan alan neuvottelut jatkuvat sunnuntaina",
        "news_group": 359
    },
    {
        "news_id": "yle_7420142739",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "Individuals born in 1964 will have to wait until they are 62 to qualify for a partial early retirement pension, as the minimum age has been raised. This change has led to a decrease in applicants for the pension this year, with estimates suggesting around 20,000 new pensioners compared to 31,000 last year.",
        "news_epoch": 1739687400.0,
        "news_categories": [
            "business"
        ],
        "news_url": "https://yle.fi/a/74-20142739",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "Osittaisen vanhuus\u00adel\u00e4kkeen voi saada, vaikka olisi ty\u00f6t\u00f6n \u2013 ik\u00e4raja nousi \u00e4skett\u00e4in",
        "news_group": -1
    },
    {
        "news_id": "dw_a71608717",
        "news_source": "dw",
        "news_source_lang": "en",
        "news_header": "The student blockades at the University of Novi Sad in Serbia began on November 2, initiated by a police announcement. Students, led by Olga Pantic, demanded accountability for a tragic incident that killed 15 people.",
        "news_epoch": 1739685180.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://www.dw.com/en/how-serbia-s-student-protesters-organize-fight-for-justice/a-71608717",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": true,
        "news_original_title": "How Serbia&#x27;s student protesters organize fight for justice",
        "news_group": -1
    }
];