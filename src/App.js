import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
    // Masukkan Header dan Contact ke dalam div App
    return ( <div className = "App">
        <Header />
        {/* <Contact data={contacts[0]}/>
        <Contact data={contacts[1]}/> */}
        {
            contacts.map((contact, i) => {
                return <Contact data = { contact }
                key = { i }
                />
            })
        }
        </div>
    );
}

export default App;