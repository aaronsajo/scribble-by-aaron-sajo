# frozen_string_literal: true

require "test_helper"

class RedirectionTest < ActiveSupport::TestCase
  def setup
    @redirection = build(:redirection)
    redirection2 = Redirection.create(from: "add", to: "new")
  end

  def test_redirection_should_be_valid
    assert @redirection.valid?
  end

  def test_redirection_should_be_invalid_for_duplicate_from
    @redirection.from = "add"
    assert @redirection.invalid?
  end
end
