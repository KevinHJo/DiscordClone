class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "chat_channel_#{params['threadId']}"
    self.load
  end

  def speak(data)
    post = Post.create(data['post'])
    socket = { post: post, type: 'post' }
    ChatChannel.broadcast_to("chat_channel_#{params['threadId']}", socket)
  end

  def load
    posts = Channel.find(params['threadId']).posts
    users = User.all
    socket = { posts: posts, type: 'posts', users: users }
    ChatChannel.broadcast_to("chat_channel_#{params['threadId']}", socket)
  end

  def update(data)
    post = Post.find(data['id'])
    post.update(body: data['body'])
    socket = { post: post, type: 'post' }
    ChatChannel.broadcast_to("chat_channel_#{params['threadId']}", socket)
  end

  def delete(data)
    post = Post.find(data['id'])
    socket = { postId: post.id, type: 'removedPost' }
    post.destroy
    ChatChannel.broadcast_to("chat_channel_#{params['threadId']}", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end