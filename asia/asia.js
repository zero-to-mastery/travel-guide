import React from 'react';
import './style.css';

const Asia = () => {
  return (
    <div>
        <h1>Asia</h1>
        <h1 style={{ alignItems: 'center'}}>China</h1>
          <select>
            <option>
              Mainland
              Hong Kong and Macau
              Taiwan
            </option>
          </select>

        <h1 style={{ alignItems: 'center' }}>INDIA</h1>
          <select>
            <option>
              South India
              North India
              NorthEast India
            </option>
          </select>

        <h1 style={{ alignItems: 'center' }}>Malaysia</h1>
          <select>
            <option>
              West Malaysia
              East Malaysia
            </option>
          </select>

        <h1 style={{ alignItems: 'center' }}>Indonesia</h1>
          <h3>Popular Islands in indonesia</h3>
            <select name="island">
              <option>Sulawesi</option>
              <option>Jawa</option>
              <option>Sumatera</option>
              <option>Kalimantan</option>
              <option>Papua</option>
              <option>Sumba</option>
            </select>

        <h1 style={{ alignItems: 'center' }}>Japan</h1>
          <h3>9 Provinces of Japan</h3>
            <select name="Provinces">
                <option value="Hokkaido">Hokkaido</option>
                <option value="Tohoku">Tohoku</option>
                <option value="Kanto" selected>Kanto</option>
                <option value="Chubu">Chubu</option>
                <option value="Kansai">Kansai</option>
                <option value="Chugoku">Chugoku</option>
                <option value="Kyushu">Kyushu</option>
                <option value="Shikoku">Shikoku</option>
                <option value="Okinawa">Okinawa</option>
            </select>
          <br>	

        <h1 style={{ alignItems: 'center' }}>South Korea</h1>
          <h3>Four major cities in South Korea</h3>
            <select name="cities">
              <option value="seoul">Seoul</option>
              <option value="busan">Busan</option>
              <option value="incheon" selected>Incheon</option>
              <option value="daegu">Daegu</option>
            </select>

            <br />
            <br />
              <button type="button" onclick="alert('Seoul is the Capital city!')">Click to find out which city is the Capital</button>
              <div className="ryan_part">	
                <h1 id="h1-jeju-island">Jeju-Island</h1>
                <div id="jeju-picture"><img id="jeju-picture-inside" src="./image/jeju_island.jpg" /></div>
                <p id="jeju-description">	Jeju Island is an island in Jeju Province, South Korea. The island lies in the Korea Strait, south of South Jeolla Province. The island contains the natural World Heritage Site Jeju Volcanic Island and Lava Tubes.[1] Jejudo has a moderate climate; even in winter, the temperature rarely falls below 0 °C (32 °F). Jeju is a popular holiday destination and a sizable portion of the economy relies on tourism and economic activity from its civil/naval base.</p>
            </div>	
    </div>
  );
};

export default Asia;
