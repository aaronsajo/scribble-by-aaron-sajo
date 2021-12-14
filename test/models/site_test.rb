# frozen_string_literal: true

require "test_helper"

class SiteTest < ActiveSupport::TestCase
  def setup
    @site = build(:site)
  end

  def test_site_should_be_valid
    assert @site.valid?
  end

  def test_site_should_be_invalid_without_name
    @site.name = nil
    assert @site.invalid?
    assert_includes @site.errors.full_messages, "Name can't be blank"
  end

  def test_site_should_be_valid_without_password
    @site.password = nil
    assert @site.valid?
  end

  def test_site_should_be_invalid_small_password
    @site.password = "pass1"
    assert @site.invalid?
    assert_includes @site.errors.full_messages, "Password is too short (minimum is 6 characters)"
  end

  def test_site_should_be_invalid_without_number_in_password
    @site.password = "password"
    assert @site.invalid?
    assert_includes @site.errors.full_messages, "Password Require 1 letter and number"
  end

  def test_site_should_be_invalid_without_letter_in_password
    @site.password = "1234567"
    assert @site.invalid?
    assert_includes @site.errors.full_messages, "Password Require 1 letter and number"
  end
end
