# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!([{
    username: 'kevin',
    email: 'kevin@email.com',
    password: 'password'
},
{
    username: 'rachael',
    email: 'rachael@email.com',
    password: 'password'
},
{
    username: 'anne',
    email: 'anne@email.com',
    password: 'password'
},
{
    username: 'jacob',
    email: 'jacob@email.com',
    password: 'password'
},
{
    username: 'dante',
    email: 'dante@email.com',
    password: 'password'
},
{
    username: 'ethan',
    email: 'ethan@email.com',
    password: 'password'
}]);