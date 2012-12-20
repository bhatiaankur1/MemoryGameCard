class GameController < ApplicationController
	def index
		@game = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7].sort{rand() - 0.5}
	end
end
