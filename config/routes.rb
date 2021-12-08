# frozen_string_literal: true

Rails.application.routes.draw do

  resources :categories, except: %i[new edit]
  resources :articles, except: %i[new edit]
  resource :sites, only: %i[show update]
  resources :redirections, except: %i[new edit]
  root "home#index"
  get "*path", to: "home#index", via: :all
end
