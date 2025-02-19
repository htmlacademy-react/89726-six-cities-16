import { Link } from 'react-router-dom';

function NotFoundPage() : JSX.Element {
  return (
    <section className="not-found">
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        Сорян, страница не существует
      </p>
      <Link to="/">
        На главную страницу
      </Link>
    </section>
  );
}

export default NotFoundPage;
