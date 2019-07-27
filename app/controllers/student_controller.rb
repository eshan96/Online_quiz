class StudentController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
      @student = Student.create(
          student_name: params[:student][:student_name],
          student_clazz_name: params[:student][:student_clazz_name],
          rollno: params[:student][:rollno],
          student_subject: params[:student][:student_subject]
      )

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
end
