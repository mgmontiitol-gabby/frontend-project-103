#!/usr/bin/env node

import { program } from 'commander'; 

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);