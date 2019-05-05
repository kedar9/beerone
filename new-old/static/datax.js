// Saved beer data for homepage.
// Data based on following categories:
// Summer Beers
// Winter Beers
// Organic Beers (isOrganic: Y)
// Casual: Low ABV: (abv=1,4)
// New Beers: (Year: 2017 onwards)

const HIGHLIGHTS = {
  summer: [
    {
    name: 'Summer Shandy',
    description: 'Leinenkugel’s® Summer Shandy® is our traditional weiss beer with refreshing natural lemonade flavor that makes it the perfect summer beer.\nPairs with: BBQ chicken, fruit salads, watermelon and freshly caught, grilled fish.',
    highlightDesc: 'Weiss Beer. Natural Lemonade Flavor.',
    abv: '4.2',
    ibu: '11',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://brewerydb-images.s3.amazonaws.com/beer/Il48ZU/upload_8Uc1CI-contentAwareMedium.png',
    style: {
      id: 25,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \'traditional\' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.'
      }
    },
    {
    name: 'Samuel Adams Summer Ale',
    description: 'This American wheat ale is synonymous with summer. Our blend of orange, lemon & lime peels enhances the spicy, citrusy Hallertau Mittelfrüh Noble hops. Grains of paradise accent the crisp wheat character  with a subtle spice that finishes  clean. Iconic as it is refreshing, Summer Ale is just right for any summer day.',
    highlightDesc: 'Fresh Wheat Ale. Citrusy Blend of Orange, Lemon & Lime peels.',
    abv: '5.3',
    ibu: '7',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://brewerydb-images.s3.amazonaws.com/beer/Il48ZU/upload_8Uc1CI-contentAwareMedium.png',
    style: {
      id: 25,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \'traditional\' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.'
      }
    },
    {
    name: 'United in Orange',
    nameDisplay: 'United in Orange',
    description: 'United in Orange Pale Ale is brewed with orange juice and orange peel making it a Mile High favorite. A pale ale at its core, United in Orange is moderately hopped to provide balance to the sweetness derived from pale malt and orange juice. Mandarin hops impart subtle aromas of tangerine and citrus which complements the orange flavors.',
    highlightDesc: 'Pale Ale brewed with Orange Juice & Orange Peel.',
    abv: '5.3',
    ibu: '30',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://brewerydb-images.s3.amazonaws.com/beer/Il48ZU/upload_8Uc1CI-contentAwareMedium.png',
    style: {
      id: 25,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \'traditional\' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.'
      }
    },
  ],
  winter: [
    {
    name: '35th Anniversary  - Brewer\'s Reserve',
    description: 'Inspired by the special ale Sierra Nevada Brewing Company brewed for their 30th anniversary, Brewers Reserve highlights pioneering history and the innovative spirit. It is a blend of their three most acclaimed ales: Oak Barrel-Aged Bigfoot, dry-hopped Celebration IPA and fresh Pale Ale.',
    abv: '8',
    isOrganic: 'N',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-contentAwareMedium.png',
    style: {
      id: 14,
      name: 'Strong Ale',
      description: 'Light amber to mid-range brown in color, strong ales are medium to full bodied with a malty sweetness and may have low levels of roast malt character. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A rich, often sweet and complex estery character may be evident. Very low levels of diacetyl are acceptable. Chill haze is acceptable at low temperatures. (This style may often be split into two categories, strong and very strong.)'
      }
    },
    {
    id: 'MqTIG4',
    name: '72 Imperial',
    description: 'Just sit back and enjoy the ride.\r\n\r\nBrewed with chocolate from Colorado\'s very own Rocky Mountain Chocolate Factory, Inc., this Imperial Chocolate Cream Stout is full of rich, toasted chocolate notes with hints of dark fruit. 72 Imperial will take you where you need to go. Just sit back and enjoy the ride.',
    abv: '7.2',
    ibu: '11',
    availableId: 2,
    isOrganic: 'N',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-contentAwareMedium.png',
    style: {
      id: 44,
      name: 'Specialty Stouts',
      shortName: 'Stout',
      description: 'See British Origin American-Style Imperial Porter Imperial porters are very dark brown to black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt, caramel and cocoa-like sweetness should be in harmony with medium-low to medium hop bitterness. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment malt derived sweetness and hop character. Hop flavor and aroma may vary from being low to medium-high. Diacetyl (butterscotch) levels should be absent.'
      }
    },
    {
    id: '4fKoj3',
    name: 'Budweiser Black Crown',
    description: 'With a blend of two-row caramel malt and four types of domestic hops, Budweiser Black Crown is finished on a bed of Beechwood chips for a smooth, balanced taste. Incorporating the proprietary yeast directly descended from the original Budweiser yeast strain used by Adolphus Busch in 1876, Budweiser Black Crown retains the key characteristics of Budweiser with its clean taste and high drinkability.',
    abv: '6',
    isOrganic: 'N',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/4fKoj3/upload_Nn1p0M-contentAwareMedium.png',
    style: {
      id: 101,
      name: 'American-Style Amber Lager',
      description: 'American-style amber lagers are light amber to amber or copper colored. They are medium bodied. There is a noticeable degree of caramel-type malt character in flavor and often in aroma. This is a broad category in which the hop bitterness, flavor, and aroma may be accentuated or may only be present at relatively low levels, yet noticeable. Fruity esters, diacetyl, and chill haze should be absent.',
      }
    },
    {
    name: 'Boomerang',
    description: 'Boomerang is an American IPA that slings fruit-forward and floral flavors of Australian hops for an assertive, intercontinental escapes from winter’s grasp.',
    abv: '6.7',
    isOrganic: 'N',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/AEFy0R/upload_jNQBNH-medium.png',
    style: {
      id: 30,
      name: 'American-Style India Pale Ale',
      description: 'American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale',
      }
    }
  ],
  organic: [
    {
    name: 'Estate Ale',
    description: 'Here in the sun-drenched fields of California’s North Valley, the black soil is rich with promise.\r\nIn winter, rows of barley seed are laid in the freshly tilled dirt. In spring, trellises are set for hops.\r\n\r\nFrom our fields comes a remarkable homegrown ale, made with organic wet hops and barley grown at our brewery here in Chico and one of the few estate-made ales produced anywhere in the world!\r\n\r\nThis Estate Ale is rich with the flavors of the valley—featuring hops with earthy, grapefruit-like flavors and layered spicy aromas and barley with mild sweetness and smooth, toasted flavors. Together, these crops grow alongside the brewery to make a truly unique brew.',
    abv: '6.7',
    ibu: '67',
    availableId: 2,
    isOrganic: 'Y',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/LDb6oj/upload_XUdu5D-contentAwareMedium.png',
    srm: {
      id: 7,
      hex: 'F39C00'
      },
    style: {
      id: 125,
      name: 'Specialty Beer',
      description: 'These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.',
      }
    },
    {
    name: 'Green Valley Wild Hop Lager',
    description: 'Wild Hop Lager is unique and distinctive. It is made one batch at a time. It does not use any genetically modified products, pesticides or commercial fertilizers. Wild Hop Lager is made from 100% organic barley malt, certified by the USDA and the organic organization Oregon tilth.',
    abv: '5',
    availableId: 1,
    isOrganic: 'Y',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/GVNZZQ/upload_bvBPR5-contentAwareMedium.png',
    srm: {
      id: 5,
      name: '5',
      hex: 'FBB123'
    },
    style: {
      id: 97,
      name: 'American-Style Premium Lager',
      description: 'This style has low malt (and adjunct) sweetness, is medium bodied, and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \'premium\' (based on price) may not fit this definition.',
      }
    },
    {
    name: 'Wheat Of The Moment',
    abv: '5.7',
    isOrganic: 'Y',
    isRetired: 'N',
    labels: 'https://brewerydb-images.s3.amazonaws.com/beer/Jjw7Pd/upload_0NF6Nt-contentAwareMedium.png',
    style: {
      id: 112,
      name: 'Light American Wheat Ale',
      description: 'This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt, and hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor are typical but at low levels however, phenolic, clove-like characteristics should not be perceived. Color is usually straw to light amber, and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. These beers are typically served with the yeast in the bottle, and are cloudy when served.',
      }
    }
  ],
  casual: [
    {
    name: 'Kaliber',
    description:
    abv: '0.5',
    highlightDesc: 'Alcohol Content',
    highlightNum: '0.5%',
    glasswareId: 5,
    availableId: 1,
    styleId: 139,
    isOrganic: 'N',
    isRetired: 'N',
    labels: {
      icon: 'https://brewerydb-images.s3.amazonaws.com/beer/e4in1c/upload_T06m9q-icon.png',
      medium: 'https://brewerydb-images.s3.amazonaws.com/beer/e4in1c/upload_T06m9q-medium.png',
      large: 'https://brewerydb-images.s3.amazonaws.com/beer/e4in1c/upload_T06m9q-large.png',
      contentAwareIcon: 'https://brewerydb-images.s3.amazonaws.com/beer/e4in1c/upload_T06m9q-icon.png',
      contentAwareMedium: 'https://brewerydb-images.s3.amazonaws.com/beer/e4in1c/upload_T06m9q-medium.png',
      contentAwareLarge: 'https://brewerydb-images.s3.amazonaws.com/beer/e4in1c/upload_T06m9q-large.png'
      },
    status: 'verified',
    statusDisplay: 'Verified',
    servingTemperature: 'cold',
    servingTemperatureDisplay: 'Cold - (4-7C/39-45F)',
    createDate: '2012-05-30 20:29:03',
    updateDate: '2018-11-02 02:15:14',
    glass: {
      id: 5,
      name: 'Pint',
      createDate: '2012-01-03 02:41:33'
      },
    available: {
      id: 1,
      name: 'Year Round',
      description: 'Available year round as a staple beer.'
      },
    style: {
      id: 139,
      categoryId: 11,
      category: {
        id: 11,
        name: 'Hybrid/mixed Beer',
        createDate: '2012-03-21 20:06:46'
        },
      name: 'Non-Alcoholic (Beer) Malt Beverages',
      shortName: 'Non-Alcoholic',
      description: 'Non-alcoholic (NA) malt beverages should emulate the character of a previously listed category/subcategory designation but without the alcohol (less than 0.5 percent). Non-alcoholic (beer) malt beverages will inherently have a profile lacking the complexity and balance of flavors which can be attributed to alcohol. They should accordingly not be assessed negatively for reasons related to the absence of alcohol.',
      createDate: '2012-03-21 20:06:46',
      updateDate: '2015-04-07 15:47:18'
      }
    },

    {
    id: 'yagN3u',
    name: 'Miller64',
    nameDisplay: 'Miller64',
    description: 'Miller64 was introduced as the perfect choice for consumers striving to maintain a sense of healthy balance in their busy lifestyles. Combining a fresh, crisp flavor with only 64 calories and 2.4 carbohydrates, Miller64 is a guiltless pleasure for moments of relaxation.',
    abv: '2.8',
    highlightDesc: 'Alcohol Content',
    highlightNum: '2.8%',
    glasswareId: 5,
    availableId: 1,
    styleId: 94,
    isOrganic: 'N',
    isRetired: 'N',
    labels: {
      icon: 'https://brewerydb-images.s3.amazonaws.com/beer/yagN3u/upload_s3QkjZ-icon.png',
      medium: 'https://brewerydb-images.s3.amazonaws.com/beer/yagN3u/upload_s3QkjZ-medium.png',
      large: 'https://brewerydb-images.s3.amazonaws.com/beer/yagN3u/upload_s3QkjZ-large.png',
      contentAwareIcon: 'https://brewerydb-images.s3.amazonaws.com/beer/yagN3u/upload_s3QkjZ-contentAwareIcon.png',
      contentAwareMedium: 'https://brewerydb-images.s3.amazonaws.com/beer/yagN3u/upload_s3QkjZ-contentAwareMedium.png',
      contentAwareLarge: 'https://brewerydb-images.s3.amazonaws.com/beer/yagN3u/upload_s3QkjZ-contentAwareLarge.png'
      },
    status: 'verified',
    statusDisplay: 'Verified',
    createDate: '2012-01-03 02:43:42',
    updateDate: '2018-11-02 02:15:14',
    glass: {
      id: 5,
      name: 'Pint',
      createDate: '2012-01-03 02:41:33'
      },
    available: {
      id: 1,
      name: 'Year Round',
      description: 'Available year round as a staple beer.'
      },
    style: {
      id: 94,
      categoryId: 8,
      category: {
        id: 8,
        name: 'North American Lager',
        createDate: '2012-03-21 20:06:46'
        },
      name: 'American-Style Light (Low Calorie) Lager',
      shortName: 'American Light Lager',
      description: 'These beers are extremely light colored, light in body, and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn, rice, or other grain or sugar adjuncts are often used. Flavor is mild and hop bitterness and aroma is negligible to very low. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.',
      ibuMin: '5',
      ibuMax: '10',
      abvMin: '3.5',
      abvMax: '4.4',
      srmMin: '2',
      srmMax: '4',
      ogMin: '1.024',
      fgMin: '1.002',
      fgMax: '1.008',
      createDate: '2012-03-21 20:06:46',
      updateDate: '2015-04-07 15:39:35'
      }
    },
    {
    id: 'Dvucvo',
    name: 'Bud Light Blends Lemon',
    nameDisplay: 'Bud Light Blends Lemon',
    abv: '3.5',
    highlightDesc: 'Alcohol Content',
    highlightNum: '3.5%',
    styleId: 119,
    isOrganic: 'N',
    isRetired: 'N',
    labels: {
      icon: 'https://brewerydb-images.s3.amazonaws.com/beer/Dvucvo/upload_OjxheQ-icon.png',
      medium: 'https://brewerydb-images.s3.amazonaws.com/beer/Dvucvo/upload_OjxheQ-medium.png',
      large: 'https://brewerydb-images.s3.amazonaws.com/beer/Dvucvo/upload_OjxheQ-large.png',
      contentAwareIcon: 'https://brewerydb-images.s3.amazonaws.com/beer/Dvucvo/upload_OjxheQ-contentAwareIcon.png',
      contentAwareMedium: 'https://brewerydb-images.s3.amazonaws.com/beer/Dvucvo/upload_OjxheQ-contentAwareMedium.png',
      contentAwareLarge: 'https://brewerydb-images.s3.amazonaws.com/beer/Dvucvo/upload_OjxheQ-contentAwareLarge.png'
      },
    status: 'verified',
    statusDisplay: 'Verified',
    createDate: '2018-08-01 15:05:42',
    updateDate: '2018-11-02 02:15:14',
    style: {
      id: 119,
      categoryId: 11,
      category: {
        id: 11,
        name: 'Hybrid/mixed Beer',
        createDate: '2012-03-21 20:06:46'
        },
      name: 'Fruit Beer',
      shortName: 'Fruit Beer',
      description: 'Fruit beers are any beers using fruit or fruit extracts as an adjunct in either, the mash, kettle, primary or secondary fermentation providing obvious (ranging from subtle to intense), yet harmonious, fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality, it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit, the brewer should also specify the classic style.',
      ibuMin: '5',
      ibuMax: '70',
      abvMin: '2.5',
      abvMax: '12',
      srmMin: '5',
      srmMax: '50',
      ogMin: '1.03',
      fgMin: '1.006',
      fgMax: '1.03',
      createDate: '2012-03-21 20:06:46',
      updateDate: '2015-04-07 15:44:21'
      }
    }
  ],
  new: [
    {
    id: 'sAQpBR',
    name: 'Hoptimum',
    nameDisplay: 'Hoptimum',
    description: 'A whole-cone hurricane of flavor.\r\n\r\nOur brewers selected the finest, most flavorful hops, pushed them beyond their limits and forged them into this all-new triple IPA. This reimagined Hoptimum is our hoppiest beer yet, providing a blend of tropical and citrus hop aroma that delivers a refined yet aggressive character.',
    abv: '9.6',
    ibu: '68',
    styleId: 31,
    isOrganic: 'N',
    isRetired: 'N',
    year: 2018,
    highlightDesc: 'Aggressively Tasty.',
    highlightNum: 'Estd. 2018',
    labels: {
      icon: 'https://brewerydb-images.s3.amazonaws.com/beer/sAQpBR/upload_rkHIZ7-icon.png',
      medium: 'https://brewerydb-images.s3.amazonaws.com/beer/sAQpBR/upload_rkHIZ7-medium.png',
      large: 'https://brewerydb-images.s3.amazonaws.com/beer/sAQpBR/upload_rkHIZ7-large.png',
      contentAwareIcon: 'https://brewerydb-images.s3.amazonaws.com/beer/sAQpBR/upload_rkHIZ7-contentAwareIcon.png',
      contentAwareMedium: 'https://brewerydb-images.s3.amazonaws.com/beer/sAQpBR/upload_rkHIZ7-contentAwareMedium.png',
      contentAwareLarge: 'https://brewerydb-images.s3.amazonaws.com/beer/sAQpBR/upload_rkHIZ7-contentAwareLarge.png'
      },
    status: 'verified',
    statusDisplay: 'Verified',
    createDate: '2018-09-03 17:44:52',
    updateDate: '2018-11-02 02:15:14',
    style: {
      id: 31,
      categoryId: 3,
      category: {
        id: 3,
        name: 'North American Origin Ales',
        createDate: '2012-03-21 20:06:45'
        },
      name: 'Imperial or Double India Pale Ale',
      shortName: 'Imperial IPA',
      description: 'Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it\'s balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.',
      ibuMin: '65',
      ibuMax: '100',
      abvMin: '7.5',
      abvMax: '10.5',
      srmMin: '5',
      srmMax: '13',
      ogMin: '1.075',
      fgMin: '1.012',
      fgMax: '1.02',
      createDate: '2012-03-21 20:06:45',
      updateDate: '2015-04-07 15:26:46'
      }
    },

    {
    id: 'z8iAm9',
    name: 'Beer Camp: East Meets West IPA',
    nameDisplay: 'Beer Camp: East Meets West IPA',
    description: 'An IPA, of course. We\'re blending our two approaches to the IPA in this East Meets West IPA. Sierra Nevada\'s malt body and profile was blended with the heavy-handed, very late hopping schedule employed by Tree House to create a new, hybrid IPA. Lightly bitter and heavy with citrus-like hop flavor.',
    abv: '7',
    ibu: '40',
    availableId: 2,
    styleId: 30,
    isOrganic: 'N',
    isRetired: 'N',
    year: 2017,
    highlightDesc: 'East Meets West. Hybrid IPA.',
    highlightNum: 'Estd. 2017',
    labels: {
      icon: 'https://brewerydb-images.s3.amazonaws.com/beer/z8iAm9/upload_e3qSlR-icon.png',
      medium: 'https://brewerydb-images.s3.amazonaws.com/beer/z8iAm9/upload_e3qSlR-medium.png',
      large: 'https://brewerydb-images.s3.amazonaws.com/beer/z8iAm9/upload_e3qSlR-large.png',
      contentAwareIcon: 'https://brewerydb-images.s3.amazonaws.com/beer/z8iAm9/upload_e3qSlR-contentAwareIcon.png',
      contentAwareMedium: 'https://brewerydb-images.s3.amazonaws.com/beer/z8iAm9/upload_e3qSlR-contentAwareMedium.png',
      contentAwareLarge: 'https://brewerydb-images.s3.amazonaws.com/beer/z8iAm9/upload_e3qSlR-contentAwareLarge.png'
      },
    status: 'verified',
    statusDisplay: 'Verified',
    originalGravity: '1.066',
    createDate: '2017-05-19 13:36:22',
    updateDate: '2018-11-02 02:15:14',
    available: {
      id: 2,
      name: 'Limited',
      description: 'Limited availability.'
      },
    style: {
      id: 30,
      categoryId: 3,
      category: {
        id: 3,
        name: 'North American Origin Ales',
        createDate: '2012-03-21 20:06:45'
        },
      name: 'American-Style India Pale Ale',
      shortName: 'American IPA',
      description: 'American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale',
      ibuMin: '50',
      ibuMax: '70',
      abvMin: '6.3',
      abvMax: '7.5',
      srmMin: '6',
      srmMax: '14',
      ogMin: '1.06',
      fgMin: '1.012',
      fgMax: '1.018',
      createDate: '2012-03-21 20:06:45',
      updateDate: '2015-04-07 15:26:37'
      }
    },
    {
    id: 'x7GusT',
    name: 'Barleywine',
    nameDisplay: 'Barleywine',
    description: 'Despite its name, a Barleywine (or Barley Wine) is very much a beer, albeit a strong and often intense beer. In fact, it\'s one of the strongest styles. Lively and fruity, sometimes sweet, sometimes bittersweet, but always alcoholic. A brew of this strength and complexity can be a challenge to the palate. Expect anything from an amber to a dark brown color, with aromas ranging from rich fruits to bold hops. The body is typically thick, alcohol will definitely be perceived, and flavors range from dominant dark fruits to palate smacking, resiny hops. English varieties are quite different from American efforts, which are often heavily hopped with high alpha oil American hops to create a more bitter brew. English versions tend to be more rounded and balanced with a slightly lower alcohol content, though this is not always the case. Most Barleywines can be cellared for years and will age much like wine.',
    availableId: 2,
    styleId: 34,
    isOrganic: 'N',
    isRetired: 'N',
    year: 2015,
    highlightDesc: 'Bold Aroma. Strong Beer.',
    highlightNum: 'Estd. 2016',
    labels: {
      icon: 'https://brewerydb-images.s3.amazonaws.com/beer/x7GusT/upload_E1Co0Y-icon.png',
      medium: 'https://brewerydb-images.s3.amazonaws.com/beer/x7GusT/upload_E1Co0Y-medium.png',
      large: 'https://brewerydb-images.s3.amazonaws.com/beer/x7GusT/upload_E1Co0Y-large.png',
      contentAwareIcon: 'https://brewerydb-images.s3.amazonaws.com/beer/x7GusT/upload_E1Co0Y-contentAwareIcon.png',
      contentAwareMedium: 'https://brewerydb-images.s3.amazonaws.com/beer/x7GusT/upload_E1Co0Y-contentAwareMedium.png',
      contentAwareLarge: 'https://brewerydb-images.s3.amazonaws.com/beer/x7GusT/upload_E1Co0Y-contentAwareLarge.png'
      },
    status: 'verified',
    statusDisplay: 'Verified',
    createDate: '2015-02-25 13:09:05',
    updateDate: '2018-11-02 02:15:14',
    available: {
      id: 2,
      name: 'Limited',
      description: 'Limited availability.'
      },
    style: {
      id: 34,
      categoryId: 3,
      category: {
        id: 3,
        name: 'North American Origin Ales',
        createDate: '2012-03-21 20:06:45'
        },
      name: 'American-Style Barley Wine Ale',
      shortName: 'American Barleywine',
      description: 'American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.',
      ibuMin: '60',
      ibuMax: '100',
      abvMin: '8.4',
      abvMax: '12',
      srmMin: '11',
      srmMax: '22',
      ogMin: '1.09',
      fgMin: '1.024',
      fgMax: '1.028',
      createDate: '2012-03-21 20:06:46',
      updateDate: '2015-04-07 15:27:08'
      }
    }
  ]
}

module.exports = {
  HIGHLIGHTS
};
