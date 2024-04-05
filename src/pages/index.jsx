import  {useState} from 'react';



const Main = () => {
    const [count, setCount] = useState(0);
    return (
    
    
    <div>Bonjour dqsdqsdqsdepuis a
            <button onClick={() =>setCount(count + 1)}>Cliquez ici</button>
        {count > 0 ? <p>Vous avez cliqué {count} fois</p> : null}

    </div>

);
};

export default Main;