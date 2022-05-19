import { useContext } from "react";
import "./App.css";
import { userContext } from "./context/userContext";
import Form from "./Form";
import Success from "./Success";
import Review from "./Review";

function App() {
  const { submitForm, setSubmitForm } = useContext(userContext);
  return (
    <div className="App">
      {submitForm === "form" ? (
        <>
          <button
            style={{ margin: 0 }}
            onClick={() => {
              setSubmitForm("review");
            }}
            className="submit-button citation-review-button"
          >
            View Citation
          </button>
          <Form />
        </>
      ) : submitForm === "success" ? (
        <Success />
      ) : (
        <Review />
      )}
    </div>
  );
}

export default App;
