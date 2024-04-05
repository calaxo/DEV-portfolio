import {useParams} from 'react-router-dom';

const Id = () => {
    const {id} = useParams();
    return (
        <div>
        <h1>Id: {id}</h1>
        fzefz
        </div>
    );
    }

export default Id;