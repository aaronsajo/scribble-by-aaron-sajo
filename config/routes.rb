# frozen_string_literal: true

Rails.application.routes.draw do
  defaults format: :json do
    resources :categories, except: %i[new edit] do
      member do
        put "sort"
      end
    end
    resources :articles, except: %i[new edit]
    resource :sites, only: %i[show update]
    resources :redirections, except: %i[new edit]
  end
  root "home#index"
  get "*path", to: "home#index", via: :all
end
