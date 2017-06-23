import React from 'react';
import {
    Grid,
    PageHeader
} from 'react-bootstrap';
import Queue from 'components/Stories/Queue';


export default function EditorPicks(props) {
    return (
        <Grid fluid>
            <PageHeader>
                Editor Picks
            </PageHeader>

            <Queue {...props} />
        </Grid>
    );
}
