import Todo from '../Todo/Todo';
import User from '../User/User';

const Home = () => {



    // const [count, setCount] = useState(0);

    // const handleIncrease = () => {
    //     setCount(count + 1);
    // }
    // const handleDecrease = () => {
    //     setCount(count - 1);
    // }


        return (
          <div className='App'>

            {/* <Todo />  */}

            <User />
            
            {/* <h3>Count: { count } </h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
             */}
          </div>
        );
};

export default Home;