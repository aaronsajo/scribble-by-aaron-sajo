# frozen_string_literal: true

FactoryBot.define do
  factory :category do
    name { Faker::Lorem.characters[0..49] }
  end
end
