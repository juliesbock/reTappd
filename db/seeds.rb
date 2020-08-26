# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## beers 
require 'open-uri';

Brewery.destroy_all
Beer.destroy_all

brewery1 = Brewery.new({
  name: 'Prairie Artisan Ales',
  location: 'Krebs, OK',
  description: 'Welcome to the world of Prairie Artisan Ales. A company started by two brothers. We didn’t start it due to a lack of good beer, or whatever people like to say in this part of their website. We wanted to do something that was awesome. We have the talent, and most importantly the years of experience needed to get it done. So we did it. We have funded the company on our own, and only want to work with people that care about beer, super good beer. Our goal is to show people what is possible when you start with “step one”'
})

breweryFile1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/prairie_logo.jpg')
brewery1.photo.attach(io: breweryFile1, filename: 'prairie_logo.jpg')
brewery1.save!

# beers for brewery 1
beer1 = brewery1.beers.create!({
  name: "Bomb!",
  style: "Stout - Imperial",
  description: "Bomb! is an imperial stout aged on Nordaggio's espresso beans, chocolate, vanilla beans, and ancho chile peppers. All the flavors meld to create a truly unique beer. The peppers add just the right amount of heat to complement the intense coffee and chocolate flavors.",
  abv: 13.0,
})

beer2 = brewery1.beers.create!({
  name: "Rainbow Sherbert",
  style: "Sour - Fruited",
  description: "Summer forward sour ale with raspberry, pineapple and orange. Do yourself a favor and toss one in the cooler on your way to the pool or river, you deserve a rainbow!",
  abv: 5.2,
  ibu: 65
})

beer3 = brewery1.beers.create!({
  name: "Standard",
  style: "Farmhouse Ale",
  description: "Prairie Standard is our everyday beer. It's a light, crisp saison with a hoppy finish. This beer is dry hopped 1lb per bbl with Motueka hops. A lovely create! Zealand hop with a spicy lime like flavor and aroma.",
  abv: 5.6,
  ibu: 25
})

beer4 = brewery1.beers.create!({
  name: "Phantasmagoria",
  style: "IPA - Imperial",
  description: "Phantasmagoria is an IPA that is low in malt flavors, but high in hops. We brew this beer as a nod to the big hoppy beers of the west coast. We use loads of citrusy and piney hops at the end of the boil and in the fermenter to make this beer a hop experience.",
  abv: 8.0,
  ibu: 70
})

beer5 = brewery1.beers.create!({
  name: "Prairie Paradise",
  style: "Stout - Imperial",
  description: "Imperial Stout Aged on Coconut and Vanilla.",
  abv: 13
})

beer6 = brewery1.beers.create!({
  name:  'Vape Tricks',
  style: 'Sour - Fruited',
  description: 'Sour ale aged on cherries.',
  abv: 5.9,
})

beerFile1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bomb.jpeg')
beerFile2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rainbow.jpg')
beerFile3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/standard.jpg')
beerFile4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/phantagas.jpeg')
beerFile5 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/paradise.jpg')
beerFile6 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/vapetrix.jpg')

beer1.photo.attach(io: beerFile1, filename: 'bomb.jpg')
beer2.photo.attach(io: beerFile2, filename: 'rainbow.jpg')
beer3.photo.attach(io: beerFile3, filename: 'standard.jpg')
beer4.photo.attach(io: beerFile4, filename: 'phantagas.jpeg')
beer5.photo.attach(io: beerFile5, filename: 'paradise.jpg')
beer6.photo.attach(io: beerFile6, filename: 'vapetrix.jpg')


## brewery2
brewery2 = Brewery.new({
  name: 'Russian River Brewing Company',
  location: 'Windsor, CA',
  description: "Russian River Brewing Company was originally owned by Korbel Champagne Cellars in Guerneville, California and was founded on their historic and beautiful property amidst vineyards and redwoods near the Russian River. When Korbel decided to get out of the beer business in 2003, they generously offered the brewmaster, Vinnie Cilurzo and his wife Natalie the rights to the brand. Russian River Brewing might be something completely different now if it weren't for this incredible opportunity. The history of Russian River Brewing Company would be incomplete without a little background on the people who own it, operate it, and are passionate about their brewery and craft beer in general! "
})

breweryFile2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/brewery-rr.jpg')
brewery2.photo.attach(io: breweryFile2, filename: 'brewery-rr.jpg')
brewery2.save!

#beers for brewery2
rrBeer1 = brewery2.beers.new({
  name:  'Pliny the Elder',
  style: 'IPA - Imperial',
  description: 'A true leader in the hop-wars of the west coast, Pliny the Elder hits you over the head with hoppy bitterness and manages to smooth the rough edges out enough to become an enjoyable brew.',
  abv: 8.0,
  ibu: 100
})

rrBeer2 = brewery2.beers.new({
  name:  'Pliny the Younger',
  style: 'IPA - Triple',
  description: "Pliny the Younger was Pliny the Elder’s nephew, in the case of this beer, the 'Younger' is a triple IPA. Pliny the Younger is hopped three times more than our standard IPA, and is dry hopped four different times.",
  abv: 10.25,
  ibu: 90
})

rrBeer3 = brewery2.beers.new({
  name:  'Sanctification',
  style: 'American Wild Ale',
  description: "100% Brettanomyces Fermented Golden. The base recipe is for a Golden Ale, but they did not do the primary fermentation with 100% brettanomyces. The brett gives it some sour notes but not as much as it had been aged with lacto and pedio. It's rather refreshing on a warm day!",
  abv: 4.8,
  ibu: 10
})

rrBeer4 = brewery2.beers.new({
  name:  'Consecration',
  style: 'American Wild Ale',
  description: "Dark Ale aged in Cabernet Sauvignon barrels from local wineries. It is aged for 4 to 8 months with black currants, brettanomyces, lactobacillus, and pediococcus added to each barrel. Rich flavors of chocolate truffle, spice, tobacco, currants, and a bit of Cabernet. Very full-bodied, sip slowly!",
  abv: 10,
  ibu: 10
})

rrBeer5 = brewery2.beers.new({
  name:  'Blind Pig IPA',
  style: 'IPA - American',
  description: 'Blind Pig IPA was originally brewed by Vinnie at Blind Pig Brewing Co. in Temecula CA. Inspired by the original Blind Pig IPA, this beer is loaded with hop character but only has 6.0% ABV.',
  abv: 6.1,
  ibu: 70
})

rrBeerFile1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rr-elder.jpg')
rrBeerFile2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rr-younger.jpg')
rrBeerFile3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rr-wild-ale.jpg')
rrBeerFile4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rr-wild-ale2.jpg')
rrBeerFile5 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rr-pig.jpg')

rrBeer1.photo.attach(io: rrBeerFile1, filename: 'rr-elder.jpg')
rrBeer2.photo.attach(io: rrBeerFile2, filename: 'rr-younger.jpg')
rrBeer3.photo.attach(io: rrBeerFile3, filename: 'rr-wild-ale.jpg')
rrBeer4.photo.attach(io: rrBeerFile4, filename: 'rr-wild-ale2.jpg')
rrBeer5.photo.attach(io: rrBeerFile5, filename: 'rr-pig.jpg')

rrBeer1.save!
rrBeer2.save!
rrBeer3.save!
rrBeer4.save!
rrBeer5.save!

## brewery3
brewery3 = Brewery.new({
  name: 'Great Lakes Brewing Company',
  location: 'Cleveland, OH',
  description: 'Great Lakes Brewing Company (GLBC) was founded in 1988 by brothers Patrick and Daniel Conway in Cleveland, Ohio. Independent and employee-owned, GLBC is known for its award-winning portfolio of fresh, balanced, and flavorful beers with names and artwork that tell stories of the Great Lakes region. Since its founding, GLBC has remained a principle-centered brewery with a “triple bottom line” philosophy, balancing financial responsibility with social and environmental responsibility.'
})

breweryFile3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/brewery-glbc.jpg')
brewery3.photo.attach(io: breweryFile3, filename: 'brewery-glbc.jpg')
brewery3.save!

#beers for brewery3
greatLakesBeer0 = brewery3.beers.new({
  name: "Christmas Ale",
  style: "Winter Ale",
  description: "A holiday ale brewed with honey and spiced with fresh ginger and cinnamon.",
  abv: 7.5, 
  ibu: 30
})

greatLakesBeer1 = brewery3.beers.new({
  name: "Edmund Fitzgerald",
  style: "Porter - American",
  description: "A complex, roasty porter with a bittersweet, chocolate-coffee taste and bold hop presence. A bittersweet tribute to the legendary freighter's fallen crew--taken to soon when the gales of November came early",
  abv: 6, 
  ibu: 37
})

greatLakesBeer2 = brewery3.beers.new({
  name: "Chillwave Double IPA",
  style: "IPA - Imperial",
  description: "Hop-forward with a balanced blend of Mosaic and Nugget hops.",
  abv: 9,
  ibu: 80
})

greatLakesBeer3 = brewery3.beers.new({
  name: "Dortmunder Gold",
  style: "Lager",
  description: "A smooth lager that strikes a delicate balance between sweet malt and dry hop flavors.",
  abv: 5.8, 
  ibu: 30
})

greatLakesBeer4 = brewery3.beers.new({
  name: "Oktoberfest",
  style: "Marzen",
  description: "An amber lager with rich malt flavor balanced by fragrant noble hops.",
  abv: 6.5,
  ibu: 20
})

greatLakesFile0 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/glbc-christmas.jpg')
greatLakesFile1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/glbc-porter.jpg')
greatLakesFile2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/glbc-chillwave.jpg')
greatLakesFile3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/glbc-dort.jpg')
greatLakesFile4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/glbc-octoberfest.jpg')

greatLakesBeer0.photo.attach(io: greatLakesFile0, filename: 'glbc-christmas.jpg')
greatLakesBeer1.photo.attach(io: greatLakesFile1, filename: 'glbc-porter.jpg')
greatLakesBeer2.photo.attach(io: greatLakesFile2, filename: 'glbc-chillwave.jpg')
greatLakesBeer3.photo.attach(io: greatLakesFile3, filename: 'glbc-dort.jpg')
greatLakesBeer4.photo.attach(io: greatLakesFile4, filename: 'glbc-octoberfest.jpg')

greatLakesBeer0.save!
greatLakesBeer1.save!
greatLakesBeer2.save!
greatLakesBeer3.save!
greatLakesBeer4.save!

##brewery 4
brewery4 = Brewery.new({
  name: 'Anchor Brewing Company',
  location: 'San Francisco, CA',
  description: 'Brewing hand-crafted beer in the heart of San Francisco since 1896.'
})

breweryFile4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/brewery-Anchor.jpg')
brewery4.photo.attach(io: breweryFile4, filename: 'brewery-Anchor.jpg')
brewery4.save!


#Beers for brewery4
anchorBeer0 = brewery4.beers.new({
  name: "Anchor Steam Beer",
  style: "California Common",
  description: "San Francisco's famous Anchor Steam, the classic of American brewing tradition since 1896, is virtually handmade, with an exceptional respect for the ancient art of brewing. The deep amber color, thick creamy head, and rich flavor all testify to our traditional brewing methods.",
  abv: 4.9,
  ibu: 33
})

anchorBeer1 = brewery4.beers.new({
  name: "Merry Christmas & Happy New Year (Our Special Ale)",
  style: "Winter Warmer",
  description: "Our 2018 Christmas Ale has varying specialty malts, lending rich flavors of brûléed sugars, holiday spices and freshly baked banana bread with a velvety finish. The aromatics are quintessential for the holiday season: nutty candied yams and resinous pine. It pours a nice mahogany brown color with a fluffy, tan head.",
  abv: 6.9,
  ibu: 40
})

anchorBeer2 = brewery4.beers.new({
  name: "Anchor Porter",
  style: "Porter - American",
  description: "With deep black color, a thick, creamy head, rich chocolate, toffee and coffee flavors, and full-bodied smoothness, Anchor Porter is the epitome of a handcrafted dark beer. Anchor Porter became the first modern American porter when it was introduced in 1972. As we celebrate its 40th anniversary, our porter continues to reward those who look beyond its intimidating appearance to discover its smooth, full-bodied drinkability. Anchor Porter is the definitive American Porter.",
  abv: 5.6, 
  ibu: 40
})

anchorBeer3 = brewery4.beers.new({
  name: "Liberty Ale",
  style: "IPA - American",
  description: "San Francisco's famouse Liberty Ale was first brewed on the 18th of April, 1975 to celebrate the 200th anniversary of Paul Revere's historic ride. It is virtually handmade by the brewers of Anchor Steam Beer in one of the smallest and most traditional breweries in the world. Liberty Ale is made with the finest barley malt, fresh, whole hops, top fermenting yeast, pure water and the simple natural methods which reflect our exceptional respect for the ancient art of brewing.",
  abv: 5.9, 
  ibu: 47
})

anchorBeer4 = brewery4.beers.new({
  name: "Anchor California Lager",
  style: "Lager - Pale",
  description: "Made in San Francisco with two-row California barley, Cluster hops, and our own lager yeast, this all-malt brew is kräusened and lagered in our cellars. Its golden color, distinctive aroma, creamy head, balanced depth of flavor, and smooth finish make Anchor California Lager a delicious celebration of California’s unique craft brewing heritage.",
  abv: 4.9, 
  ibu: 19
})

anchorBeerFile0 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/abc-steam.jpg')
anchorBeerFile1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/abc-christmas.jpg')
anchorBeerFile2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/abc-porter.jpg')
anchorBeerFile3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/abc-liberty.jpg')
anchorBeerFile4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/abc-lager.jpg')

anchorBeer0.photo.attach(io: anchorBeerFile0, filename: 'abc-steam.jpg')
anchorBeer1.photo.attach(io: anchorBeerFile1, filename: 'abc-christmas.jpg')
anchorBeer2.photo.attach(io: anchorBeerFile2, filename: 'abc-porter.jpg')
anchorBeer3.photo.attach(io: anchorBeerFile3, filename: 'abc-liberty.jpg')
anchorBeer4.photo.attach(io: anchorBeerFile4, filename: 'abc-lager.jpg')

anchorBeer0.save!
anchorBeer1.save!
anchorBeer2.save!
anchorBeer3.save!
anchorBeer4.save!


##Budwiser brewery
brewery5 = Brewery.new({
  name: 'Anheuser-Busch',
  location: 'St. Louis, MO',
  description: 'The leading American brewer, bringing people together for more than 160 years.'
})

breweryFile5 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bud-brewery.png')
brewery5.photo.attach(io: breweryFile5, filename: 'bud-brewery.jpg')
brewery5.save!

#bud's beers
budBeer1 = brewery5.beers.new({
  name: "Bud Light",
  style: "Lager - American",
  description: "Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the world’s favorite light beer.",
  abv: 4.2,
  ibu: 6
})

budBeer2 = brewery5.beers.new({
  name: "Budweiser",
  style: "Lager - American",
  description: "Known as 'The King of Beers,' Budweiser was first introduced by Adolphus Busch in 1876 and it's still brewed with the same high standards today. Budweiser is a medium-bodied, flavorful, crisp American-style lager. Brewed with the best barley malt and a blend of premium hop varieties, it is an icon of core American values like optimism and celebration.",
  abv: 5.0,
  ibu: 12
})

budBeer3 = brewery5.beers.new({
  name: "Michelob ULTRA",
  style: "Lager - American Light",
  description: "A superior light beer. Brewed using the finest barley malt, select grains, all-imported hops and a pure-cultured yeast strain.",
  abv: 4.2,
  ibu: 10
})

budBeer4 = brewery5.beers.new({
  name: "Bud Light Lime",
  style: "Lager - American Light",
  description: "Busch Light offers a light, balanced flavor. It has a pleasant hop aroma and a smooth, slightly sweet finish.",
  abv: 4.2,
  ibu: 10
})


budBeerFile1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bud-light.jpg')
budBeerFile2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bud-full.jpg')
budBeerFile3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bud-ultra.jpg')
budBeerFile4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bud-lime.jpg')

budBeer1.photo.attach(io: budBeerFile1, filename: 'bud-light.jpg')
budBeer2.photo.attach(io: budBeerFile2, filename: 'bud-full.jpg')
budBeer3.photo.attach(io: budBeerFile3, filename: 'bud-ultra.jpg')
budBeer4.photo.attach(io: budBeerFile4, filename: 'bud-lime.jpg')

budBeer1.save!
budBeer2.save!
budBeer3.save!
budBeer4.save!


# fileBrewery1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bomb.jpeg')
# fileBrewery2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rainbow.jpg')
# brewery1.photo.attach(io: fileBrewery1, filename: 'bomb.jpg')
# brewery2.photo.attach(io: fileBrewery2, filename: 'rainbow.jpg')


