/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";

import {
  addModule,
  deleteModule,
  updateModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

 const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


 const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">

 <button
              onClick={() => handleDeleteModule(module._id)}
            >
              Delete
            </button>
       <button
          onClick={handleAddModule}>
          Add
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModules({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModules({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <VscGripper size="20" />
            <BiCaretDown size="10" />
            <div class="float-end">
              <button
                className="btn btn-success"
                onClick={() => dispatch(setModules(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
            </div>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;