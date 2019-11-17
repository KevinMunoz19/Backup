import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component{
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px'}}
            />
          </Cell>
          <Cell col={6}>
            <h2>Kevin Estuardo Muñoz Muñoz</h2>
            <hr />
            <div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}













export default About;
