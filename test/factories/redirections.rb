# frozen_string_literal: true

FactoryBot.define do
  factory :redirection do
    to { Faker::Lorem.character[0..15] }
    from { Faker::Lorem.character[0..15] }
  end
end
