import React from 'react';
import axios from "../wsaxios"
import { withRouter } from "react-router-dom";
import "../wscss/Found.css"

class Fashion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "发现页面",
            dataArr: []
        };

        this.todetail = function (el, ss) {
            this.props.history.push(`/todetail/:id=${el}`)
        }
    }
    componentDidMount() {
        let url = "/fashion"
        axios.get(url)
            .then((res) => {
                this.setState({
                    dataArr: res.data
                })
            })
    }
    render() {
        return (
            <div className="bigbox">
                {this.state.dataArr.map((el, index) => {
                    return (
                        <div key={el, index} className="box">
                            <img className="goodsimg" src={el.img} onClick={this.todetail.bind(this, el.id)} alt="图片加载失败" />
                            <h6>{el.name}</h6>
                            <div className="userbox">
                                <img className="userimg" src={el.userimg} alt="图片加载失败" />
                                <span className="username">{el.username}</span>
                                <span className="text">关注</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default withRouter(Fashion);