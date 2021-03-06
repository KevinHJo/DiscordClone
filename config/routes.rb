Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create]
    resources :channels, only: [:index, :show, :create, :destroy]
    resources :servers, only: [:index, :show, :create, :destroy]
  end

  mount ActionCable.server, at: '/cable'
end