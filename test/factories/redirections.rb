# frozen_string_literal: true

FactoryBot.define do
  factory :redirection do
    to { Faker::Lorem.characters[0..15] }
    from { Faker::Lorem.characters[0..15] }
  end
end
