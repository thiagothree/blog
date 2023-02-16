import React, { Component } from 'react'
import './style-feed.css'

import Heart from '../../images/icons/Heart'
import HeartLike from '../../images/icons/HeartLike'

class Feed extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: '02 de Jul, de 2022',
      posts: [
        {id: 1, titulo: 'Agora é oficial: o Windows 11 está vindo', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'},
        {id: 2, titulo: 'Tim Berners-Lee vai leiloar código-fonte da web', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'},
        {id: 3, titulo: 'Tem Firefox novo no pedaço e você vai querer migrar', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.'},
        {id: 4, titulo: 'John McAfee, criador do antivírus McAfee, morre', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'},
      ]
    }
  }


  render() {
    return (
      <div className='container-feed'>
       <div className='container-feed-posts'>
        {this.state.posts.map((item) => {
          return (
            <Post key={item.id} data={this.state.data} titulo={item.titulo} texto={item.texto}/>
          )
        })}
       </div>
      </div>
    );
  }
}

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: this.props.like
    }
  }
  render(props) {
    return (
      <div className='container-post'>
       <div className='post'>
        <div className='post-info'>
          <span>{this.props.data}</span>
          <button onClick={(e) => {
            this.setState({like: this.state.like ? false : true})
          }}>
          {this.state.like ? <HeartLike/> : <Heart/>}
          </button>
        </div>
        <div className='post-titulo'>
          <span>
            {this.props.titulo}
          </span>
        </div>
        <div className='post-text'>
          <p>
          {this.props.texto}
          </p>
        </div>
       </div>
      </div>
    )
  }
}

export default Feed;