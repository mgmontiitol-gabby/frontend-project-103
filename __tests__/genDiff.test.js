import { test, expect } from 'vitest';
import genDiff from '../src/genDiff';
import parse from '../src/parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const filepath1 = join(__dirname, '..', '__tests__', 'fixtures', 'file1.json');
const filepath2 = join(__dirname, '..', '__tests__', 'fixtures', 'file2.json');

test ('comparar dos archivos JSON flat', () => {
    const data1 = parse(filepath1);
    const data2 = parse(filepath2);
    const result = genDiff(data1, data2);
expect(result).toBe(
`{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`
);
});