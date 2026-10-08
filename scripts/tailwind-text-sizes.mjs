export const textScale = [[12,'xs'],[14,'sm'],[16,'base'],[18,'lg'],[20,'xl'],[24,'2xl'],[30,'3xl'],[36,'4xl'],[48,'5xl'],[60,'6xl'],[72,'7xl'],[96,'8xl'],[128,'9xl']];
export function nearestTextSize(pixels) {
  return 'text-'+textScale.reduce((best, size) => Math.abs(size[0]-pixels) <= Math.abs(best[0]-pixels) ? size : best)[1];
}
function pixels(value, width) {
  if (/^[\d.]+px$/.test(value)) return parseFloat(value);
  if (/^[\d.]+vw$/.test(value)) return parseFloat(value)*width/100;
  if (/^[\d.]+vh$/.test(value)) return parseFloat(value)*9;
  if(value.startsWith('min(')) return Math.min(...value.slice(4,-1).split(',').map(part=>pixels(part,width)));
  const clamp=value.match(/^clamp\(([\d.]+)px,(.*),([\d.]+)px\)$/);
  if(clamp) return Math.max(+clamp[1],Math.min(+clamp[3],pixels(clamp[2],width)));
  throw new Error('Unsupported font size: '+value);
}
export function standardTextClasses(classes) {
  return classes.replace(/([^\s]*?)\[font-size:([^\]]+)\](!?)/g, (_, prefix, value, important) => {
    if(value==='inherit') return '';
    let previous;
    const utilities=[];
    for(const [breakpoint,width] of [['',390],['md:',768],['lg:',1024],['xl:',1280],['2xl:',1536]]) {
      const size=nearestTextSize(pixels(value,width));
      if(size!==previous) utilities.push(prefix+breakpoint+size+important);
      previous=size;
    }
    return utilities.join(' ');
  }).replace(/ {2,}/g,' ').trim();
}
export function standardCssFontSizes(css) {
  return css.replace(/font-size:\s*([\d.]+)(px|rem|em);/g, (_,value,unit)=>'@apply '+nearestTextSize(+value*(unit==='px'?1:16))+';');
}
