import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import ResultImage from "../components/Results/ResultImage";
import ResultDetails from "../components/Results/ResultDetails";

const ResultPage = () => {
  const { state } = useLocation();
  const [result, setResult] = useState(null);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const urlSegments = state.url.split("/");
        const resultType = urlSegments[urlSegments.length - 3];
        const resultId = urlSegments[urlSegments.length - 2];

        const response = await axios.get(
          `http://localhost:3000/api/single?id=${resultId}&type=${resultType}&wookiee=${state.wookieeMode}`,
          {
            headers: {
              Authorization: "Basic " + btoa("Luke:DadSucks"),
            },
          }
        );
        setResult(response.data);
        setType(resultType);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (state?.url) {
      fetchResult();
    }
  }, [state?.url, state?.wookieeMode]);

  if (!result) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container justifyContent="center" style={{ marginTop: "30px" }}>
      <Grid item size={{ xs: 12, md: 8 }}>
        <Card>
          <Grid container>
            <Grid item size={{ xs: 12, md: 4 }}>
              <ResultImage imageUrl={result.url} type={type} />
            </Grid>
            <Grid item size={{ xs: 12, md: 8 }} padding={"30px"}>
              <ResultDetails result={result} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ResultPage;
