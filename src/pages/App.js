import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import './style.css';
import { api } from '../services/api';
import { Container } from './styles'

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleSearchRepo = async () => {
    setError('');

    if(currentRepo.trim() === '') {
      setError('Campo de busca vazio. Digite um repositório para buscar');
      return;
    }

    try {
      const {data} = await api.get(`repos/${currentRepo}`)
      const loginUsuario =  data.owner.login;

      const {data: usuario} = await api.get(`users/${loginUsuario}`)

      const repoCompleto = {...data, usuario: usuario}

      const isExist = repos.find(repo => repo.id === data.id);

        if(!isExist) {
          setRepos(prev => [...prev, repoCompleto]);
          
          setCurrentRepo('')
          
        } else {
          setError('Esse repositório já foi adicionado');
        }
        
    } catch(error) {
      setError('Repositório não encontrado');
    }

  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    const newRepos = repos.filter(repo => repo.id !== id)

    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo Github'/>
      <div className='busca'>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
      </div>
      {error && <p>{error}</p>}
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} key={repo.id} repo={repo}/>)}
    </Container>
  );
}

export default App;
