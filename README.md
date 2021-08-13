# Discord (Clone)

[DiscordClone](https://discord-kevin.herokuapp.com/#/login) is a platform where users can communicate and interact with friends around the world. It provides custom spaces where users can chat with each other in real time.

## Table of Contents
+ [Technologies](#technologies)
+ [Channels](#channels)

## Technologies
+ Discord Clone utilizes a rails backend to manage and access a postgresql database.
+ The frontend consists of javascript, using react and redux libraries to provide a smooth (we'll get there) viewing experience to the viewer.
+ Chat channels are created using Action Cable to ensure that users will not have to refresh their page to see new, edited, or deleted messages.

## Features
### Live Chat
One of the major goals of this project was to create channels where users could log in on different browsers and seemlessly interact with each other without having to refresh the page.

![Example](https://media.giphy.com/media/gsT6yrko5bIKu84UyZ/giphy.gif)

In order to accomplish this, I explored technologies that were new to me: websockets and Action Cable. In the rails backend, I created a channel class called ChatChannel that dynamically creates channel names based on the params that are passed into it when a component in the frontend creates a new subscription. The channel uses the same params to find the specified channel in the backend, loads its posts and users, and sends that information to the front end to be used in the display.

```javascript
class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel_#{params['threadId']}"
    self.load
  end

  def load
    channel = Channel.find(params['threadId'])
    posts = channel.posts
    users = channel.users
    socket = { posts: posts, type: 'posts', users: users }
    ChatChannel.broadcast_to("chat_channel_#{params['threadId']}", socket)
  end
.
.
.
end
```
### Servers and Channels
An extremely important component of Discord Clone is the structure involved in servers and channels. In the rails backend, channels have a foreign id linking them to servers. I also included joins tables for both server users and channel users. In the future, this will help determine whether a logged in user can view and enter a server as well as determine whether a logged in user can view and enter a channel within a server. When creating a channel, the frontend will display a form component with a local state that's been populated using the current server's id as the server_id.

![image](./app/assets/images/discord_app_channel_creation.png)
