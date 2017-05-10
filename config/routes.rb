Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'comments#index'

  resource :comments

  get 'user_comments', to: 'comments#user_comments'
  get 'vk_auth', to: 'application#vk_auth'

end
