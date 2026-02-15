import React from "react";
import countryFacts from "../Api/countryData.json";

function About() {
  return (
    <div className="about-bg py-5">
      <h2 className="text-center mb-4 text2">
        Here are interesting facts <br />
        we're proud of
      </h2>

      <div className="container">
        <div className="row">
          {countryFacts.map(({ id, country, capital, population, interestingFact }) => (
            <div className="col-md-4 col-sm-6 mb-4" key={id}>
              <div className="card p-3 about-card">

                <h5 className="country-name">{country}</h5>

                <p>
                  <span className="label1">Capital:</span>
                  <span className="value1">{capital}</span>
                </p>

                <p>
                  <span className="label1">Population:</span>
                  <span className="value1">{population}</span>
                </p>

                <p className="fact-text">
                  <span className="label1">Fact:</span>
                  <span className="value1">{interestingFact}</span>
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
