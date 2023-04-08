import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/Header';
import Aboutus from './Componets/Aboutus';
import Booknow from './Componets/Booknow';
import Workingdays from './Componets/Workingdays';
import Testimonials from './Componets/Testimonials';
import Partner from './Componets/Partner';
import Fotter from './Componets/Fotter';


function App() {
  return (
    <div>

      <Header />
      <Aboutus />
      <Booknow></Booknow>
      <Workingdays></Workingdays>
      <Testimonials></Testimonials>
      <Partner></Partner>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
