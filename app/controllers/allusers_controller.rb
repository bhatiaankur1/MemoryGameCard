class AllusersController < ApplicationController
before_filter :authenticate_user!
   

	def index
		@users = User.all
    authorize! :destroy,@user, :message => "Not authorized"
	end
  def update_admin
    authorize! :destroy,@user, :message => "Not authorized"
  	@user = User.find(params[:id]);
  	if @user.Roles == "Admin"
  		@user.Roles = ""
  	else
  		@user.Roles = "Admin"
  	end

  end
def delete_user
  	@user = User.find(params[:id]);
  	@user1 = User.find(current_user)
  	if @user1.Roles == "Admin"
  		User.find(params[:id]).destroy
  	end
  end
end
