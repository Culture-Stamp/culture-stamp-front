import Main from '../components/Main';
import { useParams } from 'react-router-dom';

function CategoryDetail(){
    const title = useParams();
    return <Main title={title.category} />;
}

export default CategoryDetail;