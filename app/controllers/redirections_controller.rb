# frozen_string_literal: true

class RedirectionsController < ApplicationController
  before_action :load_redirection, except: %i[ create index ]
  def index
    @redirections = Redirection.all
  end

  def create
    if (redirection = Redirection.new(redirection_params)) && redirection.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Redirection") }
    else
      render status: :unprocessable_entity, json: { error: redirection.errors.full_messages.to_sentence }
    end
  end

  def show
  end

  def update
    if @redirection.update!(redirection_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Redirection") }
    else
      render status: :unprocessable_entity,
        json: { error: @redirection.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @redirection.destroy!
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Redirection") }
    else
      render status: :unprocessable_entity,
        json: { error: @redirection.errors.full_messages.to_sentence }
    end
  end

  private

    def redirection_params
      params.require(:redirection).permit(:to, :from)
    end

    def load_redirection
      @redirection = Redirection.find_by_id!(params[:id])
    end
end
