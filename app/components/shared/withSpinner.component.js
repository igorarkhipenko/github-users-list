import React from 'react';
import { Spinner } from 'native-base';
import { styles } from '../../styles/root.style';

export default withSpinner = (Component) =>
  ({ isLoading, children, ...props }) => {
    if (isLoading) {
      return (
        <Spinner style={styles.fullFlex} />
      );
    } else {
      return (
        <Component {...props}>
          {children}
        </Component>
      );
    }
  };
