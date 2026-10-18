#!/usr/bin/env node

import { program } from 'commander'; 
import parse from './src/parser.js';
import path from 'path';
import genDiff from './src/genDiff.js';

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);
    const data1 = parse(absolutePath1);
    const data2 = parse(absolutePath2);
    console.log(data1);
    console.log(data2);
    console.log(genDiff(data1, data2));
  })
  .parse(process.argv);