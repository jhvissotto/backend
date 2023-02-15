import { faker } from '.'

// prettier-ignore
export const sample = { 
    genre: 'Metal', 
    songName: 'Colors of the Wind' 
}

// prettier-ignore
export const {
    genre,
    songName
} = faker.music

// prettier-ignore
export function all({
    genre       = [],       
    songName    = [],          
}: {
    genre?:      Parameters<typeof faker.music.genre>,    
    songName?:   Parameters<typeof faker.music.songName>,       
}) {

    return {
        genre:    faker.music.genre(    ...genre),
        songName: faker.music.songName( ...songName),              
    } 
}
