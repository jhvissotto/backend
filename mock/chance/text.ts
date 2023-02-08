import { chance } from '.'

export const sample = {
  paragraph:
    'Cavko oku obtamad du rifat ri dihiweega ci puvti zogsip zazzeci ku abekav rer jecsamfo. Dadkecut kevefup mewipop nuc ovi la laehpus agakero ha nab rivti ob or hijona biwci ze detroka fead. Pohose tobo tew sul cu pan si ga ekapa udope huwrudemi cu pombicbap fa diosa mujkejig wankim ugu. Burerace zacocsa bal zatfaace kuz ugak owkief joh narvewir varam seg evufamik jekutap lazbohuc mu anmoz. Hucce timforkar gacfici fut cepkaw vub mo li vi poz cinfouz rebdiep samozi epa wi gertato paile zirgiaha. Uvopurfe za sa jivogad da re duohaan kokteoda hellu batsa usvav opa gisave wedek keszerav. Fetudla cisius nentiz dok mos maw li cos sozih igebe tulpuw gawid ewjosim daatze darca.',
  sentence:
    'Mej acfu wovibom netohez av paed lieweon uje zogace sahece ri urviw vofcuk retawgev wu fojocup em.',
  syllable: 'vi',
  word: 'onadag',
}

// prettier-ignore
export const {
  paragraph,
  sentence,
  syllable,
  word,
} = chance

// prettier-ignore
export function all({
  paragraph = [],
  sentence  = [],
  syllable  = [],
  word      = [],
}: {
  paragraph?:  Parameters<typeof chance.paragraph>,
  sentence?:   Parameters<typeof chance.sentence>,
  syllable?:   Parameters<typeof chance.syllable>,
  word?:       Parameters<typeof chance.word>,
}) {

  return {
    paragraph:  chance.paragraph( ...paragraph),
    sentence:   chance.sentence(  ...sentence),
    syllable:   chance.syllable(  ...syllable),
    word:       chance.word(      ...word),
  } 
}
