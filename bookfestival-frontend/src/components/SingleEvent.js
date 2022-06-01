import { Link } from "react-router-dom";
import { useParams } from 'react-router';

const SingleEvent = ({id}) => {
    
    let {id} = useParams();
    
    return (<>
        <h1>This Event detail</h1>
        <h2>{this.props.match.params.id}</h2>
        </>
    )
}

export default SingleEvent;