# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def authenticate_user_using_x_auth_token
    auth_token = request.headers["X-Auth-Token"].presence
    site = Site.first
    if site.password_digest?
      unless site && auth_token &&
        ActiveSupport::SecurityUtils.secure_compare(
          site.authentication_token, auth_token
        )
        render status: :unauthorized, json: {
          error: "Could not authenticate with the provided credentials"
        }
      end
    end
  end

  private

    def record_not_found
      render json: { error: t("not_found") }, status: :not_found
    end
end
