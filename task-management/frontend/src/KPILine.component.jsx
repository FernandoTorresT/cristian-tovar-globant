import {Button, Card, Grid, styled, Typography} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ListItem from "@mui/material/ListItem";
import React from "react";

const LineIndicator = styled((props) => (
    <Grid  {...props} />
))(({ theme }) => ({
    backgroundColor: '#9A5DC2',

    [theme.breakpoints.up('md')]: {
        width: '10px',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '10px'
    },
}));

const StyledListItem = styled((props) => (
    <ListItem {...props} />
))(({ theme }) => ({
    background: 'linear-gradient(0deg, rgba(182, 196, 255, 0.1), rgba(182, 196, 255, 0.1)), #1B1B1E',
    width: '100%',
    margin: '5px 0',
    letterSpacing: '0.5px'
}));
const StyledCard = styled((props) => (
    <Card {...props} />
))(({ theme }) => ({
    background: 'linear-gradient(0deg, rgba(182, 196, 255, 0.1), rgba(182, 196, 255, 0.1)), #1B1B1E',
    width: '100%',
    border: '1px solid #76767F',
    color: '#E4E2E6',
    '& > div:last-of-type': {marginLeft: 'auto'}
}));
const StyledButtonContainer = styled((props) => (
    <Grid {...props} />
))(({ theme }) => ({
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginTop: '10px',
        marginBottom: '0',
    },
}))
export default function KpiLine({data}) {
    return <StyledListItem disablePadding>
        <StyledCard>
            <Grid container>
                <LineIndicator item />
                <Grid xs item>
                    <Grid container sx={{padding: '10px'}}>
                        <Grid item sm={12} md>

                                <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '8px'}}>
                                    <Grid container columnSpacing={2}>
                                        <Grid item>
                                            <Grid container columnSpacing={2}>
                                                <Grid item>
                                                    <div>
                                                        <Typography sx={{
                                                            fontWeight: '700',
                                                        }} color={'#9A5DC2'} variant={'h6'}>
                                                            KPI loss
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div>
                                                        <Typography sx={{
                                                            fontWeight: '700',
                                                        }} variant={'h6'} component={'span'}>
                                                            Task type
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container columnSpacing={2} sx={{marginTop: '10px'}}>
                                                <Grid item>
                                                    <div style={{
                                                        fontWeight: '700',
                                                        fontSize: '14px'
                                                    }}>2:40 - 10 mins ago</div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{
                                                        fontWeight: '700',
                                                        fontSize: '14px'
                                                    }}>Equipment ID</div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{
                                                        fontWeight: '700',
                                                        fontSize: '14px'
                                                    }}>Task ID</div>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </div>

                                <div style={{
                                    paddingBottom: '10px'
                                }}>{data.department_id}</div>
                                <div style={{
                                    paddingBottom: '10px'
                                }}>{data.department_name}</div>
                                <div style={{
                                    paddingBottom: '10px'
                                }}>{data.count_by_deparment}</div>
                                <Grid container columnSpacing={2}>
                                    <Grid item>
                                        <div style={{
                                            paddingBottom: '10px'
                                        }}>
                                            Created by: Lalaine McD.

                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                            <div>
                                                <DoneAllIcon sx={{color:'#00BA56'}}/>
                                            </div>
                                            <Typography component={'div'} sx={{
                                                fontWeight: '700',
                                                fontSize: '14px',
                                            }}>Read - 2 mins ago</Typography>
                                        </div>
                                    </Grid>

                                </Grid>
                        </Grid>
                        <StyledButtonContainer item>
                            <Button variant={'outlined'} sx={{marginRight: '10px', color: '#E4E2E6', borderColor: '#E4E2E6', position: 'relative', bottom: '10px'}} >See More</Button>
                        </StyledButtonContainer>
                    </Grid>
                </Grid>

            </Grid>
        </StyledCard>
    </StyledListItem>
}