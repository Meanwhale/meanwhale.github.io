const articles = [
    {
        "news_id": "bbc_cm213pvdr22o",
        "news_source": "bbc",
        "news_source_lang": "en",
        "news_header": "Hamas has announced the names of three hostages to be released on Saturday in exchange for Palestinian prisoners in Israel, amidst concerns about the ceasefire&#x27;s future.",
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
        "news_header": "Investigator Charly Salonius-Pasternak suggests that J.D. Vance&#x27;s recent comments on Ukraine may not reflect a tactical approach but rather highlight the chaos within the Trump administration.",
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
        "news_header": "Concerns are rising that the UK may face increased US trade taxes following President Trump&#x27;s announcement to target VAT. He has directed his staff to create &#x27;reciprocal tariffs&#x27; for each country, potentially imposing tariffs of 20% or more on the UK and EU.",
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
        "news_header": "An Afghan man, Farhad N, has been arrested in Munich for driving into a crowd, injuring 36 people, including a critically injured two-year-old girl. Prosecutors claim the attack was motivated by religious beliefs, as the suspect shouted &#x27;Allahu Akbar&#x27; during his arrest.",
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
        "news_header": "The competition regulator suggests that parents should be able to purchase baby milk using loyalty points and vouchers, while maintaining restrictions on price promotions to encourage breastfeeding.",
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
        "news_header": "SPTM could be valued at $83 based on the comparison of trading prices of its underlying holdings against average analyst 12-month target prices, leading to a weighted average implied target price for the ETF.",
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
        "news_header": "An analyst has provided a surprising 12-month target for JMEE by comparing the trading prices of ETF holdings to average analyst targets and calculating a weighted average for the ETF.",
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
        "news_header": "Enbridge Inc. reported a decrease in profit for the fourth quarter compared to last year, but the results exceeded analysts&#x27; expectations.",
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
        "news_header": "ESS Tech CEO Eric Dresselhuys has resigned and Kelly Goodman has been appointed as interim CEO. The company plans to pursue new strategic directions in its business.",
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
        "news_header": "The Federation of Buildings is participating in the Industrial Federation&#x27;s work stoppage from February 24-28, as adopted by the Commission on February 13. The Construction Union&#x27;s subsidies support contractual sectors in three locations: Borealis Polymers in Porvoo, Neste refinery in Porvoo, and Wipak factory in Nastola.",
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
        "news_header": "Live Nation Entertainment Inc&#x27;s shares have surpassed the average analyst 12-month target price of $151.83, currently trading at $152.58 per share. Analysts may respond in two ways when a stock reaches their target price.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/live-nation-entertainment-reaches-analyst-target-price-0",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "Live Nation Entertainment Reaches Analyst Target Price",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_cca54628a0cf",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "CVS Health Corporation&#x27;s shares have surpassed the average analyst 12-month target price of $64.64, currently trading at $66.37 per share. Analysts can either downgrade their rating or reassess their target.",
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
        "news_header": "Homeowners with unsuitable insulation are facing severe issues, including damp and mold, but many are not eligible for government assistance due to the timing of their installations.",
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
        "news_header": "DNOW Inc shares have surpassed the average analyst target price of $15.67, currently trading at $16.98. Analysts may respond by downgrading the stock based on valuation.",
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
        "news_header": "Rollins, Inc. shares have surpassed the average analyst target price of $50.50, trading at $51.92. Analysts may respond by downgrading the stock based on valuation.",
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
        "news_header": "Penske Automotive Group Inc (PAG) shares have surpassed the average analyst 12-month target price of $175.83, trading at $175.89 per share. Analysts may react by adjusting their ratings or targets.",
        "news_epoch": 1739527560.0,
        "news_categories": [
            "business",
            "markets"
        ],
        "news_url": "https://www.nasdaq.com/articles/pag-crosses-above-average-analyst-target-3",
        "news_status": "public",
        "news_type": "NewsType.SHORT",
        "news_more": false,
        "news_original_title": "PAG Crosses Above Average Analyst Target",
        "news_group": -1
    },
    {
        "news_id": "nasdaq_b95e7c58bd81",
        "news_source": "nasdaq",
        "news_source_lang": "en",
        "news_header": "VFVA has a 16% upside potential based on a comparison of its underlying holdings&#x27; trading prices against the average analyst 12-month target prices.",
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
        "news_header": "IJH has a potential upside of 15%. We analyzed the underlying holdings of ETFs and compared their trading prices to the average analyst 12-month target prices, calculating the weighted average implied target price for the ETF.",
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
        "news_header": "Essent Group Ltd. reported a decline in fourth quarter income compared to last year and missed analysts&#x27; estimates.",
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
        "news_header": "ARGT&#x27;s holdings suggest a potential gain of 12%. We analyzed the trading prices of the ETFs&#x27; underlying holdings against the average analyst&#x27;s 12-month target price and calculated the weighted average implied target price for the ETF.",
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
        "news_header": "The implied analyst target price for MDYV is $96, based on a comparison of the trading prices of ETF holdings against the average 12-month target prices.",
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
        "news_header": "Analysts predict a 14% increase for FNX holdings by comparing current trading prices with average 12-month target prices.",
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
        "news_header": "Investment Manager notes strong profits from US shares and expresses optimism for the European and Finnish stock markets, despite Finland&#x27;s poor performance in some areas.",
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
        "news_header": "On Thursday, President Trump ordered the development of reciprocal tariffs on imports to the US, adhering to his &#x27;eye for an eye&#x27; trade policy. He stated that the US will charge the same tariffs that other countries impose on American goods.",
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
        "news_header": "Advertisers are returning to the platform they previously boycotted, with Amazon planning significant investments in X advertising. Apple has resumed advertising on X after a year-long boycott.",
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
        "news_header": "Nigerian lawmakers have approved an additional $200 million for the health sector to compensate for the suspension of US foreign aid, which has been crucial for combating diseases like malaria and HIV.",
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
        "news_header": "Two US lawmakers have condemned the UK&#x27;s request to access encrypted data from Apple users, calling it a dangerous threat to US privacy and security. They urge the US national intelligence director to issue an ultimatum to the UK.",
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
        "news_header": "Strikes by Avanti West Coast train managers have been suspended to allow for negotiations in a dispute over rest day working. The RMT union had planned strikes for the next three Sundays, but after a rejected proposal, they announced new strike dates.",
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
        "news_header": "A Russian drone attack targeted the radiation shelter at Chernobyl, causing a fire that has been extinguished. Ukrainian President Zelensky reported that radiation levels remain stable.",
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
        "news_header": "Pope Francis will be hospitalized in Rome for treatment and tests related to bronchitis. The 88-year-old pontiff has shown symptoms for several days and has had officials read his speeches at events.",
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
        "news_header": "Thames Water has appealed to increase bills beyond the regulator&#x27;s cap of 35% over five years, citing financial difficulties and the need for infrastructure investment.",
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
        "news_header": "Indian Prime Minister Narendra Modi and US President Donald Trump share a mutual understanding, bolstered by their populist appeal and large crowds. Despite recent trade tensions, their personal rapport remains strong.",
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
        "news_header": "Indian Prime Minister Narendra Modi&#x27;s visit to France included a stop in Marseille, where President Emmanuel Macron highlighted the city as a key entry point for the India-Middle East-Europe Economic Corridor (IMEC).",
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
        "news_header": "The euro area economy grew by 0.1% at the end of 2024",
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
        "news_header": "Google has renamed the Gulf of Mexico to the Gulf of America on its maps, following a directive from President Donald Trump. The company has also restricted negative reviews for the Gulf of Mexico in its map services.",
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
        "news_header": "The Russian rouble has strengthened significantly alongside a massive rise in the Moscow Stock Exchange, following discussions of peace between US President Trump and Russian President Putin regarding Ukraine.",
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
        "news_header": "Ento&#x27;s profitability declined towards the end of the year, but predictions for recovery are optimistic. The financial statement was released on Friday, and the dividend remains unchanged.",
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
        "news_header": "Data centres account for a large share of global electricity consumption, which is expected to grow. \u00c5bo Akademi is collaborating with RISE to develop energy-efficient and sustainable data centres.",
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
        "news_header": "Andrej Babis, leader of the opposition in the Czech Republic, aims to become prime minister again in the upcoming elections, with his party, ANO, leading in polls.",
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
        "news_header": "The EU will respond &quot;decisively and immediately&quot; US import duties",
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
        "news_header": "The UN reports that the war in Gaza has left a generation of traumatized children. Many have been displaced and injured due to the conflict. In Cairo, a school for evacuated children provides education and psychological support, but the trauma is profound.",
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
        "news_header": "Alphabet&#x27;s appreciation is reasonable. The valuation brake gives the investor a chance.",
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
        "news_header": "European stock exchanges experienced a decline at the end of the week, with stock indices showing negative trends in the morning.",
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
        "news_header": "The construction of new housing has significantly declined, with only 21,000 new dwellings built in 2023, the lowest in a decade. Despite the need for tens of thousands of new dwellings annually, there is no clear recovery in construction.",
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
        "news_header": "A blast in southwest Pakistan killed at least 10 laborers traveling to a market in Harnai when their vehicle was hit by an improvised explosive device. Local officials reported that many injured were in critical condition.",
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
        "news_header": "Alphabet&#x27;s past success has become a burden as its dominant position leads to challenges. The company is in need of new growth sources.",
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
        "news_header": "The publicist Tieevry&#x27;s stock is declining, while HK and Huhtam\u00e4ki&#x27;s stocks are rising. On Friday the 13th, companies on the Helsinki Stock Exchange will announce their results.",
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
        "news_header": "Olli Rehn will be presented for the second term to lead the Bank of Finland",
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
        "news_header": "IAEA: In Chernobyl, explosion and fire - radiation levels normal, no casualties",
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
        "news_header": "A series of incidents occurred including a LAFD vehicle being pushed into the Pacific Ocean by debris, a storm causing evacuations in LA, and power outages in the US and Canada.",
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
        "news_header": "Postal turnover decreased",
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
        "news_header": "Secure investments produced 10.2 per cent",
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
        "news_header": "Delphin Katembo Vinywasiki, a popular musician in the Democratic Republic of Congo known as Delcat Idengo, was killed while filming a music video in Goma. His body was found with signs of violence, and reports suggest he was shot.",
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
        "news_header": "China is opposed to the US missile system in the Philippines",
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
        "news_header": "Sotkamo Silver reported a positive annual result despite a decrease in silver ore content and rising costs. The company made an operating profit of SEK 32 million in 2023, down from SEK 67 million in 2022.",
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
        "news_header": "Huhtam\u00e4ki has announced strategic changes and appointed Sara Engber as director.",
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
        "news_header": "Production challenges affected Sotkamo Silver throughout the year, with an estimated output of 1.2-1.4 ounces of silver in 2025.",
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
        "news_header": "Alisa Bank&#x27;s performance in the second half of the year was impacted by a weak start, resulting in a negative profit for the calendar year.",
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
        "news_header": "Mali, Niger, and Burkina Faso, despite being among Africa&#x27;s poorest nations, possess significant mineral resources, including gold and lithium. Following military coups, these countries have distanced themselves from Western influence, leaving ECOWAS and forming their own Alliance of Sahel States.",
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
        "news_header": "Exel Composites&#x27; orders increased, indicating an improvement in results compared to a slow previous period.",
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
        "news_header": "VR clearly increased its revenue",
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
        "news_header": "Hollywood is facing a crisis as film crews increasingly choose to shoot in cities like Atlanta and Toronto due to cheaper labor and tax incentives. The recent wildfires have worsened the situation, prompting calls for local production support.",
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
        "news_header": "Swedish forests are believed to be a stronger carbon sink than those in Finland. The Swedish parliamentary body, Milj\u00f6m\u00e5lsberedningen, assesses that Sweden is not meeting EU climate targets, with some members calling the goals unattainable.",
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
        "news_header": "India now hosts about three-quarters of the world&#x27;s tiger population, which has more than doubled from 1,706 to nearly 3,700 between 2010 and 2022 due to conservation efforts.",
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
        "news_header": "White House Press Representative Levitt states that the White House aims to prevent the media from spreading false information. The AP news agency has been denied access to White House press conferences three times due to its refusal to refer to the Gulf of Mexico as the Gulf of America.",
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
        "news_header": "In South Korea, at least six dead and 100 evacuated in a fire",
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
        "news_header": "In the 2010s, Russians established a data center and an alarm manufacturing plant in Savonlinna, Finland. Trustnet and Argus Spectrum were the main companies involved, with Trustnet facing bankruptcy and Argus Spectrum struggling with staffing and ownership issues.",
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
        "news_header": "Blue Origin, owned by Jeff Bezos, is laying off about 1,400 employees, or 10% of its workforce, as part of a strategy to focus on increasing rocket launches. The company recently completed its first test flight of the New Glenn rocket, which is designed to carry large payloads into space.",
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
        "news_header": "The economy grew by 0.7 per cent at the end of last year",
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
        "news_header": "Airlines and hoteliers are calling for a reform of Heathrow&#x27;s funding model before any investment in the proposed third runway. They argue that the current model makes Heathrow the most expensive airport globally, and without changes, the third runway will not be feasible due to high costs.",
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
        "news_header": "Oleksandr Bezhan expresses uncertainty about the future in Malokaterynivka, Ukraine, near the front line of the ongoing war. The area has been affected by the destruction of the Kakhovka dam, leading to barren landscapes.",
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
        "news_header": "China accuses Australia of provoking it by invading the South China Sea, claiming Australia has spread a false narrative about recent events. Australia expressed concern over the Chinese Air Force&#x27;s behavior, stating that Chinese fighters approached Australian naval ships, which China denies.",
        "news_epoch": 1739504640.0,
        "news_categories": [
            "world"
        ],
        "news_url": "https://yle.fi/a/74-20143672",
        "news_status": "public",
        "news_type": "NewsType.SUMMARY",
        "news_more": false,
        "news_original_title": "Kiina syytt\u00e4\u00e4 Australiaa provokaatiosta Etel\u00e4-Kiinan merell\u00e4",
        "news_group": -1
    },
    {
        "news_id": "yle_7420143666",
        "news_source": "yle",
        "news_source_lang": "fi",
        "news_header": "A Danske Bank survey reveals that 33% of women feel they lack the financial means to resign from their jobs, with Finnish women feeling particularly constrained.",
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
        "news_header": "Green investments in Finland are nearing EUR 8.5 billion this year, despite economic challenges. The Federation of Finnish Industries reports an increase in completed projects, with over 900 ongoing.",
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
        "news_header": "Taiwan intends to increase imports from the USA",
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
        "news_header": "China is investigating corruption related to its largest aluminium manufacturer",
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
        "news_header": "The Munich Security Conference is set to discuss Ukraine&#x27;s peace talks amidst a tense atmosphere as global security leaders gather. The US has outlined conditions for supporting Ukraine, emphasizing Europe&#x27;s need for self-defense.",
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
        "news_header": "The TikTok app has returned to the Apple App Store and Google Play Store in the US after a delay in its ban by President Trump. The Trump administration assured app stores they wouldn&#x27;t be fined for maintaining TikTok.",
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
        "news_header": "A new advisory body led by Elon Musk, created by President Trump, aims to cut US government jobs and spending. Despite facing legal challenges and accusations of conflicts of interest, Musk argues that the initiative will save taxpayers money and reduce national debt.",
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
        "news_header": "The top US prosecutor in Manhattan, Danielle Sassoon, resigned after refusing to drop a corruption case against New York City Mayor Eric Adams, which she believed would set a dangerous precedent.",
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
        "news_header": "The number of foreign workers in the UK reporting exploitation, bullying, underpayment, and poor living conditions increased significantly in 2024. Nearly 700 seasonal agricultural workers complained to the Worker Support Centre, up from over 400 in 2023.",
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
        "news_header": "President Donald Trump stated that the release of prisoners is a positive step towards resolving the Ukrainian war. Russian Alexander Vinnik returned to Moscow as part of a prisoner exchange, having confessed to money laundering with cryptocurrency.",
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
        "news_header": "A University of Pennsylvania student faced an unexpected fire alarm while testing a robot designed to see through smoke using radio waves. This innovative technology aims to enhance robots&#x27; vision in challenging conditions, potentially aiding in search-and-rescue operations.",
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
        "news_header": "European allies are urging for support for Ukraine and a place at the Trump-Putin negotiations, pushing back against perceived concessions by the Trump administration.",
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
        "news_header": "Indian Prime Minister Modi visited the White House shortly after President Trump signed a plan for reciprocal tariffs on trading partners. A federal judge paused Trump&#x27;s executive order on gender-affirming care for trans youth, and Hamas announced it will release three Israeli hostages on Saturday, maintaining the ceasefire with Israel.",
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
        "news_header": "In a phone call with Putin, Trump ends U.S. efforts to isolate Russia, stating that Ukraine&#x27;s NATO membership is &#x27;impractical&#x27; and the return of occupied territories is &#x27;illusionary&#x27;, aligning with Putin&#x27;s agenda.",
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
        "news_header": "The trade agreement between India and the United States is nearing finalization, with President Trump and Prime Minister Modi discussing increased arms trade and the sale of F-35 fighters.",
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
        "news_header": "A group in Senegal has successfully encouraged thousands of communities to abandon the practice of genital mutilation, a taboo and longstanding issue affecting an estimated 230 million women and girls across Africa, the Middle East, and Asia.",
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
        "news_header": "President Trump and Prime Minister Modi held a joint news conference at the White House, where Modi praised Trump to avoid new tariffs imposed by the administration.",
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
        "news_header": "A kayaker was briefly trapped in the mouth of a humpback whale off the coast of Chile, but was released unharmed. In Brazil, a factory fire injured at least 20 people and caused two fatalities.",
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
        "news_header": "A driver drove into a labor union demonstration in Munich, injuring 30 people, including children. Authorities believe it was an attack.",
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
        "news_header": "Russian officials celebrate after Trump abandons three years of U.S. policy on Ukraine and announces a likely meeting with Putin for peace negotiations.",
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
        "news_header": "Despite significant rainfall in California during 2023, only 25% of the water lost from aquifers since 2006 was replenished. A study revealed that while surface reservoirs received over 90 billion gallons of water, deeper aquifers remained largely unaffected.",
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
        "news_header": "The far-right AfD party is on track for its strongest result in Germany&#x27;s election, fielding its first candidate to lead the country.",
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
        "news_header": "NATO allies stress the importance of including Ukraine and Europe in peace negotiations, especially as Trump plans to meet with Putin.",
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
        "news_header": "Hamas plans to release three Israeli hostages, facilitating a resolution to the ceasefire dispute in Gaza.",
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
        "news_header": "Drone footage captures Europe&#x27;s tallest volcano, Mount Etna, erupting with increased lava and ash emissions. In other news, Alexander Lukashenko faces scrutiny after a controversial election win in Belarus, while tens of thousands gather in Greece to remember victims of a railway disaster.",
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
        "news_header": "Parents of four Israeli female hostages released from Hamas captivity described their daughters&#x27; abuse, including starvation, intimidation, and forced labor. The hostages were held in tunnels and buildings, witnessing violence and participating in propaganda.",
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
        "news_header": "A Brazilian woman, Deise Moura dos Anjos, suspected of poisoning her husband&#x27;s family with arsenic-laced Christmas cake, was found dead in her prison cell, likely a suicide.",
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
        "news_header": "Residents of the Jenin refugee camp in the occupied West Bank are witnessing increased Israeli military operations following a ceasefire in Gaza. Many civilians feel unsafe as the Israeli Defense Forces (IDF) conduct raids, resulting in deaths, displacements, and destruction of infrastructure.",
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
        "news_header": "A new study reveals that zebras and giraffes form a symbiotic relationship, traveling together to enhance their survival chances against predators. By using video cameras, researchers observed that zebras often spend time with giraffes, synchronizing their movements and feeding patterns.",
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
        "news_header": "Electricity prices peak on Friday at 18:00, reaching over 37 cents per kilowatt-hour due to low wind power production. Prices are high in the morning as well, with a rise to nearly 34 cents at 8:00.",
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
        "news_header": "GEO April 4th Options Begin Trading",
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
        "news_header": "AEO April 4th Options Begin Trading",
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
        "news_header": "Interesting HLI Put And Call Options For September 19th",
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
        "news_header": "Thursday 2/13 Insider Buying Report: MTH, MAGN",
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
        "news_header": "Interesting KNF Put And Call Options For March 21st",
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
        "news_header": "Wall Street is pushing up in trade tensions and inflation statistics",
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
        "news_header": "Two major lenders, Santander and Barclays, have launched mortgage deals with interest rates below 4%, driven by increased competition and expectations of further cuts by the Bank of England.",
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
        "news_header": "The Finnish Minister of Education is removing references to foreign and security policy from the Finnish Academy bill. This decision comes after feedback from the scientific community, emphasizing that the freedom of science is constitutionally protected.",
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
        "news_header": "Questions have arisen regarding the accuracy of Chancellor Rachel Reeves&#x27;s online CV and her expenses while working at Halifax Bank of Scotland. An investigation revealed discrepancies in her claimed tenure at the Bank of England, where she stated she worked for a decade but actually left in March 2006 after five and a half years.",
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
        "news_header": "Nepal, ranked 74th in the 2024 World Press Freedom Index, is facing concerns over a new bill aimed at regulating social media, which critics argue could suppress freedom of speech and political dissent.",
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
        "news_header": "Less than a month into Donald Trump&#x27;s second term, a new trade war between the US and China is emerging with retaliatory tariffs from both sides. The US imposed a 10% tariff on all Chinese imports, prompting China to respond with tariffs on US crude oil and other goods.",
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
        "news_header": "Nordnet experienced a data breach affecting 1,500 customers across the Nordic countries, with specific numbers being 500 in Denmark and Finland, 350 in Norway, and 200 in Sweden.",
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
        "news_header": "Norovirus is highly infectious, causing vomiting, diarrhea, and nausea, and has seen a significant increase in outbreaks in the U.S. this winter. With no vaccines or specific treatments available, it leads to millions of illnesses and thousands of deaths annually.",
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
        "news_header": "The UK government is seeking exemptions from US tariffs on British steel, which President Trump announced as a 25% tax. Business Secretary Jonathan Reynolds argues that the UK&#x27;s steel exports to the US are minimal and used in defense, making a strong case for exemption.",
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
        "news_header": "Ghana remains largely untouched by jihadist attacks, despite its proximity to Burkina Faso, which has faced significant terrorist threats. Analysts warn that Ghanaians, particularly unemployed youth, are at risk of recruitment by jihadist groups, often through family ties across the border.",
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
        "news_header": "A result check is being sent to the Information Officer - is there news about selling business?",
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
        "news_header": "Neste and Qt Group saw significant fluctuations in their results among the largest companies on the Helsinki Stock Exchange, which is experiencing an active trading day.",
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
        "news_header": "Merus Power will provide information regarding the electrical storage order.",
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
        "news_header": "Excel Composites is expected to show improvement compared to a slow previous period. The company will release a business review for October-December on Friday.",
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
        "news_header": "Wulff buys a majority stake in Convido for less than a million euros, aiming to strengthen its position in the Finnish accounting market.",
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
        "news_header": "Merger talks between Honda and Nissan have collapsed due to disagreements over the structure of the partnership. The proposed merger aimed to create a $60 billion auto group to compete against rivals, particularly in China.",
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
        "news_header": "Portugal, Italy, Spain, and Greece, once seen as the EU&#x27;s problem children, have shown robust growth, particularly in renewable energy, while the overall eurozone economy stagnates, largely due to Germany&#x27;s struggles.",
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
        "news_header": "Analysts expect slow movements from the rumor to be better, with a slight fall in dividends.",
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
        "news_header": "Heikki Malinen&#x27;s recipe in Outokumpu needs a new narrative as Neste&#x27;s performance report disappoints investors. CEO Heikki Malinen has a lot on his plate, and the transformation schedule for the Porvoo refinery is now in jeopardy, according to stock exchange editor Silva Rehn.",
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
        "news_header": "The liquid stock is declining, which the analyst considers a major surprise. The negative trend is expected to persist, leading to pessimism, but no changes in strategy are deemed necessary.",
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
        "news_header": "Pension company Ilmarinen&#x27;s investments yielded 8.6 per cent",
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
        "news_header": "Housing portfolio launches own share purchase program",
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
        "news_header": "TikTok&#x27;s future in the US is uncertain, leading many to sideload the app due to restrictions from Apple and Google. Users are turning to third-party sites and VPNs to access TikTok, with significant increases in downloads reported.",
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
        "news_header": "A research team has discovered that the northern region of Iraq, particularly around the Zagros Mountains, is sinking due to an oceanic slab beneath the Earth&#x27;s surface.",
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
        "news_header": "The UK economy grew by 0.1% in the last quarter of the previous year, driven by construction and services, despite predictions of contraction. However, living standards fell slightly compared to 2023.",
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
        "news_header": "A group of 288 Romanian mercenaries, led by Horatiu Potra, returned from the conflict zone in the Democratic Republic of Congo, where many were captured by the M23 militia.",
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
        "news_header": "Keva made a 10.4% return on investments",
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
        "news_header": "A blast at Afghanistan&#x27;s Urban Development and Housing Ministry killed one and injured three. A man attempted an attack but was shot by guards before reaching his target.",
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
        "news_header": "Metso&#x27;s turnover fell by five percent, but the order book increased by 13 percent from October to December. Net sales decreased to EUR 1.27 billion, and adjusted operating profit declined from EUR 225 million last year.",
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
        "news_header": "The chairman of the committee is different from the company&#x27;s board of directors",
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
        "news_header": "S- group&#x27;s operating result grew brisk",
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
        "news_header": "Commerzbank is preparing to cut about 3,900 jobs, or 10% of its workforce, by 2028 as it seeks to remain independent amid takeover advances from UniCredit. The bank aims for a net profit of \u20ac4.2 billion by 2028 and is focusing on efficiency gains through digitalization.",
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
        "news_header": "North Korea is demolishing a facility at Mount Kumgang resort used for family reunions of those separated since the Korean War. South Korea condemned this act as inhumane and urged an immediate halt, emphasizing that North Korea must take responsibility.",
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