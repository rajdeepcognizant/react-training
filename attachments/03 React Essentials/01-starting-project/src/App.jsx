import {CORE_CONCEPTS} from './data';
import Header from './components/Header';
import TabButton from './components/TabButton';
import CoreConcepts from './components/CoreConcepts';

function App () {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>description</TabButton>
            <TabButton>description</TabButton>
            <TabButton>description</TabButton>
            <TabButton>description</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
