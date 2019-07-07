import React from "react";

// Import de Emotion/ CSS-in-JS
import styled from "@emotion/styled";

// Ensemble des règles CSS du component
const Container = styled.div`
  height: auto;
  width: 70%;
  margin: 25px auto;
  box-shadow: 9px 6px 10px #a4b0be;
  padding: 7px;
`;

const Message = styled.div`
  text-align: left;
`;

// -------                  COMPONENT                    ------- //

// Ici nous mettons en props les données à récupérer
// Une condition ternaire est ajoutés afin d'afficher le type de message au lieu du boolean
const Post = ({ message, type }) => {
  // JSX qui renvoi un billet avec le message + le type du message
  return (
    <Container>
      <h4>{type === true ? "Public" : "Privée"}</h4>
      <Message>{message}</Message>
    </Container>
  );
};

export default Post;
