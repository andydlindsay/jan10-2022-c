# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running seeds..."

puts "creating the locations"
10.times do
  Location.create(
    name: Faker::Movies::HarryPotter.location
  )
end

puts "retrieve the locations"
locations = Location.all

puts "creating the characters"
25.times do
  Character.create(
    name: Faker::Movies::HarryPotter.character,
    quote: Faker::Movies::HarryPotter.quote,
    location: locations.sample
  )
end

puts "all done!"
