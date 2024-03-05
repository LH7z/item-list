Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index] do
    member do
      get :follow
      get :unfollow
      get :friends
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "pages#home"
  get "about", to: "pages#about"
  resources :lists do
  end
  resources :to_do_lists do
  end
  get "to_do_lists/:id/complete", to: "to_do_lists#complete" , as: "complete"
end
