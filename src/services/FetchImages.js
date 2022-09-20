import axios from "axios";

const API_KEY = '28465620-b99d2f18707b881a5a8144a5c';

export const fetchImages = async (query, page) => {
    const images = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(images);
    return images.data;
};