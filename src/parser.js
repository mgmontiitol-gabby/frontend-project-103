import { readFileSync } from 'fs'; 
import path from 'path';


const parse = (filepath) => {
    const extension = path.extname(filepath);
    const content = readFileSync(filepath, 'utf-8');

    if (extension === '.json') {
        return JSON.parse(content);
    }

    throw new Error (`Formato NO Soportado: ${extension}`);
}
export default parse;