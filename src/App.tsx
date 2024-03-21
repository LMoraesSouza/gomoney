
import { createContext, useEffect, useState } from 'react'
import {ThemeProvider} from 'styled-components'
import './global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Transactions } from './pages/Transactions.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { Planning } from './pages/Planning.tsx';
import { Accounts } from './pages/Accounts.tsx';
import { Categories } from './pages/Categories.tsx';
import { Cards } from './pages/Cards.tsx';

import {lightTheme, darkTheme} from './styles/themes/default.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Transactions />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/planning",
    element: <Planning />,
  },
  {
    path: "/accounts",
    element: <Accounts />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

interface ThemeContextType {
  lightMode: boolean,
  setLightMode: (open: boolean) => void,
}


export const Theme = createContext({
  lightMode: true,
  setLightMode: () => {}
} as ThemeContextType )

function App() {
  const [lightMode, setLightMode] = useState(true)
 
  
  useEffect(() => {
    if (lightMode){
      //green light colors
      document.documentElement.style.setProperty('--green-background', "#B8EADE");
      document.documentElement.style.setProperty('--green-helper', "#75D6BF");

      //blue light colors
      document.documentElement.style.setProperty('--blue-background', "#B7D4F0");
      document.documentElement.style.setProperty('--blue-helper', "#81B2E4");

      //cobalt light colors
      document.documentElement.style.setProperty('--cobalt-background', "#C8CDF3");
      document.documentElement.style.setProperty('--cobalt-helper', "#818DE4");

      //purple light colors
      document.documentElement.style.setProperty('--purple-background', "#D6C8F3");
      document.documentElement.style.setProperty('--purple-helper', "#A181E4");

      //magenta light colors
      document.documentElement.style.setProperty('--magenta-background', "#F4CDF0");
      document.documentElement.style.setProperty('--magenta-helper', "#DE87D5");

      //pink light colors
      document.documentElement.style.setProperty('--pink-background', "#F4CDD9");
      document.documentElement.style.setProperty('--pink-helper', "#E4819F");

      //red light colors
      document.documentElement.style.setProperty('--red-background', "#F4CDCD");
      document.documentElement.style.setProperty('--red-helper', "#E48181");

      //orange light colors
      document.documentElement.style.setProperty('--orange-background', "#F2D2C0");
      document.documentElement.style.setProperty('--orange-helper', "#E4A581");

      //yellow light colors
      document.documentElement.style.setProperty('--yellow-background', "#F0DFB7");
      document.documentElement.style.setProperty('--yellow-helper', "#E4C681");

      //lime light colors
      document.documentElement.style.setProperty('--lime-background', "#E0ECBB");
      document.documentElement.style.setProperty('--lime-helper', "#C8DD88");

      //lawn light colors
      document.documentElement.style.setProperty('--lawn-background', "#C7E7C0");
      document.documentElement.style.setProperty('--lawn-helper', "#9CD590");

      //cyan light colors
      document.documentElement.style.setProperty('--cyan-background', "#BCF1F1");
      document.documentElement.style.setProperty('--cyan-helper', "#8ADBDB");
      
      //gray scale dark
      document.documentElement.style.setProperty('--background', "#F3F5F7");
      document.documentElement.style.setProperty('--gray-050', "#E9EDF1");
      document.documentElement.style.setProperty('--gray-100', "#DFE5EA");
      document.documentElement.style.setProperty('--gray-200', "#D1D9E0");
      document.documentElement.style.setProperty('--gray-250', "#C2CCD6");
      document.documentElement.style.setProperty('--gray-300', "#B8C2CC");
      document.documentElement.style.setProperty('--gray-350', "#9AA8B6");
      document.documentElement.style.setProperty('--gray-400', "#7A8C9F");
      document.documentElement.style.setProperty('--gray-500', "#4D5C6A");
      document.documentElement.style.setProperty('--gray-600', "#333D46");
      document.documentElement.style.setProperty('--gray-650', "#272E35");
      document.documentElement.style.setProperty('--gray-700', "#1E2429");
      document.documentElement.style.setProperty('--gray-800', "#15191E");
      document.documentElement.style.setProperty('--gray-900', "#111418");

      //danger light color
      document.documentElement.style.setProperty('--danger', "#B13535");
      
    } else {
      //green dark colors
      document.documentElement.style.setProperty('--green-background', "#0E2F28");
      document.documentElement.style.setProperty('--green-helper', "#174F41");
      
      //blue dark colors
      document.documentElement.style.setProperty('--blue-background', "#0C243B");
      document.documentElement.style.setProperty('--blue-helper', "#194776");
      
      //cobalt dark colors
      document.documentElement.style.setProperty('--cobalt-background', "#0F1543");
      document.documentElement.style.setProperty('--cobalt-helper', "#1D2986");

      //purple dark colors
      document.documentElement.style.setProperty('--purple-background', "#1F0E43");
      document.documentElement.style.setProperty('--purple-helper', "#371976");

      //magenta dark colors
      document.documentElement.style.setProperty('--magenta-background', "#300D2C");
      document.documentElement.style.setProperty('--magenta-helper', "#802476");

      //pink dark colors
      document.documentElement.style.setProperty('--pink-background', "#3B0D1A");
      document.documentElement.style.setProperty('--pink-helper', "#871D3C");

      //red dark colors
      document.documentElement.style.setProperty('--red-background', "#3B0D0D");
      document.documentElement.style.setProperty('--red-helper', "#932020");

      //orange dark colors
      document.documentElement.style.setProperty('--orange-background', "#3B1D0D");
      document.documentElement.style.setProperty('--orange-helper', "#7E3F1B");

      //yellow dark colors
      document.documentElement.style.setProperty('--yellow-background', "#3B2D0D");
      document.documentElement.style.setProperty('--yellow-helper', "#6D5317");

      //lime dark colors
      document.documentElement.style.setProperty('--lime-background', "#27300D");
      document.documentElement.style.setProperty('--lime-helper', "#4B5B1A");

      //lawn dark colors
      document.documentElement.style.setProperty('--lawn-background', "#152C11");
      document.documentElement.style.setProperty('--lawn-helper', "#2D5C23");

      //cyan dark colors
      document.documentElement.style.setProperty('--cyan-background', "#0F2F2F");
      document.documentElement.style.setProperty('--cyan-helper', "#1D5D5D");

      //gray scale dark
      document.documentElement.style.setProperty('--background', "#040506");
      document.documentElement.style.setProperty('--gray-050', "#0B0D0F");
      document.documentElement.style.setProperty('--gray-100', "#111418");
      document.documentElement.style.setProperty('--gray-200', "#15191E");
      document.documentElement.style.setProperty('--gray-250', "#1E2429");
      document.documentElement.style.setProperty('--gray-300', "#272E35");
      document.documentElement.style.setProperty('--gray-350', "#333D46");
      document.documentElement.style.setProperty('--gray-400', "#4D5C6A");
      document.documentElement.style.setProperty('--gray-500', "#7A8C9F");
      document.documentElement.style.setProperty('--gray-600', "#9AA8B6");
      document.documentElement.style.setProperty('--gray-650', "#B8C2CC");
      document.documentElement.style.setProperty('--gray-700', "#C2CCD6");
      document.documentElement.style.setProperty('--gray-800', "#D1D9E0");
      document.documentElement.style.setProperty('--gray-900', "#DFE5EA");

      //danger dark color
      document.documentElement.style.setProperty('--danger', "#D77575");

    }

  }, [lightMode])
  


  return (
    <Theme.Provider value={{lightMode, setLightMode}}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <RouterProvider router={router} />

      </ThemeProvider>
    </Theme.Provider>
  )
}



export default App
