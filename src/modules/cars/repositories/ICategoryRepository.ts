import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    data:{
    id?: string;
    name: string;
    description: string;
    }
}

interface ICategoryRepository {
    findByName({data}:ICreateCategoryDTO): Promise<Category>;
    list({data}:ICreateCategoryDTO): Promise<Category[]>;
    create({data}:ICreateCategoryDTO): Promise<Category>;
}

export { ICategoryRepository, ICreateCategoryDTO };