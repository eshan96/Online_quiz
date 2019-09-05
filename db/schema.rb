# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190817172131) do

  create_table "admins", force: :cascade do |t|
    t.integer "question_id"
    t.integer "subject_id"
    t.integer "clazz_id"
    t.integer "option_id"
    t.integer "answer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "clazzname"
  end

  create_table "answers", force: :cascade do |t|
    t.integer "option_id"
    t.integer "question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "answer_value"
  end

  create_table "clazzs", force: :cascade do |t|
    t.string "clazz_name"
    t.integer "subject_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "options", force: :cascade do |t|
    t.integer "question_id"
    t.text "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.text "content"
    t.integer "subject_id"
    t.integer "clazz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "studentclazzs", force: :cascade do |t|
    t.string "student_clazz_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "clazz_id"
  end

  create_table "tests", force: :cascade do |t|
    t.string "student_clazz_name"
    t.string "student_subject"
    t.string "student_name"
    t.string "rollno"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end