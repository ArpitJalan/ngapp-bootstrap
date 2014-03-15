class Api::PostsController < Api::BaseController
  before_action :check_owner

  def index
    render json: post_list.posts
  end

  def create
    post = post_list.posts.create!(safe_params)
    render json: post, status: 201
  end

  def update
    post.update_attributes(safe_params)
    render nothing: true, status: 204
  end

  def destroy
    post.destroy
    render nothing: true, status: 204
  end

  private
    def post_list
      @post_list ||= TaskList.find(params[:task_list_id])
    end

    def post
      @post ||= post_list.posts.find(params[:id])
    end

    def safe_params
      params.require(:post).permit(:title, :url)
    end

    def check_owner
      permission_denied if current_user != post_list.owner
    end
end
