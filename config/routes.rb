# frozen_string_literal: true

Rails.application.routes.draw do
  defaults format: :json do
    resources :categories, except: %i[new edit] do
      member do
        put "sort"
      end
    end
    resources :articles, except: %i[new edit]
    resource :site, only: %i[show update]
    resources :redirections, except: %i[new edit]
    resource :session, only: :create
    namespace :public do
      resources :categories, only: :index
    end
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
