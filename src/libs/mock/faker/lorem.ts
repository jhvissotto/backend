import { faker } from '.'

export const sample = {
  lines: 'Nam nostrum sit laboriosam optio eaque.',
  paragraph:
    'Nihil nemo aliquid necessitatibus accusantium in omnis dolorem minus accusamus. Veniam error deleniti ipsam ullam reprehenderit. Dolorum commodi architecto mollitia non.',
  paragraphs:
    'Quod ratione sequi. Explicabo cupiditate placeat perferendis. Distinctio quis quis possimus ipsa ad. Ipsa quis corrupti.\n' +
    'Expedita porro tempore illo quas et cum excepturi quis quibusdam. Quidem odit at. Porro pariatur nisi.\n' +
    'Mollitia maiores modi culpa recusandae quidem vitae totam aliquam. Nisi odit illum nobis rerum dolore. Modi iusto dolorem blanditiis. Est inventore a. Unde dolores eius in.',
  sentence: 'Dolor aliquam voluptates.',
  sentences:
    'Recusandae deserunt quas saepe pariatur nulla cupiditate ad mollitia. Optio in iusto eius facilis illum dignissimos asperiores placeat. Est mollitia aliquam enim quidem quaerat quasi occaecati sunt blanditiis. Earum nulla rerum alias sequi facere.',
  slug: 'saepe-beatae-harum',
  text: 'Quam aliquam dignissimos repudiandae.',
  word: 'consequuntur',
  words: 'incidunt deserunt quis',
}

export const {
  lines,
  paragraph,
  paragraphs,
  sentence,
  sentences,
  slug,
  text,
  word,
  words,
} = faker.lorem

// prettier-ignore
export function all({
  lines       = [],
  paragraph   = [],
  paragraphs  = [],
  sentence    = [],
  sentences   = [],
  slug        = [],
  text        = [],
  word        = [],
  words       = [],
}: {
  lines?:      Parameters<typeof faker.lorem.lines>,
  paragraph?:  Parameters<typeof faker.lorem.paragraph>,
  paragraphs?: Parameters<typeof faker.lorem.paragraphs>,
  sentence?:   Parameters<typeof faker.lorem.sentence>,
  sentences?:  Parameters<typeof faker.lorem.sentences>,
  slug?:       Parameters<typeof faker.lorem.slug>,
  text?:       Parameters<typeof faker.lorem.text>,
  word?:       Parameters<typeof faker.lorem.word>,
  words?:      Parameters<typeof faker.lorem.words>,
}) {
  
  return {
    lines:       faker.lorem.lines(      ...lines),
    paragraph:   faker.lorem.paragraph(  ...paragraph),
    paragraphs:  faker.lorem.paragraphs( ...paragraphs),
    sentence:    faker.lorem.sentence(   ...sentence),
    sentences:   faker.lorem.sentences(  ...sentences),
    slug:        faker.lorem.slug(       ...slug),
    text:        faker.lorem.text(       ...text),
    word:        faker.lorem.word(       ...word),
    words:       faker.lorem.words(      ...words),
  } 
}
