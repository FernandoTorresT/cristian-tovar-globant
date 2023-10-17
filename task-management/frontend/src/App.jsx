import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, Grid, List, Paper} from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import KpiLine from "./KPILine.component";
import axios from 'axios';


const App = () => {
  // const [data, setData] = useState<Record<any,any>[]>([]);
  //
  // useEffect(()=> {
  //   fetch();
  //   async function fetch() {
  //     const {data} = await axios.get('http://localhost:3001')
  //     setData(data)
  //   }
  // }, [])
  const datas = [
    {
      "alert_id": 8788,
      "kpi_id": 4588,
      "playcall_id": 7777
    },
    {
      "alert_id": 4587,
      "kpi_id": 6985,
      "playcall_id": 68236
    },
    {
      "alert_id": 8548,
      "kpi_id": 5236,
      "playcall_id": 45877
    },
    {
      "alert_id": 87458,
      "kpi_id": 96587,
      "playcall_id": 41115
    },
    {
      "alert_id": 4587,
      "kpi_id": 1456,
      "playcall_id": 4587
    }
  ]

  const [data, setData] = useState([]); 

  useEffect(() => { 
    fetchData();
  }, []); 
  const fetchData = async () => { 
    try { 
      const response = await fetch('http://localhost:8080/task',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
      }); 
      const jsonData = await response.json(); 
      setData(jsonData); 
    } catch (error) { 
      console.error('Error fetching data:', error); 
    } 
  }; 
    
    const BC = `linear-gradient(0deg, rgba(182, 196, 255, 0.07), rgba(182, 196, 255, 0.07)), #1B1B1E`;
    return (
          <Grid container>
            <Grid item xs>
              <Box>
                <Paper sx={{ background: BC, padding: '10px'}} elevation={0}>
                  <Box sx={{display: 'flex', justifyContent: 'space-between'}} className={'head'}>
                    <Box>Alerts ({data.length})</Box>
                    <Box><FilterListIcon /></Box>
                  </Box>
                  <List>
                      {data.map(data => <KpiLine data={data} key={data.task_id} />)}
                  </List>
                </Paper>
              </Box>
            </Grid>
            {/*<Grid item xs>*/}
            {/*  <Box>*/}
            {/*    <Paper sx={{ background: BC, padding: '10px'}} elevation={0}>*/}
            {/*      <Box sx={{display: 'flex', justifyContent: 'space-between'}} className={'head'}>*/}
            {/*        <Box>Alerts ({data.length})</Box>*/}
            {/*        <Box><FilterListIcon /></Box>*/}
            {/*      </Box>*/}
            {/*      <List>*/}
            {/*        {data.map(data => <KpiLine data={data} key={data.task_id} />)}*/}
            {/*      </List>*/}
            {/*    </Paper>*/}
            {/*  </Box>*/}
            {/*</Grid>*/}
          </Grid>
    );
}


export default App;









