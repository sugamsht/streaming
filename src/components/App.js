import { Routes, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

<<<<<<< HEAD

function App() {

=======
function App() {
>>>>>>> f580db65bada429964e0226c05dba5300e8db2eb
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/show" element={<StreamShow />} />
        <Route path="/streams/new" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
      </Routes>
    </div>
  );
}

export default App;
