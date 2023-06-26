import {React, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import axios from 'axios';
import './styles.css'



function Carrossel() {

    const [carrosselData, setCarrosselData] = useState([]);
  
    useEffect(() => {
      async function fetchCarrosselData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/flutuantes');
        setCarrosselData(response.data);

      } catch (error) {
        console.error(error);
      }
  
      };
      fetchCarrosselData();
    },[carrosselData]);

    return (
      
      <Container fluid>
        <Row>   
              <Carousel>        
                        {carrosselData.map((item, index) => (
                    <Carousel.Item key={item.id}>
                    <Link to={`/flutuantes/${item._id}`} >
                    <img className="tamanho"  key={index} src={item.image} alt={item.numero} />
                    </Link>
                    <Link to='/flutuantes'>
                    </Link>
                    </Carousel.Item>
                        ))}
              </Carousel>        
        </Row>
      </Container>

    );
  }
  
  export default Carrossel;