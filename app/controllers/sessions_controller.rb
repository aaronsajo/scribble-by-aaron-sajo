# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @site = Site.first
    unless @site.authenticate(login_params[:password])
      render status: :unauthorized, json: { error: "Incorrect credentials, try again." }
    end
  end

  private

    def login_params
      params.require(:login).permit(:password)
    end
end
