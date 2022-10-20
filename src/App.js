import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider } from './auth';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import { ProfilePage } from './ProfilePage';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} /> 
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;

// Al usar HashRouter la dirección principal sería /#/
// El resto sería usando el hash como raiz: /#/blog
// El * es el que se usa por defecto con cualquier otra dirección no listada en las routes
// la ruta de BlogPost va dentro de BlogPage, es una ruta anidada
// Eso hace que en BlogPage podamos usar Outlet para que se muestre el contenido dentro de la ventana de blog
