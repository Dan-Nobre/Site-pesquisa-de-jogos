import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import infoFetch from "../axios/config";
import Card from "../components/Card";

const Home = () => {
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");

  const getInfo = async () => {
    try {
      const response = await infoFetch.get(
        "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/"
      );

      const data = response.data;

      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterGender = (event) => {
    setFilterGender(event.target.value);
  };

  const filteredInfo = info.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterGender === "" || item.gender.toLowerCase() === filterGender.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Jogos</h1>
      <div className="busca">
        <input
          type="text"
          id="txtBusca"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <input
          type="text"
          id="txtGender"
          placeholder="Filtrar por gênero..."
          value={filterGender}
          onChange={handleFilterGender}
        />
      </div>

      <div className="container-home">
        {info.length === 0 ? (
          <p>Carregando...</p>
        ) : filteredInfo.length === 0 ? (
          <p>Nenhum jogo encontrado.</p>
        ) : (
          filteredInfo.map((info) => <Card data={info} key={info.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
