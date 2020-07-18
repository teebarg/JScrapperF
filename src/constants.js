import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_END_POINT,
});

export const CATEGORIES = [
  { key: 'Home & Office', value: 'home-office' },
  { key: 'Health & Beauty', value: 'health-beauty' },
  { key: 'Phones & Tablets', value: 'phones-tablets' },
  { key: 'Computing', value: 'computing' },
  { key: 'Electronics', value: 'electronics' },
  { key: 'Fashion', value: 'fashion' },
  { key: 'Baby Products', value: 'baby-products' },
  { key: 'Gaming', value: 'video-games' },
  { key: 'Sporting Goods', value: 'sporting-goods' },
  { key: 'Automobile', value: 'automobile' },
  { key: 'Pet Supplies', value: 'pet-supplies' },
];
