import React from 'react';
import './Main.css'; // Импортируйте файл стилей

export const Main = () => {
  return (
    <div className="main-container">
      <h1>Добро пожаловать!</h1>
      {/* Здесь будет ваша картинка */}
      <img src={require('./Bag.png')} alt="Описание изображения" className="main-image" />
      <img src={require('./clock.png')} alt="Описание изображения" className="main-image" />
      <img src={require('./Jacket.png')} alt="Описание изображения" className="main-image" />
      <img src={require('./Shoes2.png')} alt="Описание изображения" className="main-image" />
      <img src={require('./Shoes.png')} alt="Описание изображения" className="main-image" />
      <img src={require('./Jeans.png')} alt="Описание изображения" className="main-image" />
    </div>
  );
};

