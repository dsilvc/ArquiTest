# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

emergs = Emergency.destroy_all

emergs = Emergency.create([
    {tipo: 'alert', lat: -1.1, lon: 53.54667, location: 'quien sabe', message: 'ayua, nose donde ando', level: 10}, 
    {tipo: 'alert', lat: -1.13, lon: 53.49667, location: 'quien sabe', message: 'ayua, nose donde ando', level: 20},
    {tipo: 'alert', lat: -1.15, lon: 53.49667, location: 'quien sabe', message: 'ayua, nose donde ando', level: 30},
    {tipo: 'alert', lat: -1.14, lon: 53.53667, location: 'quien sabe', message: 'ayua, nose donde ando', level: 40},
    {tipo: 'alert', lat: -1.145, lon: 53.51667, location: 'quien sabe', message: 'ayua, nose donde ando', level: 50},
    {tipo: 'alert', lat: -1.13, lon: 53.47667, location: 'quien sabe', message: 'ayua, nose donde ando', level: 60},
    {tipo: 'alert', lat: -1.1, lon: 53.49567, location: 'quien sabe', message: 'ayua, nose donde ando', level: 70}
])
