class GamesLevelsController < ApplicationController
	before_filter :authenticate_user!
	def index
		@game = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].sort{rand() - 0.5}
	end
	
end
