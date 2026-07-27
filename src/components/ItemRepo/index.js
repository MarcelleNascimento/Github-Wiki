import React from 'react'
import { ItemContainer } from './style'

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }


  return (
    <ItemContainer >
      <div className='infosPerfil'>
            <img src={repo.owner.avatar_url} alt='Imagem de Perfil'/>
            <h3 className='nomePerfil'>{repo.owner.login}</h3>
            <a href={repo.owner.html_url}>@{repo.owner.login}</a>
            <p>{repo.usuario.bio}</p>
      </div>
      <div className='infos'>
          <h3 className='repoNome'>{repo.name}</h3>
          <p className='fullName'>{repo.full_name}</p>
          <p>{repo.description}</p>
          <a href={repo.html_url} target='_blank' rel="noreferrer" className='ver'>Ver Repositório</a>
          <a href="#" className='remover' onClick={handleRemove}>Remover</a>
      </div>
    </ItemContainer>
  )
}

export default ItemRepo;