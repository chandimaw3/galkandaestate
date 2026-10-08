import fs from 'node:fs';
import path from 'node:path';
import { standardTextClasses, standardCssFontSizes } from './tailwind-text-sizes.mjs';
const root='frontend/src/pages';
let count=0;
for(const file of fs.readdirSync(root,{recursive:true}).filter(file=>file.endsWith('.jsx'))) {
  const target=path.join(root,file);
  const source=fs.readFileSync(target,'utf8');
  const converted=source.replace(/className=\{(String\.raw)?`([^`]*)`\}/g,(_,raw,classes)=>'className={'+(raw||'')+'`'+standardTextClasses(classes)+'`}');
  fs.writeFileSync(target,converted);
  count++;
}
const baseline='frontend/src/index.css';
fs.writeFileSync(baseline,standardCssFontSizes(fs.readFileSync(baseline,'utf8')));
console.log(`Updated ${count} pages to the default Tailwind text scale.`);
