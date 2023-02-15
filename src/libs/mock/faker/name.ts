import { faker } from '.'

export const sample = {
  firstName: 'Chandler',
  fullName: 'Shelia Kreiger',
  gender: 'Woman',
  jobArea: 'Metrics',
  jobDescriptor: 'International',
  jobTitle: 'Legacy Intranet Officer',
  jobType: 'Associate',
  lastName: 'Weber',
  middleName: 'Quinn',
  prefix: 'Miss',
  sex: 'male',
  sexType: 'male',
  suffix: 'II',
}

export const {
  firstName,
  fullName,
  gender,
  jobArea,
  jobDescriptor,
  jobTitle,
  jobType,
  lastName,
  middleName,
  prefix,
  sex,
  sexType,
  suffix,
} = faker.name

// prettier-ignore
export function all({
  firstName       = [],        
  fullName        = [],       
  gender          = [],     
  jobArea         = [],      
  jobDescriptor   = [],            
  jobTitle        = [],       
  jobType         = [],      
  lastName        = [],       
  middleName      = [],         
  prefix          = [],     
  sex             = [],  
  sexType         = [],      
  suffix          = [],     
}: {
  firstName?:      Parameters<typeof faker.name.firstName>,
  fullName?:       Parameters<typeof faker.name.fullName>,
  gender?:         Parameters<typeof faker.name.gender>,
  jobArea?:        Parameters<typeof faker.name.jobArea>,
  jobDescriptor?:  Parameters<typeof faker.name.jobDescriptor>,
  jobTitle?:       Parameters<typeof faker.name.jobTitle>,
  jobType?:        Parameters<typeof faker.name.jobType>,
  lastName?:       Parameters<typeof faker.name.lastName>,
  middleName?:     Parameters<typeof faker.name.middleName>,
  prefix?:         Parameters<typeof faker.name.prefix>,
  sex?:            Parameters<typeof faker.name.sex>,
  sexType?:        Parameters<typeof faker.name.sexType>,
  suffix?:         Parameters<typeof faker.name.suffix>,
}) {
  
  return {
    firstName:     faker.name.firstName(      ...firstName),
    fullName:      faker.name.fullName(       ...fullName),
    gender:        faker.name.gender(         ...gender),
    jobArea:       faker.name.jobArea(        ...jobArea),
    jobDescriptor: faker.name.jobDescriptor(  ...jobDescriptor),
    jobTitle:      faker.name.jobTitle(       ...jobTitle),
    jobType:       faker.name.jobType(        ...jobType),
    lastName:      faker.name.lastName(       ...lastName),
    middleName:    faker.name.middleName(     ...middleName),
    prefix:        faker.name.prefix(         ...prefix),
    sex:           faker.name.sex(            ...sex),
    sexType:       faker.name.sexType(        ...sexType),
    suffix:        faker.name.suffix(         ...suffix),
  } 
}
