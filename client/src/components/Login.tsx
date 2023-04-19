import React from "react";
import apiFetch from "../services/api";
import { Context } from "../contextStore";
import * as yup from "yup";
import { useFormik } from "formik";
import { CloseButton } from "./ModalButtons";

export const Login: React.FC = () => {
    const { setLoginVisibility, setUser } = React.useContext(Context);

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            try {
                console.log(JSON.stringify(values), "ASD");
                apiFetch("/login", {
                    method: "POST",
                    body: JSON.stringify(values),
                }).then((response) => {
                    localStorage.setItem("access_token", response.access_token);
                    setUser(response.access_token);
                });
            } catch (error) {
                console.log("Error logging in", error);
            }
        },
    });

    function closeForm() {
        setLoginVisibility(false);
    }

    return (
        <div className="create-event_modal">
            <form
                onSubmit={formik.handleSubmit}
                className="create-event_modal-content"
            >
                <CloseButton onClick={closeForm} />
                <input
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && Boolean(formik.errors.email) && (
                    <span className="error" id="title-error-message">
                        oopsie
                    </span>
                )}
                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Password"
                    />
                    {formik.touched.password &&
                        Boolean(formik.errors.password) && (
                            <span className="error" id="title-error-message">
                                oopsie
                            </span>
                        )}
                </div>

                <button type="submit">Prisijungti</button>
            </form>
        </div>
    );
};
