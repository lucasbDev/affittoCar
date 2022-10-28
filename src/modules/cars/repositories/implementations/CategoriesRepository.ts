import { Category } from "../../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";
import { PrismaClient} from "@prisma/client";
import { Prisma } from "@prisma/client";

export const prisma = new PrismaClient()

class CategoriesRepository implements ICategoryRepository {
    private repository: Category[];
    // private static INSTANCE: CategoriesRepository;
    
    constructor() {
        this.repository = [];
    }

    // public static getInstance(): CategoriesRepository {
    //     if (!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ data }: ICreateCategoryDTO): Promise<Category> {
        const category = await prisma.categories.create({
            data
        })
        return category
    }
        
    async list({data}:ICreateCategoryDTO): Promise<Category[]>{
        const categories = await prisma.categories.findMany({
            where:{
                id:data.id
            }
        })
          return categories
    
    }
          
     async findByName ({ data }: ICreateCategoryDTO): Promise<Category > {
         const category = await prisma.categories.findFirst({
            where:{
                name: data.name 
            }
         })
         return category;
    }
}


export { CategoriesRepository }