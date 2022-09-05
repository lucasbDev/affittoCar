import fs from "fs";
import csvParse from "csv-parser";

class ImportCategoryUseCase {

    execute(file: Express.Multer.File ): void {
        //leitura do arquivo 
        const stream = fs.createReadStream(file.path);

        const parseFile = csvParse();

        //pedaços do arquivo
        stream.pipe(parseFile)

        parseFile.on("data", async (line) => {
        });
    }
}

export { ImportCategoryUseCase };