import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api'
import { marked } from 'marked'
import '../styles/article.css'

const Article = () => {
    const [content, setContent] = useState(null)
    const [data, setData] = useState(null)
    const [html, setHtml] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const article = await getArticle(id)
            const { content, data } = article
            setContent(content)
            setData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (!content) return
        const html = marked(content)
        setHtml(html)
    }, [content])

    return (
        <div style={styles.articlePage}>
            <div className='article'>
                <div className='title'>{data?.title}</div>
                <div className='author'>by {data?.author}</div>
                <div className='date'><i>{new Date(data?.date).toLocaleDateString()}</i></div>
                <div className='articleContent' style={styles.articleContent}>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </div>
    )
}

export default Article

const styles = {
    articlePage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '75px'
    },


}