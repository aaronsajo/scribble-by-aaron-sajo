# frozen_string_literal: true

Rails.application.routes.draw do

  resources :categories, only: %i[create index]
  resources :articles, except: %i[new edit]

  root "home#index"
  get "*path", to: "home#index", via: :all
end
