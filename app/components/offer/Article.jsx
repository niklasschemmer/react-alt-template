import React from "react";

class Article extends React.Component {

    render() {
        return (
            <div className="accordion accordion--wrapped">
                <div className="accordion__head">
                    {this.props.value.name}
                    <div className="right">
                        <div className="choosebutton">{this.props.value.price.toFixed(2).replace(".", ",")}</div>
                    </div>
                </div>
                <div className="accordion__body">
                    <div className="accordion__content">
                        {this.props.value.summary}
                        {this.props.value.images.map((image) => {
                            return (
                                <img key={image.id} src={image.url}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Article;