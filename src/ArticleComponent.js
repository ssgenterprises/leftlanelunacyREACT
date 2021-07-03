import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, } from 'reactstrap';


function RenderArticleItem({ article }) {
    return (
        <Card>            
                <CardImg width="100%" src={article.image} alt={article.name} />
                <CardImgOverlay>
                    <CardTitle>{article.name}</CardTitle>
                </CardImgOverlay>            
        </Card>
    );
}

function Articles(props) {

    const article = props.article.map(article => {
        return (
            <div key={article.id} className="col-md-5 m-1">
                <RenderArticleItem article={article} />
            </div>
        );
    });

return (
    <div className="row">
        {article}
    </div>
)
}





export default Articles;
