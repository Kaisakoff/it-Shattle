import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routesNames';

const HomePageLayout = ({ name, age }) => {
  return (
    <div>
      <Link to={ROUTES.COUNTER_PAGE}>
        <button>GO TO COUNTER PAGE</button>
      </Link>
    </div>
  )
}

export default HomePageLayout
