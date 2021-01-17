// 关注页面
import { Component } from "react"
import axios from "../axios"
import { withRouter } from "react-router-dom";
import "../css/focus.css";
import more from "../img/more.png"
import repeat from "../img/repeat.png"
import comment from "../img/comment.png"
import like from "../img/like.png"
import star from "../img/star.png"
import like2 from "../img/like2.png"
import star2 from "../img/star2.png"
class PlacePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "关注页面",
            dataArr: [],
            active1:0,
            active2:0,
        };
       
    }

    handleClick1(){
        this.setState({
            active1:!this.state.active1
        })
    }
    handleClick2(){
        this.setState({
            active2:!this.state.active2
        })
    }

    componentDidMount() {
        let url = "/focus"
        axios.get(url)
            .then((res) => {
                this.setState({
                    dataArr: res.data,
                })
            })
    }

    render() {
        return (
            <div className="bigbox">
                {this.state.dataArr.map((el, index) => {
                    return (
                        <div key={el} className="box">
                            <div className="box-top">
                                <div className="top-left">
                                    <img className="userimg" src={el.userimg} alt="图片加载失败" />
                                    <span className="username">{el.name}</span>
                                    <span className="date">{el.date}</span>
                                </div>
                                <img src={more} className="top-right" alt="图片加载失败"></img>
                            </div>
                            <img className="img" src={el.img} alt="图片加载失败" />
                            <div className="icon-info">
                                <img src={repeat} className="icon-left" alt="图片加载失败"></img>
                                <div className="right-content">
                                    <span><img src={this.state.active1 ? like2 : like} className='icon-right' alt="图片加载失败" onClick={()=>this.handleClick1()}></img></span>
                                    <span className="text-right">{el.like}</span>
                                    <span><img src={this.state.active2 ? star2 : star} className='icon-right' alt="图片加载失败" onClick={()=>this.handleClick2()}></img></span>
                                    <span className="text-right">{el.collection}</span>
                                    <span><img src={comment} className="icon-right" alt="图片加载失败"></img></span>
                                    <span className="text-right">{el.comment}</span>
                                </div>
                            </div>
                            <h6 className="textinfo">{el.text}</h6>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default withRouter(PlacePage);