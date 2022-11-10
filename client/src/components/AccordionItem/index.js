import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({ country }) => {
  // console.log(country);
  const currencies = Object.keys(country.currencies);
  const languages = Object.keys(country.languages);
  return (
    <div className="AccordionItem">
      <Accordion>
        <AccordionSummary
          expandIcon={<img src={country.flags.png} width="80" height="80" />}
          aria-controls="panel1a-content"
          id={country.name}
        >
          <Typography>{country.name.common}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>Currency</Typography>
          <Typography>{currencies[0]}</Typography>
          <Typography>Population</Typography>
          <Typography>{country.population}</Typography>
          <Typography>Region</Typography>
          <Typography>{country.region}</Typography>
          <Typography>Capital</Typography>
          <Typography>{country.capital[0]}</Typography>
          <Typography>Languages</Typography>
          <Typography>
            {
              <ul>
                {languages.map((lang, idx) => (
                  <li key={idx}>{lang}</li>
                ))}
              </ul>
            }
          </Typography>
          <Typography>Borders</Typography>
          <Typography>
            {
              // <ul>
              //   {country.borders.map((border, idx) => (
              //     <li key={idx}>{border}</li>
              //   ))}
              // </ul>
            }
          </Typography>

          {/* <image src={country.flags.png} style={{ height: "80px" }} /> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionItem;
