import css from './Home.module.css';

export default function Home() {
  return (
    <div >
        <h1 className={css.text}>Phonebook</h1>
        <h2 className={css.text}>Register or login to continue</h2>
    </div>
  );
}