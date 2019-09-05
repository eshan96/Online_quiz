Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :admins, only: [:create, :index] 
resources :clazz, only: [:create, :show, :index]
resources :test, only: [:create, :index]
resources :question, only: [:index]
end
