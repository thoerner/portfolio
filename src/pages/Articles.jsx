import { Link } from 'react-router-dom'
import { getArticle } from '../utils/api'
import { useState, useEffect } from 'react'

const Articles = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let done = false
            let index = 0
            let tempData = []
            while (!done) {
                const { data } = await getArticle(index)
                index++
                if (!data) {
                    done = true
                    continue
                }
                tempData.push(data)
            }
            setData(tempData)
        }
        fetchData()
    }, [])

    const renderLinks = () => {
        return (
            data?.map((article, index) => (
                <div style={styles.articleListing}>
                    <div style={styles.articleDate}>{new Date(article.date).toLocaleDateString()}</div>
                    {" "}
                    <Link key={index} to={`/articles/${index}`}>
                        {article.title}
                    </Link>
                </div>
            ))
        )
    }

    return (
        <div style={styles.articlesPage}>
            <h1>Articles</h1>
            {renderLinks()}
        </div>
    )
}

export default Articles

const styles = {
    articlesPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '90vh',
        marginTop: '75px'
    },
    articleListing: {
        display: 'flex',
        flexDirection: 'row',
    },
    articleDate: {
        marginRight: '0.5rem'
    }

}