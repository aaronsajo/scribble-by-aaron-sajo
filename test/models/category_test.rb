# frozen_string_literal: true

require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  def setup
    @category = build(:category)
  end

  def test_category_should_be_valid
    assert @category.valid?
  end

  def test_category_should_be_invalid_without_name
    @category.name = nil
    assert @category.invalid?
    assert_includes @category.errors.full_messages, "Name can't be blank"
  end
end
