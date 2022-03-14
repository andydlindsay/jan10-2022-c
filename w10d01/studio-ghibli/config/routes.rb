Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # controller#method
  # get 'login', to: 'users#login'

  # resources :movies, except: [:show, :create, :destroy, :new]

  # resources :movies

  # resources :characters

  resources :movies do
    resources :characters
  end
end
