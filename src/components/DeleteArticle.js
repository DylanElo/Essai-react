import axios from 'axios';
import React from 'react';

const DeleteArticle = ({id}) => {
    const handleDelete = () => {
        axios.delete("http://localhost:3003/articles/" + id)
    };
    return (
        <button onClick={()=> {
            if (window.confirm('Voulez vous supprimer cet Article ,')){
                handleDelete();
                window.location.reload();
            }
        }}
    >
        Supprimer
    </button>
    );
};

export default DeleteArticle;
