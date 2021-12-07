# frozen_string_literal: true

FactoryBot.define do
  factory :redirection do
    to { "MyString" }
    from { "MyString" }
  end
end
