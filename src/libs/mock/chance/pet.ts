import { chance } from '.'

// prettier-ignore
export const sample = { 
  animal: 'Bird',
}

// prettier-ignore
export const { 
  animal, 
} = chance

// prettier-ignore
export function all({
  animal = [],
}: {
  animal?: Parameters<typeof chance.animal>,
}) {
  
  return {
    animal: chance.animal(...animal),
  } 
}
