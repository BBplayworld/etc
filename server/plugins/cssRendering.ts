export default defineNitroPlugin((nitro) => {
    nitro.hooks.hook('render:html', (html) => {
        html.head.push('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">')
        html.head.push('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">')
    })
})