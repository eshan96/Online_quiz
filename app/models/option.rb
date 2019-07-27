class Option < ApplicationRecord

    # store :value, accessors: [ :op1, :op2, :op3, :op4 ], coder: JSON
     belongs_to :question
end
