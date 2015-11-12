import React from "react";

import Article from "./Article";

class Group extends React.Component {

    render() {
        return (
            <div className="accordion">
                <div className="accordion__head">
                    {this.props.name}
                </div>
                <div className="accordion__body">
                    {this.props.articles.map((article) => {
                        if (!article.hidden) {
                            return (
                                <Article key={article.id} value={article}/>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }

}

export default Group;