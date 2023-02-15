import { faker } from '.'

export const git = {
  branch: 'feed-index',
  commitEntry:
    'commit 932c1f923cbaa2cb143aab7b8aceecd6e37b1fac\r\n' +
    'Author: Christop Schroeder <Peyton.Schuppe@yahoo.com>\r\n' +
    'Date: Tue Feb 07 2023 16:29:08 GMT-0500 (Eastern Standard Time)\r\n' +
    '\r\n' +
    '    hack virtual sensor\r\n',
  commitMessage: 'compress haptic feed',
  commitSha: 'b6da2b1c158d03d2faf287a3b1e4a3cc58ae58bf',
  shortSha: '1fbbacc',
}

// prettier-ignore
export const {
    branch,
    commitEntry,
    commitMessage,
    commitSha,
    shortSha
} = faker.git

// prettier-ignore
export function all({
    branch          = [],
    commitEntry     = [],
    commitMessage   = [],
    commitSha       = [],
    shortSha        = [],
}: {
    branch?:         Parameters<typeof faker.git.branch>,
    commitEntry?:    Parameters<typeof faker.git.commitEntry>,
    commitMessage?:  Parameters<typeof faker.git.commitMessage>,
    commitSha?:      Parameters<typeof faker.git.commitSha>,
    shortSha?:       Parameters<typeof faker.git.shortSha>,
}) {

    return {
        branch:         faker.git.branch(       ...branch),
        commitEntry:    faker.git.commitEntry(  ...commitEntry),
        commitMessage:  faker.git.commitMessage(...commitMessage),
        commitSha:      faker.git.commitSha(    ...commitSha),
        shortSha:       faker.git.shortSha(     ...shortSha)
    } 
}
