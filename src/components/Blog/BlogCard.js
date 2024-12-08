import './BlogCard.css'
import { AiFillLike } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
export const BlogCard = ({
    title,
    description,
    liked,
    likePost,
    deletePost
}) => {
    const heartFill = liked? 'crimson' : 'black'
   

return(
    <div className='post'>
        <div className='posthead'>
            <h2>{title}</h2>
            <span className = 'deleteForeverButton' onClick={deletePost}>
                <AiTwotoneDelete />
            </span>
            </div>
            <div className='desc'>
{description}
            </div>
            <div classname='button'>
                <span className = 'favoriteButton' onClick={likePost}>
                    <AiFillLike  style = {{fill:heartFill}}/>
                </span>
            </div>
                    
        </div>)
}