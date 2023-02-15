import { faker } from '.'

export const sample = {
  commonFileExt: 'gif',
  commonFileName: 'oh_monitor.pdf',
  commonFileType: 'image',
  cron: '* 18 12 11 *',
  directoryPath: '/Users',
  fileExt: 'cat',
  fileName: 'fantastic_keyboard_passenger.frame',
  filePath: '/dev/jordan.xbm',
  fileType: 'image',
  mimeType: 'application/x-dvi',
  networkInterface: 'P8enp5s0f1d3',
  semver: '1.3.5',
}

export const {
  commonFileExt,
  commonFileName,
  commonFileType,
  cron,
  directoryPath,
  fileExt,
  fileName,
  filePath,
  fileType,
  mimeType,
  networkInterface,
  semver,
} = faker.system

// prettier-ignore
export function all({
  commonFileExt    = [],            
  commonFileName   = [],             
  commonFileType   = [],             
  cron             = [],   
  directoryPath    = [],            
  fileExt          = [],      
  fileName         = [],       
  filePath         = [],       
  fileType         = [],       
  mimeType         = [],       
  networkInterface = [],               
  semver           = [],     
}: {
  commonFileExt?:    Parameters<typeof faker.system.commonFileExt>,
  commonFileName?:   Parameters<typeof faker.system.commonFileName>,
  commonFileType?:   Parameters<typeof faker.system.commonFileType>,
  cron?:             Parameters<typeof faker.system.cron>,
  directoryPath?:    Parameters<typeof faker.system.directoryPath>,
  fileExt?:          Parameters<typeof faker.system.fileExt>,
  fileName?:         Parameters<typeof faker.system.fileName>,
  filePath?:         Parameters<typeof faker.system.filePath>,
  fileType?:         Parameters<typeof faker.system.fileType>,
  mimeType?:         Parameters<typeof faker.system.mimeType>,
  networkInterface?: Parameters<typeof faker.system.networkInterface>,
  semver?:           Parameters<typeof faker.system.semver>,
}) {

  return {
    commonFileExt:    faker.system.commonFileExt(     ...commonFileExt),
    commonFileName:   faker.system.commonFileName(    ...commonFileName),
    commonFileType:   faker.system.commonFileType(    ...commonFileType),
    cron:             faker.system.cron(              ...cron),
    directoryPath:    faker.system.directoryPath(     ...directoryPath),
    fileExt:          faker.system.fileExt(           ...fileExt),
    fileName:         faker.system.fileName(          ...fileName),
    filePath:         faker.system.filePath(          ...filePath),
    fileType:         faker.system.fileType(          ...fileType),
    mimeType:         faker.system.mimeType(          ...mimeType),
    networkInterface: faker.system.networkInterface(  ...networkInterface),
    semver:           faker.system.semver(            ...semver),
  }
}
