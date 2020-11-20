import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

import VideoRepository from '../../../repositories/videos'

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Vídeo',
    url: 'https://www.youtube.com/watch?v=AitQ6NRBvJ4',
    categoria: 'Cultura',
  });

  return (
    <PageDefault>

      <h1>Cadastrar Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo Cadastrado!');

        VideoRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })

        .then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });

      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="url"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar Vídeo
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        <Button>
          Cadastrar Categoria
        </Button>


      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;

