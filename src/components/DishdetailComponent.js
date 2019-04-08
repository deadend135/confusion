import React ,{Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'


class DishDetail extends Component{

    renderDish(dish){
            if(dish!=null){
                return(
                    <Card>
                         <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                         <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                         
                         </CardBody>
                    </Card>
                )

            }
            else{
                return(
                    <div></div>
                )
            }
        }

        renderComments(comments){
            
            if(comments!=null){
                const commentcomp=
                comments.map(comment=>{
                    return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                        </li>
                    )
                })
            return(
            <div>
                 <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                
               
                    {commentcomp}
                   
                     
                       
                </ul>

            </div>

            </div>
                
            )
            }
            else{
                return(
                    <div></div>
                )
            }


        }
    

    render(){
        return(<div className="container">
        
        <div className="row" className="col-12 col-md-5 mt-1">
            {this.renderDish(this.props.selectedDish)}
            {this.renderComments(this.props.comments)}
        </div>
        
      </div>)
    }
}
export default DishDetail