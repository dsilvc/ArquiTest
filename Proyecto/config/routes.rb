Rails.application.routes.draw do
  
  get 'emergencies/index'
  get 'emergencies/show'
  get 'home/index'

  root to: "emergencies#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  devise_for :users
  get 'user/:id', to: 'users#show', as: 'users_show'
end
