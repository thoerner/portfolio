import { Link } from 'react-router-dom'
import { getArticle } from '../utils/api'
import { useState, useEffect } from 'react'
import '../styles/articles.css' 

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
                <div className='articleListing'>
                    <div className='articleDate'>{new Date(article.date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</div>
                    {" "}
                    <Link className='articleLink' key={index} to={`/articles/${index}`}>
                        {article.title}
                    </Link>
                </div>
            ))
        )
    }

    return (
        <div className='articlesPage'>
            <h1>Articles</h1>
            {renderLinks()}
        </div>
    )
}

export default Articles