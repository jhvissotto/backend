// ----------------------------
// Collection structure for collection
// ----------------------------
db.getCollection('collection').drop()
db.createCollection('collection')

// ----------------------------
// Documents of collection
// ----------------------------
// prettier-ignore
db.getCollection('collection').insert([{
    // ids
    _id:            ObjectId('63e3b85d4a23000053002932'),
    id_bson:        ObjectId('63e3ba4037eca82e351b5131'),
    id_uuid:        UUID('123e4567-e89b-12d3-a456-426614174000'),
    // numbers
    integer_short:  NumberInt('32'),
    integer_long:   NumberLong('64'),
    number:         0.0,
    // logical
    null:           null,
    bool:           true,
    // texts
    string:         '',
    regex:          /(*)/,
    // comps
    array:          ['Hello', 'World'],
    object:         { welcome: 'Hello World' },
}])
