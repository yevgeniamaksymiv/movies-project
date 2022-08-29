import { IntlProvider } from 'react-intl';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { LOCALES } from '../const';
import messages from './messages/index'

const Provider = ({children, locale = LOCALES.ENGLISH}) => {
  return (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
  )
};

Provider.displayName = 'I18nProvider';

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
};

Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default Provider
