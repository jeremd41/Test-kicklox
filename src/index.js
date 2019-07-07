import React, { Component } from "react";
import ReactDOM from "react-dom";

// Import font google
import "./index.css";

// Import de Emotion/ CSS-in-JS
import styled from "@emotion/styled";

// Import des component
import Post from "./component/Post";

// Ensemble des règles CSS du component
const HeadTitle = styled.h1`
  text-align: center;
  font-size: 36px;
`;

const border = "1px solid #111";

const Formulaire = styled.form`
  border: ${border};
  width: 70%;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 100px;
  margin: 25px auto;
  border: ${border};
  padding: 5px;
`;

const Label = styled.label`
  margin: 5px 15px;
  font-weight: bold;
`;

const Select = styled.select`
  margin: 0 15px;
  width: 25%;
  height: 25px;
  border: ${border};
`;

const Button = styled.button`
  margin: 10px;
  align-self: flex-end;
  width: 15%;
  height: 25px;
  background: #fff;
  border: ${border};
  &:hover {
    background: #111;
    color: #fff;
    transition: 0.5s;
  }
`;

// Création d'Array vide afin de stocké les futures messages soumis
const itemArray = [];

// -------                  COMPONENT                    ------- //

class App extends Component {
  // Initialisation du state avec une string vide et isPublic avec une par défault à true
  state = {
    message: "",
    isPublic: true
  };

  //Fonction qui permet de récupérer les données saisies dans state.message
  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  //Fonction qui permet de permuter true ou false en fonction du type de message choisi
  handleCheck = event => {
    this.setState({ isPublic: event.target.value });
  };

  // Fonction qui soumet le formulaire et qui push dans itemArray
  handleSubmit = event => {
    event.preventDefault();
    itemArray.push(this.state);
    // Reset du textarea afin de le vider à la soumission du formulaire
    this.setState({
      message: ""
    });
  };

  render() {
    // Variable qui boucle itemArray et récupére l'ensembles des données à mettre dans le component Post
    const messages = Object.keys(itemArray).map(key => (
      <Post
        key={key}
        message={itemArray[key].message}
        type={itemArray[key].isPublic}
      />
    ));
    // Ensemble JSX de l'interface
    return (
      <div className="App">
        <HeadTitle>Test-Kicklox</HeadTitle>
        <Formulaire onSubmit={this.handleSubmit}>
          <Label>Type de message :</Label>
          <Select value={this.state.isPublic} onChange={this.handleCheck}>
            <option value={true} required>
              Public
            </option>
            <option value={false} required>
              Privée
            </option>
          </Select>
          <Textarea
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
          />
          <Button type="submit" onSubmit={this.handleSubmit}>
            Envoyer !
          </Button>
        </Formulaire>
        {messages}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
