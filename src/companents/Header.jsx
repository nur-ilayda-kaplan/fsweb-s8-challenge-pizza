import React from "react";
import styled from "styled-components";

// Buton için stil tanımlıyoruz
const StyledButton = styled.button`
  background-color: #ff6347; /* Domates rengi */
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533d; /* Hover rengi */
  }

  &:active {
    background-color: #c4432b; /* Tıklandığında rengi */
  }
`;

// Ana bileşen
function Header() {
  const handleClick = () => {
    alert("Afiyet olsun! 😊");
  };

  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <h2>Kod Acıktırır, Pizza Doyurur</h2>
      {/* Stil verilmiş buton */}
      <StyledButton onClick={handleClick}>Acıktım</StyledButton>
    </div>
  );
}

export default Header;
