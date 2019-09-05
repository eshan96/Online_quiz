class AdminsController < ApplicationController
    skip_before_action :verify_authenticity_token

def create
    
    
    @clazz = Clazz.create(
        clazz_name: params[:data][:clazz_name]
        
    )

      
      @subject = Subject.create(
           name: params[:data][:name],
           clazz_id: @clazz.id
       )    
       
       params[:data][:content].each do |attrs|
        q = Question.create(
           content: attrs[:content],
           clazz_id: @clazz.id,
           subject_id: @subject.id
           
       )
       
       
             attrs[:value].each do |qoption|
                 Option.create(value: qoption, question_id: q.id)
             end
            
             Answer.create(
                 answer_value: attrs[:answer_value]
             )
            
        end
    # Rails.logger.info(q.errors.inspect)
    
    if @clazz
         render json: {
            status: :created,
            options: @options 
            # subject: @subject,
            # question: @question,
            
        }
    else
         render json: {
            status: 500
        }
    end
end


end