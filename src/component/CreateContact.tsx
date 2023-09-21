import { log } from "console";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contactSlice";
import { useNavigate } from "react-router-dom";

export const CreateContact: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else {
      setLastName(event.target.value);
    }
  };

  //   console.log(firstName);
     console.log(lastName);

  return (
    <>
      <div className="flex justify-center w-[100vw] h-10 bg-black text-white items-center">
        Contact Page
      </div>

      <div className="flex justify-center text-xl m-10">
        Edit contact screen
      </div>
      <center>
        <div className="flex flex-col justify-center text-xl m-3 border-2 border-slate-500 w-[25vw] p-7">
          <div className="flex justify-center gap-3 m-3">
            <label>First name:</label>
            <input
              type="text"
              name="firstName"
              className="border-2 rounded-md border-slate-300"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center gap-3 m-3">
            <label>Last name:</label>
            <input
              type="text"
              name="lastName"
              className="border-2 rounded-md border-slate-300"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="bg-black p-2 text-white m-4"
          onClick={() =>{
            dispatch(addContact({ name: firstName, email: lastName }))
            alert('Contact created successfully');
            navigate('/contact');
          }
          }
        >
          Create Contact
        </button>
      </center>
    </>
  );
};
