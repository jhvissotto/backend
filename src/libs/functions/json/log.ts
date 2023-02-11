// prettier-ignore
export function log(input, consoleLog = false) {
    
  const data = JSON.stringify(input, null, 2)
  
  if (consoleLog) console.log('>> json.log:', data)
  
  return data
}
