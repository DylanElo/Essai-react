import React ,  {useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {
    const [newsData,setNewsData] = useState([]);
    const [author,setAuthor] = useState ("") ; 
    const [content,setContent] = useState ("") ; 
    const [error,setError] = useState(false);

    useEffect(() => {
       getData() ;
    }, []);

    const getData = () => {
        axios
        .get('http://localhost:3003/articles')
        .then((res) => setNewsData(res.data));
    };


    const handleSubmit = (e) => {
        e.preventDefault() ;

       if (content.length < 100) {
           setError(true);

       }
       else{

        axios.post("http://localhost:3003/articles", {
            author,
            content,
            date: Date.now(),
        })
        .then(() => {
            setError(false);
            setAuthor("");
            setContent("") ; 
            getData() ;
        } );
    };
    }
    return (
        <div className="news-container">
            <h1>News</h1>
            <form onSubmit={(e) =>handleSubmit(e)}> 
                <input type="text" placeholder="Nom" onChange={(e) => setAuthor(e.target.value)} value={author}/>
                <textarea 
                style ={{ border : error ? "1px solid red" :"1px solid #61dafb" }}
                placeholder="Message" 
                onChange={ (e) => setContent(e.target.value)} value={content} ></textarea>
                 { error && <p> Veuillez écrire au moins 100 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>
            <ul>{newsData
            .sort((a,b) => b.date - a.date)
            .map((article) => (
                <Article key={article.id} article={article} />
            ))}</ul>
            
        </div>
    );
};

export default News;