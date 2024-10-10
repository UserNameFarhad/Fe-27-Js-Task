import React from 'react'
import PageContainer from '../../Components/_layout/PageContainer'
import { Grid, Typography } from '@mui/material'

const Home = ({ }) => {
    return (
        <>
            <PageContainer>
                <Grid container>
                    <Grid item md={6} xs={12} sx={{background: "coral"}}>
                        <Typography variant='h6'>Section Title 1</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque eaque a itaque voluptas voluptatibus, in corrupti perferendis molestias incidunt suscipit quos mollitia placeat sapiente accusamus totam temporibus, distinctio voluptate.</Typography>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{background: "aqua"}}>
                        <Typography variant='h6'>Section Title 2</Typography>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor eos distinctio. Quasi blanditiis dolorem excepturi accusamus est! Tempora, eveniet vero. Laboriosam maiores tempore deserunt nulla voluptatibus expedita fuga ratione!</Typography>
                    </Grid>
                </Grid>
            </PageContainer>
        </>
    )
}

export default Home