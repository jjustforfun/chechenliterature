import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import Button from '@/components/ui/Button';
import './NotFound.css';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <span className="not-found__code">404</span>
      <h1 className="not-found__title">{t('page_not_found')}</h1>
      <Link to="/">
        <Button variant="primary">{t('go_home')}</Button>
      </Link>
    </div>
  );
}
