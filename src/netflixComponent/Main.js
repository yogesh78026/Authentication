
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import NHome from './netflixComponent/NHome';
import SearchResults from './netflixComponent/SearchResults';
import Movie from './netflixComponent/Movie';
import Actor from './netflixComponent/Actor';
import { signOut } from 'firebase/auth';


function App(props) {
  const navigate = useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    })
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NHome />,
    },
    {
      path: "/search/:movie",
      element: <SearchResults />,
    },
    {
      path: "/movie/:movieId",
      element: <Movie />,
    },
    {
      path: "/actor/:actorId",
      element: <Actor />,
    },
  ]);

  return (
    <div className="App">
      <>
        <h1>{props.name ? `Welcome ${props.name}` : "Login Again"}</h1>
        <RouterProvider router={router} />
      </>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
}

export default App;
