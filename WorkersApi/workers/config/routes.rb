Rails.application.routes.draw do
  get '/calculate/:id', to: 'emergencies#calculate'
  get '/heartbeat', to: 'emergencies#heartbeat'
  get '/job/:id', to: 'emergencies#job'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
