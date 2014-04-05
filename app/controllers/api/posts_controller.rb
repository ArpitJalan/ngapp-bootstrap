class Api::PostsController < Api::BaseController
  # before_action :check_owner, only: [:show, :update, :destroy]
  before_action only: [:show, :update, :destroy]
  respond_to :html, :json

  def index
    # render json: current_user.posts
    respond_with current_user.posts
  end

  def show
    # render json: post
    respond_with post
  end

  def create
    post = current_user.posts.create!(safe_params)
    render json: post
  end

  def update
    post.update_attributes(safe_params)
    render nothing: true
  end

  def destroy
    post.destroy
    render nothing: true
  end

  private
    def check_owner
      permission_denied if current_user != post.owner
    end

    def post
      @post ||= Post.find(params[:id])
    end

    def safe_params
      params.require(:post).permit(:title, :url)
    end
end
