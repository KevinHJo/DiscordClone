# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

# User.create!([{
#     username: 'kevin',
#     email: 'kevin@email.com',
#     password: 'password'
# },
# {
#     username: 'rachael',
#     email: 'rachael@email.com',
#     password: 'password'
# },
# {
#     username: 'anne',
#     email: 'anne@email.com',
#     password: 'password'
# },
# {
#     username: 'jacob',
#     email: 'jacob@email.com',
#     password: 'password'
# },
# {
#     username: 'dante',
#     email: 'dante@email.com',
#     password: 'password'
# },
# {
#     username: 'ethan',
#     email: 'ethan@email.com',
#     password: 'password'
# }]);

User.create!([{
    username: 'Elrond',
    email: 'lordofrivendell@elfmail.com',
    password: 'password'
},
{
    username: 'Gandalf',
    email: 'balrogslayer69@wizmail.com',
    password: 'password'
},
{
    username: 'Aragorn',
    email: 'elesstrider@rangersonly.com',
    password: 'password'
},
{
    username: 'Legolas',
    email: 'legolass@elfmail.com',
    password: 'password'
},
{
    username: 'Gimli',
    email: 'xXaxedwarfXx@moria.com',
    password: 'password'
},
{
    username: 'Boromir',
    email: 'onedoesnotsimply@walkintomordor.com',
    password: 'password'
},
{
    username: 'Frodo',
    email: 'bagginurmom@theshire.com',
    password: 'password'
},
{
    username: 'Sam',
    email: 'poetaetoe@theshire.com',
    password: 'password'
},
{
    username: 'Merry',
    email: 'thing1@theshire.com',
    password: 'password'
},
{
    username: 'Pippin',
    email: 'thing2@theshire.com',
    password: 'password'
},
{
    username: 'kevin',
    email: 'kevin@email.com',
    password: 'password'
}]);

Post.create!([{
    body: '	Strangers from distant lands, friends of old. You have been summoned here to answer the threat of Mordor.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'Middle Earth stands upon the brink of destruction.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'None can escape it. You will unite or you will fall.',
    author_id: 1,
    channel_id: 1,
},
{
    body: 'Each race is bound to this fate, this one doom.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'Bring forth the Ring, Frodo',
    author_id: 1,
    channel_id: 1,
},
{
    body: 'So it\'s true',
    author_id: 6,
    channel_id: 1,
},
{
    body: 'In a dream I saw the Eastern sky grow dark. In the West a pale light lingered.',
    author_id: 6,
    channel_id: 1,
},
{
    body: 'A voice was crying, your doom is near at hand. Isildur\'s bane is found',
    author_id: 6,
    channel_id: 1,
},
{
    body: 'Boromir wtf stop',
    author_id: 1,
    channel_id: 1,
},
{
    body: 'Ash nazg durbatulk, ash nazg gimbatul, ash nazg thrakatulk agh burzum-ishi krimpatul.',
    author_id: 2,
    channel_id: 1,
},
{
    body: 'wtf',
    author_id: 5,
    channel_id: 1,
    parent_id: 10,
},
{
    body: 'stop that bro',
    author_id: 1,
    channel_id: 1,
    parent_id: 10,
},
{
    body: 'Never before has anyone uttered words of that tongue here in Imladris',
    author_id: 1,
    channel_id: 1,
    parent_id: 10,
},
{
    body: 'I do not ask your pardon Master Elrond for the Black Speech of Mordor may yet be heard in every corner of the West. The Ring is altogether evil.',
    author_id: 2,
    channel_id: 1,
    parent_id: 13,
},
{
    body: 'Aye it is a gift! A gift to the foes of Mordor. Why not use this Ring?',
    author_id: 6,
    channel_id: 1
},
{
    body: 'ugh',
    author_id: 4,
    channel_id: 1,
    parent_id: 15
},
{
    body: 'Long has my father, the Steward of Gondor kept the forces of Mordor at bay. By the blood of our people are your lands kept safe. Give Gondor the weapon of the enemy, let us use it against him',
    author_id: 6,
    channel_id: 1
},
{
    body: 'You cannot wield it. None of us can. The One Ring answers to Sauron alone. It has no other master',
    author_id: 3,
    channel_id: 1,
    parent_id: 17
},
{
    body: 'and what would a ranger know of this matter?',
    author_id: 6,
    channel_id: 1,
    parent_id: 18
},
{
    body: 'This is no mere Ranger. He is Aragorn son of Arathorn. You owe him your allegiance',
    author_id: 4,
    channel_id: 1,
    parent_id: 19
},
{
    body: 'Aragorn! This.. is Isildur\'s heir',
    author_id: 6,
    channel_id: 1
},
{
    body: 'and heir to the throne of Gondor',
    author_id: 4,
    channel_id: 1,
    parent_id: 21
},
{
    body: 'Havo dad, Legolas',
    author_id: 3,
    channel_id: 1
},
{
    body: 'Gondor has no King.',
    author_id: 6,
    channel_id: 1
},
{
    body: 'Gondor needs no King.',
    author_id: 6,
    channel_id: 1
},
{
    body: 'Aragorn is right. We cannot use it',
    author_id: 2,
    channel_id: 1
},
{
    body: 'Then what are we waiting for. Let\'s smash it.',
    author_id: 5,
    channel_id: 1
},
{
    body: 'The Ring cannot be destroyed, Gimli, son of Gloin, by any craft that we here possess.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'The Ring was made in the fires of Mount Doom. Only there can it be unmade.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'It must be taken deep into Mordor and cast back into the firey chasm from whence it came.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'One of you must do this.',
    author_id: 1,
    channel_id: 1
},
{
    body: 'One does not simply walk into Mordor.',
    author_id: 6,
    channel_id: 1
}
])