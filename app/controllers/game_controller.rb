class GameController < ApplicationController
	before_filter :authenticate_user!
	def index
		@game = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7].sort{rand() - 0.5}
	end
	def game_end
		@user = User.find(params[:iduser]);
		if (params[:gamelevel] == "1")
			@user.LowestClicksL1 = params[:attempts].to_i
		elsif (params[:gamelevel] == "2")
			@user.LowestClicksL2 = params[:attempts].to_i
		else
			@user.LowestClicksL3 = params[:attempts].to_i
		end
		
		@user.save
	end

end
