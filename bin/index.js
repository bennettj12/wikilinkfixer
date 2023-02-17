#!/usr/bin/env node
import { createHash } from 'crypto';
import { readFile, writeFile } from 'fs';
import parseArgs from 'minimist';

let output = '';
const argv = parseArgs(process.argv.slice(2));
readFile(`./${argv['_'][0]}`, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    data = data.split('\n');
    data.forEach((link) => {
        let url = new URL(link);
        let fileName = link.split('File:')[1];
        fileName = fileName.trim();
        let hash = createHash('md5').update(fileName).digest('hex');
        let p1 = hash[0];
        let p2 = hash[0] + hash[1];
        let resolvedLink = `https://${url.hostname}${argv['_'][1]}${p1}/${p2}/${fileName}`;
        output += resolvedLink + '\n';
    });

    
    
    writeFile('./output.txt', output, function(err) {
        if(err){
            return console.error(err);
        }
        console.log('output.txt created');
    });
})
