class GameController < ApplicationController
	def index
		@game = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].sort{rand() - 0.5}
		#@cardlist = {"#{@game[0]}" => "A","#{@game[1]}" => "B","#{@game[2]}" => "C","#{@game[3]}" => "D","#{@game[4]}" => "E","#{@game[5]}" => "F","#{@game[6]}" => "G","#{@game[7]}" => "H"},"#{@game[8]}" => "I","{@game[9]}" => "J","{@game[10]}" => "K","{@game[11]}" => "L","{@game[12]}" => "M","{@game[13]}" => "N","{@game[14]}" => "O"}
		@cardlist = Hash.new
		for i in 0..7
		   @cardlist.store("#{@game[i]}","#{i}")
		   @cardlist.store("#{@game[i+8]}","#{i}")
		end
	end
end
