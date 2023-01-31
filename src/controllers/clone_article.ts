// packs
import axios from 'axios'
import { load as cheerio_load } from 'cheerio'
// utils
import { qs } from '~/src/libs/utils/link'
import { is } from '~/src/libs/functions/check'
// app
import { view } from '~/src'

// prettier-ignore
export async function clone_article(req, res) {
    try {
        // ======================================== //
        // ================ inputs ================ //
        // ======================================== //
        // schemas
        type LinkItem = { idx: number; href: string }

        // const linkList_example = [
        //     { idx: 2, href: '//yahoo.com' }, 
        //     { idx: 3, href: '//yahoo.com' },
        // ]


        // ======== keys ======== //
        const { params, query, body } = req
        // const {} = req.params
        // const { url, linkList } = req.query
        // const {} = req.body



        
        // ======== value or default ======== //
        const url      = is.filled(query.url) ? query.url : ""        
        const linkList = qs.v1.parse(query.linkList)?.linkList || [] as LinkItem[]
    

        
        // ======== url is empty ======== //
        if (is.empty(url)) {
            console.error({ message: 'QUERY_URL_IS_EMPTY' })
            return res.status(400).send(null)
        }
        
        


        // ================================================== //
        // ================ load & transform ================ //
        // ================================================== //

        // ======== download page ======== //
        const base     = 'https://telegra.ph/'
        const basedUrl = base.concat(url)
        const page     = await axios(basedUrl).then(({ data }) => data)
        const $        = cheerio_load(page)


        // ======== attach links to images ======== //
        if (is.filled(linkList)) {
            $('figure').each((idx, element) => {
                
                const matchItem = (linkList as LinkItem[])?.find(item => item.idx == idx)
    
                if (matchItem) {
                    const wrapper = $(`<a href="${matchItem.href}" target="_blank" ></a>`)
                    $(element).wrap(wrapper)
                }
            })
        }
        
        // ======== prevent copy content ======== // 
        $('body').attr('oncontextmenu', 'return false')
        $('*').css('user-select', 'none')





        // ====================================== //
        // ================ html ================ //
        // ====================================== //
        // transform to html
        let content = $.html()

        // adjust links 
        content = content.replace(new RegExp('="/', 'gim'), '="https://telegra.ph/')

        // remove javascripts
        content = content.replace(new RegExp('src="https://telegra.ph/js/quill.min.js(.*?)"', 'gim'), '')
        content = content.replace(new RegExp('src="https://telegra.ph/js/core.min.js(.*?)"', 'gim'), '')

        


        

        // ========================================== //
        // ================ response ================ //
        // ========================================== //
        return res.render(view.html.blank, { document: content }) 

    } catch (error) {
        console.warn('>> error:', error)
        return res.status(400).send(error)
    }
}
