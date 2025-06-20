// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import CompletedController from "./completed_controller"
application.register("completed", CompletedController)

import DeleteController from "./delete_controller"
application.register("delete", DeleteController)

import FileAddController from "./file_add_controller"
application.register("file-add", FileAddController)

import FlashTimeoutController from "./flash_timeout_controller"
application.register("flash-timeout", FlashTimeoutController)

import FormController from "./form_controller"
application.register("form", FormController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import TodoCompletedController from "./todo_completed_controller"
application.register("todo-completed", TodoCompletedController)
