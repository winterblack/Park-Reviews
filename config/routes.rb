Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :parks, only: [:index, :create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
