Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :admins, only: [:create, :index] 
resources :clazz, only: [:create, :show, :index]
resources :student, only: [:create]
resources :test, only: [:show]
end
