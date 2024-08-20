import { withNamespaces } from "react-i18next"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const LinkButton = ({ destination, t }) => {
  return <Link className="button text-bold" to={destination}>{t('contact_me')}</Link>
}

export default withNamespaces()(LinkButton);
