import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;

function getAllWithVideos() {
  return  fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {

        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }

        throw new EvalError('Não foi possível acessar os dados :(');
    });

}


export default {
    getAllWithVideos,
};