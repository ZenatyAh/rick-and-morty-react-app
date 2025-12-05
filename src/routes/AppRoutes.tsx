import { createBrowserRouter } from "react-router-dom";
import CharactersPage from '../pages/CharactersPage'
import CharacterDetailsPage from '../pages/CharacterDetailsPage'
const router = createBrowserRouter([
    {path:'/', element:<CharactersPage/>},
    {path:'/character/:id',element:<CharacterDetailsPage/>}
]);

export default router;