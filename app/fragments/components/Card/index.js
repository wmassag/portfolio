import React from "react"
import {Link} from "react-router-dom"

require("./style.scss")

export default class Card extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div className="__Card">
        <div className="imageContainer" id={(this.props.optionalPath && this.props.optionalPath != "noPath") ? this.props.optionalPath : this.props.title}>
        {
          (this.props.imageType === "iPhoneMockup") ?
            <div className="shapedShadow">
              <img alt={this.props.imageAlt} src={this.props.imageURL} />
            </div>
          :
            <img alt={this.props.imageAlt} src={this.props.imageURL} />
        }
        </div>
        <div className="content">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p><em>Meta:</em></p>
          <ul>
            {
              this.props.metaList.map((item, key) => (
                <li key={key}>{item}</li>
              ))
            }
          </ul>
              <div className="buttonGroup">
                {(this.props.optionalPath != "noPath") ?
                  <Link to={(this.props.optionalPath) ? this.props.optionalPath : this.props.title}><button>details</button></Link>
                :
                  ""
                }
                
                {(this.props.externalURL) ? <a href={this.props.externalURL} target="_blank"><button className="bright">visit</button></a> : ""}
              </div>
        </div>
        {(this.props.imageType === "iPhoneMockup") ? <div className="fader"></div> : "" }
      </div>
    )
  }
}
