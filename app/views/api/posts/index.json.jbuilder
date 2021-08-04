@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :channel_id, :author_id, :parent_id
    end
end