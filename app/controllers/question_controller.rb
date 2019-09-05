class QuestionController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
       @questions = Question.where("clazz_id" => 9)

         if @questions
         render json: @questions  
         end
    end

end
