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
		  headers['Access-Control-Allow-Origin']  = 'http://localhost:3000'
		  # there address blog front-end
			format.json { render json: @comments }
		end
	end

	def new
		@comment = Comment.new
	end

	def create
		respond_to do |format|
			format.json do 
			  @comment = Comment.new(user_id: params[:user_id], body: params[:comment_body])
		    if @comment.save
		      redirect_to root_path
		    else
		      render 'new'
		    end
			end
		end
	end

	private

    def comment_params
      params.require(:comment).permit(:user_id, :body)
    end	

end
