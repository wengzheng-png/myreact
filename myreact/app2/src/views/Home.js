
import {
    BrowserRouter as Router,
    Link,
    Switch,
} from "react-router-dom"
function Home(){
    return (
        <div className="home">
               <div className="hed">360图片库</div>
               <Router>
               <div className="part">
                   <ul>
                       <li>首页</li>
                       <li><Link to="/bizhi">壁纸</Link></li>
                       <li><Link to="/sheji">设计</Link></li>
                       <li>搞笑</li>
                       <li>艺术</li>
                       <li><Link to="/car">汽车</Link></li>
                       <li><Link to="/menchong">萌宠</Link></li>
                   </ul>
               </div>
         
                   <Switch>
                          
                   </Switch>
                  
               </Router>
        </div>
    )
}

export default Home