# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Channel.destroy_all
ChannelUser.destroy_all

kevin = User.create!({username: 'kevin', email: 'kevin@email.com', password: 'password'})
rachael = User.create!({username: 'rachael', email: 'rachael@email.com', password: 'password'})
anne = User.create!({username: 'anne', email: 'anne@email.com', password: 'password'})
jacob = User.create!({username: 'jacob', email: 'jacob@email.com', password: 'password'})
dante = User.create!({username: 'dante', email: 'dante@email.com', password: 'password'})
ethan = User.create!({username: 'ethan', email: 'ethan@email.com', password: 'password'})
elrond = User.create!({username: 'Elrond', email: 'lordofrivendell@elfmail.com', password: 'password'})
gandalf = User.create!({username: 'Gandalf', email: 'balrogslayer69@wizmail.com', password: 'password'})
aragorn = User.create!({username: 'Aragorn', email: 'elesstrider@rangersonly.com', password: 'password'})
legolas = User.create!({username: 'Legolas', email: 'legolass@elfmail.com', password: 'password'})
gimli = User.create!({username: 'Gimli', email: 'xXaxedwarfXx@moria.com', password: 'password'})
boromir = User.create!({username: 'Boromir', email: 'onedoesnotsimply@walkintomordor.com', password: 'password'})
frodo = User.create!({username: 'Frodo', email: 'bagginurmom@theshire.com', password: 'password'})
sam = User.create!({username: 'Sam', email: 'poetaetoe@theshire.com', password: 'password'})
merry = User.create!({username: 'Merry', email: 'thing1@theshire.com', password: 'password'})
pippin = User.create!({username: 'Pippin', email: 'thing2@theshire.com', password: 'password'})
smeagol = User.create!({username: 'Smeagol', email: 'friendly@myprecious.com', password: 'password'})
gollum = User.create!({username: 'Gollum', email: 'notsofriendly@myprecious.com', password: 'password'})

council_of_elrond = Channel.create!(name: 'Council of Elrond', server_id: 1, private: false)
potato = Channel.create!(name: 'Po-tay-toes', server_id: 1, private: false)


ChannelUser.create!([{
    channel_id: council_of_elrond.id,
    user_id: elrond.id
},
{
    channel_id: council_of_elrond.id,
    user_id: gandalf.id
},
{
    channel_id: council_of_elrond.id,
    user_id: aragorn.id
},
{
    channel_id: council_of_elrond.id,
    user_id: legolas.id
},
{
    channel_id: council_of_elrond.id,
    user_id: gimli.id
},
{
    channel_id: council_of_elrond.id,
    user_id: boromir.id
},
{
    channel_id: council_of_elrond.id,
    user_id: frodo.id
},
{
    channel_id: council_of_elrond.id,
    user_id: sam.id
},
{
    channel_id: council_of_elrond.id,
    user_id: merry.id
},
{
    channel_id: council_of_elrond.id,
    user_id: pippin.id
},
{
    channel_id: council_of_elrond.id,
    user_id: kevin.id
},
{
    channel_id: potato.id,
    user_id: frodo.id
},
{
    channel_id: potato.id,
    user_id: sam.id
},
{
    channel_id: potato.id,
    user_id: smeagol.id
},
{
    channel_id: potato.id,
    user_id: kevin.id
},
{
    channel_id: potato.id,
    user_id: gollum.id
}
])

Post.create!([{
    body: '	Strangers from distant lands, friends of old. You have been summoned here to answer the threat of Mordor.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Middle Earth stands upon the brink of destruction.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'None can escape it. You will unite or you will fall.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'Each race is bound to this fate, this one doom.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Bring forth the Ring, Frodo',
    author_id: elrond.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'So it\'s true',
    author_id: boromir.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'In a dream I saw the Eastern sky grow dark. In the West a pale light lingered.',
    author_id: boromir.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'A voice was crying, your doom is near at hand. Isildur\'s bane is found',
    author_id: boromir.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'Boromir wtf stop',
    author_id: elrond.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'Ash nazg durbatulk, ash nazg gimbatul, ash nazg thrakatulk agh burzum-ishi krimpatul.',
    author_id: gandalf.id,
    channel_id: council_of_elrond.id,
},
{
    body: 'wtf',
    author_id: gimli.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Ash nazg durbatulk, ash nazg gimbatul, ash nazg thrakatulk agh burzum-ishi krimpatul.'),
},
{
    body: 'stop that bro',
    author_id: elrond.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Ash nazg durbatulk, ash nazg gimbatul, ash nazg thrakatulk agh burzum-ishi krimpatul.'),
},
{
    body: 'Never before has anyone uttered words of that tongue here in Imladris',
    author_id: elrond.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Ash nazg durbatulk, ash nazg gimbatul, ash nazg thrakatulk agh burzum-ishi krimpatul.'),
},
{
    body: 'I do not ask your pardon Master Elrond for the Black Speech of Mordor may yet be heard in every corner of the West. The Ring is altogether evil.',
    author_id: gandalf.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Never before has anyone uttered words of that tongue here in Imladris'),
},
{
    body: 'Aye it is a gift! A gift to the foes of Mordor. Why not use this Ring?',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'ugh',
    author_id: legolas.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Aye it is a gift! A gift to the foes of Mordor. Why not use this Ring?')
},
{
    body: 'Long has my father, the Steward of Gondor kept the forces of Mordor at bay. By the blood of our people are your lands kept safe. Give Gondor the weapon of the enemy, let us use it against him',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'You cannot wield it. None of us can. The One Ring answers to Sauron alone. It has no other master',
    author_id: aragorn.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Long has my father, the Steward of Gondor kept the forces of Mordor at bay. By the blood of our people are your lands kept safe. Give Gondor the weapon of the enemy, let us use it against him')
},
{
    body: 'and what would a ranger know of this matter?',
    author_id: boromir.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'You cannot wield it. None of us can. The One Ring answers to Sauron alone. It has no other master')
},
{
    body: 'This is no mere Ranger. He is Aragorn son of Arathorn. You owe him your allegiance',
    author_id: legolas.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'This is no mere Ranger. He is Aragorn son of Arathorn. You owe him your allegiance')
},
{
    body: 'Aragorn! This.. is Isildur\'s heir',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'and heir to the throne of Gondor',
    author_id: legolas.id,
    channel_id: council_of_elrond.id,
    parent_id: Post.find_by(body: 'Aragorn! This.. is Isildur\'s heir')
},
{
    body: 'Havo dad, Legolas',
    author_id: aragorn.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Gondor has no King.',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Gondor needs no King.',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Aragorn is right. We cannot use it',
    author_id: gandalf.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Then what are we waiting for. Let\'s smash it.',
    author_id: gimli.id,
    channel_id: council_of_elrond.id
},
{
    body: 'The Ring cannot be destroyed, Gimli, son of Gloin, by any craft that we here possess.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'The Ring was made in the fires of Mount Doom. Only there can it be unmade.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'It must be taken deep into Mordor and cast back into the firey chasm from whence it came.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'One of you must do this.',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'One does not simply walk into Mordor.',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Its black gates are guarded by more than just orcs. There is evil there that does not sleep and the great eye is ever watchful.',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Tis a barren wasteland, riddled with fire and ash and dust. The very air you breathe is a poisonous fume. Not with ten thousand men could you do this. It is folly.',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Have you heard nothing Lord Elrond has said? The Ring must be destroyed',
    author_id: legolas.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Have you heard nothing Lord Elrond has said? The Ring must be destroyed',
    author_id: legolas.id,
    channel_id: council_of_elrond.id
},
{
    body: 'and I suppose you think you\'re the one to do it.',
    author_id: gimli.id,
    channel_id: council_of_elrond.id
},
{
    body: 'and if we fail what then? What happens when Sauron takes back what is his?',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'I will be dead before I see the Ring in the hands of an elf.',
    author_id: gimli.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Never trust an elf.',
    author_id: gimli.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Do you not understand that while we bicker amongst ourselves, Sauron\'s power grows?! None can escape it! You\'ll all be destroyed',
    author_id: gandalf.id,
    channel_id: council_of_elrond.id
},
{
    body: 'I will take it',
    author_id: frodo.id,
    channel_id: council_of_elrond.id
},
{
    body: 'I will take the Ring to Mordor... Though, I do not know the way',
    author_id: frodo.id,
    channel_id: council_of_elrond.id
},
{
    body: 'I will help you bear this burden Frodo Baggins, as long as it is yours to bear.',
    author_id: gandalf.id,
    channel_id: council_of_elrond.id
},
{
    body: 'If by my life or death I can protect you, I will. You have my sword',
    author_id: aragorn.id,
    channel_id: council_of_elrond.id
},
{
    body: 'and you have my bow',
    author_id: legolas.id,
    channel_id: council_of_elrond.id
},
{
    body: 'and my axe',
    author_id: gimli.id,
    channel_id: council_of_elrond.id
},
{
    body: 'You carry the fate of us all little one. If this is indeed the will of the Council, then Gondor will see it done',
    author_id: boromir.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Mr Frodo\'s not going anywhere without me',
    author_id: sam.id,
    channel_id: council_of_elrond.id
},
{
    body: 'No indeed it is hardly possible to seperate you, even when he is summoned to a secret council and you are not!',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Wait! we\'re coming too!',
    author_id: merry.id,
    channel_id: council_of_elrond.id
},
{
    body: 'You\'d have to send us home tied up in a sack to stop us',
    author_id: merry.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Anyway you need people of intelligence on this sort of mission... quest... thing',
    author_id: pippin.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Well that rules you out Pip',
    author_id: merry.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Nine companions... So be it! You shall be the Fellowship of the Ring!',
    author_id: elrond.id,
    channel_id: council_of_elrond.id
},
{
    body: 'Great! Where are we going?',
    author_id: pippin.id,
    channel_id: council_of_elrond.id
}
])

Post.create!([{
    body: 'What\'s it doing?! Stupid, fat hobbit! You ruins it!',
    author_id: smeagol.id,
    channel_id: potato.id
},
{
    body: 'What\'s to ruin? There was hardly any meat on them. What we need is a few good taters',
    author_id: sam.id,
    channel_id: potato.id
},
{
    body: 'What\'s "taters", precious? What\'s "taters", eh?',
    author_id: smeagol.id,
    channel_id: potato.id
},
{
    body: 'Po-tay-toes!',
    author_id: sam.id,
    channel_id: potato.id
},
{
    body: 'Boil em, mash em, stick em in a stew.',
    author_id: sam.id,
    channel_id: potato.id
},
{
    body: 'Lovely big golden chips with a nice piece of fried fish.',
    author_id: sam.id,
    channel_id: potato.id
},
{
    body: '>:(',
    author_id: gollum.id,
    channel_id: potato.id
},
{
    body: 'Even you couldn\'t say no to that.',
    author_id: sam.id,
    channel_id: potato.id
},
{
    body: 'Oh yes, we could! Spoiling nice fish!',
    author_id: smeagol.id,
    channel_id: potato.id
},
{
    body: 'Give it to us raw, and wriggling! You keep nasty chips!',
    author_id: smeagol.id,
    channel_id: potato.id
},
{
    body: 'You\'re hopeless.',
    author_id: sam.id,
    channel_id: potato.id
}])

