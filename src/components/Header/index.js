import React from 'react'
import './style-header.css'

function Header() {
     return (
          <div className='container'>
               <div className='container-navegacao'>
                    <NavBar/>
                    <SearchBar/>
               </div>
          </div>
     )
}

function NavBar() {
     return (
          <div className='container-links-navegacao'>
               <a className='link-navegacao' href='https://teste.com'>Codelândia</a>
               <a className='link-navegacao' href='https://teste2.com'>blog</a>
          </div>
     )
}

function SearchBar() {
     return (
          <div className='container-search-bar'>
               <input type='text' className='seach-bar'
               placeholder="Pesquisar no blog" />
               <img src={require('../../images/icons/Search.png')} className='icon-search' alt='t'/>
          </div>
     )
}

export default Header;