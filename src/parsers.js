import { readFileSync } from 'fs'; 
import path from 'path';
import { load } from 'js-yaml';


const parse = (filepath) => {
    const extension = path.extname(filepath);
    const content = readFileSync(filepath, 'utf-8');

    if (extension === '.json') {
        return JSON.parse(content);
    } else if (extension === '.yml' || extension === '.yaml'){
        return load(content)
    }

    throw new Error (`Formato NO Soportado: ${extension}`);
}
export default parse;