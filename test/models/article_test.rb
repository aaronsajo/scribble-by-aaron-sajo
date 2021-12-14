# frozen_string_literal: true

require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = build(:article)
  end

  def test_should_article_valid
    assert @article.valid?
  end

  def test_article_should_be_invalid_without_title
    @article.title = nil
    assert @article.invalid?
    assert_includes @article.errors.full_messages, "Title can't be blank"
  end

  def test_article_should_be_invalid_without_status
    @article.status = nil
    assert @article.invalid?
    assert_includes @article.errors.full_messages, "Status can't be blank"
  end

  def test_article_should_be_invalid_without_body
    @article.body = nil
    assert @article.invalid?
    assert_includes @article.errors.full_messages, "Body can't be blank"
  end
end
