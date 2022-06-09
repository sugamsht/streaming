import { Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:id" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" exact component={StreamShow} />
    </div>
  );
}

export default App;
