import { Carousel,  } from 'antd';
import React from 'react';
import "../css/lunbo.css"


const PositionCarouselDemo = () => {
  const [dotPosition] = React.useState('left');
  return (
      <Carousel dotPosition={dotPosition} autoplay  >
           <img className="imglb" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3137646855,2454399309&fm=26&gp=0.jpg" alt="无法显示"/>
           <img className="imglb" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=273300766,3089293511&fm=26&gp=0.jpg" alt="无法显示"/>
           <img className="imglb" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=254066609,1424832801&fm=26&gp=0.jpg" alt="无法显示"/> 
      </Carousel>  
  );
};
export default PositionCarouselDemo;