import { readFileSync } from 'fs'; 

const parse = (filepath) => {
    const content = readFileSync(filepath, 'utf-8');
    return JSON.parse(content);
}
export default parse;