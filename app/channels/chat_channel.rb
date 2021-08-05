class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
    self.load
  end

  def speak(data)
    post = Post.create(data['post'])
    socket = { post: post, type: 'post' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def load
    posts = Post.all
    socket = { posts: posts, type: 'posts' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def update(data)
    post = Post.find(data['id'])
    post.update(data['body'])
    socket = { post: post, type: 'post' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end