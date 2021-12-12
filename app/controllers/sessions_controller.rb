# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @site = Site.first
    unless @site.authenticate(login_params[:password])
      render status: :unauthorized, json: { error: t("incorrect_credentials") }
    end
  end

  private

    def login_params
      params.require(:login).permit(:password)
    end
end
