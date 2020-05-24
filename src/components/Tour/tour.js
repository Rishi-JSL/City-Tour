import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './tour.css';


/*EXAMPLE for different approch

passing props in functional component 
function Tour(props) {
  return(
    <article>
      <img src={props.info.img} alt="phone" height="200px"/>
      <h3>{props.info.name}</h3>
      <h4>{props.info.place}</h4>
    </article>
  )
}
*/

class Tour extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        showinfo : false
      }
    }
    Handleinfo = () => {
      this.setState({
        showinfo : !this.state.showinfo
      })
    }
    render(){
      const {id,img,name,place,info} = this.props.info
      return(
      <article className="main">
  
        <div className="img_btn">
          <img src={img} alt="cityimg"/>
  
          <span className="btn">
            <i className="far fa-times-circle" onClick={()=> this.props.del(id)}></i>
          </span>
          {/*<button onClick={()=> this.props.del(id)}>Delete</button>*/}
        </div>
  
        <div className="content">
          <h3>{name}</h3>
          <h4>{place}</h4>
          <small>info 
            <i className="fas fa-caret-square-down" onClick={this.Handleinfo}></i>
          </small>
          {/*<button type="text" onClick={this.Handleinfo} >
            Show
          </button>*/}
          {
            this.state.showinfo&&<p className="infomation"><i className="fas fa-quote-left"></i> {info} <i className="fas fa-quote-right"></i></p>
          }      
        </div>
  
      </article>
      )
    }
}
  

export default Tour;