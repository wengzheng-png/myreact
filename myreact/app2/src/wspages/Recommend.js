import React from 'react';
import axios from "../wsaxios"
// import "../css/Found.css"
import { withRouter } from "react-router-dom";
import "../wscss/Found.css"

class Recommend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "关注",
            dataArr: []
        };

        this.todetail = function (el, ss) { 
            this.props.history.push(`/todetail/:id=${el}`)
        }

        // this.fn = function(){
        //     this.setState({
        //         msg: "已关注"
        //     })
        // }
    }



    componentDidMount() {
        let url = "/found"
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
                                {/* <span className="text" onClick={this.fn.bind(this)}>{this.state.msg}</span> */}
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default withRouter(Recommend);