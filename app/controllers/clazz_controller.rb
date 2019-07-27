class ClazzController < ApplicationController
    skip_before_action :verify_authenticity_token

def create
   
    byebug
    @clazz = Clazz.create(
        clazz_name: params[:clazz][:clazz_name]
    )
       
        if @clazz
            render json: {
                status: :created,
                clazz: @clazz
            }
        else
            render json: {
                status: 500
                
            }

        end

         Rails.logger.info(@clazz.errors.inspect)

end

private 
  def clazz_params
   params.require(:clazz).permit(:clazz_name)  
end
end 