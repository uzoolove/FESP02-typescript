import { plus } from "fesp2-math";
import axios from 'axios';
import _ from 'lodash';

const fetchData = async () => {
  try{
    const response = await axios.get('http://localhost:3300/todos');
    const data = response.data;
    const items = _.sortBy(data, 'done').map(item => `<li>${ item.title }</li>`);
    console.log(items);
    console.log(plus(10, 20));
  }catch(err){
    console.error(err);
  }
};

fetchData();