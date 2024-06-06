import firebase from './firebase.js';
import Artigo from './artigoModel.js';
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';

import axios from 'axios'
const db = getFirestore(firebase);

// Atualizar um produto
export const updateArtigo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const artigo = doc(db, 'artigos', id);
        await updateDoc(artigo, data);
        res.status(200).send('Produto atualizado com sucesso!');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Criar um artigo
export const handleAdd = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'artigos'), data);
        res.status(200).send('Artigo criado com sucesso!');
    } catch (error) {
        res.status(400).send(error.message);
    }
};





// Ler todos os produtos
export const getArtigos = async (req, res, next) => {
    try {

        const collectionRef = collection(db, 'artigos');
        const artigos = await getDocs(collectionRef);

        const artigosData = artigos.docs.map((doc) => new Artigo(doc.id, doc.data().autor, doc.data().descricao, doc.data().horario, doc.data().titulo, doc.data().curtidas)
        ); // Extract data

        res.status(200).send(artigosData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


// Deletar um produto
export const deleteArtigo = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, 'artigos', id));
        res.status(200).send('Produto deletado com sucesso!');
    } catch (error) {
        res.status(400).send(error.message);
    }
};


function dataAtual() {
    const data = new Date(Date.now() + (new Date().getTimezoneOffset() - 300) * 60000);

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
}

export const getNoticias = async (req, res, next) => {
    const noticias = [
        {
            "id": 1,
            "titulo": "Descoberto novo planeta similar à Terra na zona habitável de uma estrela distante",
            "imageUrl": "https://www.cnnbrasil.com.br/wp-content/uploads/2021/06/3152_7995AE0940362EDF.jpg",
            "autor": "Dr. Maria Silva",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 2,
            "titulo": "Astrônomos observam colisão de duas estrelas em galáxia próxima",
            "imageUrl": "https://www.cnnbrasil.com.br/wp-content/uploads/2021/06/3151_0DF022B339FEAA0A.jpg",
            "autor": "Dr. João Oliveira",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 3,
            "titulo": "Nebulosa recém-descoberta revela insights sobre formação estelar",
            "imageUrl": "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/nebulosas-sao-nuvens-cosmicas-formadas-por-poeira-espacial-hidrogenio-gases-ionizados-58baa56ba373c.jpg",
            "autor": "Dra. Ana Santos",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 4,
            "titulo": "Sonda da NASA detecta evidências de água em lua de Júpiter",
            "imageUrl": "https://uploads.jovemnerd.com.br/wp-content/uploads/15-195_perspective_2.jpg",
            "autor": "Dr. Carlos Sousa",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 5,
            "titulo": "Telescópio Hubble captura imagem de supernova em galáxia distante",
            "imageUrl": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/01/hubble_pinpoints_supernova_blast/22417706-1-eng-GB/Hubble_pinpoints_supernova_blast_pillars.jpg",
            "autor": "Dr. Rafael Mendes",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 6,
            "titulo": "Astrônomos observam buraco negro devorando estrela nas proximidades da Via Láctea",
            "imageUrl": "https://t.ctcdn.com.br/wSzCOdmYs9jfkdwZWSBN9WeSdK0=/768x432/smart/i10331.jpeg",
            "autor": "Dra. Sofia Almeida",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 7,
            "titulo": "Estudo revela nova teoria sobre origem dos cometas",
            "imageUrl": "https://aventurasnahistoria.uol.com.br/media/uploads/espaco/cometa_capa.jpg",
            "autor": "Dr. André Costa",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        },
        {
            "id": 8,
            "titulo": "Sonda espacial envia dados sobre atmosfera de planeta gasoso em sistema solar distante",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R0E_wvM3JncloQidGI50_5XGZk4hk_pJxfDPO15keQ&s",
            "autor": "Dra. Mariana Ramos",
            "noticiaUrl": "https://www.cnnbrasil.com.br/tecnologia/cientistas-descobrem-planeta-potencialmente-habitavel-similar-a-terra/"
        }
    ]

    res.status(200).send(noticias);
};
export const getAstros = async (req, res, next) => {
    const astronautas = {
        "message": "success",
        "people": [
            {
                "name": "Jasmin Moghbeli",
                "craft": "ISS"
            },
            {
                "name": "Andreas Mogensen",
                "craft": "ISS"
            },
            {
                "name": "Satoshi Furukawa",
                "craft": "ISS"
            },
            {
                "name": "Konstantin Borisov",
                "craft": "ISS"
            },
            {
                "name": "Oleg Kononenko",
                "craft": "ISS"
            },
            {
                "name": "Nikolai Chub",
                "craft": "ISS"
            },
            {
                "name": "Loral O'Hara",
                "craft": "ISS"
            }
        ],
        "number": 7
    }
    res.status(200).send(astronautas);
};
