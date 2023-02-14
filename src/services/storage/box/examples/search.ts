import { client } from '..'

// ======================== //
// ======== SEARCH ======== //
// ======================== //
// prettier-ignore
await client.search.query('string', {
    ancestor_folder_ids:    '123',
    fields:                 'parent,id,name,modified_at,download_url',
    file_extensions:        'jpg,jpeg,png,webp',
    type:                   'file',
    limit:                  100,
})
