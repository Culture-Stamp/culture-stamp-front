import Main from '../components/Main';
import { useParams } from 'react-router-dom';

function CategoryDetail(){
    const title = useParams();
    console.log(title)

    return <Main title={title.category} />;
}

export default CategoryDetail;