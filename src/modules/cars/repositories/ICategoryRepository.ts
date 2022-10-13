import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    data:{
    name: string;
    description: string;
    }
}

interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({data}:ICreateCategoryDTO):  Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };