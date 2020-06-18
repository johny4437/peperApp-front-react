import api from '../services/api';

export const authenticate = (data, next) =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('TOKEN', JSON.stringify(data));
        next();
    }
    
};
export const isAuthenticated = () => localStorage.getItem('TOKEN') !== null;
export const getToken = () => localStorage.getItem('TOKEN');
export const logout = (next) => {
  localStorage.removeItem('TOKEN');
  next();
  return api.get('user/singout');

};