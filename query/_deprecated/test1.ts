let x

x.GET('ALL', 'post')
x.GET('MANY', 'post')
x.GET('ONE', 'post').BY_ID()
x.GET('ONE', 'post', 'RAND')

x.GET('ALL', 'post').BY('tag')
x.GET('MANY', 'post').BY('tag')
x.GET('ONE', 'post', 'RAND').BY('tag')

x.GET('ALL', 'post').WITH_ONE_RAND('tag')
x.GET('MANY', 'post').WITH_ONE_RAND('tag')

x.GET('ONE', 'post', 'RAND').FOR('ALL', 'tag')
x.GET('ONE', 'post', 'RAND').FOR('MANY', 'tag')
