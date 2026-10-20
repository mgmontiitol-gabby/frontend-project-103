import { test, expect } from 'vitest';
import genDiff from '../src/genDiff';
import parse from '../src/parsers';
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

const filepath1YML = join(__dirname, '..', '__tests__', 'fixtures', 'file1.yml');
const filepath2YML = join(__dirname, '..', '__tests__', 'fixtures', 'file2.yml');

test ('comparar dos archivos YML', () => {
    const data1 = parse(filepath1YML);
    const data2 = parse(filepath2YML);
    const result = genDiff(data1, data2);
expect (result).toBe(
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

const filepath1nested = join(__dirname, '..', '__tests__', 'fixtures', 'file1-group.json');
const filepath2nested = join(__dirname, '..', '__tests__', 'fixtures', 'file2-group.json');
const filepath1nestedYML = join(__dirname, '..', '__tests__', 'fixtures', 'file1-group.yml');
const filepath2nestedYML = join(__dirname, '..', '__tests__', 'fixtures', 'file2-group.yml');

test ('compara archivos anidados JSON', () => {
    const data1 = parse(filepath1nested);
    const data2 = parse(filepath2nested);
    const result = genDiff(data1, data2);
expect (result).toBe (
`{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`
);
});

test ('compara archivos anidaos YML', () => {
    const data1 = parse(filepath1nestedYML);
    const data2 = parse(filepath2nestedYML);
    const result = genDiff(data1, data2);
expect(result).toBe(
`{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`
);
});