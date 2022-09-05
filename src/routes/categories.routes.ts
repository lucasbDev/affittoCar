import { response } from "express";
  
import multer from "multer";
import { Router } from "express";
import { request } from "http";
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/UseCases/createCategory";
import { CreateCategoryUseCase} from "../modules/cars/UseCases/createCategory/CreateCategoryUseCase";
import { listCategoriesController } from "../modules/cars/UseCases/listCategories";

const categoriesRoutes = Router();
// const categoriesRepository = new CategoriesRepository();
const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request,response);
})

categoriesRoutes.post("/import", upload.single("file"),(request,response) => {
    const { file } = request;
    console.log(file)
    return response.send();
})

export { categoriesRoutes };