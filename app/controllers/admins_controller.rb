class AdminsController < ApplicationController
    skip_before_action :verify_authenticity_token

def create
    
    
    @clazz = Clazz.create(
        clazz_name: params[:data][:clazz_name]
        
    )

      
      @subject = Subject.create(
           name: params[:data][:name]
       )    
      
       choice = { params[:data][:content], params[:data][:value] }
       choice.each do |q, v|
          Question.create(content: q, clazz_id: @clazz.id, subject_id: @subject.id)   
          v.each do |attrs|
            Option.create(value: attrs, question_id: @question.id)
       end
   end
    #    @question = Question.create(
    #        content: params[:data][:content],
    #        clazz_id: @clazz.id,
    #        subject_id: @subject.id
           
    #    )
       
       
        
    #    @options = Option.create(
    #     value: params[:data][:value],
    #        question_id: @question.id
    #     ) 
        # value: '[1, 2, 3, 4]'
        
        
    #    Rails.logger.info(@options.errors.inspect)
       
    
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