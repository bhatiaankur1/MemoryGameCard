class GameController < ApplicationController
	before_filter :authenticate_user!
	def index
		@game = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7].sort{rand() - 0.5}
	end
	def game_end
		@user = User.find(params[:iduser]);
		@user.LowestClicksL1 = params[:attempts].to_i
		@user.save
	end

end
