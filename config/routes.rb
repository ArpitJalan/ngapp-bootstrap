Hnapp::Application.routes.draw do
  devise_for :users

  namespace :api, defaults: {format: :json} do
    devise_scope :user do
      resource :session, only: [:create, :destroy]
    end
    resources :posts, only: [:index, :create, :update, :destroy, :show] do
      resources :comments, only: [:index, :create, :update, :destroy]
    end
  end

  get '/test' => 'templates#index'
  get '/dashboard' => 'templates#index'
  get '/new' => 'templates#index'
  get '/templates/:path.html' => 'templates#template', :constraints => { :path => /.+/  }

  root :to => 'home#index'
end
