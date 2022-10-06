import { Category } from "../../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";
import { PrismaClient} from "@prisma/client";
import { Prisma } from "@prisma/client";

export const prisma = new PrismaClient()

class CategoriesRepository implements ICategoryRepository{
    private repository: Category[];
    private static INSTANCE: CategoriesRepository;
    
    private constructor() {
        this.repository = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    async create({ name, description }: ICreateCategoryDTO) {
        await prisma.categories.create({
        name,
        description
    }
        
    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined{
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
}

export { CategoriesRepository }