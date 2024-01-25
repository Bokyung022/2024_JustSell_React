import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateTodo() {
  const [dueDate, setDueDate] = useState(new Date());
  const initialValues = {
    task: "",
    dueDate: new Date(),
  };
  const validationSchema = Yup.object().shape({
    task: Yup.string().min(1).max(100).required("Task is a required field."),
    dueDate: Yup.string().required("Due Date is a required field."),
  });
  let navigate = useNavigate();
  const onSubmit = (data) => {
    data.dueDate = dueDate.toISOString();
    axios
      .post("http://localhost:3001/todos", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          navigate("/");
        }
      });
  };

  return (
    <div className="outer">
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="articleContainer">
              <h1>Create To-do</h1>
              <label>Task: </label>
              <ErrorMessage name="task" component="span" />
              <Field name="task" placeholder="Task" />
              <br />
              <br />

              <label>Due Date: </label>
              <ErrorMessage name="dueDate" component="span" />
              <DatePicker
                selected={dueDate}
                onChange={(date) => {
                  setDueDate(date);
                }}
              />
              <br />
              <br />
              <button type="submit">Create</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreateTodo;
