class CommentsController < ApplicationController

	def index
		@comments = Comment.all

		respond_to do |format|
			format.html
			format.json { render json: @comments }
		end
	end

	def user_comments
		@comments = Comment.all

		respond_to do |format|
		  headers["Access-Control-Allow-Origin"]  = "http://localhost:3000"
			format.json { render json: @comments }
		end
	end

	def new
		@comment = Comment.new
	end

	def create
	  @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to root_path
    else
      render "new"
    end
	end

	private

    def comment_params
      params.require(:comment).permit(:user_id, :body)
    end	

end
