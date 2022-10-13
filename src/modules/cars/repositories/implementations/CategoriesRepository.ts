import { Category } from "../../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";
import { PrismaClient} from "@prisma/client";
import { Prisma } from "@prisma/client";

export const prisma = new PrismaClient()

class CategoriesRepository implements ICategoryRepository{
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

    async create({ data }: ICreateCategoryDTO): Promise<void> {
        const category = await prisma.categories.create({
            data
        })
    }
        
    // async list() { //: Promise<Category[]>
        //   const categories = await prisma.categories.findMany()
        //   return categories
    }

//     findByName(name: string): Category | undefined{
//         const category = this.categories.find(();
//         return category;
//     }
// }

export { CategoriesRepository }