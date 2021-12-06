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
end
