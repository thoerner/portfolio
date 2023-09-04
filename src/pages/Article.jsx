import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api'
import { marked } from 'marked'

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
            <h1>{data?.title}</h1>
            <h3>by {data?.author}</h3>
            <h3>{new Date(data?.date).toLocaleDateString()}</h3>
            <div className='articleContent' style={styles.articleContent}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
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
    articleContent: {
        width: '50vw',
        backgroundColor: '#9A8C98aa',
        padding: '2rem',
        borderRadius: '0.5rem',
        margin: '2rem',
    }
}