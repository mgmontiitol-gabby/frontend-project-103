import { test, expect } from 'vitest';
import genDiff from '../src/genDiff';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const filepath1 = join(__dirname, '..', '__tests__', 'fixtures', 'file1.json');
const filepath2 = join(__dirname, '..', '__tests__', 'fixtures', 'file2.json');

test ('comparar dos archivos JSON flat', () => {
    const result = genDiff(filepath1, filepath2);
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
    const result = genDiff(filepath1YML, filepath2YML);
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
    const result = genDiff(filepath1nested, filepath2nested);
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

test ('compara archivos anidados YML', () => {
    const result = genDiff(filepath1nestedYML, filepath2nestedYML);
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

test ('formato plano con archivos anidados', ()=> {
    const result = genDiff(filepath1nested, filepath2nested, 'plain');
expect(result).toBe(
`Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`    
  );
});

test ('formato json con archivos anidados', () => {
    const result = genDiff(filepath1nested, filepath2nested, 'json');
    const parsed = JSON.parse(result);
    expect (Array.isArray(parsed)).toBe(true);
    expect(parsed[0].key).toBe('common');
});