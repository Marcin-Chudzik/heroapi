import axios from 'axios';

const TOKEN = 2272569629586451;

export const getBasicHeroInfoById = async id => {
    const { data } = await axios.get(`https://superheroapi.com/api.php/${TOKEN}/${id}`);
    return data;
};

export const searchHeroesByName = name => {
    return axios.get(`https://superheroapi.com/api.php/${TOKEN}/search/${name}`);
};