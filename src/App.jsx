import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import OTPForm from "./components/OTPNotif";
import TeachersInterface from "./components/TeachersInterface";
import AddQuestion from "./components/AddQuestion";
import ViewTeachersInterface from "./components/ViewTeachersInterface";
import ViewAnswer from "./components/ViewAnswer";
import ClassTeachersInterface from "./components/ClassTeachersInterface";
import ViewClassTeachersInterface from "./components/ViewClassTeachersInterface";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="OTPForm" element={<OTPForm />}></Route>
        <Route path="TeachersInterface" element={<TeachersInterface />} />
        <Route path="AddQuestion" element={<AddQuestion />} />
        <Route
          path="ViewTeachersInterface"
          element={<ViewTeachersInterface />}
        />
        <Route path="ViewAnswer" element={<ViewAnswer />} />
        <Route
          path="ViewTeachersInterface"
          element={<ViewTeachersInterface />}
        />
        <Route
          path="ClassTeachersInterface"
          element={<ClassTeachersInterface />}
        />
        <Route
          path="ViewClassTeachersInterface"
          element={<ViewClassTeachersInterface />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
