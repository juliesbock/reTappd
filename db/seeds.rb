# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## beers 
require 'open-uri';

beer1 = Beer.new({
  name: "Bomb!",
  style: "Stout - Imperial",
  description: "Bomb! is an imperial stout aged on Nordaggio's espresso beans, chocolate, vanilla beans, and ancho chile peppers. All the flavors meld to create a truly unique beer. The peppers add just the right amount of heat to complement the intense coffee and chocolate flavors.",
  abv: 13.0,
  brewery_id: 1
})

beer2 = Beer.new({
  name: "Rainbow Sherbert",
  style: "Sour - Fruited",
  description: "Summer forward sour ale with raspberry, pineapple and orange. Do yourself a favor and toss one in the cooler on your way to the pool or river, you deserve a rainbow!",
  abv: 5.2,
  brewery_id: 1,
  ibu: 65
})

beer3 = Beer.new({
  name: "Standard",
  style: "Farmhouse Ale",
  description: "Prairie Standard is our everyday beer. It's a light, crisp saison with a hoppy finish. This beer is dry hopped 1lb per bbl with Motueka hops. A lovely New Zealand hop with a spicy lime like flavor and aroma.",
  abv: 5.6,
  brewery_id: 1,
  ibu: 25
})

beer4 = Beer.new({
  name: "Phantasmagoria",
  style: "IPA - Imperial",
  description: "Phantasmagoria is an IPA that is low in malt flavors, but high in hops. We brew this beer as a nod to the big hoppy beers of the west coast. We use loads of citrusy and piney hops at the end of the boil and in the fermenter to make this beer a hop experience.",
  abv: 8.0,
  brewery_id: 1,
  ibu: 70
})

beer5 = Beer.new({
  name: "Prairie Paradise",
  style: "Stout - Imperial",
  description: "Imperial Stout Aged on Coconut and Vanilla.",
  abv: 13,
  brewery_id: 1
})

beer6 = Beer.new({
  name:  'Vape Tricks',
  style: 'Sour - Fruited',
  description: 'Sour ale aged on cherries.',
  abv: 5.9,
  brewery_id: 1
})


file1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bomb.jpeg')
file2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rainbow.jpg')
file3 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/standard.jpg')
file4 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/phantagas.jpeg')
file5 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/paradise.jpg')
file6 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/vapetrix.jpg')

beer1.photo.attach(io: file1, filename: 'bomb.jpg')
beer2.photo.attach(io: file2, filename: 'rainbow.jpg')
beer3.photo.attach(io: file3, filename: 'standard.jpg')
beer4.photo.attach(io: file4, filename: 'phantagas.jpeg')
beer5.photo.attach(io: file5, filename: 'paradise.jpg')
beer6.photo.attach(io: file6, filename: 'vapetrix.jpg')

beer1.save!
beer2.save!
beer3.save!
beer4.save!
beer5.save!
beer6.save!

## breweries 
brewery1 = Brewery.new({
  name: 'Prairie Artisan Ales',
  location: 'Krebs, OK',
  description: 'Welcome to the world of Prairie Artisan Ales. A company started by two brothers. We didn’t start it due to a lack of good beer, or whatever people like to say in this part of their website. We wanted to do something that was awesome. We have the talent, and most importantly the years of experience needed to get it done. So we did it. We have funded the company on our own, and only want to work with people that care about beer, super good beer. Our goal is to show people what is possible when you start with “step one”'
})

brewery2 = Brewery.new({
  name: 'Mikkeller',
  location: 'Copenhagen, Denmark',
  description: 'In 2006 he was a math and physics teacher that started experimenting with hops, malt and yeast back home in his kitchen in Copenhagen. Today Mikkel Borg Bjergsø exports his micro brewed beer to 40 different countries and is internationally acclaimed as one of the most innovative and cutting edge brewers in the world.'
})

# fileBrewery1 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/bomb.jpeg')
# fileBrewery2 = open('https://retappd-heroku.s3-us-west-1.amazonaws.com/rainbow.jpg')
# brewery1.photo.attach(io: fileBrewery1, filename: 'bomb.jpg')
# brewery2.photo.attach(io: fileBrewery2, filename: 'rainbow.jpg')


