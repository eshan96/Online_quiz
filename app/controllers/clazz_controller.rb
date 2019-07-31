class ClazzController < ApplicationController
    skip_before_action :verify_authenticity_token

def create
   
    
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

end

def show
      @clazzes = Clazz.find(params[:id])

      render json: {
          clazz: @clazzes
      }
end

def index
    @clazzes = Clazz.all

       render json: {
           status: :created,
           clazz: @clazzes
       }
end
# private 
#   def clazz_params
#    params.require(:clazz).permit(:clazz_name)  
# end
end 