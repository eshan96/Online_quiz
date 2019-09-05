class TestController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        
      @student = Test.create(
          student_name: params[:test][:student_name],
          student_clazz_name: params[:test][:student_clazz_name],
          rollno: params[:test][:rollno],
          student_subject: params[:test][:student_subject]
      )

    #   Rails.logger.info(@student.errors.inspect)

      if @student
        render json: {
            status: :created,
            student: @student    
        }
    else
        render json: {
           status: 500
        }
    end
    end

    def index
        @classname = Test.last(1).pluck(:student_clazz_name)
        @classid = Clazz.where("clazz_name" => @classname).pluck(:id)
        @questions = Question.where("clazz_id" => @classid)
        # @questionid = @questions.pluck(:id)
        # @options = Option.where("question_id" => @questionid).pluck(:value)
        # @final_questions = @questions.as_json(:include => @options)

       if @questions
       render json: @questions    
       
else
    render json: {
       status: 500
    }
end
    end
end
