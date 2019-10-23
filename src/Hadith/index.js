import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import HadithList from '../Hadith/HadithList';
import Loading from '../Loading';
import ErrorMessage from '../Error';

const GET_HADITHS = gql`
  query {
    allHadiths {
      id
      textAr
      comment {
        id
        textAr
      }
    }
  }
`;

class Hadith extends React.Component {
  render() {
    return (
      <Query query={GET_HADITHS}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorMessage error={error} />;
    
          return <HadithList hadiths={data.allHadiths} />
        }}
      </Query>
    )
  }
}

export default Hadith;