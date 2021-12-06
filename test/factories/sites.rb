# frozen_string_literal: true

FactoryBot.define do
  factory :site do
    name { Faker::Lorem.sentence[0..49] }
    password { "welcome1" }
  end
end
