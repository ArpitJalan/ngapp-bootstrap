Hnapp::Application.routes.draw do

  devise_for :users
  get '/test' => 'templates#index'
  get '/dashboard' => 'templates#index'
  get '/templates/:path.html' => 'templates#template', :constraints => { :path => /.+/  }

  root :to => "home#index"
end
